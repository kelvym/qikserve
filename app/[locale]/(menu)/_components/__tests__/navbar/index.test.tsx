import { WrapperComponentTest } from '@/lib/utils-test'
import { render, screen } from '@testing-library/react'
import { Navbar } from '../../navbar'

describe('component Navbar', () => {
  it('render texts and value', () => {
    const navbarItems = [
      {
        text: 'MENU',
        url: '/',
      },
      {
        text: 'LOGIN',
        url: '/login',
      },
      {
        text: 'CONTACT',
        url: '/contact',
      },
    ]

    render(
      <WrapperComponentTest>
        <Navbar />
      </WrapperComponentTest>
    )

    const linkMenu = screen.getByRole('link', {
      name: navbarItems[0].text,
    })
    const loginMenu = screen.getByRole('link', {
      name: navbarItems[1].text,
    })

    const contactMenu = screen.getByRole('link', {
      name: navbarItems[2].text,
    })

    expect(linkMenu).toBeInTheDocument()
    expect(linkMenu).toHaveAttribute('href', navbarItems[0].url)

    expect(loginMenu).toBeInTheDocument()
    expect(loginMenu).toHaveAttribute('href', navbarItems[1].url)

    expect(contactMenu).toBeInTheDocument()
    expect(contactMenu).toHaveAttribute('href', navbarItems[2].url)
  })
})
