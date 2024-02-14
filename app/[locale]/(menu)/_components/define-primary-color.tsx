'use client'

import { getVenue } from '@/api/get-venue'
import { VenueData } from '@/types/venue-data'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export function DefinePrimaryColor({ color }: { color?: string }) {
  const { data } = useQuery<VenueData>({
    queryKey: ['venue'],
    queryFn: () => getVenue(),
  })

  useEffect(() => {
    if (data) {
      document.documentElement.style.setProperty(
        '--primary',
        data.webSettings.primaryColour
      )
    }
  }, [data])

  return null
}
