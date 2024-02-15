import { WrapperComponentTest } from '@/lib/utils-test'
import { render, screen } from '@testing-library/react'
import { ShoppingCart } from '../shopping-cart'

describe('component ShoppingCart', () => {
  it('render texts and value', () => {
    render(
      <WrapperComponentTest>
        <ShoppingCart />
      </WrapperComponentTest>
    )

    const totalText = screen.getByText(/^Total:$/)
    const subtotalText = screen.getByText(/Subtotal/i)
    const totalValue = screen.getAllByText(/0,00/)

    expect(totalText).toBeInTheDocument()
    expect(subtotalText).toBeInTheDocument()
    expect(totalValue).toHaveLength(2)
  })
})
