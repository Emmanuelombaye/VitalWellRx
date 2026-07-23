'use client'

import { motion } from 'framer-motion'
import { Activity, ShieldCheck, Dumbbell, ArrowRight, HeartPulse, Stethoscope, BadgeCheck, Clock, Sparkles, Star, CheckCircle2, Pill, Scale, Beaker, Dna } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import WhatWeTreat from '../components/WhatWeTreat'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const featuredProtocols = [
    {
      id: 'weight-loss',
      badge: '🔥 MOST POPULAR METABOLIC',
      title: 'Tirzepatide Dual GIP / GLP-1',
      subtitle: 'Up to 22.5% average weight reduction',
      price: '$340',
      period: '/month',
      image: '/featured_tirzepatide.webp',
      href: '/treatments/weight-loss',
      bullets: ['Curbs food noise in 24-48 hours', 'Preserves lean skeletal muscle', '100% board-certified MD oversight'],
      tags: ['503A Compounded', 'SubQ Injectable'],
    },
    {
      id: 'odt-tablets',
      badge: '⚡ 100% NEEDLE-FREE ORAL',
      title: 'Sublingual Tirzepatide & GLP-1 ODT',
      subtitle: 'Daily sublingual oral dissolving tablets',
      price: '$310',
      period: '/month',
      image: '/featured_odt.webp',
      href: '/treatments/odt-tablets',
      bullets: ['Dissolves under tongue in 90 seconds', 'Zero needles, syringes, or refrigerating', 'Direct capillary mucosal absorption'],
      tags: ['Sublingual ODT', 'Painless Daily'],
    },
    {
      id: 'mens-trt',
      badge: '👑 BIOIDENTICAL TESTOSTERONE',
      title: "Men's TRT & Vitality Protocol",
      subtitle: 'Restoring free serum testosterone levels',
      price: '$199',
      period: '/month',
      image: '/shop_trt.webp',
      href: '/treatments/mens-hormone',
      bullets: ['Target range: 800–1,100 ng/dL', 'Includes estrogen blocker & supplies', 'Quarterly full blood panel tracking'],
      tags: ['Testosterone Cypionate', 'Lab Tracking'],
    },
    {
      id: 'peptide-repair',
      badge: '🧬 CELLULAR REGENERATION',
      title: 'BPC-157 Pentadecapeptide Repair',
      subtitle: 'Accelerated joint, tendon & gut healing',
      price: '$349',
      period: '/month',
      image: '/shop_bpc157.webp',
      href: '/treatments/peptide-therapy',
      bullets: ['Micro-vascular angiogenesis support', '2x–3x faster tendon recovery', '503A cold-chain doorstep delivery'],
      tags: ['Pentadecapeptide', 'Tissue Repair'],
    },
  ]

  return (
    <main>
      {/* Announcement Bar */}
      <div style={{ backgroundColor: 'var(--foreground)', color: 'var(--primary-navy)', padding: '10px', textAlign: 'center', fontWeight: 600, fontSize: '0.875rem' }}>
        No insurance needed. Precision care, customized just for you. <Link href="/get-started" style={{ textDecoration: 'underline', marginLeft: '8px' }}>Start today →</Link>
      </div>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '82vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '4rem 6%',
        overflow: 'hidden'
      }}>
        {/* Single First Hero Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/hero_bg.webp"
            alt="VitalWellRx Hero Background"
            fill
            priority
            quality={75}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Dark Gradient Overlay Optimized for Left-Aligned Text */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(11,19,43,0.95) 0%, rgba(11,19,43,0.75) 55%, rgba(11,19,43,0.25) 100%)',
          zIndex: 1
        }}></div>

        {/* Left-Aligned Hero Content */}
        <motion.div
          className="flex-col gap-6"
          style={{ position: 'relative', zIndex: 2, maxWidth: '650px', textAlign: 'left', alignItems: 'flex-start' }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2" style={{ backgroundColor: 'rgba(212,175,55,0.15)', padding: '0.4rem 1rem', borderRadius: '99px', border: '1px solid rgba(212,175,55,0.3)' }}>
            <ShieldCheck size={16} className="text-gold" />
            <span className="text-gold" style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.5px' }}>DOCTOR-GUIDED TELEHEALTH</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="h1" style={{ color: 'white' }}>
            Your Care.<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--primary-gold)' }}>Your Way.</span>
          </motion.h1>

          <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', maxWidth: '540px' }}>
            Clinically-proven, MD overseen, longevity protocols and metabolic treatments, delivered directly to your door. No hidden fees, ever.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'flex-start' }}>
            <Link href="/get-started" className="btn-primary">
              Check Eligibility <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee Trust Section */}
      <section className="marquee-container">
        <div className="marquee-content">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex' }}>
              <div className="marquee-item"><HeartPulse size={16} /> 30,000+ PATIENTS NATIONWIDE</div>
              <div className="marquee-item"><Stethoscope size={16} /> BOARD-CERTIFIED PHYSICIANS</div>
              <div className="marquee-item"><BadgeCheck size={16} /> U.S. LICENSED PHARMACIES</div>
              <div className="marquee-item"><Clock size={16} /> 24-48 HOUR MEDICAL REVIEW</div>
              <div className="marquee-item"><ShieldCheck size={16} /> ZERO HIDDEN FEES</div>
            </div>
          ))}
        </div>
      </section>

      {/* As Featured In Press Bar */}
      <section style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '1.75rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
            AS FEATURED IN CLINICAL & HEALTH MEDIA
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.7, fontWeight: 900, fontSize: '1.1rem', letterSpacing: '1px', color: '#94A3B8' }}>
            <span>FORBES</span>
            <span>BLOOMBERG HEALTH</span>
            <span>MEN&apos;S HEALTH</span>
            <span>WALL STREET JOURNAL</span>
            <span>HEALTHLINE</span>
          </div>
        </div>
      </section>

      {/* Luxury Featured Protocols Showcase Section */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.75rem' }}>
              <Sparkles size={16} /> Doctor-Supervised Formulations
            </div>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>
              Featured <span className="text-gold">Medical Protocols</span>
            </h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', maxWidth: '620px', margin: '0.75rem auto 0', lineHeight: 1.6 }}>
              Explore our most requested telehealth programs. All plans include 1-on-1 doctor intake, pharmacy compounding, and doorstep shipping.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-2 gap-8">
            {featuredProtocols.map(fp => (
              <motion.div
                key={fp.id}
                whileHover={{ y: -6 }}
                style={{
                  backgroundColor: 'var(--primary-navy)',
                  borderRadius: '1.5rem',
                  border: '1px solid var(--primary-gold)',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Card Image Banner */}
                  <div style={{ position: 'relative', height: '240px', width: '100%' }}>
                    <Image src={fp.image} alt={fp.title} fill sizes="(max-width: 768px) 100vw, 50vw" quality={80} loading="eager" priority style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'rgba(11,19,43,0.9)', backdropFilter: 'blur(8px)', color: 'var(--primary-gold)', padding: '5px 14px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', border: '1px solid rgba(212,175,55,0.4)' }}>
                      {fp.badge}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>
                      {fp.title}
                    </h3>
                    <div style={{ fontSize: '0.875rem', color: 'var(--primary-gold)', fontWeight: 700, marginBottom: '1.25rem' }}>
                      {fp.subtitle}
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {fp.bullets.map((bullet, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)' }}>
                          <CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} /> {bullet}
                        </li>
                      ))}
                    </ul>

                    {fp.tags && (
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {fp.tags.map(tag => (
                          <span key={tag} style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: 'var(--primary-gold)', border: '1px solid rgba(212,175,55,0.25)', padding: '3px 10px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700 }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Pricing & Button */}
                <div style={{ padding: '1.5rem 2rem 2rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '2.25rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>
                      {fp.price}<span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 600 }}>{fp.period}</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '2px' }}>No hidden fees</div>
                  </div>

                  <Link href={fp.href} className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                    Explore Protocol <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Treat Section (Ro-Inspired Interactive Condition Grid) */}
      <WhatWeTreat />

      {/* How It Works Preview */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '2px' }}>How It Works</span>
          <h2 className="h2" style={{ marginTop: '0.5rem' }}>Simple. <span className="text-gold">Seamless.</span> Science-Backed.</h2>
          <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '550px', margin: '0 auto 3rem' }}>From your first consult to your front door — optimized health in 4 simple steps.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { num: '01', title: 'Health Profile', desc: 'Quick 5-min online questionnaire.' },
              { num: '02', title: 'MD Review', desc: 'Board-certified physician reviews in 24–48hrs.' },
              { num: '03', title: 'Rx Shipped', desc: 'Compounded meds delivered to your door.' },
              { num: '04', title: 'Optimize', desc: 'Ongoing monitoring via your Member Portal.' },
            ].map((step, i) => (
              <motion.div key={i} className="glass-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary-gold)', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem' }}>{step.num}</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>{step.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '2.5rem', color: 'var(--primary-gold)', fontWeight: 700, fontSize: '1rem' }}>
            Learn more about the process <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: 'var(--foreground)', color: 'var(--primary-navy)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '2px', color: 'var(--primary-gold)' }}>What Our Patients Say</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '3rem' }}>Real Results. Real People.</h2>

          <div className="grid grid-cols-3 gap-6">
            {[
              { name: 'Michael R.', role: 'Weight Loss Protocol', quote: 'I lost 38 lbs in 4 months. The personalized approach and physician oversight made all the difference. VitalWellRx changed my life.', rating: 5 },
              { name: 'Sarah K.', role: 'Hormone Optimization', quote: 'After years of fatigue and brain fog, my VitalWellRx protocol gave me my energy back. The data-driven approach is like nothing else out there.', rating: 5 },
              { name: 'James T.', role: 'Peptide Therapy', quote: 'The recovery benefits from peptide therapy have been incredible for my training. The convenience of telehealth and doorstep delivery is unmatched.', rating: 5 },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} style={{ color: '#D4AF37', fontSize: '1.25rem' }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{t.quote}"</p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9375rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
