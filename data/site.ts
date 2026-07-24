import type { SiteContact } from '@/types'

export const site = {
  name: 'VitalWellRx',
  legalName: 'VitalWellRx Medical PC',
  tagline: 'Telehealth & Longevity Protocols',
} as const

export const contact: SiteContact = {
  email: 'care@vitalwellrx.com',
  phone: '1-800-VITAL-RX',
  phoneDisplay: '1-800-VITAL-RX',
  address: 'Miami, FL',
  city: 'Miami, FL',
}

export const trustBadges = [
  '100% Board-Certified US Doctors',
  'FDA-Regulated 503A Pharmacies',
] as const
