import { WrapperComponentTest } from '@/lib/utils-test'
import { render, screen, waitFor } from '@testing-library/react'
import { Products } from '../../products'
import { MenuData } from '@/types/menu-data'

const mockResponse: MenuData = {
  id: 14730,
  name: 'test-name',
  type: 'test-type',
  collapse: 0,
  sections: [
    {
      id: 242403,
      name: 'test-name',
      description: null,
      position: 0,
      visible: 1,
      images: [
        {
          id: 1550,
          image:
            'test-https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png',
        },
      ],
      items: [
        {
          id: 1625701,
          name: 'test-name',
          description:
            'test-180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato, special house bread, served with fried cassava and passion fruit chipotle.',
          alcoholic: 0,
          price: 33.0,
          position: 0,
          visible: 1,
          availabilityType: 'test-AVAILABLE_NOW',
          sku: 'test-I1625701',
          images: [
            {
              id: 108305,
              image:
                'test-https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png',
            },
          ],
          available: true,
        },
        {
          id: 1625702,
          name: 'test-name',
          description:
            'test-100g pressed hamburger, mozzarella cheese, pickles, red onion, grilled bacon and traditional Heinz mayonnaise.',
          alcoholic: 0,
          price: 0.0,
          position: 1000,
          visible: 1,
          availabilityType: 'test-AVAILABLE_NOW',
          sku: 'test-I1625702',
          modifiers: [
            {
              id: 1101202,
              name: 'test-Choose a size',
              minChoices: 1,
              maxChoices: 1,
              items: [
                {
                  id: 7476054,
                  name: 'test-1 meat',
                  price: 33.0,
                  maxChoices: 1,
                  position: 0,
                  visible: 1,
                  availabilityType: 'test-AVAILABLE_NOW',
                  available: true,
                },
                {
                  id: 7476055,
                  name: 'test-2 meats',
                  price: 35.0,
                  maxChoices: 1,
                  position: 1000,
                  visible: 1,
                  availabilityType: 'test-AVAILABLE_NOW',
                  qty: 1,
                  available: true,
                },
              ],
            },
            {
              id: 124,
              name: 'test-Choose a size',
              minChoices: 1,
              maxChoices: 1,
              items: [
                {
                  id: 7476054,
                  name: 'test-1 meat',
                  price: 33.0,
                  maxChoices: 1,
                  position: 0,
                  visible: 1,
                  availabilityType: 'test-AVAILABLE_NOW',
                  available: true,
                },
                {
                  id: 7476055,
                  name: 'test-2 meats',
                  price: 35.0,
                  maxChoices: 1,
                  position: 1000,
                  visible: 1,
                  availabilityType: 'test-AVAILABLE_NOW',
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
                'test-https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbe01b3373.png',
            },
          ],
          available: true,
        },
      ],
    },
    {
      id: 242404,
      name: 'test-name',
      position: 1000,
      visible: 1,
      images: [
        {
          id: 1551,
          image:
            'test-https://preodemo.gumlet.io/usr/venue/7602/section/646fbe5dc1bf3.png',
        },
      ],
      items: [
        {
          id: 1625705,
          name: 'test-name',
          alcoholic: 0,
          price: 13.0,
          position: 0,
          visible: 1,
          availabilityType: 'test-AVAILABLE_NOW',
          sku: 'test-I1625705',
          available: true,
        },
        {
          id: 1004123,
          name: 'test-name',
          alcoholic: 0,
          price: 13.0,
          position: 1000,
          availabilityType: 'test-AVAILABLE_NOW',
          sku: 'test-I1004123',
          available: true,
        },
      ],
    },
  ],
}

describe('component Products', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })
  it('render texts and value', async () => {})
})
