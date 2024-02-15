import { render, waitFor } from '@testing-library/react'
import { DefinePrimaryColor } from '../define-primary-color'
import { WrapperComponentTest } from '@/lib/utils-test'
import { VenueData } from '@/types/venue-data'

describe('component DefinePrimaryColor', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('define variable css based in request', async () => {
    const mockResponse = {
      id: 7602,
      name: 'BURGERS RESTAURANT',
      internalName: 'BURGERS RESTAURANT',
      description: null,
      liveFlag: 1,
      demoFlag: 1,
      address1: 'Rua XX-X, 1-11',
      address2: 'XXX',
      address3: null,
      city: 'Bauru',
      county: 'BR',
      postcode: '17012-360',
      country: 'BR',
      timezoneOffset: '-03:00',
      locale: 'pt-BR',
      timeZone: 'America/Sao_Paulo',
      webSettings: {
        id: 5854,
        venueId: 7602,
        bannerImage:
          'https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png',
        backgroundColour: '#ffffff',
        primaryColour: 'test-primary-colour',
        primaryColourHover: '#4f372f',
        navBackgroundColour: '#4f372f',
      },
      ccy: 'BRL',
      ccySymbol: 'R$',
      currency: 'R$',
    } satisfies VenueData

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse))

    render(
      <WrapperComponentTest>
        <DefinePrimaryColor />
      </WrapperComponentTest>
    )
    await waitFor(() => {
      const variableCss = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--primary')

      expect(variableCss).toBe('test-primary-colour')
    })
  })
})
