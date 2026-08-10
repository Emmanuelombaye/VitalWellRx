import type { Metadata } from 'next'
import { AboutFlow } from '../../components/AboutFlow'

export const metadata: Metadata = {
  title: 'About Us | VitalWellRx',
  description:
    'VitalWellRx delivers modern, patient-first telehealth for Personalized Tirzepatide+ and Semaglutide+ — licensed providers, transparent pharmacies, ongoing support.',
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutFlow />
    </main>
  )
}
