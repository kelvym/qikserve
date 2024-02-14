'use client'

import { ProductsFilter } from './products-filter'
import { ProductsList } from './products-list'
import { MenuData } from '@/types/menu-data'
import { Content } from '../content'
import { useQuery } from '@tanstack/react-query'
import { getMenu } from '@/api/get-venue'
import { Skeleton } from '@/components/ui/skeleton'

export const Products = () => {
  const { data, isLoading } = useQuery<MenuData>({
    queryKey: ['menu'],
    queryFn: () => getMenu(),
  })

  return (
    <Content className="lg:w-[600px]">
      {isLoading ? (
        <div className=" p-4">
          <div className="flex gap-6 mb-20">
            <div>
              <Skeleton className="rounded-full h-[74px] w-[74px] mb-2" />
              <Skeleton className="h-[20px] w-[74px]" />
            </div>
            <div>
              <Skeleton className="rounded-full h-[74px] w-[74px] mb-2" />
              <Skeleton className="h-[20px] w-[74px]" />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col mb-6">
              <Skeleton className="h-[20px] w-[200px] mb-2" />
              <Skeleton className="h-[70px] w-[400px]" />
            </div>
            <div className="flex flex-col">
              <Skeleton className="h-[20px] w-[200px] mb-2" />
              <Skeleton className="h-[70px] w-[400px]" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <ProductsFilter data={data?.sections || []} />
          <ProductsList data={data?.sections || []} />
        </>
      )}
    </Content>
  )
}
