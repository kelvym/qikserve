import { render, waitFor } from '@testing-library/react'
import { DefinePrimaryColor } from '../define-primary-color'
import { WrapperComponentTest } from '@/lib/utils-test'
import { VenueData } from '@/types/venue-data'

describe('component DefinePrimaryColor', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('define variable css based in request', async () => {
    render(
      <WrapperComponentTest>
        <DefinePrimaryColor color={'test-primary-colour'} />
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
