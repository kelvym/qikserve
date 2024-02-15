import { WrapperComponentTest } from '@/lib/utils-test'
import { render, screen, waitFor } from '@testing-library/react'
import { MenuDataSection } from '@/types/menu-data'
import { ProductsFilter } from '../../products/products-filter'

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
    get: () => '',
    set: jest.fn(),
    toString: jest.fn(),
  }),
}))

const mockResponse: MenuDataSection[] = [
  {
    id: 242403,
    name: 'Burgers',
    description: null,
    position: 0,
    visible: 1,
    images: [
      {
        id: 1550,
        image:
          'https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png',
      },
    ],
    items: [
      {
        id: 1625701,
        name: 'Burger-a',
        description:
          '180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato, special house bread, served with fried cassava and passion fruit chipotle.',
        alcoholic: 0,
        price: 33.0,
        position: 0,
        visible: 1,
        availabilityType: 'AVAILABLE_NOW',
        sku: 'I1625701',
        images: [
          {
            id: 108305,
            image:
              'https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png',
          },
        ],
        available: true,
      },
      {
        id: 1625702,
        name: 'Burger-b',
        description:
          '100g pressed hamburger, mozzarella cheese, pickles, red onion, grilled bacon and traditional Heinz mayonnaise.',
        alcoholic: 0,
        price: 0.0,
        position: 1000,
        visible: 1,
        availabilityType: 'AVAILABLE_NOW',
        sku: 'I1625702',
        modifiers: [
          {
            id: 1101202,
            name: 'Choose a size',
            minChoices: 1,
            maxChoices: 1,
            items: [
              {
                id: 7476054,
                name: '1 meat',
                price: 33.0,
                maxChoices: 1,
                position: 0,
                visible: 1,
                availabilityType: 'AVAILABLE_NOW',
                available: true,
              },
              {
                id: 7476055,
                name: '2 meats',
                price: 35.0,
                maxChoices: 1,
                position: 1000,
                visible: 1,
                availabilityType: 'AVAILABLE_NOW',
                qty: 1,
                available: true,
              },
            ],
          },
          {
            id: 124,
            name: 'Choose a size',
            minChoices: 1,
            maxChoices: 1,
            items: [
              {
                id: 7476054,
                name: '1 meat',
                price: 33.0,
                maxChoices: 1,
                position: 0,
                visible: 1,
                availabilityType: 'AVAILABLE_NOW',
                available: true,
              },
              {
                id: 7476055,
                name: '2 meats',
                price: 35.0,
                maxChoices: 1,
                position: 1000,
                visible: 1,
                availabilityType: 'AVAILABLE_NOW',
                qty: 1,
                available: true,
              },
            ],
          },
        ],
        images: [
          {
            id: 108307,
            image:
              'https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbe01b3373.png',
          },
        ],
        available: true,
      },
    ],
  },
  {
    id: 242404,
    name: 'Drinks',
    position: 1000,
    visible: 1,
    images: [
      {
        id: 1551,
        image:
          'https://preodemo.gumlet.io/usr/venue/7602/section/646fbe5dc1bf3.png',
      },
    ],
    items: [
      {
        id: 1625705,
        name: 'Caipirinha',
        alcoholic: 0,
        price: 13.0,
        position: 0,
        visible: 1,
        availabilityType: 'AVAILABLE_NOW',
        sku: 'I1625705',
        available: true,
      },
      {
        id: 1004123,
        name: 'Red Label',
        alcoholic: 0,
        price: 13.0,
        position: 1000,
        availabilityType: 'AVAILABLE_NOW',
        sku: 'I1004123',
        available: true,
      },
    ],
  },
]

describe('component ProductsFilter', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('render sections name', async () => {
    fetchMock.mockResponse(JSON.stringify(mockResponse))

    render(
      <WrapperComponentTest>
        <ProductsFilter data={mockResponse} />
      </WrapperComponentTest>
    )

    await waitFor(() => {
      const saectiontName1 = screen.getByText(mockResponse[0].name)
      const sectionName2 = screen.getByText(mockResponse[1].name)

      expect(saectiontName1).toBeInTheDocument()
      expect(sectionName2).toBeInTheDocument()
    })
  })
})
