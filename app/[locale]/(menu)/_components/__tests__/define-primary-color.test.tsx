import { render, waitFor } from '@testing-library/react'
import { DefinePrimaryColor } from '../define-primary-color'
import { WrapperComponentTest } from '@/lib/utils-test'
import { VenueData } from '@/types/venue-data'

describe('component DefinePrimaryColor', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('define variable css based in request', async () => {
    const mockResponse: VenueData = {
      id: 9,
      name: 'test-name',
      internalName: 'test-internal-name',
      liveFlag: 1,
      demoFlag: 1,
      address1: 'test-address1',
      address2: 'test-address2',
      city: 'test-city',
      county: 'test-county',
      postcode: 'test-postcode',
      country: 'test-country',
      timezoneOffset: 'test-timezone-offset',
      locale: 'test-locale',
      timeZone: 'test-time-zone',
      webSettings: {
        id: 1,
        venueId: 1,
        bannerImage: 'test-banner-image',
        backgroundColour: 'test-background-colour',
        primaryColour: 'test-primary-colour',
        primaryColourHover: 'test-primary-colour-hover',
        navBackgroundColour: 'test-nav-background-colour',
      },
      ccy: 'test-ccy',
      ccySymbol: 'test-ccy-symbol',
      currency: 'test-currency',
    }

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
