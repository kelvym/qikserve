import Image from 'next/image'
import { Input } from '@/components/ui/input'

export const Search = () => {
  return (
    <div className="relative">
      {/* TODO */}
      <Input
        type="text"
        placeholder="Search menu items"
        className="pl-12 border-[#8A94A4]"
      />
      {/* --- */}
      <Image
        src="/search-icon.svg"
        alt="Search icon"
        height={20}
        width={20}
        className="absolute top-2.5 left-[14px] h-[20px] w-[20px]"
      />
    </div>
  )
}
