'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, ShieldCheck, Truck, Lock, Sparkles, Check } from 'lucide-react'

const products = [
  {
    id: 'tirzepatide',
    label: 'Tirzepatide+',
    badge: 'Provider-guided',
    title: 'Personalized Tirzepatide+',
    mechanism: 'Dual GIP / GLP-1',
    tagline: 'Dual-pathway weekly support, when prescribed.',
    desc: 'A weekly dual-agonist injection that targets both GIP and GLP-1 pathways and may support appetite regulation and metabolic goals as part of a provider-guided plan.',
    price: '$340',
    period: '/mo',
    image: '/shop/vial-tirzepatide-duo.webp',
    href: '/treatments/weight-loss',
    tone: '#D4AF37',
    toneSoft: 'rgba(212,175,55,0.18)',
    features: [
      'Once-weekly subcutaneous injection',
      'Licensed U.S. provider review in 24h',
      '503A compounded pharmacy fulfillment',
      'Discreet pharmacy shipping when prescribed',
      'Cancel or pause anytime',
    ],
  },
  {
    id: 'semaglutide',
    label: 'Semaglutide+',
    badge: 'Provider-guided',
    title: 'Personalized Semaglutide+',
    mechanism: 'GLP-1 receptor agonist',
    tagline: 'Weekly GLP-1 pathway support, when prescribed.',
    desc: 'A weekly GLP-1 injection that may support satiety, appetite regulation, and sustainable habit change when prescribed as part of a personalized care plan.',
    price: '$310',
    period: '/mo',
    image: '/shop/vial-semaglutide-duo.webp',
    href: '/treatments',
    tone: '#2DD4BF',
    toneSoft: 'rgba(45,212,191,0.14)',
    features: [
      'Once-weekly GLP-1 injection',
      'Licensed U.S. provider review in 24h',
      '503A compounded pharmacy fulfillment',
      'Discreet pharmacy shipping when prescribed',
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

  const selectProduct = (id: string) => {
    setActiveId(id)
    document.getElementById('shop-stage')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
              <Sparkles size={14} /> Shop · 2 protocols in stock
            </span>
            <h1>
              Your care options,
              <br />
              <em>simplified.</em>
            </h1>
            <p>
              Browse Tirzepatide+ and Semaglutide+ with clear pricing. Licensed U.S. provider review required. Medication ships only if prescribed.
            </p>
            <div className="shop-hero__actions">
              <MagneticButton href="#shop-shelf">
                Browse products <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton href="/get-started" variant="ghost">
                Check eligibility
              </MagneticButton>
            </div>
            <div className="shop-hero__trust">
              <div><ShieldCheck size={14} /> Provider-guided protocols</div>
              <div><ShieldCheck size={14} /> Licensed U.S. providers</div>
              <div><Truck size={14} /> Shipping if prescribed</div>
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
                  <Image src={active.image} alt={active.title} fill sizes="320px" priority quality={60} style={{ objectFit: 'contain' }} />
                </motion.div>
                <motion.div
                  className="shop-hero__float-card"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <strong style={{ color: active.tone }}>{active.price}</strong>
                  <span>{active.period} · Rx included</span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Product shelf ── */}
      <section id="shop-shelf" className="shop-shelf">
        <div className="shop-shell">
          <div className="shop-shelf__bar">
            <div>
              <p className="shop-eyebrow">In stock</p>
              <h2>Shop treatments</h2>
            </div>
            <span className="shop-shelf__count">2 products</span>
          </div>

          <div className="shop-shelf__grid">
            {products.map((p, i) => (
              <motion.article
                key={p.id}
                className={`shop-shelf-card ${activeId === p.id ? 'is-active' : ''}`}
                style={{ ['--shelf-tone' as string]: p.tone, ['--shelf-soft' as string]: p.toneSoft }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <button type="button" className="shop-shelf-card__media" onClick={() => selectProduct(p.id)} aria-label={`View ${p.label}`}>
                  <span className="shop-shelf-card__badge">{p.badge}</span>
                  <Image src={p.image} alt={p.title} width={108} height={150} quality={60} loading="lazy" sizes="108px" style={{ objectFit: 'contain', width: '100%', height: 'auto', maxWidth: 108 }} />
                </button>
                <div className="shop-shelf-card__body">
                  <p className="shop-shelf-card__mech">{p.mechanism}</p>
                  <h3>{p.title}</h3>
                  <p className="shop-shelf-card__tag">{p.tagline}</p>
                  <div className="shop-shelf-card__row">
                    <div className="shop-shelf-card__price">
                      <strong>{p.price}</strong>
                      <span>{p.period}</span>
                    </div>
                    <div className="shop-shelf-card__rating">
                      Charged only if prescribed
                    </div>
                  </div>
                  <div className="shop-shelf-card__actions">
                    <button type="button" className="shop-shelf-card__view" onClick={() => selectProduct(p.id)}>
                      Quick view
                    </button>
                    <Link href="/get-started" className="shop-shelf-card__buy" style={{ background: p.tone, color: p.id === 'tirzepatide' ? '#0B132B' : '#042f2e' }}>
                      Add to plan <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
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
              Product details
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Everything included. <em>No surprises.</em>
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
                onClick={() => setActiveId(p.id)}
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
              <div className="shop-product__media">
                <div className="shop-product__media-top">
                  <p>Provider-guided protocols</p>
                  <div className="shop-product__media-pills">
                    <span>{active.badge}</span>
                    <span className="is-stock">In stock</span>
                  </div>
                </div>
                <h3 className="shop-product__media-title">{active.title}</h3>
                <div className="shop-product__art">
                  <motion.div
                    className="shop-product__bottle"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Image
                      src={active.image}
                      alt={`${active.title} vials`}
                      width={720}
                      height={960}
                      sizes="(max-width:960px) 80vw, 460px"
                      quality={88}
                      priority
                      className="shop-product__bottle-img"
                    />
                  </motion.div>
                  <div className="shop-product__price-chip">
                    <strong>FROM</strong>
                    <span>{active.price}{active.period}</span>
                  </div>
                </div>
              </div>

              <div className="shop-product__info">
                <p className="shop-product__mech" style={{ color: active.tone }}>{active.mechanism}</p>
                <h3>{active.title}</h3>
                <p className="shop-product__tagline">{active.tagline}</p>
                <p className="shop-product__desc">{active.desc}</p>

                <div className="shop-product__meta">
                  <div>
                    <strong style={{ color: active.tone }}>Rx</strong>
                    <span>if prescribed</span>
                  </div>
                  <div>
                    <strong>24h</strong>
                    <span>provider review</span>
                  </div>
                  <div>
                    <strong>US</strong>
                    <span>pharmacy fulfillment</span>
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
                    <Link href="/get-started" className="shop-cta-primary" style={{ background: active.tone, color: active.id === 'tirzepatide' ? '#0B132B' : '#042f2e' }}>
                      Add {active.label} to plan <ArrowRight size={18} />
                    </Link>
                    <Link href={active.href} className="shop-cta-secondary">
                      Full details
                    </Link>
                  </div>
                  <p className="shop-product__enrolled">Charged only if a licensed provider prescribes treatment.</p>
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
                  <Image src={p.image} alt={p.title} width={120} height={180} quality={70} loading="lazy" style={{ objectFit: 'contain' }} />
                </div>
                <div className="shop-compare-card__body">
                  <span className="shop-compare-card__badge" style={{ background: p.toneSoft, color: p.tone }}>{p.badge}</span>
                  <h3>{p.title}</h3>
                  <p>{p.mechanism}</p>
                  <div className="shop-compare-card__price">
                    <strong>{p.price}</strong><span>{p.period}</span>
                  </div>
                  <Link href="/get-started" className="shop-cta-secondary shop-cta-secondary--dark">
                    Add to plan <ArrowRight size={16} />
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
            { icon: <ShieldCheck size={22} />, title: 'Provider review', body: 'Licensed U.S. provider review before any Rx.' },
            { icon: <Truck size={22} />, title: 'Pharmacy shipping', body: 'Discreet delivery when prescribed. Timing not guaranteed.' },
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
