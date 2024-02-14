import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Item = {
  id: number
  name: string
  price: number
  quantity: number
  modifiers: Modifier[]
}

type Modifier = {
  [K: string]: {
    id: number
    name: string
    price: number
  }
}

interface ShoppingCartState {
  items: Item[]
  isOpen: boolean
  temporaryItemModifiers: Modifier[]
  open: (status: boolean) => void
  add: (item: Item) => void
  addTemporaryItemModifiers: (modifiers: Modifier) => void
  decreaseItem: (id: number) => void
  increaseItem: (id: number) => void
  removeItem: (id: number) => void
  removeTemporaryItemModifiers: () => void
}

export const useShoppingCartStore = create<ShoppingCartState>()(
  devtools(
    // persist(
    (set) => ({
      items: [],
      isOpen: false,
      temporaryItemModifiers: [],
      add: (newItem: Item) =>
        set((state) => {
          const isDuplicate = state.items.some((item) => {
            return item.id === newItem.id
          })

          if (isDuplicate)
            return {
              items: state.items.map((item) => {
                if (item.id === newItem.id) {
                  item.quantity += newItem.quantity
                }
                return item
              }),
            }

          return {
            temporaryItem: null,
            items: [
              ...state.items,
              {
                id: newItem.id,
                name: newItem.name,
                price: newItem.price,
                quantity: newItem.quantity,
                modifiers: newItem.modifiers,
              },
            ],
          }
        }),
      addTemporaryItemModifiers: (newModifier: Modifier) =>
        set((state) => {
          const isDuplicate = state.temporaryItemModifiers.some((item) => {
            return item.hasOwnProperty(Object.keys(newModifier)[0])
          })

          if (isDuplicate) {
            return {
              temporaryItemModifiers: state.temporaryItemModifiers.map(
                (item) => {
                  let newItem = item
                  const key = Object.keys(newModifier)[0]

                  if (item.hasOwnProperty(key)) {
                    newItem[key] = newModifier[key]
                  }

                  return item
                }
              ),
            }
          }

          return {
            temporaryItemModifiers: [
              ...state.temporaryItemModifiers,
              newModifier,
            ],
          }
        }),
      open: (status: boolean) => set(() => ({ isOpen: status })),
      decreaseItem: (id: number) =>
        set((state) => {
          return {
            items: state.items.map((item) => {
              if (item.id === id) {
                item.quantity -= 1
              }
              return item
            }),
          }
        }),
      increaseItem: (id: number) =>
        set((state) => {
          return {
            items: state.items.map((item) => {
              if (item.id === id) {
                item.quantity += 1
              }
              return item
            }),
          }
        }),
      removeItem: (id: number) =>
        set((state) => {
          return {
            items: state.items.filter((item) => item.id !== id),
          }
        }),
      removeTemporaryItemModifiers: () =>
        set(() => {
          return {
            temporaryItemModifiers: [],
          }
        }),
    }),
    {
      name: 'shopping-cart-storage',
    }
  )
  // )
)
