import Image from 'next/image'

export const Banner = ({ srcImg }: { srcImg: string }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[150px] mb-[5px]">
      {srcImg && (
        <Image
          src={srcImg}
          alt="banner"
          fill
          className="object-cover"
          unoptimized
          priority
        />
      )}
    </div>
  )
}
