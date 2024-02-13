import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Item = {
  id: number
  name: string
  price: number
}

interface ShoppingCartState {
  items: Item[]
  add: (item: Item) => void
}

export const useShoppingCartStore = create<ShoppingCartState>()(
  devtools(
    persist(
      (set) => ({
        items: [],
        add: (newItem: Item) =>
          set((state) => ({ items: [...state.items, newItem] })),
      }),
      {
        name: 'bear-storage',
      }
    )
  )
)
