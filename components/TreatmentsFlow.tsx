'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { Reveal } from './Reveal'

const products = [
  {
    id: 'semaglutide',
    name: 'GLP-1 (Semaglutide+)',
    label: 'Semaglutide+',
    short: 'Once-weekly GLP-1 option',
    title: 'Semaglutide+',
    mechanism: 'GLP-1 receptor agonist',
    desc: 'A compounded weekly GLP-1 medication that may be prescribed after clinical review to support appetite regulation as part of a supervised weight-management plan. Individual response varies.',
    thumb: '/treatments/sema-thumb.webp',
    vial: '/shop/vial-semaglutide-duo.webp',
    price: 310,
    href: '/treatments',
    tone: '#2DD4BF',
    toneSoft: 'rgba(45,212,191,0.22)',
  },
  {
    id: 'tirzepatide',
    name: 'GLP-1 + GIP (Tirzepatide+)',
    label: 'Tirzepatide+',
    short: 'Once-weekly dual agonist option',
    title: 'Tirzepatide+',
    mechanism: 'Dual GIP / GLP-1 receptor agonist',
    desc: 'A compounded weekly dual agonist that acts on GIP and GLP-1 pathways and may be prescribed after clinical review when a provider determines it is appropriate. Individual response varies.',
    thumb: '/treatments/tirz-thumb.webp',
    vial: '/shop/vial-tirzepatide-duo.webp',
    price: 340,
    href: '/treatments/weight-loss',
    tone: '#D4AF37',
    toneSoft: 'rgba(212,175,55,0.28)',
  },
] as const

const includes = [
  'Licensed U.S. clinician review',
  'Fulfillment only if prescribed',
  'Follow-up messaging access',
  'Secure patient portal',
]

const journey = [
  {
    step: '01',
    title: 'Submit a clinical intake',
    body: 'Share medical history, medications, and goals in a structured questionnaire used for eligibility screening.',
    image: '/images/how-step2.webp',
    focus: '62% 28%',
  },
  {
    step: '02',
    title: 'Clinical evaluation',
    body: 'A licensed U.S. provider reviews your intake—typically within 24 hours—and decides whether treatment is medically appropriate. Checkout does not equal a prescription.',
    image: '/images/how-step3.webp',
    focus: 'center 18%',
  },
  {
    step: '03',
    title: 'Pharmacy fulfillment',
    body: 'If prescribed, a licensed U.S. partner pharmacy compounds and ships medication in temperature-controlled packaging. Shipping timelines are estimates, not guarantees.',
    image: '/images/how-step4.webp',
    focus: 'center 55%',
  },
]

const signals = [
  {
    title: 'Acts on GLP-1 pathways involved in satiety.',
    body: 'GLP-1 receptor agonists engage receptors that help regulate appetite and post-meal satiety. Effects depend on dose, tolerability, and clinical context—not every patient responds the same way.',
    image: '/images/unique/unique-signal-1.webp',
    focus: 'center 22%',
  },
  {
    title: 'May slow gastric emptying after meals.',
    body: 'Some patients experience delayed gastric emptying, which can prolong fullness. Gastrointestinal effects are among the more commonly reported adverse reactions during initiation and titration.',
    image: '/images/unique/unique-signal-2.webp',
    focus: 'center 18%',
  },
  {
    title: 'Dosing is titrated under clinician oversight.',
    body: 'Protocols generally begin at a lower dose and may increase based on tolerability and clinical judgment. Adjustments are provider-directed; outcomes are not guaranteed.',
    image: '/images/unique/unique-signal-3.webp',
    focus: 'center 30%',
  },
]

const weeks = [
  {
    label: 'Weeks 1–4',
    title: 'Initiation and tolerability',
    body: 'Treatment typically begins at a lower dose so tolerability can be assessed. Early appetite or digestive changes may occur for some patients; others notice little at first. This phase is about safe initiation—not predicted weight change.',
    image: '/images/unique/unique-week-1.webp',
    focus: 'center 28%',
  },
  {
    label: 'Weeks 4–12',
    title: 'Titration and monitoring',
    body: 'If clinically appropriate, your provider may adjust dosing while monitoring response and side effects. Appetite changes are individual. Any progress—or lack of progress—should be reviewed clinically, not assumed.',
    image: '/images/unique/unique-week-2.webp',
    focus: 'center 18%',
  },
  {
    label: 'Month 3 and beyond',
    title: 'Ongoing clinical management',
    body: 'Continued care may include dose review, side-effect management, and plan updates based on your response and medical history. Long-term results vary and are not promised.',
    image: '/images/unique/unique-week-3.webp',
    focus: 'center 32%',
  },
]

