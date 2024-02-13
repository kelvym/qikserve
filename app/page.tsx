'use client'

import { Banner } from '@/app/_components/banner'
import { Menu } from '@/app/_components/menu'
import { Navbar } from '@/app/_components/navbar'
import { Search } from '@/app/_components/search'
import { ShoppingCart } from '@/app/_components/shopping-cart'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Content } from './_components/content'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { getVenue } from '@/api/get-venue'

export default function Home() {
  const { data } = useQuery({
    queryKey: ['venue'],
    queryFn: () => getVenue(),
  })

  if (data) {
    document.documentElement.style.setProperty(
      '--primary',
      data.webSettings.primaryColour
    )
  }

  const [isOpenedShoppingCart, setIsOpenedShoppingCart] = useState(false)

  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <Navbar />
        <Banner srcImg={data?.webSettings?.bannerImage} />
        <main className="flex flex-col justify-center mt-[6px] items-center">
          <div className="w-full lg:w-[1024px] px-4 lg:px-0">
            <Search />
            <div className="lg:bg-[#F9F9FA] lg:flex gap-6 mt-[6px] lg:p-8 items-start">
              <Content className={cn('lg:w-[600px]', {})}>
                <Menu />
              </Content>
              <Content
                className={cn(
                  'grow hidden lg:block lg:relative lg:w-auto lg:h-auto',
                  {
                    'block fixed top-0 left-0 w-full h-full':
                      isOpenedShoppingCart,
                  }
                )}
              >
                <ShoppingCart
                  close={() => {
                    setIsOpenedShoppingCart(false)
                  }}
                />
              </Content>
            </div>
          </div>
        </main>
        <Button
          onClick={() => {
            setIsOpenedShoppingCart(true)
          }}
          className="h-12 mx-6 fixed bottom-6 right-0 left-0 sm:m-auto text-white rounded-full w-[calc(100%-48px)] lg:w-full sm:max-w-lg lg:hidden"
        >
          {/* TODO value*/}
          Your basket • 1 Item
          {/* --- */}
        </Button>
      </div>
    </>
  )
}
