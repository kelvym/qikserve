import { MenuSchema } from '@/schemas/menu.schema'
import { VenueSchema } from '@/schemas/venue.schema'

export const getVenue = async () => {
  const res = await fetch(`/api/venue/9`)
  const data = await res.json()

  return VenueSchema.parse(data)
}

export const getMenu = async () => {
  const res = await fetch(`/api/menu`)
  const data = await res.json()

  return MenuSchema.parse(data)
}
