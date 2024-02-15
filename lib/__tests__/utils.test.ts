import { formatCurrency, cn } from '../utils'

describe('utils', () => {
  describe('cn', () => {
    it('return combination of styles in string and object', () => {
      const style = cn('text-red-500 bg-primary', {
        hidden: true,
      })

      expect(style).toBe('text-red-500 bg-primary hidden')
    })
  })
  describe('formatCurrency', () => {
    it('return currency formated from formatCurrency', () => {
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
})
