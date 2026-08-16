import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout from '@/components/LegalLayout'
import { contact, site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Shipping & Fulfillment | VitalWellRx',
  description:
    'How shipping and pharmacy fulfillment work for VitaWellRx® when a licensed provider prescribes treatment.',
}

export default function ShippingPage() {
  return (
    <LegalLayout
      title="Shipping & Fulfillment"
      lede={`${site.dba} is not a pharmacy. If treatment is prescribed, medication may be fulfilled and shipped by a licensed dispensing pharmacy. Timing is not guaranteed.`}
    >
      <article>
        <h2>1. When shipping happens</h2>
        <p>
          Medication ships only if a U.S.-licensed provider issues a prescription and a licensed pharmacy fulfills that
          prescription. Completing intake or authorizing payment does not guarantee a prescription or shipment.
        </p>
      </article>
      <article>
        <h2>2. Who ships</h2>
        <p>
          Fulfillment and shipping are handled by licensed pharmacy partners, not by {site.dba} as a pharmacy. Packaging
          and labeling are determined by the dispensing pharmacy and may differ from illustrative website imagery.
        </p>
      </article>
      <article>
        <h2>3. Shipping method</h2>
        <p>
          When prescribed, eligible orders are typically shipped via expedited courier in discreet packaging. Temperature
          control (such as cold-pack shipping) may be used when appropriate for the medication. Exact methods may vary by
          pharmacy, destination, and product.
        </p>
      </article>
      <article>
        <h2>4. Timing</h2>
        <p>
          Delivery timing is not guaranteed. Delays may occur due to clinical review, pharmacy preparation, carrier
          issues, weather, address problems, or other factors outside our control.
        </p>
      </article>
      <article>
        <h2>5. Address accuracy</h2>
        <p>
          Provide a complete, accurate shipping address. Failed delivery attempts caused by incorrect address information
          may result in delays or additional fees charged by the pharmacy or carrier.
        </p>
      </article>
      <article>
        <h2>6. Questions</h2>
        <p>
          Shipping questions: <a href={`mailto:${contact.email}`}>{contact.email}</a> · {contact.phoneDisplay}. Also see
          our <Link href="/refund-policy">Refund Policy</Link>.
        </p>
      </article>
      <p className="legal-page__cta">
        <Link href="/get-started" className="btn-primary">
          Check Eligibility
        </Link>
        <Link href="/refund-policy" className="btn-outline">
          Refund Policy
        </Link>
      </p>
    </LegalLayout>
  )
}
