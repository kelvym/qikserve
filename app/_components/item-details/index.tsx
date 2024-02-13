import Image from 'next/image'
import { Item2 } from '../menu'
import { ItemDetailsModifiers } from './item-details-modifiers'
import { ItemDetailsActions } from './item-details-actions'

export const MenuItemDetails = ({ data }: { data: Item2 }) => {
  return (
    <>
      <div className="relative h-[320px]">
        {data.images && (
          <Image
            src={data.images[0].image}
            fill
            alt={'item name'}
            className="w-full object-cover"
          />
        )}
      </div>
      <div className="h-[calc(100vh-320px)] sm:h-[calc(100vh-520px)] overflow-auto flex justify-between flex-col">
        <div className="p-4">
          <h3 className="font-bold text-2xl mb-2 text-main">{data.name}</h3>
          <p className="text-secondary">{data.description}</p>
        </div>
        <ItemDetailsModifiers modifiers={data.modifiers || []} />
        <ItemDetailsActions price={data.price} />
      </div>
    </>
  )
}
