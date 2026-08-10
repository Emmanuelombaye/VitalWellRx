'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, ShieldCheck, Truck, Lock, Sparkles, Check, Star } from 'lucide-react'

const products = [
  {
    id: 'tirzepatide',
    label: 'Tirzepatide+',
    badge: 'Best Seller',
    title: 'Personalized Tirzepatide+',
    mechanism: 'Dual GIP / GLP-1',
    tagline: 'Stronger appetite control. Deeper metabolic reset.',
    desc: 'A weekly dual-agonist injection that targets both GIP and GLP-1 pathways to regulate appetite, quiet food noise, and support clinical-grade weight-loss outcomes.',
    price: '$340',
    period: '/mo',
    stat: '22%',
    statLabel: 'avg. weight reduction*',
    enrolled: '1,000+ enrolled this week',
    rating: '4.9',
    reviews: '800+',
    image: '/vial-tirzepatide.png',
    cutout: '/cutout-duo-tirzepatide.png',
    href: '/treatments/weight-loss',
    tone: '#D4AF37',
    toneSoft: 'rgba(212,175,55,0.18)',
    features: [
      'Once-weekly subcutaneous injection',
      'Licensed U.S. provider review in 24h',
      '503A compounded pharmacy fulfillment',
      'Free expedited cold-pack shipping',
      'Cancel or pause anytime',
    ],
  },
  {
    id: 'semaglutide',
    label: 'Semaglutide+',
    badge: 'Proven GLP-1',
    title: 'Personalized Semaglutide+',
    mechanism: 'GLP-1 receptor agonist',
    tagline: 'Steady results. Sustainable habit change.',
    desc: 'A weekly GLP-1 injection designed for sustainable weight loss by helping regulate blood sugar, improve satiety, and reduce constant hunger signals.',
    price: '$310',
    period: '/mo',
    stat: '15%',
    statLabel: 'avg. weight reduction*',
    enrolled: '750+ enrolled this week',
    rating: '4.8',
    reviews: '620+',
    image: '/vial-semaglutide.png',
    cutout: '/cutout-duo-semaglutide.png',
    href: '/treatments/odt-tablets',
    tone: '#2DD4BF',
    toneSoft: 'rgba(45,212,191,0.14)',
    features: [
      'Once-weekly GLP-1 injection',
      'Licensed U.S. provider review in 24h',
      '503A compounded pharmacy fulfillment',
      'Free expedited cold-pack shipping',
      'Cancel or pause anytime',
    ],
  },
]

const faqs = [
  {
    q: 'Do I need a prescription?',
    a: 'Yes. Tirzepatide+ and Semaglutide+ are prescription-only. A licensed U.S. provider reviews your intake and, if appropriate, issues a prescription through our HIPAA-compliant platform.',
  },
  {
    q: 'How fast will I receive my medication?',
    a: 'Once approved, medication ships via free expedited delivery in discreet, temperature-controlled packaging — typically within a few business days.',
  },
  {
    q: 'Can I switch between Tirzepatide+ and Semaglutide+?',
    a: 'Yes. Your care team can help evaluate whether a switch is clinically appropriate based on your response, goals, and tolerance.',
  },
  {
    q: 'Are these FDA-approved?',
    a: 'No. VitalWellRx provides compounded medications containing the same active pharmaceutical ingredients as brand-name drugs. They are prepared by licensed U.S. pharmacies and are not FDA-approved.',
  },
]

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -18, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

function MagneticButton({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 20 })
  const springY = useSpring(y, { stiffness: 280, damping: 20 })

  return (
    <motion.div style={{ x: springX, y: springY, display: 'inline-flex' }}>
      <Link
        ref={ref}
        href={href}
        className={`shop-mag-btn shop-mag-btn--${variant}`}
        onMouseMove={(e) => {
          const el = ref.current
          if (!el) return
          const rect = el.getBoundingClientRect()
          x.set((e.clientX - rect.left - rect.width / 2) * 0.25)
          y.set((e.clientY - rect.top - rect.height / 2) * 0.25)
        }}
        onMouseLeave={() => {
          x.set(0)
          y.set(0)
        }}
      >
        {children}
      </Link>
    </motion.div>
  )
}

