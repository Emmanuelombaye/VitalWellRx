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
    short: 'Weekly GLP-1 pathway support',
    title: 'Personalized Semaglutide+',
    mechanism: 'GLP-1 receptor agonist',
    desc: 'A weekly GLP-1 injection that may support satiety, appetite regulation, and sustainable habit change when prescribed as part of a personalized care plan.',
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
    short: 'Dual-pathway weekly support',
    title: 'Personalized Tirzepatide+',
    mechanism: 'Dual GIP / GLP-1',
    desc: 'A weekly dual-agonist injection that targets both GIP and GLP-1 pathways and may support appetite regulation and metabolic goals when prescribed as part of a provider-guided plan.',
    thumb: '/treatments/tirz-thumb.webp',
    vial: '/shop/vial-tirzepatide-duo.webp',
    price: 340,
    href: '/treatments/weight-loss',
    tone: '#D4AF37',
    toneSoft: 'rgba(212,175,55,0.28)',
  },
] as const

const includes = [
  'Licensed provider review',
  'Pharmacy shipping if prescribed',
  'Ongoing care support',
  'Patient Center access',
]

const journey = [
  {
    step: '01',
    title: 'Complete your intake',
    body: 'Answer a short medical questionnaire so a licensed provider can determine if Tirzepatide+ or Semaglutide+ may be appropriate.',
    image: '/images/how-step2.webp',
    focus: '62% 28%',
  },
  {
    step: '02',
    title: 'Provider review',
    body: 'A licensed U.S. clinician reviews your history within 24 hours — treatment is never automatic checkout.',
    image: '/images/how-step3.webp',
    focus: 'center 18%',
  },
  {
    step: '03',
    title: 'Start treatment',
    body: 'If prescribed, a partner U.S. pharmacy prepares and ships discreetly in temperature-controlled packaging.',
    image: '/images/how-step4.webp',
    focus: 'center 55%',
  },
]

const signals = [
  {
    title: 'Targets the hormone that tells your brain you’re full.',
    body: 'After you eat, your body releases GLP-1 — a signal that travels to your brain and says: enough. These medications mimic that signal for a clearer, more consistent message to stop eating.',
    image: '/images/unique/unique-signal-1.webp',
    focus: 'center 22%',
  },
  {
    title: 'Slows down how fast food leaves your stomach.',
    body: 'Treatment may reduce the rate at which your stomach empties after a meal. The physical sensation of fullness can last longer — and hunger may return more slowly.',
    image: '/images/unique/unique-signal-2.webp',
    focus: 'center 18%',
  },
  {
    title: 'Recalibrates your hunger system — not shuts it down.',
    body: 'With structured dosing reviewed by your provider, therapy may help restore a more balanced hormonal response to food — so the process feels steadier over time.',
    image: '/images/unique/unique-signal-3.webp',
    focus: 'center 30%',
  },
]

const weeks = [
  {
    label: 'Week 1 → 4',
    title: 'Your body is adjusting',
    body: 'You start on a low dose — intentionally. Treatment is introduced gradually so your body can adapt. Some people notice appetite changes early. Others take longer. Experiences vary and are not guaranteed.',
    image: '/images/unique/unique-week-1.webp',
    focus: 'center 22%',
  },
  {
    label: 'Week 4 → 12',
    title: 'The protocol starts to settle',
    body: 'As dosing continues under provider review, some people notice quieter food noise or earlier fullness. Others need more time or a dose adjustment. Individual responses vary and are not guaranteed.',
    image: '/images/unique/unique-week-2.webp',
    focus: 'center 25%',
  },
  {
    label: 'Month 3+',
    title: 'Calibrated to you',
    body: 'With how your body has responded, your provider can fine-tune your plan. The focus may shift from adjustment to consistency — always guided by clinical judgment, not outcome guarantees.',
    image: '/images/unique/unique-week-3.webp',
    focus: 'center 20%',
  },
]

const whyCards = [
  {
    title: 'Transparent & trusted',
    body: 'From sourcing standards to doorstep delivery, we prioritize clear information and licensed U.S. pharmacy partners.',
    image: '/images/unique/unique-why-1.webp',
    focus: 'center 22%',
  },
  {
    title: 'Tailored personalized care',
    body: 'Plans are guided by licensed provider review of your health history and goals — not one-size-fits-all checkout.',
    image: '/images/unique/unique-why-2.webp',
    focus: 'center 18%',
  },
  {
    title: 'Ongoing support within reach',
    body: 'Your patient portal, care team, and treatment details stay available as your provider guides adjustments over time.',
    image: '/images/unique/unique-why-3.webp',
    focus: 'center 28%',
  },
]

