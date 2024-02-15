import '@testing-library/jest-dom'
import { formatCurrency } from '../utils'

describe('utils', () => {
  it('return currency formated with formatCurrency', () => {
    const currency = formatCurrency({
      value: 13.34,
      locale: 'en-US',
      currency: 'USD',
    })

    expect(currency).toBe('$13.34')
  })

  it('return empty when toLocaleString fail inside formatCurrency', () => {
    const currency = formatCurrency({
      value: 13.34,
      locale: 'en-US',
      currency: 'invalid-currency',
    })

    expect(currency).toBe('')
  })
})
