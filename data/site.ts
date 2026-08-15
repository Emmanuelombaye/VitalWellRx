import type { SiteContact } from '@/types'

export const site = {
  name: 'VitalWellRx',
  legalName: 'VitaWell RX LLC',
  dba: 'VitaWellRx®',
  tagline: 'Telehealth & Longevity Protocols',
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
  '100% Board-Certified US Doctors',
  'FDA-Regulated 503A Pharmacies',
] as const