const whyCards = [
  {
    title: 'Licensed clinical review first',
    body: 'Medication is considered only after a U.S.-licensed clinician reviews your intake. There is no automatic prescription at checkout.',
    image: '/images/unique/unique-why-1.webp',
    focus: 'center 22%',
  },
  {
    title: 'U.S. pharmacy compounding partners',
    body: 'When prescribed, compounded medication is prepared by licensed U.S. pharmacies. Compounded products are not FDA-approved.',
    image: '/images/unique/unique-why-2.webp',
    focus: 'center 18%',
  },
  {
    title: 'Documented follow-up access',
    body: 'Patients can use the portal to message about tolerability, titration questions, and plan changes as directed by their care team.',
    image: '/images/unique/unique-why-3.webp',
    focus: 'center 28%',
  },
]

const faqs = [
  {
    q: 'What are Semaglutide+ and Tirzepatide+?',
    a: 'They are compounded prescription medications that contain GLP-1–related active ingredients used in weight-management care when a licensed clinician determines treatment is appropriate. Compounded medications are not FDA-approved. Individual response varies.',
  },
  {
    q: 'How do Semaglutide+ and Tirzepatide+ differ?',
    a: 'Semaglutide+ is formulated as a GLP-1 receptor agonist. Tirzepatide+ is formulated as a dual GIP and GLP-1 receptor agonist. A licensed provider decides which option—if either—is clinically appropriate based on your history and evaluation.',
  },
  {
    q: 'Who may be considered for treatment?',
    a: 'Adults seeking medically supervised weight management who meet clinical criteria may be considered. Eligibility is determined solely by a licensed provider after intake review. Treatment is not appropriate for everyone.',
  },
  {
    q: 'How does the clinical process work?',
    a: 'You complete an online intake, a licensed U.S. provider reviews it, and if a prescription is issued, a partner pharmacy may prepare and ship the medication. You are generally charged only if treatment is prescribed. Follow-up and titration remain under clinician guidance.',
  },
  {
    q: 'What side effects should I discuss with a provider?',
    a: 'Commonly reported effects can include nausea, constipation, diarrhea, vomiting, abdominal discomfort, and changes in appetite—especially during dose increases. Seek urgent care for severe or concerning symptoms. Your provider can advise on monitoring and adjustments.',
  },
  {
    q: 'Are compounded medications FDA-approved?',
    a: 'No. Compounded medications from VitalWellRx partner pharmacies are not FDA-approved. They are prepared by licensed U.S. pharmacies when prescribed. Discuss risks, alternatives, and expectations with your clinician.',
  },
]

