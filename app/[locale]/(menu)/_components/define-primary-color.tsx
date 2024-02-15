'use client'

import { getVenue } from '@/api/requests'
import { VenueData } from '@/types/venue-data'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export function DefinePrimaryColor() {
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
