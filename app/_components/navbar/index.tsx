import { VENUE } from '@/app/mock-api'
import { Item } from './item'
import Image from 'next/image'

export const Navbar = () => {
  const items = [
    {
      text: 'MENU',
      url: '/',
    },
    {
      text: 'ENTRAR',
      url: '/login',
    },
    {
      text: 'CONTATO',
      url: '/contact',
    },
  ]

  return (
    <nav className="bg-[theme(colors.primary.DEFAULT)] w-full h-[64px] lg:h-[52px]">
      <ul className={'justify-center hidden lg:flex h-full'}>
        {items.map((item) => (
          <Item key={item.url} text={item.text} url={item.url} />
        ))}
      </ul>
      <div className="lg:hidden flex p-4 b">
        <span className="text-white grow flex justify-center items-center text-lg">Menu</span>
        <Image
          alt="Menu"
          src="/menu-icon.svg"
          height={16}
          width={16}
          className="p-[6px] box-content grow-0 basis-auto cursor-pointer"
        />
      </div>
    </nav>
  )
}
