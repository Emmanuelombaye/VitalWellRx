'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

const treatments = [
  {
    id: 'tirzepatide',
    label: 'Tirzepatide',
    tone: '#D4AF37',
    toneSoft: 'rgba(212, 175, 55, 0.22)',
    badge: 'Best Seller',
    title: 'Personalized Tirzepatide+',
    resultStat: '22%',
    description:
      'A weekly dual-agonist injection that targets both GIP and GLP-1 pathways to regulate appetite, reduce food noise, and support stronger weight-loss outcomes than GLP-1 alone.',
    detail: 'Available as Dual GIP / GLP-1 (Tirzepatide).',
    price: '$340',
    period: '/mo',
    enrolled: '1,000+ Patients enrolled in last 7 days',
    rating: '4.9/5',
    reviews: '800+ Reviews',
    productImage: '/vial-tirzepatide.webp',
    cutoutImage: '/cutout-duo-tirzepatide.webp',
    href: '/treatments/weight-loss',
  },
  {
    id: 'semaglutide',
    label: 'Semaglutide',
    tone: '#0F766E',
    toneSoft: 'rgba(15, 118, 110, 0.14)',
    badge: 'Proven GLP-1',
    title: 'Personalized Semaglutide+',
    resultStat: '15%',
    description:
      'A weekly GLP-1 injection designed to support steady, sustainable weight loss by helping regulate blood sugar, improve satiety, and quiet constant hunger signals.',
    detail: 'Available as GLP-1 (Semaglutide).',
    price: '$310',
    period: '/mo',
    enrolled: '750+ Patients enrolled in last 7 days',
    rating: '4.8/5',
    reviews: '620+ Reviews',
    productImage: '/vial-semaglutide.webp',
    cutoutImage: '/cutout-duo-semaglutide.webp',
    href: '/treatments/odt-tablets',
  },
]

