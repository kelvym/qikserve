'use client'

import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useSearchParams } from 'next/navigation'
import { Section } from '.'

type ListProps = {
  data: Section[]
}

const isValidFilterType = ({ urlFilterType, options }: { urlFilterType: string; options: string[] }) => {
  const filter = urlFilterType.toLocaleLowerCase()

  if (options.includes(filter)) {
    return true
  } else {
    return false
  }
}

export const List = ({ data }: ListProps) => {
  const ids = data.map((item) => `item-${item.id}`)
  const sections = data.map((item) => item.name.toLocaleLowerCase())

  const searchParams = useSearchParams()
  const urlFilterType = searchParams.get('filter-type') || ''

  let dataFiltered = data

  if (isValidFilterType({ urlFilterType, options: sections })) {
    dataFiltered = dataFiltered.filter(
      (section) => section.name.toLocaleLowerCase() === urlFilterType.toLocaleLowerCase()
    )
  }

  return (
    <Accordion type="multiple" defaultValue={ids}>
      {dataFiltered?.map((section) => (
        <AccordionItem value={`item-${section.id}`} key={section.id} className="p-4">
          <AccordionTrigger>
            <h2 className="font-semibold text-2xl">{section.name}</h2>
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              {section.items.map((item) => (
                <li key={item.id} className="flex gap-4 py-4">
                  <div className="grow">
                    <h3 className="font-semibold text-base">{item.name}</h3>
                    <p className="font-light text-base leading-[18.75px] line-clamp-2 ">{item.description}</p>
                    <span className="font-semibold text-base">{item.price}</span>
                  </div>
                  {item.images && (
                    <Image
                      src={item.images[0].image}
                      width={128}
                      height={85}
                      alt={item.name}
                      className="w-32 h-[85px]"
                    />
                  )}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
