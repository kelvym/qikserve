import { useTranslations } from 'next-intl'
import { NavbarItem } from './navbar-item'
import Image from 'next/image'

export const Navbar = () => {
  const t = useTranslations('Menu')

  // TODO
  const items = [
    {
      text: t('navbar.menu'),
      url: '/',
    },
    {
      text: t('navbar.login'),
      url: '/login',
    },
    {
      text: t('navbar.contact'),
      url: '/contact',
    },
  ]
  // ---

  return (
    <nav className="bg-[theme(colors.primary.DEFAULT)] w-full h-[64px] lg:h-[52px]">
      <ul className={'justify-center hidden lg:flex h-full'}>
        {items.map((item) => (
          <NavbarItem key={item.url} text={item.text} url={item.url} />
        ))}
      </ul>
      <div className="lg:hidden flex p-4 b">
        <span className="text-white grow flex justify-center items-center text-lg">
          Menu
        </span>
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
