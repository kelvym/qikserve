import { Banner } from '@/app/_components/banner'
import { Menu } from '@/app/_components/menu'
import { Navbar } from '@/app/_components/navbar'
import { Search } from '@/app/_components/search'
import { ShoppingCart } from '@/app/_components/shopping-cart'
import { VENUE } from './mock-api'

export default function Home() {
  const primaryColor = VENUE.webSettings.primaryColour

  return (
    <div className="flex flex-col min-h-screen" style={{ '--primary': primaryColor } as React.CSSProperties}>
      <Navbar />
      <Banner />
      <main className="flex flex-col justify-center mt-[6px] items-center">
        <div className="lg:w-[1024px]">
          <Search />
          <div className="bg-[#F9F9FA] flex gap-6 mt-[6px] p-8">
            <Menu />
            <ShoppingCart />
          </div>
        </div>
      </main>
    </div>
  )
}
