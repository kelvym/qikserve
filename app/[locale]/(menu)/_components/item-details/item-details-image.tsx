import Image from 'next/image'

export const ItemDetailsImage = ({ srcImg }: { srcImg?: string }) => {
  return (
    <div className="relative h-[320px]">
      {srcImg && (
        <Image
          src={srcImg}
          fill
          alt={'item name'}
          className="w-full object-cover"
        />
      )}
    </div>
  )
}
