'use client'

import Image from 'next/image'
import { Item2 } from '.'

export const MenuItem = ({ name, description, price, images }: Item2) => {
  return (
    <div className="flex gap-4 py-4 cursor-pointer text-left">
      <div className="grow">
        <h3 className="font-medium text-base">{name}</h3>
        <p className="font-light text-base leading-[18.75px] line-clamp-2 ">
          {description}
        </p>
        <span className="font-medium text-base text-[#464646]">{price}</span>
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
