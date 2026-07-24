'use client'

import SimpleTreatmentPage from '@/components/treatments/SimpleTreatmentPage'
import { ghkCu } from '@/data/treatments/simple'

export default function GHKCuPage() {
  return <SimpleTreatmentPage config={ghkCu} />
}
