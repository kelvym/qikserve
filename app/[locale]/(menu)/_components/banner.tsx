'use client'

import { getVenue } from '@/api/requests'
import { Loading } from '@/components/loading'
import { VenueData } from '@/types/venue-data'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

export const Banner = () => {
  const { data, isLoading } = useQuery<VenueData>({
    queryKey: ['venue'],
    queryFn: () => getVenue(),
  })

  return (
    <div className="relative flex items-center justify-center w-full h-[150px] mb-[5px]">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data?.webSettings.bannerImage && (
            <Image
              src={data?.webSettings.bannerImage}
              alt="banner"
              fill
              className="object-cover"
              unoptimized
              priority
            />
          )}
        </>
      )}
    </div>
  )
}
