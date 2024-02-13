'use client'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Modifier } from '../menu'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { formatCurrency } from '@/lib/utils'

export const ItemDetailsActions = ({ price }: { price: number }) => {
  const [amount, setAmount] = useState(1)
  const total = price * amount

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

      {/* TODO real value*/}
      <div className="px-6 mt-4 pb-6">
        <Button className="rounded-full w-full text-lg font-medium h-[48px]">
          {/* Add to Order {formatCurrency({ total })} */}
        </Button>
      </div>
      {/* ---*/}
    </div>
  )
}
