import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout from '@/components/LegalLayout'
import { contact } from '@/data/site'

export const metadata: Metadata = {
  title: 'HIPAA Notice of Privacy Practices | VitalWellRx',
  description:
    'How medical information about you may be used and disclosed through VitaWellRx®, and how you can get access to this information.',
}

export default function HipaaPage() {
  return (
    <LegalLayout
      title="HIPAA Notice of Privacy Practices"
      lede="This Notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully."
    >
      <article>
        <h2>Uses and Disclosures</h2>
        <p>
          Your protected health information (“PHI”) may be used and disclosed for treatment (including provider review and
          pharmacy dispensing), payment, and healthcare operations, and as otherwise permitted or required by law.
        </p>
      </article>
      <article>
        <h2>Your Rights</h2>
        <p>
          You have the right to inspect and request a copy of your PHI, request amendments, request an accounting of
          disclosures, request restrictions and confidential communications, and receive a paper copy of this notice.
        </p>
      </article>
      <article>
        <h2>Our Responsibilities</h2>
        <p>
          We are required by law to maintain the privacy and security of your PHI, notify you following a breach of
          unsecured PHI, and follow the terms of the notice currently in effect.
        </p>
      </article>
      <article>
        <h2>Complaints and Contact</h2>
        <p>
          If you believe your privacy rights have been violated, you may file a complaint with us or with the US
          Department of Health and Human Services. You will not be retaliated against for filing a complaint.
        </p>
        <p>
          Contact: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </article>
      <p className="legal-page__cta">
        <Link href="/privacy" className="btn-outline">
          Privacy Policy
        </Link>
        <Link href="/get-started" className="btn-primary">
          Check Eligibility
        </Link>
      </p>
    </LegalLayout>
  )
}
