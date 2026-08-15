import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout from '@/components/LegalLayout'
import { contact, site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | VitalWellRx',
  description:
    'How VitaWellRx® collects, uses, shares, and protects information across the VitaWellRx® Services.',
}

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lede={`This Privacy Policy describes how ${site.legalName} d/b/a ${site.dba} (“VitaWellRx®,” “we,” “our,” or “us”) collects, uses, shares, and protects information when you use our websites, online services, assessments, checkout flows, communications, and related services (collectively, the “VitaWellRx® Services”).`}
    >
      <article>
        <h2>1. Introduction</h2>
        <p>
          VitaWellRx® provides a technology platform that connects users with independent US-licensed providers and
          licensed pharmacies. VitaWellRx® is not a pharmacy. Prescription treatment, if any, is provided only after
          review by a US-licensed provider and only if clinically appropriate. Services may not be available in all
          states.
        </p>
        <p>
          If you are experiencing a medical emergency, call 911 or seek emergency medical care immediately. The
          VitaWellRx® Services are not for use in emergencies.
        </p>
      </article>
      <article>
        <h2>2. Information We Collect</h2>
        <p>
          We collect information directly from you, automatically through your use of the VitaWellRx® website and
          platform, and from third parties such as service providers, clinical partners, and payment processors. The
          categories below describe the types of information we may collect.
        </p>
      </article>
      <article>
        <h2>3. Information You Provide to Us</h2>
        <p>
          We collect information you provide when you create an account, complete an assessment, communicate with
          providers or support, place an order, or otherwise interact with the VitaWellRx® Services. This may include
          your name, date of birth, contact details, demographic information, account credentials, shipping address,
          identification information where required, and the contents of messages you send us.
        </p>
      </article>
      <article>
        <h2>4. Health-Related Information</h2>
        <p>
          We may collect health-related information you provide through assessments, forms, uploads, messages, checkout
          flows, or communications so that a US-licensed provider or affiliated service provider can review your
          information and determine whether treatment may be clinically appropriate.
        </p>
        <p>
          Health-related information may include medical history, symptoms, medications, allergies, lifestyle
          information, photographs you choose to submit, and other information relevant to clinical review.
        </p>
      </article>
      <article>
        <h2>5. Information We Collect Automatically</h2>
        <p>
          When you use the VitaWellRx® Services, we may automatically collect information about your device and usage,
          such as IP address, device identifiers, browser type, operating system, referring URLs, pages viewed, links
          clicked, and timestamps. We may use this information for security, analytics, performance, and service
          improvement.
        </p>
      </article>
      <article>
        <h2>6. Cookies and Similar Technologies</h2>
        <p>
          We may use cookies, pixels, analytics tools, and similar technologies to operate the Services, improve
          performance, personalize content, measure advertising, and understand how users interact with the Services. You
          may manage cookies through your browser settings or available cookie preference tools.
        </p>
      </article>
      <article>
        <h2>7. How We Use Your Information</h2>
        <p>
          We use information to provide and operate the VitaWellRx® Services, facilitate provider review, support pharmacy
          fulfillment where applicable, process payments, communicate with you, personalize and improve the Services,
          prevent fraud and abuse, ensure security, and comply with legal and regulatory obligations.
        </p>
      </article>
      <article>
        <h2>8. How We Share Information</h2>
        <p>We may share information with the following categories of recipients:</p>
        <ul>
          <li>US-licensed providers and clinical service partners</li>
          <li>Pharmacies and fulfillment partners, where applicable</li>
          <li>Payment processors</li>
          <li>Customer support and communication vendors</li>
          <li>Analytics and advertising vendors, subject to user choices</li>
          <li>Legal, compliance, fraud prevention, and security providers</li>
          <li>Business transfer parties if applicable</li>
        </ul>
        <p>
          We do not sell personal information as the term “sell” is commonly understood. Certain advertising, analytics,
          or tracking activities may be considered a “sale,” “sharing,” or targeted advertising under some state privacy
          laws. Where required, users may opt out of such processing.
        </p>
      </article>
      <article>
        <h2>9. Health Care Providers, Pharmacies, and Third-Party Services</h2>
        <p>
          Independent US-licensed providers who review assessments and, where appropriate, prescribe treatment may
          collect, use, and disclose information consistent with their own privacy practices and applicable law, including
          HIPAA where applicable. Pharmacies and fulfillment partners may receive information necessary to dispense and
          ship prescribed treatment.
        </p>
      </article>
      <article>
        <h2>10. Payment and Order Information</h2>
        <p>
          Payment information may be collected and processed by third-party payment processors. VitaWellRx® does not store
          complete payment card numbers unless expressly stated by the payment processor. We may receive limited
          information such as billing details, last four digits, card brand, and transaction status.
        </p>
      </article>
      <article>
        <h2>11. Online Analytics and Advertising</h2>
        <p>
          We may work with analytics and advertising partners to understand how the VitaWellRx® Services are used and to
          deliver relevant marketing. These partners may use cookies and similar technologies to collect information about
          your activity over time and across services. Depending on your jurisdiction, you may have the right to opt out
          of certain advertising and analytics processing.
        </p>
      </article>
      <article>
        <h2>12. Marketing and Communications Choices</h2>
        <p>
          You may opt out of marketing emails by following the unsubscribe instructions in the message. You may opt out of
          marketing text messages by replying STOP. We may continue to send transactional or service-related
          communications relating to your account, orders, or clinical care.
        </p>
      </article>
      <article>
        <h2>13. Your Privacy Rights</h2>
        <p>
          Depending on your state of residence, you may have the right to request access, correction, deletion,
          portability, or opt-out rights regarding certain personal information. To submit a request, contact{' '}
          <a href={`mailto:${contact.privacyEmail}`}>{contact.privacyEmail}</a>.
        </p>
        <p>
          We may need to verify your identity before responding. Certain information may be retained as required by law or
          for legitimate recordkeeping, including medical records.
        </p>
      </article>
      <article>
        <h2>14. California Privacy Rights</h2>
        <p>
          California residents may have additional rights under the California Consumer Privacy Act (CCPA), as amended,
          including the right to know the categories and specific pieces of personal information collected, the right to
          delete, the right to correct, the right to limit use of sensitive personal information, and the right to opt out
          of certain sharing or sale as defined under California law. To exercise these rights, contact{' '}
          <a href={`mailto:${contact.privacyEmail}`}>{contact.privacyEmail}</a>.
        </p>
      </article>
      <article>
        <h2>15. Nevada Privacy Rights</h2>
        <p>
          Nevada residents may have the right to direct us not to sell certain covered information as defined under Nevada
          law. To submit a request, contact{' '}
          <a href={`mailto:${contact.privacyEmail}`}>{contact.privacyEmail}</a>.
        </p>
      </article>
      <article>
        <h2>16. Children’s Privacy</h2>
        <p>
          The VitaWellRx® Services are intended for adults 18 years of age or older. We do not knowingly collect personal
          information from children under 13. If you believe a child has provided personal information, contact{' '}
          <a href={`mailto:${contact.privacyEmail}`}>{contact.privacyEmail}</a> and we will take appropriate action.
        </p>
      </article>
      <article>
        <h2>17. How We Protect Information</h2>
        <p>
          We use administrative, technical, and physical safeguards designed to protect information. No system is 100%
          secure, and we cannot guarantee absolute security of information transmitted to or from the VitaWellRx®
          Services.
        </p>
      </article>
      <article>
        <h2>18. Retention of Information</h2>
        <p>
          We retain information for as long as necessary to provide the VitaWellRx® Services, comply with legal and
          regulatory obligations (including medical recordkeeping requirements), resolve disputes, and enforce our
          agreements.
        </p>
      </article>
      <article>
        <h2>19. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date above.
          Material changes may be communicated through additional notice where required.
        </p>
      </article>
      <article>
        <h2>20. Contact Us</h2>
        <p>
          For privacy questions or to exercise your rights, contact:{' '}
          <a href={`mailto:${contact.privacyEmail}`}>{contact.privacyEmail}</a>.
        </p>
        <p>
          {site.legalName} d/b/a {site.dba}
        </p>
      </article>
      <article>
        <h2>21. Cookie Notice</h2>
        <p>
          Our use of cookies and similar technologies is described in Section 6 above. You may manage your preferences
          through your browser settings or any cookie preference tools made available within the VitaWellRx® platform.
        </p>
      </article>
      <p className="legal-page__cta">
        <Link href="/get-started" className="btn-primary">
          Check Eligibility
        </Link>
        <Link href="/terms" className="btn-outline">
          Terms of Use
        </Link>
      </p>
    </LegalLayout>
  )
}
