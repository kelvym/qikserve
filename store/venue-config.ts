import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type Config = {
  locale: string
  currency: string
}

interface VenueConfigState {
  config: Config
  add: (config: Config) => void
}

export const useVenueConfigStore = create<VenueConfigState>()(
  devtools(
    persist(
      (set) => ({
        config: { locale: 'pt-BR', currency: 'BRL' },
        add: (newConfig: Config) => set((state) => ({ config: newConfig })),
      }),
      {
        name: 'venue-config-storage',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
)
