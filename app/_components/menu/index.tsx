import { MenuFilter } from './menu-filter'
import { MenuList } from './menu-list'
import { MENU } from '../../mock-api'
import { Content } from '../content'
import { Skeleton } from '@/components/ui/skeleton'
import { Suspense } from 'react'

interface MenuData {
  id: number
  name: string
  type: string
  collapse: number
  sections: Section[]
}

export interface Section {
  id: number
  name: string
  description?: any
  position: number
  visible?: number
  images: Image[]
  items: Item2[]
}

export interface Item2 {
  id: number
  name: string
  description?: string
  alcoholic: number
  price: number
  position: number
  visible?: number
  availabilityType: string
  sku?: string
  images?: Image[]
  available: boolean
  modifiers?: Modifier[]
}

interface Modifier {
  id: number
  name: string
  minChoices: number
  maxChoices: number
  items: Item[]
}

interface Item {
  id: number
  name: string
  price: number
  maxChoices: number
  position: number
  visible: number
  availabilityType: string
  available: boolean
  qty?: number
}

interface Image {
  id: number
  image: string
}

export const Menu = () => {
  const dataMenu = MENU.sections satisfies Section[]
  const selectedById = 242403

  return (
    <Content className="lg:w-[600px]">
      <Suspense
        fallback={
          <>
            <Skeleton className="w-[74px] h-[74px] rounded-full" />
            <Skeleton className="w-[74px] h-[20px] rounded-full" />
          </>
        }
      >
        <MenuFilter data={dataMenu} selectedById={selectedById} />
      </Suspense>
      <MenuList data={dataMenu} />
    </Content>
  )
}
