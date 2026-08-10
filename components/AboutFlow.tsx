'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from './Reveal'

const reviews = [
  {
    title: 'Highly recommend VitalWellRx',
    body: 'They have been great with everything. Super fast shipping. Always comes on time. Great support staff, quick to respond.',
  },
  {
    title: 'Amazing from day one',
    body: 'VitalWellRx has been amazing since I started. Helpful, communicative, and never missing a beat with my Tirzepatide+ treatment.',
  },
]

const stories = [
  {
    name: 'Crystal G.',
    started: 'Jul 2025',
    lost: '50 lbs',
    plan: 'Tirzepatide+',
    vial: '/vial-tirzepatide.png',
    before: '/treatments/crystal.webp',
    quote: 'AFTER 40, MY BODY CHANGED — AND I WAS SO TIRED OF FEELING UNCOMFORTABLE.',
    highlight: 'SO TIRED',
    body: 'I started VitalWellRx after years of trying everything else. Food noise quieted, energy came back, and the scale finally moved in a way that felt sustainable.',
    type: 'ba' as const,
  },
  {
    name: 'Blaze B.',
    started: 'Mar 2025',
    lost: '50 lbs',
    plan: 'Semaglutide+',
    vial: '/vial-semaglutide.png',
    before: '/treatments/blaze.webp',
    quote: 'I FINALLY FEEL LIKE MYSELF AGAIN — STRONGER, LIGHTER, AND IN CONTROL.',
    highlight: 'IN CONTROL',
    body: 'Provider check-ins kept me accountable. Shipping was seamless. Semaglutide+ helped me rebuild habits without constantly fighting hunger.',
    type: 'ba' as const,
  },
  {
    name: 'Lisa C.',
    started: 'Jan 2025',
    lost: '75 lbs',
    plan: 'Tirzepatide+',
    quote: 'VITALWELLRX HELPED ME LOSE 75 LBS — THIS HAS BEEN LIFE CHANGING FOR ME.',
    highlight: 'LIFE CHANGING',
    body: 'From intake to delivery, everything felt clear and clinical. I’m down 75 pounds and still supported every step of the way.',
    type: 'quote' as const,
  },
  {
    name: 'Alex M.',
    started: 'May 2025',
    lost: '42 lbs',
    plan: 'Semaglutide+',
    quote: 'SUPPORT WAS ON POINT — AND THE RESULTS SPEAK FOR THEMSELVES.',
    highlight: 'ON POINT',
    body: 'I messaged my provider whenever I needed guidance. The plan was personal, the medication arrived on time, and my progress has been steady.',
    type: 'quote' as const,
  },
]

const carePillars = [
  {
    id: 'partner',
    title: 'A partner in your health',
    body: 'Our providers are licensed clinicians with real experience in metabolic and weight health. Before anyone starts Tirzepatide+ or Semaglutide+, they review your full health history, your goals, and whether treatment is clinically appropriate.',
    bullets: ['Board-Certified', '24-hour Clinical Review', 'Message provider anytime'],
    image: '/images/physician-1.png',
    imageAlt: 'Licensed VitalWellRx provider',
    media: 'image' as const,
  },
  {
    id: 'pharmacy',
    title: 'Where your medication comes from matters',
    body: 'We keep it transparent, pharmaceutical-grade, and personal — whether you choose Tirzepatide+ or Semaglutide+.',
    bullets: ['Accredited US Pharmacy Network', 'Quality Sourcing', 'Personalized Treatment Plans'],
    image: '/about/vitalwell-dual-vials.png',
    imageAlt: 'VitalWellRx Semaglutide+ and Tirzepatide+ vials',
    media: 'vials' as const,
  },
  {
    id: 'support',
    title: 'Ongoing support is always within reach',
    body: 'Your patient portal, your care team, and your treatment details — in one place, available whenever you need them.',
    bullets: ['Stay in touch with provider', 'Track your progress', 'Update or change your treatment'],
    image: '/about/vitalwell-patient-portal.png',
    imageAlt: 'VitalWellRx patient portal',
    media: 'image' as const,
  },
]

