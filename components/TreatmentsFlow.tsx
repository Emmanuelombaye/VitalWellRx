'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown, Star } from 'lucide-react'
import { Reveal } from './Reveal'

const products = [
  {
    id: 'semaglutide',
    name: 'GLP-1 (Semaglutide+)',
    short: 'Gradual, effective results.',
    thumb: '/treatments/sema-thumb.jpg',
    vial: '/treatments/vial-semaglutide.webp',
    price: 310,
    href: '/treatments/odt-tablets',
  },
  {
    id: 'tirzepatide',
    name: 'GLP-1 + GIP (Tirzepatide+)',
    short: 'Faster results. Dual-action support.',
    thumb: '/treatments/tirz-thumb.jpg',
    vial: '/treatments/vial-tirzepatide.webp',
    price: 340,
    href: '/treatments/weight-loss',
  },
] as const

const includes = [
  'Free Medical Consultation',
  'Free Expedited Shipping',
  '24/7 Dedicated Support',
  'Access to Patient Portal',
]

const stories = [
  { src: '/treatments/lisa.avif', name: 'Lisa C.', lbs: 75, when: 'in 10 Months' },
  { src: '/treatments/blaze.webp', name: 'Blaze B.', lbs: 50, when: 'in 6 Months' },
  { src: '/treatments/crystal.webp', name: 'Crystal G.', lbs: 50, when: 'in 6 Months' },
  { src: '/treatments/jamilyn.avif', name: 'JamiLyn O.', lbs: 36, when: 'in 14 Weeks' },
  { src: '/treatments/kim.webp', name: 'Kim B.', lbs: 8, when: 'in 6 Weeks' },
]

const signals = [
  {
    title: 'Targets the hormone that tells your brain you’re full.',
    body: 'After you eat, your body releases GLP-1 — a signal that travels to your brain and says: enough. These medications mimic that signal for a clearer, more consistent message to stop eating.',
  },
  {
    title: 'Slows down how fast food leaves your stomach.',
    body: 'Treatment reduces the rate at which your stomach empties after a meal. The physical sensation of fullness lasts longer — and hunger returns more slowly.',
  },
  {
    title: 'Recalibrates your hunger system — not shuts it down.',
    body: 'With structured dosing reviewed by your provider, therapy helps restore a more balanced hormonal response to food — so the process feels steadier, not like a fight you’re constantly losing.',
  },
]

const weeks = [
  {
    label: 'Week 1 → 4',
    title: 'Your body is adjusting',
    body: 'You start on a low dose — intentionally. Treatment is introduced gradually so your body can adapt. Some patients notice appetite changes early. Others take a few more weeks. Both are normal.',
  },
  {
    label: 'Week 4 → 12',
    title: 'The protocol starts to settle',
    body: 'Most patients begin to feel the treatment working more consistently. Food noise and cravings quiet. Fullness arrives earlier and stays longer. Your dose may be reviewed and adjusted.',
  },
  {
    label: 'Month 3+',
    title: 'Calibrated to you',
    body: 'With how your body has responded, your provider can fine-tune your plan with real precision. The focus shifts from adjustment to consistency — and maintainable progress becomes the rhythm.',
  },
]

