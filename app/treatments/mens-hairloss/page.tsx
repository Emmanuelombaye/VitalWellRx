'use client'

import SimpleTreatmentPage from '@/components/treatments/SimpleTreatmentPage'
import { mensHairloss } from '@/data/treatments/simple'

export default function MensHairLossPage() {
  return <SimpleTreatmentPage config={mensHairloss} />
}
