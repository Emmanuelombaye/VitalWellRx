'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ClipboardList, Stethoscope, Truck, MessageCircle } from 'lucide-react'

const treatments = [
  {
    id: 'tirzepatide',
    n: '01',
    badge: 'Provider-guided',
    name: 'Personalized',
    nameItalic: 'Tirzepatide+',
    mechanism: 'Dual GIP / GLP-1',
    desc: 'A weekly dual-agonist injection that targets both GIP and GLP-1 pathways and may support appetite regulation when prescribed as part of a personalized plan.',
    bullets: ['Weekly injection', 'Provider review in 24h', 'Shipping if prescribed'],
    price: '$340',
    image: '/vial-tirzepatide.webp',
    href: '/treatments/weight-loss',
    tone: '#D4AF37',
    calloutLabel: 'charged only if prescribed',
  },
  {
    id: 'semaglutide',
    n: '02',
    badge: 'Provider-guided',
    name: 'Personalized',
    nameItalic: 'Semaglutide+',
    mechanism: 'GLP-1 pathway',
    desc: 'A weekly GLP-1 injection that may support satiety and appetite regulation when prescribed by a licensed U.S. provider.',
    bullets: ['Weekly injection', 'Provider review in 24h', 'Shipping if prescribed'],
    price: '$310',
    image: '/vial-semaglutide.webp',
    href: '/treatments',
    tone: '#0F766E',
    calloutLabel: 'charged only if prescribed',
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

const carePillars = [
  {
    title: 'Clinical intake',
    body: 'Share your history, goals, and eligibility details in a short online questionnaire — the foundation for every care decision.',
    Icon: ClipboardList,
  },
  {
    title: 'Licensed provider review',
    body: 'A U.S.-licensed clinician reviews your intake and determines whether a prescription is appropriate for you.',
    Icon: Stethoscope,
  },
  {
    title: 'Partner pharmacy',
    body: 'If prescribed, medication is prepared by a licensed U.S. pharmacy and shipped in temperature-controlled packaging.',
    Icon: Truck,
  },
  {
    title: 'Ongoing care',
    body: 'Stay connected through your patient portal for dose questions, plan updates, and follow-up support as experiences vary.',
    Icon: MessageCircle,
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
  const stackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = stackRef.current
    if (!root) return undefined

    const desktopMq = window.matchMedia('(min-width: 992px)')
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const cards = () => Array.from(root.querySelectorAll<HTMLElement>('.vw-tx-step-card'))

    const clear = () => {
      cards().forEach((card) => {
        card.style.opacity = ''
        card.style.transform = ''
        card.style.visibility = ''
        card.style.pointerEvents = ''
      })
    }

    let raf = 0
    const onScroll = () => {
      if (!desktopMq.matches || motionMq.matches) {
        clear()
        return
      }
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const steps = Array.from(root.querySelectorAll<HTMLElement>('.vw-tx-step'))
        steps.forEach((step, i) => {
          const card = step.querySelector<HTMLElement>('.vw-tx-step-card')
          const next = steps[i + 1]
          if (!card || !next) {
            if (card) {
              card.style.opacity = '1'
              card.style.transform = 'scale(1)'
              card.style.visibility = 'visible'
              card.style.pointerEvents = ''
            }
            return
          }
          const nextTop = next.getBoundingClientRect().top
          const stickyTop = window.innerHeight * 0.23
          const start = stickyTop + card.offsetHeight + 80
          const end = stickyTop + card.offsetHeight * 0.5
          const range = Math.max(1, start - end)
          const t = Math.min(1, Math.max(0, (start - nextTop) / range))
          const opacity = 1 - t
          card.style.opacity = String(opacity)
          card.style.transform = `scale(${1 - t * 0.12})`
          card.style.visibility = opacity < 0.02 ? 'hidden' : 'visible'
          card.style.pointerEvents = opacity < 0.02 ? 'none' : ''
        })
      })
    }

    const refresh = () => {
      clear()
      onScroll()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', refresh)
    desktopMq.addEventListener('change', refresh)
    motionMq.addEventListener('change', refresh)
    refresh()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', refresh)
      desktopMq.removeEventListener('change', refresh)
      motionMq.removeEventListener('change', refresh)
      clear()
    }
  }, [])

  return (
    <div className="home-lower">
      {/* ── Two treatments — Pax how-it-works sticky stack ── */}
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
              Provider-guided Tirzepatide+ and Semaglutide+ — reviewed by licensed clinicians, fulfilled by partner pharmacies, delivered to your door.
            </p>
          </div>

          <div ref={stackRef} className="vw-tx-stack-root">
            <div className="vw-tx-steps-stack">
              {treatments.map((t, i) => {
                const isLast = i === treatments.length - 1
                return (
                  <div
                    key={t.id}
                    className={`vw-tx-step ${isLast ? 'vw-tx-step--last' : 'vw-tx-step--sticky'}`}
                    style={{ zIndex: i + 1 }}
                  >
                    <article className="vw-tx-step-card">
                      <div
                        className="vw-tx-step-media"
                        style={{
                          background: `radial-gradient(circle at 30% 20%, ${t.tone}40, transparent 55%), #0B132B`,
                        }}
                      >
                        <span className="vw-tx-step-badge">{t.badge}</span>
                        <div className="vw-tx-step-media__frame">
                          <Image
                            src={t.image}
                            alt={`${t.name} ${t.nameItalic}`}
                            fill
                            sizes="(max-width:992px) 92vw, 520px"
                            quality={72}
                            priority={i === 0}
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                        <div className="vw-tx-step-chips">
                          {t.bullets.map((chip) => (
                            <span key={chip} className="vw-tx-step-chip">
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="vw-tx-step-copy">
                        <p className="vw-tx-step-label">
                          Treatment {t.n} · {t.mechanism}
                        </p>
                        <h3 className="vw-tx-step-title">
                          {t.name} <em>{t.nameItalic}</em>
                        </h3>
                        <p className="vw-tx-step-body">{t.desc}</p>

                        <div className="vw-tx-step-callout">
                          <p className="vw-tx-step-callout__value">
                            FROM {t.price}
                            <span>/mo</span>
                          </p>
                          <p className="vw-tx-step-callout__label">{t.calloutLabel}</p>
                        </div>

                        <div className="vw-tx-step-actions">
                          <Link href="/get-started" className="home-lower__btn-primary">
                            See if I qualify <ArrowRight size={16} />
                          </Link>
                          <Link href={t.href} className="vw-tx-step-link">
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                )
              })}
            </div>
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

      {/* ── Care process pillars ── */}
      <section className="home-lower__love">
        <div className="home-lower__shell">
          <div className="home-lower__head">
            <p className="home-lower__eyebrow">How care works</p>
            <h2>
              Intake to pharmacy — <em>built for clarity</em>
            </h2>
          </div>

          <div className="home-lower__reviews" role="list">
            {carePillars.map(({ title, body, Icon }, i) => (
              <motion.article
                key={title}
                className="home-review-card"
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
              >
                <div className="home-review-card__stars" aria-hidden>
                  <Icon size={18} strokeWidth={2.25} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </motion.article>
            ))}
          </div>
          <p className="home-lower__disclaimer">Individual experiences vary. Treatment is prescribed only when clinically appropriate.</p>
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
                Start medical intake
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