export default function GoalTreatments() {
  const [activeId, setActiveId] = useState(treatments[0].id)
  const active = treatments.find((t) => t.id === activeId) ?? treatments[0]

  return (
    <section
      className="goal-treatments-section"
      style={{
        padding: '5rem 0 0',
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse at 12% -5%, rgba(212,175,55,0.18) 0%, transparent 48%), radial-gradient(ellipse at 88% 100%, rgba(15,118,110,0.1) 0%, transparent 45%), #F3F6FA',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.85rem, 4vw, 2.75rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              color: '#0B132B',
              margin: 0,
            }}
          >
            <em style={{ fontStyle: 'italic', fontWeight: 500, color: '#9A7B1A' }}>Personalized treatments</em>
            {' '}to help achieve your goals
          </h2>
          <p style={{ fontSize: '1.1rem', marginTop: '1rem', lineHeight: 1.55, color: '#475569' }}>
            Build a custom health plan by starting with a goal below.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
          <div
            role="tablist"
            aria-label="Choose a treatment"
            className="goal-tablist"
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '4px',
              padding: '6px',
              backgroundColor: '#ffffff',
              borderRadius: '999px',
              border: '2px solid #0B132B',
              boxShadow: '3px 4px 0 #0B132B',
            }}
          >
            {treatments.map((treatment) => {
              const selected = treatment.id === activeId
              return (
                <button
                  key={treatment.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(treatment.id)}
                  style={{
                    border: selected ? '2px solid #0B132B' : '2px solid transparent',
                    backgroundColor: selected ? treatment.toneSoft : 'transparent',
                    color: '#0B132B',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s, border-color 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {treatment.label}
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="goal-treatments-pane"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(260px, 1fr) minmax(320px, 1.05fr)',
              gap: '1rem 1.5rem',
              alignItems: 'end',
              paddingTop: '0.5rem',
            }}
          >
            {/* Floating people — no frame / no card */}
            <div
              className="goal-cutouts"
              aria-hidden="true"
              style={{
                position: 'relative',
                minHeight: '520px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                pointerEvents: 'none',
                overflow: 'visible',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '42%',
                  top: '8%',
                  transform: 'translateX(-50%)',
                  fontSize: 'clamp(5.5rem, 15vw, 10rem)',
                  fontWeight: 800,
                  color: 'rgba(11,19,43,0.07)',
                  letterSpacing: '-0.05em',
                  lineHeight: 0.85,
                  whiteSpace: 'nowrap',
                  userSelect: 'none',
                  zIndex: 0,
                }}
              >
                ↓{active.resultStat}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: 'min(100%, 580px)',
                  background: 'transparent',
                  overflow: 'visible',
                }}
              >
                <Image
                  src={active.cutoutImage}
                  alt=""
                  width={1160}
                  height={800}
                  quality={60}
                  loading="lazy"
                  sizes="(max-width:900px) 100vw, 580px"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    background: 'transparent',
                    mixBlendMode: 'multiply',
                  }}
                />
              </motion.div>
            </div>

            {/* Product card */}
            <div
              className="goal-product-card"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #0B132B',
                borderRadius: '1.5rem',
                padding: '1.45rem 1.45rem 1.35rem',
                boxShadow: '3px 4px 0 #0B132B',
                color: '#0B132B',
                marginBottom: '2.5rem',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      backgroundColor: active.toneSoft,
                      border: `1.5px solid ${active.tone}`,
                      padding: '0.28rem 0.7rem',
                      borderRadius: '999px',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                    }}
                  >
                    Weight Loss
                  </span>
                  <span
                    style={{
                      backgroundColor: 'rgba(15,118,110,0.1)',
                      border: '1.5px solid rgba(15,118,110,0.45)',
                      color: '#0F766E',
                      padding: '0.28rem 0.7rem',
                      borderRadius: '999px',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                    }}
                  >
                    {active.badge}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', fontWeight: 700, color: '#475569' }}>
                  <Star size={13} fill="#D4AF37" color="#D4AF37" />
                  {active.rating} · {active.reviews}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                <div style={{ position: 'relative', height: '168px' }}>
                  <Image
                    src={active.productImage}
                    alt={`${active.title} vials`}
                    fill
                    sizes="240px"
                    quality={70}
                    loading="lazy"
                    style={{ objectFit: 'contain', objectPosition: 'left center', mixBlendMode: 'multiply' }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, marginBottom: '0.45rem', lineHeight: 1.35 }}>
                    {active.enrolled}
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(145deg, #D4AF37 0%, #E8C75A 100%)',
                      color: '#0B132B',
                      fontWeight: 900,
                      fontSize: '0.82rem',
                      lineHeight: 1.2,
                      padding: '0.85rem 0.8rem',
                      borderRadius: '999px 999px 999px 1.1rem',
                      boxShadow: '0 8px 20px rgba(212,175,55,0.35)',
                      transform: 'rotate(3deg)',
                      textAlign: 'center',
                      border: '1.5px solid #0B132B',
                    }}
                  >
                    FROM {active.price}{active.period}
                    <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, marginTop: '2px' }}>
                      lowest cash price
                    </span>
                  </div>
                </div>
              </div>

              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.55rem', fontWeight: 800, lineHeight: 1.15 }}>
                {active.title}
              </h3>
              <p style={{ margin: '0 0 0.55rem', color: '#475569', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {active.description}
              </p>
              <p style={{ margin: '0 0 1.1rem', fontSize: '0.9rem', fontWeight: 600, color: '#0B132B' }}>
                {active.detail}
              </p>

              <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                <Link
                  href="/get-started"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.8rem 1.35rem',
                    borderRadius: '999px',
                    backgroundColor: '#D4AF37',
                    color: '#0B132B',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    border: '1.5px solid #0B132B',
                    boxShadow: '2px 3px 0 #0B132B',
                  }}
                >
                  See if I qualify
                </Link>
                <Link
                  href={active.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.8rem 1.2rem',
                    borderRadius: '999px',
                    border: '1.5px solid #0B132B',
                    color: '#0B132B',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    backgroundColor: '#fff',
                  }}
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
