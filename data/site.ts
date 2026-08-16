import type { SiteContact } from '@/types'

export const site = {
  name: 'VitalWellRx',
  legalName: 'VitaWell RX LLC',
  dba: 'VitaWellRx®',
  tagline: 'Provider-guided weight-care telehealth',
} as const

export const contact: SiteContact = {
  email: 'support@vitawellrx.com',
  privacyEmail: 'privacy@vitawellrx.com',
  phone: '7866512127',
  phoneDisplay: '(786) 651-2127',
  address: '10225 SW 59th Street, Cooper City, FL 33328',
  city: 'Cooper City, FL',
}

export const trustBadges = [
  'U.S.-licensed provider review',
  'Licensed pharmacy fulfillment when prescribed',
] as const
