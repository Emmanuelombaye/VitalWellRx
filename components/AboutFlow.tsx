'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ClipboardList, Stethoscope, Truck, MessageCircle } from 'lucide-react'
import { Reveal } from './Reveal'

const processNotes = [
  {
    title: 'Clear clinical intake',
    body: 'Every plan starts with a structured questionnaire — history, medications, and goals — so providers can evaluate eligibility thoughtfully.',
  },
  {
    title: 'Licensed review before Rx',
    body: 'A U.S.-licensed clinician decides whether Tirzepatide+ or Semaglutide+ is appropriate. Treatment is never automatic checkout.',
  },
]

const careJourney = [
  {
    title: 'Clinical intake',
    body: 'Share your health history and goals online. This is the foundation for every care decision that follows.',
    detail: 'Step 1 · Questionnaire',
  },
  {
    title: 'Licensed provider review',
    body: 'A clinician reviews your intake and determines whether a prescription is clinically appropriate for you.',
    detail: 'Step 2 · Medical decision',
  },
  {
    title: 'Partner pharmacy',
    body: 'If prescribed, medication is prepared by a licensed U.S. pharmacy and shipped in discreet, temperature-controlled packaging.',
    detail: 'Step 3 · Fulfillment',
  },
  {
    title: 'Ongoing care',
    body: 'Stay connected through your portal for questions, dose adjustments, and plan updates. Experiences vary.',
    detail: 'Step 4 · Continuity',
  },
]

const carePillars = [
  {
    id: 'partner',
    title: 'A partner in your health',
    body: 'Our providers are licensed clinicians with experience in metabolic and weight health. Before anyone starts Tirzepatide+ or Semaglutide+, they review your full health history, your goals, and whether treatment is clinically appropriate.',
    bullets: ['Licensed U.S. clinicians', '24-hour Clinical Review', 'Message provider anytime'],
    image: '/images/physician-1.webp',
    imageAlt: 'Licensed VitalWellRx provider',
    media: 'image' as const,
  },
  {
    id: 'pharmacy',
    title: 'Where your medication comes from matters',
    body: 'We keep it transparent, pharmaceutical-grade, and personal — whether you choose Tirzepatide+ or Semaglutide+.',
    bullets: ['Accredited US Pharmacy Network', 'Quality Sourcing', 'Personalized Treatment Plans'],
    image: '/about/vitalwell-dual-vials.webp',
    imageAlt: 'VitalWellRx Semaglutide+ and Tirzepatide+ vials',
    media: 'vials' as const,
  },
  {
    id: 'support',
    title: 'Ongoing support is always within reach',
    body: 'Your patient portal, your care team, and your treatment details — in one place, available whenever you need them.',
    bullets: ['Stay in touch with provider', 'Track your progress', 'Update or change your treatment'],
    image: '/about/vitalwell-patient-portal.webp',
    imageAlt: 'VitalWellRx patient portal',
    media: 'image' as const,
  },
]

const faqs = [
  {
    q: 'What is VitalWellRx?',
    a: 'VitalWellRx is a telehealth platform connecting patients with licensed providers and pharmacies for personalized Tirzepatide+ and Semaglutide+ weight-management treatments — science-informed care, fully online.',
  },
  {
    q: 'Who is eligible for treatment?',
    a: 'You may qualify if your BMI is 30+, or 27+ with a weight-related condition such as type 2 diabetes, high blood pressure, or high cholesterol. Eligibility is determined by a licensed provider after intake.',
  },
  {
    q: 'How does VitalWellRx work?',
    a: 'Choose Tirzepatide+ or Semaglutide+, complete a short online intake, a licensed provider reviews your history and goals, and if approved, your prescription is fulfilled by a partner pharmacy and shipped to your door.',
  },
  {
    q: 'Are these medications FDA-approved?',
    a: 'No. VitalWellRx provides compounded medications containing the same active pharmaceutical ingredients as brand-name drugs. Compounded medications are prepared by licensed U.S. pharmacies and are not FDA-approved.',
  },
  {
    q: 'How much does treatment cost?',
    a: 'Pricing is shared after intake once eligibility is confirmed. Plans are available for Personalized Tirzepatide+ and Semaglutide+, with month-to-month flexibility and no long-term commitment. Charged only if prescribed.',
  },
]

const teamRoles = [
  { name: 'Clinical Leadership', role: 'Medical oversight' },
  { name: 'Patient Care', role: 'Onboarding & support' },
  { name: 'Pharmacy Ops', role: 'Fulfillment quality' },
  { name: 'Product & Engineering', role: 'Patient experience' },
  { name: 'Growth', role: 'Brand & partnerships' },
  { name: 'Operations', role: 'Day-to-day excellence' },
]

const journeyIcons = [ClipboardList, Stethoscope, Truck, MessageCircle]

