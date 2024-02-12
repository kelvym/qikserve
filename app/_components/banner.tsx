import Image from 'next/image'
import { VENUE } from '../mock-api'

export const Banner = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[150px] mb-[5px]">
      <Image src={VENUE.webSettings.bannerImage} alt="banner" fill className="object-cover" unoptimized priority />
    </div>
  )
}
