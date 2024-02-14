'use client'

import Image from 'next/image'
import { MenuDataSectionItem } from '@/types/menu-data'
import { useVenueConfigStore } from '@/store/venue-config'
import { formatCurrency } from '@/lib/utils'

export const ProductsItem = ({
  name,
  description,
  price,
  images,
}: MenuDataSectionItem) => {
  const configVenue = useVenueConfigStore((state) => state.config)

  return (
    <div className="flex gap-4 py-4 cursor-pointer text-left">
      <div className="grow">
        <h3 className="font-medium text-base">{name}</h3>
        <p className="font-light text-base leading-[18.75px] line-clamp-2 ">
          {description}
        </p>
        <span className="font-medium text-base text-[#464646]">
          {formatCurrency({
            value: price,
            locale: configVenue.locale || '',
            currency: configVenue.currency || '',
          })}
        </span>
      </div>
      {images && (
        <Image
          src={images[0].image}
          width={128}
          height={85}
          alt={name}
          className="w-32 h-[85px]"
        />
      )}
    </div>
  )
}
