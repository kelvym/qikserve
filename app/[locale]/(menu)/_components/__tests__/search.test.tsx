import { WrapperComponentTest } from '@/lib/utils-test'
import { Search } from '../search'
import { fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockReturnValue('/'),
  useRouter: jest.fn().mockReturnValue({
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
  }),
  useParams: jest.fn().mockReturnValue({ locale: 'en' }),
  useSelectedLayoutSegment: jest.fn().mockReturnValue({ locale: 'en' }),
  useSearchParams: jest.fn().mockReturnValue({
    get: () => 'test-url-param',
    set: jest.fn(),
    toString: jest.fn(),
  }),
}))

describe('component Search', () => {
  it('render input with url search param', async () => {
    render(
      <WrapperComponentTest>
        <Search />
      </WrapperComponentTest>
    )

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('test-url-param')
  })

  it('change url params when change search input', async () => {
    const newValue = 'test-new-value'

    render(
      <WrapperComponentTest>
        <Search />
      </WrapperComponentTest>
    )

    const input = screen.getByRole('textbox')
    const router = useRouter()

    fireEvent.change(input, { target: { value: newValue } })

    expect(router.push).toHaveBeenCalledWith('?search=test-new-value')
  })
})
