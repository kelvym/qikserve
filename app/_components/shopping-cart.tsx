import { Content } from './content'

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
    <Content className="grow">
      <h2 className="font-medium text-2xl p-[22px] bg-[#F8F9FA]">Carrinho</h2>
      {cart?.map((item) => (
        <div key={item.id}>
          <div>
            <h3>{item.name}</h3>
            <span>{item.price}</span>
          </div>
          <span>{item.quantity}</span>
          <span>Informações adicionais</span>
        </div>
      ))}
    </Content>
  )
}
