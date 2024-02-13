'use client'

import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useSearchParams } from 'next/navigation'
import { Section } from '.'
import { MenuItem } from './menu-item'

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
            <ul>
              {section.items.map((item) => (
                <MenuItem key={item.id} {...item} />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