export function AboutFlow() {
  return (
    <div className="about-flow">
      <section className="about-hero">
        <div className="about-shell">
          <Reveal>
            <p className="about-hero__mark" aria-hidden>
              &ldquo;
            </p>
            <h1 className="about-hero__title">
              A <em>modern</em> healthcare that is personal, intentional, and built around the{' '}
              <span className="about-hero__people">people</span> it serves.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="about-proof">
        <div className="about-shell about-proof__grid">
          <Reveal className="about-proof__left">
            <div className="about-review-stack">
              {processNotes.map((r) => (
                <article key={r.title} className="about-review-card">
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={80} className="about-proof__right">
            <p className="about-proof__eyebrow">How we work</p>
            <p className="about-proof__stat">Provider-first</p>
            <p className="about-proof__copy">
              Care begins with clinical intake and licensed review — not checkout. We pair{' '}
              <strong>Tirzepatide+</strong> and <strong>Semaglutide+</strong> pathways with
              thoughtful, patient-first support at every step. Experiences vary; outcomes are not
              guaranteed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-stories">
        <div className="about-shell">
          <Reveal>
            <h2 className="about-stories__title">
              Every patient arrives with a different story, a different body, and a different{' '}
              <em>goal</em>. Our job is to make care meet them where they are.
            </h2>
            <p className="about-stories__sub">
              Intake → provider review → pharmacy — a clear path when treatment is appropriate.
            </p>
          </Reveal>

          <div className="about-stories__grid">
            {careJourney.map((step, i) => {
              const Icon = journeyIcons[i] ?? ClipboardList
              return (
                <Reveal key={step.title} delayMs={i * 70} className="about-story-card">
                  <div className="about-story-card__meta">
                    <span>
                      <Icon size={16} strokeWidth={2.25} aria-hidden /> {step.detail}
                    </span>
                  </div>
                  <h3 className="about-story-card__quote">{step.title}</h3>
                  <p className="about-story-card__body">{step.body}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="about-deliver">
        <div className="about-shell">
          <Reveal>
            <h2 className="about-deliver__title">How we deliver care</h2>
          </Reveal>
          <div className="about-deliver__list">
            {carePillars.map((pillar, i) => (
              <Reveal key={pillar.title} delayMs={i * 70} className={`about-deliver__row ${i % 2 ? 'is-reverse' : ''}`}>
                <div className="about-deliver__copy">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                  <ul>
                    {pillar.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className={`about-deliver__media ${pillar.media === 'vials' ? 'is-vials' : ''}`}>
                  {pillar.media === 'vials' ? (
                    <div className="about-vials-stage">
                      <div className="about-vials-stage__glow" aria-hidden />
                      <Image
                        src="/about/vitalwell-dual-vials.webp"
                        alt={pillar.imageAlt}
                        fill
                        sizes="(max-width:992px) 100vw, 45vw"
                        className="about-vials-stage__hero"
                        quality={70}
                        loading="lazy"
                      />
                      <p className="about-vials-stage__brand">VitalWellRx</p>
                    </div>
                  ) : (
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(max-width:992px) 100vw, 45vw"
                      quality={70}
                      loading="lazy"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-care-band">
        <div className="about-shell">
          <Reveal>
            <h2 className="about-care-band__title">
              A care process that&apos;s dedicated, intentional, and truly invested in your experience —{' '}
              <em>every step of the way</em>.
            </h2>
            <p className="about-care-band__sub">
              It&apos;s why people choose VitalWellRx for Tirzepatide+ and Semaglutide+ —
              clear intake, licensed review, and pharmacy fulfillment when prescribed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-team">
        <div className="about-shell">
          <Reveal>
            <h2 className="about-team__title">Behind the scenes</h2>
            <p className="about-team__sub">The people who make it all work</p>
          </Reveal>
          <div className="about-team__grid">
            {teamRoles.map((member, i) => (
              <Reveal key={member.name} delayMs={i * 40} className="about-team__card">
                <div className="about-team__avatar" aria-hidden>
                  {member.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </Reveal>
            ))}
            <Reveal delayMs={280} className="about-team__card about-team__card--cta">
              <h3>Like what we&apos;re building?</h3>
              <p>
                Come help us grow it. Reach out at{' '}
                <a href="mailto:careers@vitalwellrx.com">careers@vitalwellrx.com</a> — we&apos;d love
                to meet you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-faq">
        <div className="about-shell">
          <Reveal>
            <p className="about-faq__eyebrow">We&apos;ve got you.</p>
            <h2 className="about-faq__title">You have questions, we have answers.</h2>
          </Reveal>
          <div className="about-faq__list">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delayMs={i * 40}>
                <details className="about-faq__item">
                  <summary>
                    <span>{item.q}</span>
                    <span className="about-faq__icon" aria-hidden>
                      +
                    </span>
                  </summary>
                  <div className="about-faq__answer">
                    <p>{item.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-shell about-cta__inner">
          <Reveal>
            <h2>Personalized treatments, built around your goals</h2>
            <p>Licensed providers. Tirzepatide+ &amp; Semaglutide+. Fully online.</p>
            <div className="about-cta__actions">
              <Link href="/get-started" className="about-btn-primary">
                Start medical intake
              </Link>
              <Link href="/treatments/weight-loss" className="about-btn-secondary">
                View treatments
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
