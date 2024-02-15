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
}
