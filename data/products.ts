import type { Product } from '@/types'

/** Catalog limited to currently marketed GLP-1 weight-care offerings. */
export const products: Product[] = [
  {
    id: 'tirzepatide-injectable',
    category: 'weight',
    badge: 'Dual GIP / GLP-1',
    name: 'Tirzepatide Injectable Protocol',
    dosage: 'Compounded vial supply when prescribed',
    price: '$340',
    period: '/month',
    desc: 'Once-weekly subcutaneous dual GIP/GLP-1 receptor agonist that may support appetite regulation when prescribed. Individual responses vary.',
    image: '/gen_weight1.webp',
    href: '/treatments/weight-loss',
    tags: ['Weight Care', 'Appetite Support', 'Licensed Pharmacy'],
  },
  {
    id: 'semaglutide-injectable',
    category: 'weight',
    badge: 'GLP-1',
    name: 'Semaglutide Injectable Protocol',
    dosage: 'Compounded vial supply when prescribed',
    price: '$310',
    period: '/month',
    desc: 'Once-weekly subcutaneous GLP-1 receptor agonist that may support appetite regulation when prescribed. Individual responses vary. Treatment is not guaranteed.',
    image: '/gen_weight2.webp',
    href: '/treatments',
    tags: ['Weight Care', 'Appetite Support', 'Licensed Pharmacy'],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export const shopCategories = [
  { id: 'all' as const, label: 'All protocols' },
  { id: 'weight' as const, label: 'Weight & GLP-1' },
]
