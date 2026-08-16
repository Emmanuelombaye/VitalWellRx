import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout from '@/components/LegalLayout'
import { contact, site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Patient Safety | VitalWellRx',
  description: 'Patient safety information for VitaWellRx® telehealth weight-care services.',
}

export default function PatientSafetyPage() {
  return (
    <LegalLayout
      title="Patient Safety"
      lede={`${site.dba} is designed to support safe, provider-guided care. Prescription treatment is available only if clinically appropriate after licensed provider review.`}
    >
      <article>
        <h2>1. Important notices</h2>
        <ul>
          <li>{site.dba} is not a pharmacy, drug manufacturer, outsourcing facility, or compounding facility.</li>
          <li>
            Prescription treatment is provided only when clinically appropriate after evaluation by a licensed
            healthcare provider.
          </li>
          <li>
            Clinical services are provided through affiliated or contracted medical practices and licensed healthcare
            providers. Provider availability varies by state, treatment category, and patient eligibility.
          </li>
          <li>Prescription medication is dispensed by an appropriately licensed pharmacy pursuant to a valid prescription.</li>
          <li>
            Where compounded medications are dispensed, they are not FDA-approved as finished branded products and have
            not been reviewed by the FDA for safety, effectiveness, or quality in the same manner as FDA-approved drugs.
          </li>
          <li>
            Product imagery is illustrative and does not imply that {site.dba} manufactures, compounds, dispenses, or
            physically fulfills medication. Actual packaging and pharmacy labeling may differ.
          </li>
          <li>In an emergency, call 911 or seek immediate emergency care.</li>
        </ul>
      </article>
      <article>
        <h2>2. Provider review and prescriptions</h2>
        <p>
          Completing an assessment, creating an account, submitting payment information, or completing checkout does not
          create a guarantee of treatment or a prescription. No prescription or prescription medication will be issued,
          dispensed, or shipped before the required provider evaluation and issuance of a valid prescription by an
          authorized prescriber.
        </p>
      </article>
      <article>
        <h2>3. Telehealth limitations</h2>
        <p>
          Telehealth and asynchronous care are not appropriate for every patient or condition. A provider may request
          additional information, require a live consultation or laboratory testing, decline treatment, discontinue
          treatment, or recommend in-person or emergency care.
        </p>
      </article>
      <article>
        <h2>4. Adverse events</h2>
        <p>
          Seek immediate medical attention for severe or concerning symptoms, including difficulty breathing, chest pain,
          severe allergic reactions, severe abdominal pain, or loss of consciousness. To report medication side effects,
          patients may also contact the FDA MedWatch program at 1-800-FDA-1088 or www.fda.gov/medwatch.
        </p>
      </article>
      <article>
        <h2>5. Contact</h2>
        <p>
          {site.legalName} d/b/a {site.dba} · {contact.address} ·{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a> · {contact.phoneDisplay}
        </p>
      </article>
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