export default function TreatmentsFlow() {
  const [activeId, setActiveId] = useState<(typeof products)[number]['id']>('semaglutide')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const active = products.find((p) => p.id === activeId) ?? products[0]

  return (
    <div className="tx-page">
      <section className="tx-hero">
        <div className="tx-shell">
          <Reveal>
            <h1 className="tx-hero__title">
              Clinician-reviewed options for medically supervised <em>weight management</em>
            </h1>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="tx-cats" role="tablist" aria-label="Treatment category">
              <button type="button" className="tx-cat is-active" role="tab" aria-selected>
                <span>Weight Loss</span>
                <span className="tx-cat__img">
                  <Image src={active.vial} alt="" width={72} height={72} quality={70} />
                </span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="tx-panel-wrap">
        <div className="tx-shell">
          <div className="tx-panel">
            <Reveal className="tx-panel__media">
              <div
                className="tx-media-card"
                style={{
                  background: `radial-gradient(circle at 70% 20%, ${active.toneSoft}, transparent 45%), linear-gradient(160deg, #ebe4d4 0%, #d9e2f0 55%, #cfd9ea 100%)`,
                }}
              >
                <div className="tx-media-card__top">
                  <p className="tx-media-card__eyebrow">Prescription care pathway</p>
                  <div className="tx-media-card__pills">
                    <span>Clinician review required</span>
                    <span className="is-stock">Available for evaluation</span>
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={`${active.id}-title`}
                    className="tx-media-card__title"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                  >
                    {active.title}
                  </motion.h2>
                </AnimatePresence>
                <div className="tx-media-card__art">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      className="tx-media-card__hero-vial"
                      initial={{ opacity: 0, scale: 0.92, y: 18 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.94, y: -12 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={active.vial}
                        alt={`${active.title} vials`}
                        width={520}
                        height={680}
                        sizes="(max-width:960px) 80vw, 420px"
                        priority
                        quality={75}
                        className="tx-media-card__hero-img"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <motion.div
                    key={active.price}
                    initial={{ scale: 0.85, rotate: -8, opacity: 0 }}
                    animate={{ scale: 1, rotate: -6, opacity: 1 }}
                    className="tx-media-card__badge"
                  >
                    <strong>FROM</strong>
                    <span>${active.price}/mo</span>
                  </motion.div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={100} className="tx-panel__copy">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.28 }}
                >
                  <p className="tx-panel__mech" style={{ color: active.tone }}>
                    {active.mechanism}
                  </p>
                  <p className="tx-panel__desc">{active.desc}</p>
                </motion.div>
              </AnimatePresence>

              <div className="tx-pickers" role="tablist" aria-label="Choose medication">
                {products.map((p) => {
                  const selected = p.id === activeId
                  return (
                    <button
                      key={p.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      className={`tx-picker ${selected ? 'is-active' : ''}`}
                      style={selected ? { borderColor: '#0b132b', boxShadow: `0 0 0 4px ${p.toneSoft}` } : undefined}
                      onClick={() => setActiveId(p.id)}
                    >
                      <span className="tx-picker__thumb">
                        <Image src={p.vial} alt="" width={48} height={48} />
                      </span>
                      <span className="tx-picker__text">
                        <strong>{p.name}</strong>
                        <em>{p.short}</em>
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="tx-includes">
                <p>All Plans Include:</p>
                <ul>
                  {includes.map((item) => (
                    <li key={item}>
                      <Check size={16} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tx-guarantee">
                <div className="tx-guarantee__mark">VW</div>
                <p>
                  Evaluated by a licensed U.S. clinician. If prescribed, medication is prepared by a licensed U.S. pharmacy. You are typically charged only when a prescription is issued. Cancel or change plans subject to program terms.
                </p>
              </div>

              <div className="tx-cta-row">
                <div>
                  <span className="tx-cta-row__label">Starting as low as:</span>
                  <strong className="tx-cta-row__price">${active.price}<span>/mo</span></strong>
                </div>
                <Link href="/get-started" className="tx-cta">
                  Begin clinical intake <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="tx-journey">
        <div className="tx-shell">
          <Reveal>
            <div className="tx-results__head">
              <p className="tx-kicker">Care pathway</p>
              <h2 className="tx-section-title">
                How VitalWellRx evaluates and, when appropriate, <em>fulfills treatment</em>
              </h2>
              <p className="tx-results__sub">
                Intake screening → licensed clinician review → pharmacy fulfillment only if prescribed.
              </p>
            </div>
          </Reveal>

          <div className="tx-photo-grid">
            {journey.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 80} className="tx-photo-card">
                <article>
                  <div className="tx-photo-card__media">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width:900px) 85vw, 33vw"
                      quality={65}
                      loading="lazy"
                      style={{ objectFit: 'cover', objectPosition: item.focus }}
                    />
                    <span className="tx-photo-card__step">{item.step}</span>
                  </div>
                  <div className="tx-photo-card__body">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tx-science tx-science--photo">
        <div className="tx-shell">
          <Reveal>
            <h2 className="tx-section-title tx-section-title--light">
              How these medications may work in <em>clinical practice</em>
            </h2>
            <p className="tx-science__lead">
              Semaglutide+ and Tirzepatide+ engage incretin-related pathways involved in appetite and glycemic regulation. Suitability, dosing, and monitoring are determined by a licensed clinician.
            </p>
          </Reveal>

          <div className="tx-photo-grid tx-photo-grid--dark">
            {signals.map((s, i) => (
              <Reveal key={s.title} delayMs={i * 80} className="tx-photo-card tx-photo-card--dark">
                <article>
                  <div className="tx-photo-card__media">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(max-width:900px) 85vw, 33vw"
                      quality={65}
                      loading="lazy"
                      style={{ objectFit: 'cover', objectPosition: s.focus }}
                    />
                    <span className="tx-photo-card__step">0{i + 1}</span>
                  </div>
                  <div className="tx-photo-card__body">
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tx-split">
        <div className="tx-shell tx-split__grid">
          <Reveal className="tx-split__media">
            <Image
              src="/images/physician-1.webp"
              alt="Licensed clinician supporting VitalWellRx care"
              fill
              sizes="(max-width:960px) 100vw, 50vw"
              quality={70}
              loading="lazy"
              style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
            />
          </Reveal>
          <Reveal delayMs={100} className="tx-split__copy">
            <p className="tx-kicker">Clinical oversight</p>
            <h2 className="tx-section-title" style={{ textAlign: 'left' }}>
              Weight management under <em>licensed medical review</em>
            </h2>
            <p>
              These options are considered only after intake review. A clinician determines whether a GLP-1–related therapy is appropriate, how dosing should proceed, and when to modify or discontinue care. Results are not guaranteed.
            </p>
            <ul>
              <li>
                <strong>Semaglutide+</strong> — compounded GLP-1 receptor agonist option that may be prescribed when clinically indicated.
              </li>
              <li>
                <strong>Tirzepatide+</strong> — compounded dual GIP/GLP-1 agonist option that may be prescribed when clinically indicated.
              </li>
            </ul>
            <Link href="/get-started" className="tx-cta">
              Start clinical intake <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="tx-weeks">
        <div className="tx-shell">
          <Reveal>
            <h2 className="tx-section-title">
              Typical clinical phases during <em>titration</em>
            </h2>
            <p className="tx-weeks__lead">
              Timelines below are general education only. Your clinician sets dosing and follow-up based on your case. Outcomes are not guaranteed.
            </p>
          </Reveal>

          <div className="tx-photo-grid">
            {weeks.map((w, i) => (
              <Reveal key={w.label} delayMs={i * 90} className="tx-photo-card">
                <article>
                  <div className="tx-photo-card__media">
                    <Image
                      src={w.image}
                      alt={w.title}
                      fill
                      sizes="(max-width:900px) 85vw, 33vw"
                      quality={65}
                      loading="lazy"
                      style={{ objectFit: 'cover', objectPosition: w.focus }}
                    />
                    <span className="tx-photo-card__label">{w.label}</span>
                  </div>
                  <div className="tx-photo-card__body">
                    <h3>{w.title}</h3>
                    <p>{w.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tx-why">
        <div className="tx-shell">
          <Reveal>
            <h2 className="tx-section-title">
              Clinical standards at <em>VitalWellRx</em>
            </h2>
          </Reveal>
          <div className="tx-photo-grid">
            {whyCards.map((card, i) => (
              <Reveal key={card.title} delayMs={i * 80} className="tx-photo-card">
                <article>
                  <div className="tx-photo-card__media tx-photo-card__media--tall">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width:900px) 85vw, 33vw"
                      quality={65}
                      loading="lazy"
                      style={{ objectFit: 'cover', objectPosition: card.focus }}
                    />
                  </div>
                  <div className="tx-photo-card__body">
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tx-faq">
        <div className="tx-shell tx-faq__inner">
          <Reveal>
            <h2 className="tx-section-title">
              Clinical questions before <em>starting an intake</em>
            </h2>
          </Reveal>

          <div className="tx-faq__list">
            {faqs.map((f, i) => {
              const open = openFaq === i
              return (
                <Reveal key={f.q} delayMs={i * 40}>
                  <div className={`tx-faq__item ${open ? 'is-open' : ''}`}>
                    <button type="button" onClick={() => setOpenFaq(open ? null : i)}>
                      <span>{f.q}</span>
                      <ChevronDown size={18} />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="tx-faq__answer"
                        >
                          <p>{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delayMs={120}>
            <div className="tx-faq__cta">
              <Link href="/get-started" className="tx-cta">
                Start medical intake <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
