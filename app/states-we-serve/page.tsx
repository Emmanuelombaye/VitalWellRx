import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout from '@/components/LegalLayout'
import { contact, site } from '@/data/site'

export const metadata: Metadata = {
  title: 'States We Serve | VitalWellRx',
  description:
    'Where VitaWellRx® telehealth services may be available, subject to provider licensure and pharmacy fulfillment.',
}

export default function StatesWeServePage() {
  return (
    <LegalLayout
      title="States We Serve"
      lede={`${site.dba} connects eligible patients with independent U.S.-licensed providers and licensed pharmacy partners. Service availability varies and is not guaranteed in every jurisdiction.`}
    >
      <article>
        <h2>1. Availability depends on licensure and fulfillment</h2>
        <p>
          {site.dba} services may be available only in jurisdictions where affiliated or contracted licensed providers
          are authorized to provide care and where applicable pharmacy fulfillment is legally permitted. Availability
          may vary by treatment category, provider licensure, pharmacy availability, patient eligibility, and applicable
          law.
        </p>
      </article>
      <article>
        <h2>2. Not every product or service is available everywhere</h2>
        <p>
          Even where some Services are offered, a specific medication, dosing option, shipping method, or subscription
          plan may not be available in every state. Completing an intake or creating an account does not guarantee that
          treatment will be offered or prescribed in your state.
        </p>
      </article>
      <article>
        <h2>3. How to confirm eligibility</h2>
        <p>
          The most accurate way to confirm whether care may be available to you is to complete the online medical intake.
          A U.S.-licensed provider reviews submitted information and determines whether treatment is clinically
          appropriate and operationally available.
        </p>
      </article>
      <article>
        <h2>4. Questions about your state</h2>
        <p>
          If you have questions about availability in your state, contact us at{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a> or {contact.phoneDisplay}.
        </p>
      </article>
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
