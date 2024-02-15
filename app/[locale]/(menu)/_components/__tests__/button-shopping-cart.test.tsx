import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ButtonShoppingCart } from '../button-shopping-cart'

describe('component ButtonShoppingCart', () => {
  it('render button', () => {
    render(<ButtonShoppingCart />)

    const button = screen.getByRole('button', {
      name: /Your basket • 0 Item/i,
    })

    expect(button).toBeInTheDocument()
  })
})
