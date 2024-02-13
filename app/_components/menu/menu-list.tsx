'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useSearchParams } from 'next/navigation'
import { Section } from '.'
import { MenuItem } from './menu-item'
import { MenuItemDetails } from '../item-details'
import { useState } from 'react'

type ListProps = {
  data: Section[]
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

export const MenuList = ({ data }: ListProps) => {
  const [dialogOpened, setDialogOpened] = useState(0)
  const ids = data.map((item) => `item-${item.id}`)
  const sections = data.map((item) => item.name.toLocaleLowerCase())

  const searchParams = useSearchParams()
  const urlFilterType = searchParams.get('filter-type') || ''

  let dataFiltered = data

  if (isValidFilterType({ urlFilterType, options: sections })) {
    dataFiltered = dataFiltered.filter(
      (section) =>
        section.name.toLocaleLowerCase() === urlFilterType.toLocaleLowerCase()
    )
  }

  return (
    <Accordion type="multiple" defaultValue={ids}>
      {dataFiltered?.map((section) => (
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
                    <MenuItem {...item} />
                  </div>

                  <Dialog
                    open={dialogOpened === item.id}
                    onOpenChange={(isOpen) => {
                      if (isOpen === false) setDialogOpened(0)
                    }}
                  >
                    <DialogContent className="h-full sm:h-[calc(100vh-200px)]">
                      <MenuItemDetails data={item} />
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
