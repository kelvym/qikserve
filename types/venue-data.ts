export interface VenueData {
  id: number
  name: string
  internalName: string
  description?: any
  liveFlag: number
  demoFlag: number
  address1: string
  address2: string
  address3?: any
  city: string
  county: string
  postcode: string
  country: string
  timezoneOffset: string
  locale: string
  timeZone: string
  webSettings: VenueDataWebSettings
  ccy: string
  ccySymbol: string
  currency: string
}

export interface VenueDataWebSettings {
  id: number
  venueId: number
  bannerImage: string
  backgroundColour: string
  primaryColour: string
  primaryColourHover: string
  navBackgroundColour: string
}
