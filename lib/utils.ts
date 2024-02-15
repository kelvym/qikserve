import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency({
  value,
  locale,
  currency,
}: {
  value: number
  locale: string
  currency: string
}) {
  try {
    return value.toLocaleString(locale, {
      style: 'currency',
      currency,
    })
  } catch (error) {
    return ''
  }
  // return value.toLocaleString(locale, {
  // style: 'currency',
  // currency,
  // })
}

export function hextoHSL(hex: string) {
  const format = ({ h, s, l }: { h: number; s: number; l: number }) =>
    `hsl(${h},${s}%, ${l}%)`

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  if (!result) return format({ h: 0, s: 0, l: 0 })

  let r = parseInt(result[1], 16)
  let g = parseInt(result[2], 16)
  let b = parseInt(result[3], 16)

  r /= 255
  g /= 255
  b /= 255

  let max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h = 0
  let s = 0
  let l = (max + min) / 2

  if (max == min) {
    h = s = 0 // achromatic
  } else {
    let d = max - min

    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  h = Math.round(h * 360)
  s = Math.round(s * 100)
  l = Math.round(l * 100)

  return format({ h, s, l })

  // return HSL
}
