import { Banner } from '@/app/[locale]/(menu)/_components/banner'
import { Products } from '@/app/[locale]/(menu)/_components/products'
import { Search } from '@/app/[locale]/(menu)/_components/search'
import { ShoppingCart } from '@/app/[locale]/(menu)/_components/shopping-cart'
import { Content } from './_components/content'
import { cn } from '@/lib/utils'
import { DefinePrimaryColor } from './_components/define-primary-color'
import { ButtonShoppingCart } from './_components/button-shopping-cart'
import { Suspense } from 'react'
import { useTranslations } from 'next-intl'

export default function Home() {
  return (
    <>
      <DefinePrimaryColor />
      <div className="relative flex flex-col min-h-screen">
        <Banner />

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
