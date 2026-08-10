'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const treatments = [
  {
    id: 'tirzepatide',
    badge: 'Best Seller',
    name: 'Personalized Tirzepatide+',
    mechanism: 'Dual GIP / GLP-1',
    stat: '22%',
    statLabel: 'avg. weight reduction in clinical studies',
    desc: 'A weekly dual-agonist injection that targets both GIP and GLP-1 pathways to regulate appetite, reduce food noise, and support stronger weight-loss outcomes.',
    bullets: ['Weekly injection', 'Provider review in 24h', 'Free expedited shipping'],
    price: '$340',
    image: '/vial-tirzepatide.webp',
    href: '/treatments/weight-loss',
    tone: '#D4AF37',
  },
  {
    id: 'semaglutide',
    badge: 'Proven GLP-1',
    name: 'Personalized Semaglutide+',
    mechanism: 'GLP-1 receptor agonist',
    stat: '15%',
    statLabel: 'avg. weight reduction in clinical studies',
    desc: 'A weekly GLP-1 injection designed for steady, sustainable weight loss by helping regulate blood sugar, improve satiety, and quiet hunger signals.',
    bullets: ['Weekly injection', 'Provider review in 24h', 'Free expedited shipping'],
    price: '$310',
    image: '/vial-semaglutide.webp',
    href: '/treatments/odt-tablets',
    tone: '#0F766E',
  },
]

const steps = [
  {
    n: '01',
    title: 'Complete your intake',
    body: 'Answer a short medical questionnaire so our providers can determine if Tirzepatide+ or Semaglutide+ is right for you.',
  },
  {
    n: '02',
    title: 'Provider review',
    body: 'A licensed U.S. provider reviews your intake within 24 hours to determine if treatment is appropriate — no office visit needed.',
  },
  {
    n: '03',
    title: 'Start treatment',
    body: 'If approved, your prescription is filled by a licensed U.S. pharmacy and delivered to your door with expedited shipping.',
  },
]

const reviews = [
  {
    title: 'I switched to VitalWellRx and they have helped me so much.',
    body: 'I’m down significant weight and was able to get my life back. Support has been incredible every step of the way.',
    name: 'Alex M.',
    tag: 'Tirzepatide+',
  },
  {
    title: 'I’ve lost over 40 pounds and am continuing with strong results.',
    body: 'I’ve already referred several people because of how positive my Semaglutide+ experience has been.',
    name: 'Jordan R.',
    tag: 'Semaglutide+',
  },
  {
    title: 'The process was easy, clear, and fast.',
    body: 'I got my medication quickly, food noise is way down, and it’s been easy to make good choices. Great on Tirzepatide+.',
    name: 'Sam K.',
    tag: 'Tirzepatide+',
  },
  {
    title: 'Customer service is responsive and kind.',
    body: 'Shipments arrive on time with tracking. I’ve been using Semaglutide+ for months and the support never drops.',
    name: 'Taylor H.',
    tag: 'Semaglutide+',
  },
]

const faqs = [
  {
    q: 'What treatments does VitalWellRx offer?',
    a: 'We focus on two personalized weight-loss protocols: Tirzepatide+ (dual GIP/GLP-1) and Semaglutide+ (GLP-1) — prescribed by licensed U.S. providers and fulfilled by partner pharmacies.',
  },
  {
    q: 'Who is eligible for treatment?',
    a: 'You may qualify if your BMI is 30+, or 27+ with a weight-related condition such as type 2 diabetes, high blood pressure, or high cholesterol. A licensed provider confirms eligibility after intake.',
  },
  {
    q: 'How does VitalWellRx work?',
    a: 'Choose Tirzepatide+ or Semaglutide+, complete a short intake, verify identity, get a provider review within 24 hours, and if approved, receive your medication via expedited shipping.',
  },
  {
    q: 'Are these medications FDA-approved?',
    a: 'No. We provide compounded medications containing the same active pharmaceutical ingredients as brand-name drugs. They are prepared by licensed U.S. pharmacies and are not FDA-approved.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Plans are month-to-month with no long-term commitment. Pause or cancel anytime from your member portal.',
  },
]

