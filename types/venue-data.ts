import { VenueSchema } from '@/schemas/venue.schema'
import { z } from 'zod'

export type VenueData = z.infer<typeof VenueSchema>

export interface VenueDataWebSettings {
  id: number
  venueId: number
  bannerImage: string
  backgroundColour: string
  primaryColour: string
  primaryColourHover: string
  navBackgroundColour: string
}
