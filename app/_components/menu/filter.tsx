'use client'

import { cn } from '@/lib/utils'
import { Section } from '.'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

type FilterProps = {
  data: Section[]
  selectedById?: number
}

export const Filter = ({ data, selectedById }: FilterProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlFilterType = searchParams.get('filter-type')

  const changeFilterType = (filterType: string) => {
    router.push('?filter-type=' + filterType)
  }

  return (
    <div className="flex gap-3 p-4">
      {data?.map((item) => (
        <div
          onClick={() => changeFilterType(item.name)}
          key={item.id}
          className={cn('w-[104px] flex flex-col items-center cursor-pointer pb-4', {
            'border-b-2 border-[theme(colors.primary.DEFAULT)]':
              item.name.toLocaleLowerCase() === urlFilterType?.toLocaleLowerCase(),
          })}
        >
          <div
            className={cn('rounded-full border-2 border-white box-content w-[74px] h-[74px] mb-6', {
              'border-[theme(colors.primary.DEFAULT)]':
                item.name.toLocaleLowerCase() === urlFilterType?.toLocaleLowerCase(),
            })}
          >
            <Image
              src={item.images[0].image}
              alt={item.name}
              width={74}
              height={74}
              className={cn('border-2 border-white object-cover rounded-full w-[74px] h-[74px]')}
              unoptimized
            />
          </div>
          <span
            className={cn('block text-center leading-[18.75px] text-base font-normal', {
              'font-semibold': item.name.toLocaleLowerCase() === urlFilterType?.toLocaleLowerCase(),
            })}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}
