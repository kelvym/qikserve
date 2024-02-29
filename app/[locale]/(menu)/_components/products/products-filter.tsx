'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { MenuDataSection } from '@/types/menu-data'

export const ProductsFilter = ({ data }: { data: MenuDataSection[] }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlFilterType = searchParams?.get('filter-type')

  const changeFilterType = (filterType: string) => {
    const params = new URLSearchParams(searchParams?.toString())

    params.set('filter-type', filterType)

    router.push('?' + params.toString())
  }

  return (
    <div className="flex gap-3 pt-4 lg:p-4">
      {data?.map((item) => (
        <div
          onClick={() => changeFilterType(item.name)}
          key={item.id}
          className={cn(
            'border-b-2 border-white w-[104px] flex flex-col items-center cursor-pointer pb-4',
            {
              'border-b-2 border-[theme(colors.primary.DEFAULT)]':
                item.name.toLocaleLowerCase() ===
                urlFilterType?.toLocaleLowerCase(),
            }
          )}
        >
          <div
            className={cn(
              'rounded-full border-2 border-white box-content w-[74px] h-[74px] mb-6',
              {
                'border-[theme(colors.primary.DEFAULT)]':
                  item.name.toLocaleLowerCase() ===
                  urlFilterType?.toLocaleLowerCase(),
              }
            )}
          >
            <Image
              src={item.images[0].image}
              alt={item.name}
              width={74}
              height={74}
              className={cn(
                'border-2 border-white object-cover rounded-full w-[74px] h-[74px]'
              )}
              unoptimized
            />
          </div>
          <span
            className={cn(
              'block text-center leading-[18.75px] text-base font-normal',
              {
                'font-medium':
                  item.name.toLocaleLowerCase() ===
                  urlFilterType?.toLocaleLowerCase(),
              }
            )}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}
