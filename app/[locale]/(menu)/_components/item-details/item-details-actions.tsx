import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { formatCurrency } from '@/lib/utils'
import { useVenueConfigStore } from '@/store/venue-config'
import { useShoppingCartStore } from '@/store/shopping-cart'

type ItemDetailsActionsProps = {
  price: number
  id: number
  name: string
  afterAddProduct: () => void
}

export const ItemDetailsActions = ({
  price,
  id,
  name,
  afterAddProduct,
}: ItemDetailsActionsProps) => {
  const configVenue = useVenueConfigStore((state) => state.config)
  const addProduct = useShoppingCartStore((state) => state.add)
  const temporaryItemModifiers = useShoppingCartStore(
    (state) => state.temporaryItemModifiers
  )
  const [amount, setAmount] = useState(1)

  const priceModifiers = temporaryItemModifiers.reduce((acc, modifier) => {
    const key = Object.keys(modifier)[0]
    return acc + modifier[key].price
  }, 0)

  const total = (price + priceModifiers) * amount

  return (
    <div className="bg-background pt-[27px]">
      <div className="flex gap-4 justify-center items-center">
        {amount === 1 ? (
          <Image
            src="/negative-rounded-disabled-icon.svg"
            alt="Remover"
            width={32}
            height={32}
            className="h-[32px] w-[32px]"
          />
        ) : (
          <Image
            onClick={() => {
              if (amount !== 1) {
                setAmount(amount - 1)
              }
            }}
            src="/negative-rounded-icon.svg"
            alt="Remover"
            width={32}
            height={32}
            className="cursor-pointer h-[32px] w-[32px]"
          />
        )}

        <span className="w-[47px] text-center text-2xl text-main font-semibold">
          {amount}
        </span>

        <Image
          onClick={() => {
            setAmount(amount + 1)
          }}
          src="/positive-rounded-icon.svg"
          alt="Remover"
          width={32}
          height={32}
          className="cursor-pointer h-[32px] w-[32px]"
        />
      </div>

      <div className="px-6 mt-4 pb-6">
        <Button
          onClick={() => {
            addProduct({
              id,
              name,
              price,
              quantity: amount,
              modifiers: temporaryItemModifiers,
            })
            afterAddProduct()
          }}
          className="rounded-full w-full text-lg font-medium h-[48px]"
        >
          {formatCurrency({
            value: total,
            locale: configVenue.locale,
            currency: configVenue.currency,
          })}
        </Button>
      </div>
      {/* ---*/}
    </div>
  )
}
