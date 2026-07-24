'use client'

import SimpleTreatmentPage from '@/components/treatments/SimpleTreatmentPage'
import { odtTablets } from '@/data/treatments/simple'

export default function ODTTabletsPage() {
  return <SimpleTreatmentPage config={odtTablets} />
}
