import { MenuSchema } from '@/schemas/menu.schema'
import { z } from 'zod'

export type MenuData = z.infer<typeof MenuSchema>

export interface MenuDataSection {
  id: number
  name: string
  description?: any
  position: number
  visible?: number
  images: MenuDataImage[]
  items: MenuDataSectionItem[]
}

export interface MenuDataSectionItem {
  id: number
  name: string
  description?: string
  alcoholic: number
  price: number
  position: number
  visible?: number
  availabilityType: string
  sku?: string
  images?: MenuDataImage[]
  available: boolean
  modifiers?: MenuDataSectionItemModifier[]
}

export interface MenuDataSectionItemModifier {
  id: number
  name: string
  minChoices: number
  maxChoices: number
  items: MenuDataSectionItemModifierItem[]
}

export interface MenuDataSectionItemModifierItem {
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

export interface MenuDataImage {
  id: number
  image: string
}
