'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ItemProps = {
  text: string
  url: string
}

export const NavbarItem = ({ text, url }: ItemProps) => {
  const pathname = usePathname()

  return (
    <li>
      <Link
        className={cn(
          'flex w-[232px] text-center h-full justify-center items-center text-white',
          {
            'border-b-[5px] border-white border-opacity-100': pathname === url,
          }
        )}
        href={url}
      >
        {text}
      </Link>
    </li>
  )
}
