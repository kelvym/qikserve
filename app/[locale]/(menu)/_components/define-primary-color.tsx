'use client'

import { useEffect } from 'react'

export function DefinePrimaryColor({ color }: { color: string }) {
  useEffect(() => {
    if (color) {
      document.documentElement.style.setProperty('--primary', color)
    }
  }, [color])

  return null
}
