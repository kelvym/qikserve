import Image from 'next/image'

export const Banner = ({ img }: { img: string }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[150px] mb-[5px]">
      <>
        {img && (
          <Image
            src={img}
            alt="banner"
            fill
            className="object-cover"
            unoptimized
            priority
          />
        )}
      </>
    </div>
  )
}
