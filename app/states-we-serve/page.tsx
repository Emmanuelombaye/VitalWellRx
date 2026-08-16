import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'States We Serve | VitalWellRx',
  description: 'States where VitaWellRx® services may be available.',
}

export default function StatesWeServePage() {
  return (
    <LegalLayout title="States We Serve" lede="Official content will be added from provided docs.">
      <p className="legal-page__cta">
        <Link href="/get-started" className="btn-primary">
          Check Eligibility
        </Link>
        <Link href="/patient-safety" className="btn-outline">
          Patient Safety
        </Link>
      </p>
    </LegalLayout>
  )
}