const faqs = [
  {
    q: 'What is GLP-1 weight loss treatment?',
    a: 'GLP-1 treatment is a class of prescription medication — including Semaglutide+ and Tirzepatide+ — that works with your body’s natural appetite signals and may help you feel full sooner, stay satisfied longer, and reduce constant food noise. Every protocol is reviewed by a licensed provider.',
  },
  {
    q: 'What’s the difference between Semaglutide+ and Tirzepatide+?',
    a: 'Semaglutide+ is a GLP-1 receptor agonist. Tirzepatide+ is a dual GIP and GLP-1 receptor agonist. Both may support appetite regulation and long-term weight management through different pathways. Your provider reviews your history and goals to determine what’s appropriate.',
  },
  {
    q: 'Who is GLP-1 treatment for?',
    a: 'It may be considered for adults working toward provider-guided weight management who meet clinical criteria. Eligibility is determined by a licensed provider. Treatment isn’t right for everyone — every plan begins with a provider review, not a checkout.',
  },
  {
    q: 'How does the prescription process work?',
    a: 'Complete a quick clinical intake, share your medical history, and connect with a licensed provider. If approved, medication is prepared by a partner pharmacy and shipped directly. Your provider stays involved as dosing is titrated over time.',
  },
  {
    q: 'What should I know about side effects?',
    a: 'Side effects vary. Common effects may include nausea, constipation, diarrhea, appetite changes, or digestive discomfort while your body adjusts. Your provider explains what to watch for and can adjust your protocol if needed.',
  },
  {
    q: 'Are compounded medications FDA-approved?',
    a: 'No. VitalWellRx provides compounded medications containing the same active pharmaceutical ingredients as brand-name drugs. They are prepared by licensed U.S. pharmacies and are not FDA-approved.',
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
              Explore our treatments below and choose what’s best <em>for you</em>.
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
                  <p className="tx-media-card__eyebrow">Provider-guided protocols</p>
                  <div className="tx-media-card__pills">
                    <span>Provider-guided</span>
                    <span className="is-stock">In Stock</span>
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
                        quality={88}
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
                  Provider-guided care, medications from U.S. licensed pharmacies, and only charged if treatment is prescribed — with flexibility to change or cancel anytime.
                </p>
              </div>

              <div className="tx-cta-row">
                <div>
                  <span className="tx-cta-row__label">Starting as low as:</span>
                  <strong className="tx-cta-row__price">${active.price}<span>/mo</span></strong>
                </div>
                <Link href="/get-started" className="tx-cta">
                  See if I qualify <ArrowRight size={18} />
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
              <p className="tx-kicker">How it works</p>
              <h2 className="tx-section-title">
                From onboarding through treatment — <em>guided every step</em>
              </h2>
              <p className="tx-results__sub">
                Intake, licensed provider review, then pharmacy fulfillment when prescribed.
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
                      quality={78}
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
              Your body isn’t working against you. It just needs the <em>right signal</em>.
            </h2>
            <p className="tx-science__lead">
              GLP-1 medications don’t fight your hunger — they work through the same hormonal system your body already uses to regulate it.
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
                      quality={78}
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
              quality={78}
              style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
            />
          </Reveal>
          <Reveal delayMs={100} className="tx-split__copy">
            <p className="tx-kicker">Provider-guided care</p>
            <h2 className="tx-section-title" style={{ textAlign: 'left' }}>
              A clinical approach to <em>weight management</em>
            </h2>
            <p>
              GLP-1 medications work with your body’s natural hunger signals and may support appetite regulation when prescribed as part of a personalized plan. Experiences vary.
            </p>
            <ul>
              <li>
                <strong>Semaglutide+</strong> acts on a single GLP-1 pathway — a foundation that may support gradual, sustainable progress when appropriate.
              </li>
              <li>
                <strong>Tirzepatide+</strong> acts on two pathways — GLP-1 and GIP — and may support broader metabolic response when prescribed.
              </li>
            </ul>
            <Link href="/get-started" className="tx-cta">
              Start medical intake <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="tx-weeks">
        <div className="tx-shell">
          <Reveal>
            <h2 className="tx-section-title">
              What to expect, week by week with your <em>GLP-1 treatment</em>
            </h2>
            <p className="tx-weeks__lead">
              Here’s how the first months often look. Individual experiences vary and outcomes are not guaranteed.
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
                      quality={78}
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
              Why <em>VitalWellRx</em>?
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
                      quality={78}
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
              What most patients want to know <em>before they begin</em>.
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
