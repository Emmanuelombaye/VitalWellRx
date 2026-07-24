export type ProductCategory = 'weight' | 'mens' | 'womens' | 'peptides'

export type FaqCategory = 'intake' | 'pharmacy' | 'pricing' | 'shipping'

export type IconName =
  | 'zap'
  | 'sparkles'
  | 'pill'
  | 'dna'
  | 'shield'
  | 'heart'
  | 'activity'
  | 'scale'
  | 'beaker'
  | 'scissors'
  | 'shopping-bag'
  | 'help-circle'

export interface FaqItem {
  q: string
  a: string
}

export interface GlobalFaqItem {
  id: string
  category: FaqCategory
  question: string
  answer: string
}

export interface Product {
  id: string
  category: ProductCategory
  badge: string
  name: string
  dosage: string
  price: string
  period: string
  desc: string
  image: string
  href: string
  tags: string[]
}

export interface StatItem {
  val: string
  label: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SiteContact {
  email: string
  phone: string
  phoneDisplay: string
  address: string
  city: string
}