const faqs = [
  {
    q: 'What is VitalWellRx?',
    a: 'VitalWellRx is a telehealth platform connecting patients with licensed providers and pharmacies for personalized Tirzepatide+ and Semaglutide+ weight-loss treatments — science-backed care, fully online.',
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
    a: 'Pricing is shared after intake once eligibility is confirmed. Plans are available for Personalized Tirzepatide+ and Semaglutide+, with month-to-month flexibility and no long-term commitment.',
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

function markHighlight(quote: string, highlight: string) {
  const idx = quote.indexOf(highlight)
  if (idx < 0) return quote
  return (
    <>
      {quote.slice(0, idx)}
      <span className="about-story-card__mark">{highlight}</span>
      {quote.slice(idx + highlight.length)}
    </>
  )
}

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
            <div className="about-avatars">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="about-avatars__item">
                  <Image
                    src={`/about/about-hero-avatar-${n}-2x.png`}
                    alt=""
                    width={56}
                    height={56}
                  />
                </div>
              ))}
            </div>
            <div className="about-review-stack">
              {reviews.map((r) => (
                <article key={r.title} className="about-review-card">
                  <div className="about-stars" aria-label="5 stars">
                    {'★★★★★'}
                  </div>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={80} className="about-proof__right">
            <p className="about-proof__eyebrow">Since our inception,</p>
            <p className="about-proof__stat">20,000+</p>
            <p className="about-proof__copy">
              patients have trusted us with their weight loss treatments. Our approach is simple —
              deliver <strong>Tirzepatide+</strong> and <strong>Semaglutide+</strong> that work, and
              pair them with thoughtful, patient-first care at every step.
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
              We provide the tools. The transformation is all theirs.
            </p>
          </Reveal>

          <div className="about-stories__grid">
            {stories.map((s, i) => (
              <Reveal key={s.name} delayMs={i * 70} className="about-story-card">
                {s.type === 'ba' && s.before && s.vial ? (
                  <div className="about-story-card__photos">
                    <div className="about-story-card__ba">
                      <Image src={s.before} alt={`${s.name} before and after`} fill sizes="280px" />
                      <span className="is-before">Before</span>
                      <span className="is-after">After</span>
                    </div>
                    <div className="about-story-card__vial">
                      <Image src={s.vial} alt={s.plan} width={72} height={96} />
                    </div>
                  </div>
                ) : null}

                <div className="about-story-card__meta">
                  <span>
                    Started with <em>VitalWellRx</em> <strong>{s.started}</strong>
                  </span>
                  <span>
                    Lost <strong>{s.lost}</strong>
                  </span>
                  <span>
                    Treatment plan <strong>{s.plan}</strong>
                  </span>
                </div>

                <h3 className="about-story-card__quote">{markHighlight(s.quote, s.highlight)}</h3>
                <p className="about-story-card__body">{s.body}</p>
                <p className="about-story-card__sign">— {s.name}</p>
              </Reveal>
            ))}
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
                        src="/about/vitalwell-dual-vials.png"
                        alt={pillar.imageAlt}
                        fill
                        sizes="(max-width:992px) 100vw, 45vw"
                        className="about-vials-stage__hero"
                        priority
                      />
                      <p className="about-vials-stage__brand">VitalWellRx</p>
                    </div>
                  ) : (
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(max-width:992px) 100vw, 45vw"
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
              A care team that&apos;s dedicated, intentional, and truly invested in your experience —{' '}
              <em>every step of the way</em>.
            </h2>
            <p className="about-care-band__sub">
              It&apos;s the reason patients choose VitalWellRx for Tirzepatide+ and Semaglutide+ —
              and the reason they stay, and bring the people they love with them.
            </p>
            <div className="about-ratings">
              <div className="about-rating-pill">
                <strong>TrustScore 4.7</strong>
                <span>1,210 reviews</span>
              </div>
              <div className="about-rating-pill">
                <strong>Google 4.8</strong>
                <span>100+ reviews</span>
              </div>
            </div>
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
                Get Started Today
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
