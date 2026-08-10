import type { Metadata } from 'next'
import TreatmentsFlow from '../../components/TreatmentsFlow'

export const metadata: Metadata = {
  title: 'Treatments | VitalWellRx',
  description:
    'Explore personalized Semaglutide+ and Tirzepatide+ weight-loss treatments — provider-guided, pharmacy-fulfilled, delivered to your door.',
}

export default function TreatmentsPage() {
  return (
    <main>
      <TreatmentsFlow />
    </main>
  )
}
