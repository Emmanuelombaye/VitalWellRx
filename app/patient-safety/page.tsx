import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Patient Safety | VitalWellRx',
  description: 'Patient safety information for VitaWellRx®.',
}

export default function PatientSafetyPage() {
  return (
    <LegalLayout title="Patient Safety" lede="Official content will be added from provided docs.">
      <p className="legal-page__cta">
        <Link href="/get-started" className="btn-primary">
          Check Eligibility
        </Link>
        <Link href="/medical-disclaimer" className="btn-outline">
          Medical Disclaimer
        </Link>
      </p>
    </LegalLayout>
  )
}
