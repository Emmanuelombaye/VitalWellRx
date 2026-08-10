import type { Metadata } from 'next'
import { HowItWorksFlow } from '../../components/HowItWorksFlow'

export const metadata: Metadata = {
  title: 'How It Works | VitalWellRx',
  description:
    'See how VitalWellRx Tirzepatide+ and Semaglutide+ work — choose a plan, verify identity, provider review, medication delivery, and ongoing care.',
}

export default function HowItWorksPage() {
  return (
    <main className="hiw-page">
      <section className="hiw-page-hero">
        <div className="hiw-shell">
          <h1 className="hiw-page-hero__title">
            Tirzepatide+ & Semaglutide+ with a{' '}
            <span className="hiw-page-hero__accent">seamless, patient-first experience</span>
          </h1>
          <p className="hiw-page-hero__sub">
            See how our two personalized weight-loss treatments work below.
          </p>
        </div>
      </section>

      <section className="hiw-page-body">
        <div className="hiw-shell">
          <HowItWorksFlow />
        </div>
      </section>
    </main>
  )
}
