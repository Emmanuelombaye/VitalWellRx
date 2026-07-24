import type { ComponentType } from 'react'
import {
  Zap,
  Sparkles,
  Pill,
  Dna,
  ShieldCheck,
  Heart,
  Activity,
  Scale,
  Beaker,
  Scissors,
  ShoppingBag,
  HelpCircle,
  type LucideProps,
} from 'lucide-react'
import type { IconName } from '@/types'

const iconMap: Record<IconName, ComponentType<LucideProps>> = {
  zap: Zap,
  sparkles: Sparkles,
  pill: Pill,
  dna: Dna,
  shield: ShieldCheck,
  heart: Heart,
  activity: Activity,
  scale: Scale,
  beaker: Beaker,
  scissors: Scissors,
  'shopping-bag': ShoppingBag,
  'help-circle': HelpCircle,
}

export function getIcon(name: IconName): ComponentType<LucideProps> {
  return iconMap[name]
}
