import { Banner } from '@/app/_components/banner'
import { Menu } from '@/app/_components/menu'
import { Navbar } from '@/app/_components/navbar'
import { Search } from '@/app/_components/search'
import { ShoppingCart } from '@/app/_components/shopping-cart'
import { VENUE } from './mock-api'
import { Button } from '@/components/ui/button'

export default function Home() {
  const primaryColor = VENUE.webSettings.primaryColour

  return (
    <div
      className="relative flex flex-col min-h-screen"
      style={{ '--primary': primaryColor } as React.CSSProperties}
    >
      <Navbar />
      <Banner />
      <main className="flex flex-col justify-center mt-[6px] items-center">
        <div className="w-full lg:w-[1024px] px-4 lg:px-0">
          <Search />
          <div className="lg:bg-[#F9F9FA] lg:flex gap-6 mt-[6px] lg:p-8 items-start">
            <Menu />
            <ShoppingCart />
          </div>
        </div>
      </main>
      <Button className="h-12 mx-6 fixed bottom-6 right-0 left-0 sm:m-auto text-white rounded-full w-[calc(100%-48px)] lg:w-full sm:max-w-lg lg:hidden">
        {/* TODO value*/}
        Your basket • 1 Item
        {/* --- */}
      </Button>
    </div>
  )
}
