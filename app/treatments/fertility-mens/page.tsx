'use client'

import SimpleTreatmentPage from '@/components/treatments/SimpleTreatmentPage'
import { fertilityMens } from '@/data/treatments/simple'

export default function FertilityMensPage() {
  return <SimpleTreatmentPage config={fertilityMens} />
}
