'use client'

import { Button } from '@/components/ui/button'
import { useShoppingCartStore } from '@/store/shopping-cart'

export const ButtonShoppingCart = () => {
  const items = useShoppingCartStore((state) => state.items)
  const openShoppingCart = useShoppingCartStore((state) => state.open)

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
      <Button
        onClick={() => {
          openShoppingCart(true)
        }}
        className="h-12 mx-6 fixed bottom-6 right-0 left-0 sm:m-auto text-white rounded-full w-[calc(100%-48px)] lg:w-full sm:max-w-lg lg:hidden"
      >
        Your basket • {totalItems} Item
      </Button>
    </>
  )
}