export default function ShopPage() {
  const [activeId, setActiveId] = useState(products[0].id)
  const [openFaq, setOpenFaq] = useState(0)
  const active = products.find((p) => p.id === activeId) ?? products[0]
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15])

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveId((prev) => (prev === 'tirzepatide' ? 'semaglutide' : 'tirzepatide'))
    }, 7000)
    return () => window.clearInterval(id)
  }, [activeId])

  const selectProduct = (id: string) => setActiveId(id)

  return (
    <main className="shop-page">
      {/* ── Hero ── */}
      <section ref={heroRef} className="shop-hero">
        <FloatingOrb className="shop-orb shop-orb--a" />
        <FloatingOrb className="shop-orb shop-orb--b" delay={1.2} />
        <FloatingOrb className="shop-orb shop-orb--c" delay={2.1} />

        <motion.div className="shop-shell shop-hero__inner" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div
            className="shop-hero__copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="shop-pill">
              <Sparkles size={14} /> Doctor-prescribed · 503A pharmacy
            </span>
            <h1>
              Shop the protocols
              <br />
              <em>built to work.</em>
            </h1>
            <p>
              Two personalized weight-loss treatments — Tirzepatide+ and Semaglutide+ — reviewed by licensed providers and shipped discreetly to your door.
            </p>
            <div className="shop-hero__actions">
              <MagneticButton href="#shop-stage">
                Explore products <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton href="/get-started" variant="ghost">
                Check eligibility
              </MagneticButton>
            </div>
            <div className="shop-hero__trust">
              <div><Star size={14} fill="currentColor" /> 4.9 average rating</div>
              <div><ShieldCheck size={14} /> Licensed U.S. providers</div>
              <div><Truck size={14} /> Free expedited shipping</div>
            </div>
          </motion.div>

          <motion.div
            className="shop-hero__stage"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="shop-hero__vial-wrap"
                initial={{ opacity: 0, rotate: -8, y: 30 }}
                animate={{ opacity: 1, rotate: 0, y: 0 }}
                exit={{ opacity: 0, rotate: 8, y: -20 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="shop-hero__glow" style={{ background: active.toneSoft }} />
                <motion.div
                  className="shop-hero__vial"
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image src={active.image} alt={active.title} fill sizes="320px" priority style={{ objectFit: 'contain' }} />
                </motion.div>
                <motion.div
                  className="shop-hero__float-card"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <strong style={{ color: active.tone }}>{active.stat}</strong>
                  <span>{active.statLabel}</span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Product stage ── */}
      <section id="shop-stage" className="shop-stage">
        <div className="shop-shell">
          <div className="shop-stage__head">
            <motion.p
              className="shop-eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Choose your protocol
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Two treatments. <em>One clear path.</em>
            </motion.h2>
          </div>

          <div className="shop-tabs" role="tablist" aria-label="Shop products">
            {products.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={activeId === p.id}
                className={`shop-tab ${activeId === p.id ? 'is-active' : ''}`}
                style={activeId === p.id ? { borderColor: p.tone, boxShadow: `0 0 0 4px ${p.toneSoft}` } : undefined}
                onClick={() => selectProduct(p.id)}
              >
                <span className="shop-tab__dot" style={{ background: p.tone }} />
                {p.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="shop-product"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="shop-product__visual" style={{ background: `radial-gradient(circle at 30% 20%, ${active.toneSoft}, transparent 55%), #0B132B` }}>
                <span className="shop-product__badge">{active.badge}</span>
                <motion.div
                  className="shop-product__cutout"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image src={active.cutout} alt="" fill sizes="(max-width:900px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                </motion.div>
                <motion.div
                  className="shop-product__vial"
                  animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image src={active.image} alt={active.title} fill sizes="220px" style={{ objectFit: 'contain' }} />
                </motion.div>
              </div>

              <div className="shop-product__info">
                <p className="shop-product__mech" style={{ color: active.tone }}>{active.mechanism}</p>
                <h3>{active.title}</h3>
                <p className="shop-product__tagline">{active.tagline}</p>
                <p className="shop-product__desc">{active.desc}</p>

                <div className="shop-product__meta">
                  <div>
                    <strong style={{ color: active.tone }}>{active.stat}</strong>
                    <span>{active.statLabel}</span>
                  </div>
                  <div>
                    <strong>{active.rating}/5</strong>
                    <span>{active.reviews} reviews</span>
                  </div>
                  <div>
                    <strong>24h</strong>
                    <span>provider review</span>
                  </div>
                </div>

                <ul className="shop-product__features">
                  {active.features.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * i }}
                    >
                      <Check size={16} style={{ color: active.tone }} /> {f}
                    </motion.li>
                  ))}
                </ul>

                <div className="shop-product__buy">
                  <div className="shop-product__price">
                    <span>From</span>
                    <strong>{active.price}</strong>
                    <span>{active.period}</span>
                  </div>
                  <div className="shop-product__cta-row">
                    <Link href={active.href} className="shop-cta-primary" style={{ background: active.tone, color: active.id === 'tirzepatide' ? '#0B132B' : '#042f2e' }}>
                      Start with {active.label} <ArrowRight size={18} />
                    </Link>
                    <Link href="/get-started" className="shop-cta-secondary">
                      See if I qualify
                    </Link>
                  </div>
                  <p className="shop-product__enrolled">{active.enrolled}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Compare ── */}
      <section className="shop-compare">
        <div className="shop-shell">
          <div className="shop-stage__head">
            <p className="shop-eyebrow">Side by side</p>
            <h2>Pick the fit. <em>Keep the care.</em></h2>
          </div>
          <div className="shop-compare__grid">
            {products.map((p, i) => (
              <motion.article
                key={p.id}
                className="shop-compare-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="shop-compare-card__top" style={{ borderColor: p.tone }}>
                  <Image src={p.image} alt={p.title} width={120} height={180} style={{ objectFit: 'contain' }} />
                </div>
                <div className="shop-compare-card__body">
                  <span className="shop-compare-card__badge" style={{ background: p.toneSoft, color: p.tone }}>{p.badge}</span>
                  <h3>{p.title}</h3>
                  <p>{p.mechanism}</p>
                  <div className="shop-compare-card__price">
                    <strong>{p.price}</strong><span>{p.period}</span>
                  </div>
                  <Link href={p.href} className="shop-cta-secondary shop-cta-secondary--dark">
                    View details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="shop-trust">
        <div className="shop-shell shop-trust__grid">
          {[
            { icon: <ShieldCheck size={22} />, title: 'Physician included', body: 'Board-certified review before every Rx.' },
            { icon: <Truck size={22} />, title: 'Cold-pack shipping', body: 'Free expedited, discreet delivery.' },
            { icon: <Lock size={22} />, title: 'No surprise fees', body: 'Clear monthly pricing. Cancel anytime.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="shop-trust__item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="shop-trust__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="shop-faq">
        <div className="shop-shell shop-faq__inner">
          <div className="shop-stage__head">
            <p className="shop-eyebrow">We&apos;ve got you</p>
            <h2>Shop questions, <em>answered.</em></h2>
          </div>
          <div className="shop-faq__list">
            {faqs.map((item, i) => {
              const open = openFaq === i
              return (
                <div key={item.q} className={`shop-faq__item ${open ? 'is-open' : ''}`}>
                  <button type="button" onClick={() => setOpenFaq(open ? -1 : i)}>
                    <span>{item.q}</span>
                    <span className="shop-faq__icon" aria-hidden>+</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="shop-faq__panel"
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

      {/* ── Final CTA ── */}
      <section className="shop-final">
        <div className="shop-shell">
          <motion.div
            className="shop-final__box"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready when you are.</h2>
            <p>Complete intake in minutes. A licensed provider reviews within 24 hours.</p>
            <div className="shop-final__actions">
              <Link href="/get-started" className="shop-cta-primary shop-cta-primary--gold">
                Get started today <ArrowRight size={18} />
              </Link>
              <Link href="/how-it-works" className="shop-cta-secondary shop-cta-secondary--light">
                How it works
              </Link>
            </div>
            <p className="shop-disclaimer">*Individual results vary. Compounded medications are not FDA-approved.</p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