export default function WhatWeTreat() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="home-lower">
      {/* ── Two treatments ── */}
      <section className="home-lower__treatments">
        <div className="home-lower__shell">
          <div className="home-lower__head">
            <p className="home-lower__eyebrow">What we treat</p>
            <h2>
              Two personalized treatments.
              <br />
              <em>Built around your goals.</em>
            </h2>
            <p className="home-lower__sub">
              Clinically guided Tirzepatide+ and Semaglutide+ — provider reviewed, pharmacy fulfilled, delivered to your door.
            </p>
          </div>

          <div className="home-lower__cards">
            {treatments.map((t, i) => (
              <motion.article
                key={t.id}
                className="home-tx-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
              >
                <div className="home-tx-card__media" style={{ background: `radial-gradient(circle at 30% 20%, ${t.tone}33, transparent 55%), #0B132B` }}>
                  <span className="home-tx-card__badge">{t.badge}</span>
                  <div className="home-tx-card__img">
                    <Image src={t.image} alt={t.name} fill sizes="(max-width:900px) 100vw, 480px" quality={70} loading="lazy" style={{ objectFit: 'contain' }} />
                  </div>
                </div>

                <div className="home-tx-card__body">
                  <p className="home-tx-card__mech">{t.mechanism}</p>
                  <h3>{t.name}</h3>
                  <p className="home-tx-card__desc">{t.desc}</p>

                  <div className="home-tx-card__stat">
                    <strong style={{ color: t.tone }}>{t.stat}</strong>
                    <span>{t.statLabel}</span>
                  </div>

                  <ul>
                    {t.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <div className="home-tx-card__footer">
                    <div className="home-tx-card__price">
                      <span>From</span>
                      <strong>{t.price}</strong>
                      <span>/mo</span>
                    </div>
                    <Link href={t.href} className="home-lower__btn-primary">
                      Check eligibility <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="home-lower__hiw">
        <div className="home-lower__shell">
          <div className="home-lower__head">
            <p className="home-lower__eyebrow">How it works</p>
            <h2>
              From onboarding through treatment, we&apos;ll guide you{' '}
              <em>every step</em>.
            </h2>
          </div>

          <div className="home-lower__steps" role="list">
            {steps.map((s, i) => (
              <motion.article
                key={s.n}
                className="home-step-card"
                role="listitem"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <span className="home-step-card__n">Step {s.n.replace(/^0/, '')}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </motion.article>
            ))}
          </div>

          <div className="home-lower__center-cta">
            <Link href="/how-it-works" className="home-lower__btn-secondary">
              See the full process <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Social proof ── */}
      <section className="home-lower__love">
        <div className="home-lower__shell">
          <div className="home-lower__head">
            <p className="home-lower__eyebrow">20,000+ patients</p>
            <h2>
              What people love about <em>VitalWellRx</em>
            </h2>
          </div>

          <div className="home-lower__reviews" role="list">
            {reviews.map((r, i) => (
              <motion.article
                key={r.name}
                className="home-review-card"
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
              >
                <div className="home-review-card__stars">★★★★★</div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
                <div className="home-review-card__meta">
                  <strong>{r.name}</strong>
                  <span>{r.tag}</span>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="home-lower__disclaimer">Individual patient experiences and results may vary.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="home-lower__faq">
        <div className="home-lower__shell home-lower__faq-inner">
          <div className="home-lower__head">
            <p className="home-lower__eyebrow">We&apos;ve got you.</p>
            <h2>You have questions, we have answers.</h2>
          </div>

          <div className="home-lower__faq-list">
            {faqs.map((item, i) => {
              const open = openFaq === i
              return (
                <div key={item.q} className={`home-faq-item ${open ? 'is-open' : ''}`}>
                  <button type="button" onClick={() => setOpenFaq(open ? -1 : i)}>
                    <span>{item.q}</span>
                    <span className="home-faq-item__icon" aria-hidden>
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="home-faq-item__panel"
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-lower__cta">
        <div className="home-lower__shell">
          <div className="home-lower__cta-box">
            <h2>Personalized treatments, built around your goals</h2>
            <p>Licensed providers. Tirzepatide+ &amp; Semaglutide+. Fully online.</p>
            <div className="home-lower__cta-actions">
              <Link href="/get-started" className="home-lower__btn-primary">
                Get Started Today
              </Link>
              <Link href="/treatments/weight-loss" className="home-lower__btn-secondary">
                Compare treatments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
