import { Content } from './content'
import Image from 'next/image'

export const ShoppingCart = () => {
  const cart = [
    {
      id: 1,
      name: 'Hamburguer',
      price: 10,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Coca-cola',
      price: 5,
      quantity: 1,
    },
  ]
  return (
    <Content className="grow hidden lg:block">
      <h2 className="font-medium text-2xl p-[22px] bg-[#F8F9FA] text-[#464646]">
        Carrinho
      </h2>

      {cart?.map((item) => (
        <div key={item.id} className="p-4">
          <div className="flex justify-between gap-[10px]">
            <span className="font-normal text-base">{item.name}</span>
            <span className="font-medium text-base">{item.price}</span>
          </div>
          {/* TODO order details*/}
          <span className="text-[#5F5F5F] font-normal text-base">
            Informações adicionais
          </span>
          {/* ---- */}

          <div className="flex gap-1">
            <Image
              src="/negative-rounded-icon.svg"
              alt="Remover"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <span className="w-[30px] text-center">{item.quantity}</span>
            <Image
              src="/positive-rounded-icon.svg"
              alt="Remover"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      ))}
      {/* TODO total*/}
      <div className="px-4 pt-[22px] pb-[19px] flex justify-between bg-[#F8F9FA] border-[#EEEEEE] border-t-[1px]">
        <span className="font-normal text-base">Sub Total</span>
        <span className="font-medium text-base">22.50</span>
      </div>
      <div className="px-4 pt-[22px] pb-[19px] flex justify-between bg-[#F8F9FA] border-[#EEEEEE] border-t-[1px]">
        <span className="font-normal text-2xl">Total:</span>
        <span className="font-medium text-2xl">22.50</span>
      </div>
      {/* --- */}
    </Content>
  )
}
