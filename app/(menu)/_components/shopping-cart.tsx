'use client'

import { useShoppingCartStore } from '@/store/shopping-cart'
import Image from 'next/image'
import { Content } from './content'
import { cn, formatCurrency } from '@/lib/utils'
import { useVenueConfigStore } from '@/store/venue-config'

export const ShoppingCart = () => {
  const items = useShoppingCartStore((state) => state.items)
  const decrementItem = useShoppingCartStore((state) => state.decreaseItem)
  const incrementItem = useShoppingCartStore((state) => state.increaseItem)
  const removeItem = useShoppingCartStore((state) => state.removeItem)
  const openShoppingCart = useShoppingCartStore((state) => state.open)
  const isOpenShoppingCart = useShoppingCartStore((state) => state.isOpen)
  const configVenue = useVenueConfigStore((state) => state.config)

  const calcTotal = items?.reduce((accItem, item) => {
    const totalPriceModifiers = item.modifiers.reduce(
      (accModifier, modifier) => {
        const key = Object.keys(modifier)[0]

        return accModifier + modifier[key].price
      },
      0
    )

    const totalPrice = item.price + totalPriceModifiers

    return accItem + totalPrice * item.quantity
  }, 0)

  return (
    <Content
      className={cn('grow hidden lg:block lg:relative lg:w-auto lg:h-auto', {
        'block fixed top-0 left-0 w-full h-full': isOpenShoppingCart,
      })}
    >
      <div className="flex lg:block p-[22px] items-center bg-background">
        <h2 className="font-medium text-2xl text-[#464646] grow text-center lg:text-left">
          Carrinho
        </h2>
        <Image
          src="/x-icon.svg"
          alt="Fechar"
          width={14}
          height={14}
          onClick={() => openShoppingCart(false)}
          className="lg:hidden cursor-pointer h-[14px] w-[14px]"
        />
      </div>

      {items?.map((item) => (
        <div key={item.id} className="p-4">
          <div className="flex justify-between gap-[10px]">
            <span className="font-normal text-base">{item.name}</span>
            <span className="font-medium text-base">
              {formatCurrency({
                value: item.price,
                locale: configVenue.locale,
                currency: configVenue.currency,
              })}
            </span>
          </div>
          {item.modifiers.map((modifier, id) => {
            const key = Object.keys(modifier)[0]

            return (
              <span key={id} className="text-[#5F5F5F] font-normal text-base">
                {modifier[key].name}
              </span>
            )
          })}

          <div className="flex gap-1">
            <Image
              src="/negative-rounded-icon.svg"
              alt="Remover"
              width={20}
              height={20}
              className="cursor-pointer h-[20px] w-[20px]"
              onClick={() => {
                if (item.quantity === 1) {
                  removeItem(item.id)
                } else {
                  decrementItem(item.id)
                }
              }}
            />
            <span className="w-[30px] text-center">{item.quantity}</span>
            <Image
              src="/positive-rounded-icon.svg"
              alt="Remover"
              width={20}
              height={20}
              className="cursor-pointer h-[20px] w-[20px]"
              onClick={() => {
                incrementItem(item.id)
              }}
            />
          </div>
        </div>
      ))}
      <div className="px-4 pt-[22px] pb-[19px] flex justify-between bg-background border-[#EEEEEE] border-t-[1px]">
        <span className="font-normal text-base">Sub Total</span>
        <span className="font-medium text-base">
          {formatCurrency({
            value: calcTotal,
            locale: configVenue.locale,
            currency: configVenue.currency,
          })}
        </span>
      </div>
      <div className="px-4 pt-[22px] pb-[19px] flex justify-between bg-background border-[#EEEEEE] border-t-[1px]">
        <span className="font-normal text-2xl">Total:</span>
        <span className="font-medium text-2xl">
          {formatCurrency({
            value: calcTotal,
            locale: configVenue.locale,
            currency: configVenue.currency,
          })}
        </span>
      </div>
    </Content>
  )
}
