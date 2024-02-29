import { Banner } from '@/app/[locale]/(menu)/_components/banner'
import { Products } from '@/app/[locale]/(menu)/_components/products'
import { Search } from '@/app/[locale]/(menu)/_components/search'
import { ShoppingCart } from '@/app/[locale]/(menu)/_components/shopping-cart'
import { DefinePrimaryColor } from './_components/define-primary-color'
import { ButtonShoppingCart } from './_components/button-shopping-cart'

export default async function Home() {
  const result = await fetch('https://cdn-dev.preoday.com/challenge/venue/9')
  const data = await result.json()

  return (
    <>
      <DefinePrimaryColor color={data.webSettings.primaryColour} />
      <div className="relative flex flex-col min-h-screen">
        <Banner img={data.webSettings.bannerImage} />

        <main className="flex flex-col justify-center mt-[6px] items-center">
          <div className="w-full lg:w-[1024px] px-4 lg:px-0">
            <Search />
            <div className="lg:bg-[#F9F9FA] lg:flex gap-6 mt-[6px] lg:p-8 items-start">
              <Products />
              <ShoppingCart />
            </div>
          </div>
        </main>
        <ButtonShoppingCart />
      </div>
    </>
  )
}