const faqs = [
  {
    q: 'What is GLP-1 weight loss treatment?',
    a: 'GLP-1 treatment is a class of prescription medication — including Semaglutide+ and Tirzepatide+ — that works with your body’s natural appetite signals, helping you feel full sooner, stay satisfied longer, and reduce constant food noise. Every protocol is reviewed by a licensed provider.',
  },
  {
    q: 'What’s the difference between Semaglutide+ and Tirzepatide+?',
    a: 'Semaglutide+ is a GLP-1 receptor agonist. Tirzepatide+ is a dual GIP and GLP-1 receptor agonist. Both support appetite regulation and long-term weight management through different pathways. Your provider reviews your history and goals to determine what’s appropriate.',
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
  const [weight, setWeight] = useState(220)

  const active = products.find((p) => p.id === activeId) ?? products[0]
  const projected = useMemo(() => Math.max(8, Math.round(weight * (activeId === 'tirzepatide' ? 0.2 : 0.15))), [weight, activeId])

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
                  <Image src="/cutout-duo-tirzepatide.webp" alt="" width={72} height={72} quality={70} loading="lazy" />
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
              <div className="tx-media-card">
                <div className="tx-media-card__top">
                  <p className="tx-media-card__eyebrow">1000+ bought in past week</p>
                  <div className="tx-media-card__pills">
                    <span>Most Popular</span>
                    <span className="is-stock">In Stock</span>
                  </div>
                </div>
                <h2 className="tx-media-card__title">Personalized GLP‑1 Injections</h2>
                <div className="tx-media-card__art">
                  <div className="tx-media-card__duo">
                    {products.map((p) => (
                      <motion.button
                        key={p.id}
                        type="button"
                        className={`tx-media-card__vial ${p.id === activeId ? 'is-active' : ''}`}
                        onClick={() => setActiveId(p.id)}
                        animate={{
                          scale: p.id === activeId ? 1 : 0.9,
                          opacity: p.id === activeId ? 1 : 0.72,
                          y: p.id === activeId ? -6 : 8,
                        }}
                        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                      >
                        <Image src={p.vial} alt={p.name} width={200} height={280} priority={p.id === 'semaglutide'} quality={70} />
                      </motion.button>
                    ))}
                  </div>
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
              <p className="tx-panel__desc">
                A weekly treatment designed to support appetite suppression, metabolic optimization, and long-term weight management through GLP-1 receptor activation — with Tirzepatide+ adding dual GIP support.
              </p>

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
                      onClick={() => setActiveId(p.id)}
                    >
                      <span className="tx-picker__thumb">
                        <Image src={p.thumb} alt="" width={48} height={48} />
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

      <section className="tx-results">
        <div className="tx-shell">
          <Reveal>
            <div className="tx-results__head">
              <h2 className="tx-section-title">
                Our patients’ incredible results — <em>built to last</em>!
              </h2>
              <p className="tx-results__sub">
                Real patients. Real progress. Provider-guided Semaglutide+ and Tirzepatide+ outcomes.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="tx-results__marquee" aria-label="Patient before and after results">
          <div className="tx-results__track">
            {[...stories, ...stories].map((s, i) => (
              <article key={`${s.name}-${i}`} className="tx-result-card">
                <div className="tx-result-card__media">
                  <Image
                    src={s.src}
                    alt={`${s.name} before and after weight loss`}
                    fill
                    sizes="(max-width:768px) 90vw, 420px"
                    className="tx-result-card__photo"
                  />

                  <div className="tx-result-card__split" aria-hidden>
                    <span className="tx-result-card__tag is-before">Before</span>
                    <span className="tx-result-card__tag is-after">After</span>
                  </div>
                  <div className="tx-result-card__seam" aria-hidden />

                  <div className="tx-result-card__stat">
                    <em>Lost</em>
                    <strong>{s.lbs}</strong>
                    <span>lbs</span>
                    <small>{s.when}</small>
                  </div>

                  <div className="tx-result-card__person">
                    <span>{s.name}</span>
                    <em>
                      <Check size={12} strokeWidth={3} /> Verified GLP-1 Patient
                    </em>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="tx-shell">
          <Reveal delayMs={80}>
            <div className="tx-trust">
              <div className="tx-trust__item">
                <div className="tx-trust__stars" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <div>
                  <strong>TrustScore 4.9</strong>
                  <span>1,200+ reviews</span>
                </div>
              </div>
              <div className="tx-trust__divider" aria-hidden />
              <div className="tx-trust__item">
                <div className="tx-trust__g" aria-hidden>G</div>
                <div>
                  <strong>Google Rating 4.8</strong>
                  <span>100+ reviews</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="tx-science">
        <div className="tx-shell">
          <Reveal>
            <h2 className="tx-section-title tx-section-title--light">
              Your body isn’t working against you. It just needs the <em>right signal</em>.
            </h2>
            <p className="tx-science__lead">
              GLP-1 medications don’t fight your hunger — they work through the same hormonal system your body already uses to regulate it.
            </p>
          </Reveal>

          <div className="tx-science__grid">
            {signals.map((s, i) => (
              <Reveal key={s.title} delayMs={i * 80}>
                <article className="tx-signal">
                  <span>0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tx-potential">
        <div className="tx-shell tx-potential__grid">
          <Reveal>
            <h2 className="tx-section-title">
              Let’s see your potential with <em>GLP-1s</em>
            </h2>
            <p className="tx-potential__sub">Personalized Semaglutide+ & Tirzepatide+ treatments</p>

            <label className="tx-slider">
              <span>Current weight: <strong>{weight} lbs</strong></span>
              <input
                type="range"
                min={140}
                max={400}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
            </label>

            <div className="tx-potential__result">
              <span>You could lose up to</span>
              <strong>{projected} lbs</strong>
              <em>*Based on typical patient outcomes in 6-month plans. Results may vary.</em>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="tx-potential__card">
              <h3>A clinically studied approach to weight management.</h3>
              <p>
                GLP-1 medications work with your body’s natural hunger signals to regulate appetite and support steady weight loss over time.
              </p>
              <ul>
                <li>
                  <strong>Semaglutide+</strong> acts on a single GLP-1 pathway — a clinically studied foundation for gradual, sustainable progress.
                </li>
                <li>
                  <strong>Tirzepatide+</strong> acts on two pathways — GLP-1 and GIP — for stronger appetite regulation and a broader metabolic response.
                </li>
              </ul>
              <p className="tx-potential__note">
                Your dosing protocol is reviewed and prescribed by a licensed provider, adjusted as you progress.
              </p>
              <Link href="/get-started" className="tx-cta">
                See if I qualify <ArrowRight size={18} />
              </Link>
            </div>
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
              No guesswork. Here’s how the first months typically look. Individual experiences vary.
            </p>
          </Reveal>

          <div className="tx-weeks__grid">
            {weeks.map((w, i) => (
              <Reveal key={w.label} delayMs={i * 90}>
                <article className="tx-week">
                  <span>{w.label}</span>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
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
                See if I qualify <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
