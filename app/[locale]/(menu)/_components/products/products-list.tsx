'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useSearchParams } from 'next/navigation'
import { ProductsItem } from './products-item'
import { ItemDetails } from '../item-details'
import { useState } from 'react'
import { MenuDataSection } from '@/types/menu-data'
import { MENU } from '../../mock-api'
import { useShoppingCartStore } from '@/store/shopping-cart'

type ListProps = {
  data: MenuDataSection[]
}

const isValidFilterType = ({
  urlFilterType,
  options,
}: {
  urlFilterType: string
  options: string[]
}) => {
  const filter = urlFilterType.toLocaleLowerCase()

  if (options.includes(filter)) {
    return true
  } else {
    return false
  }
}

const filterDataBySearch = ({
  originalData,
  searchText,
}: {
  originalData: MenuDataSection[]
  searchText: string
}) => {
  if (!searchText) return originalData

  return originalData.map((section) => {
    const newItems = section.items.filter((item) => {
      const nameLowerCase = item.name.toLocaleLowerCase()
      const descriptionLowerCase = item.description?.toLocaleLowerCase() || ''
      const searchTextLowerCase = searchText.toLocaleLowerCase()

      return (
        nameLowerCase.indexOf(searchTextLowerCase) !== -1 ||
        descriptionLowerCase.indexOf(searchTextLowerCase) !== -1
      )
    })

    return {
      ...section,
      items: newItems,
    }
  })
}

export const ProductsList = ({ data }: ListProps) => {
  const removeTemporaryItemModifiers = useShoppingCartStore(
    (state) => state.removeTemporaryItemModifiers
  )
  const [dialogOpened, setDialogOpened] = useState(0)
  const ids = data.map((item) => `item-${item.id}`)
  const sections = data.map((item) => item.name.toLocaleLowerCase())

  const searchParams = useSearchParams()
  const urlFilterType = searchParams.get('filter-type') || ''
  const urlSearch = searchParams.get('search') || ''

  let dataFilteredBySection = data

  if (isValidFilterType({ urlFilterType, options: sections })) {
    dataFilteredBySection = dataFilteredBySection.filter(
      (section) =>
        section.name.toLocaleLowerCase() === urlFilterType.toLocaleLowerCase()
    )
  }

  const closeDialog = () => {
    setDialogOpened(0)
    removeTemporaryItemModifiers()
  }

  return (
    <Accordion type="multiple" defaultValue={ids}>
      {filterDataBySearch({
        originalData: dataFilteredBySection,
        searchText: urlSearch,
      })?.map((section) => (
        <AccordionItem
          value={`item-${section.id}`}
          key={section.id}
          className="lg:p-4"
        >
          <AccordionTrigger>
            <h2 className="font-medium text-2xl">{section.name}</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              {section.items.map((item) => (
                <div key={item.id}>
                  <div onClick={() => setDialogOpened(item.id)}>
                    <ProductsItem {...item} />
                  </div>

                  <Dialog
                    open={dialogOpened === item.id}
                    onOpenChange={(isOpen) => {
                      if (isOpen === false) closeDialog()
                    }}
                  >
                    <DialogContent className="h-full sm:h-[calc(100vh-200px)]">
                      <ItemDetails.Root>
                        <ItemDetails.Image srcImg={item?.images?.[0]?.image} />
                        <ItemDetails.Container
                          name={item.name}
                          description={item.description}
                        >
                          <ItemDetails.Modifiers modifiers={item.modifiers} />
                          <ItemDetails.Actions
                            price={item.price}
                            id={item.id}
                            name={item.name}
                            afterAddProduct={() => closeDialog()}
                          />
                        </ItemDetails.Container>
                      </ItemDetails.Root>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
