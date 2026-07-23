'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, ShieldCheck, Dumbbell, ArrowRight, HeartPulse, Stethoscope, BadgeCheck, Clock, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ImageCarousel from '../components/ImageCarousel'
import WhatWeTreat from '../components/WhatWeTreat'

export default function Home() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <main>
      {/* Announcement Bar */}
      <div style={{ backgroundColor: 'var(--foreground)', color: 'var(--primary-navy)', padding: '10px', textAlign: 'center', fontWeight: 600, fontSize: '0.875rem' }}>
        No insurance needed. Precision care, customized just for you. <Link href="/get-started" style={{ textDecoration: 'underline', marginLeft: '8px' }}>Start today →</Link>
      </div>

      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        minHeight: '88vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        padding: '4rem 6%',
        overflow: 'hidden'
      }}>
        {/* Single First Hero Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img 
            src="/hero_bg.png" 
            alt="VitalWellRx Hero Background" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
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
            Your Care.<br/>
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

          {/* Floating Product Card */}
          <motion.div variants={itemVariants} className="product-overlay-card" style={{ marginTop: '1.5rem' }}>
            <div style={{ width: '90px', flexShrink: 0, backgroundColor: '#f1f5f9', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
              <Image src="/supplement_bottle.png" alt="Cere Vitality Blend" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>Featured Protocol</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '2px 0' }}>Cere Vitality Blend</h3>
              <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Dual-action metabolic support and longevity optimization.</p>
              <div style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 800 }}>$340/mo.</span>
                <Link href="/get-started" style={{ fontSize: '0.75rem', backgroundColor: 'var(--primary-navy)', color: 'white', padding: '5px 12px', borderRadius: '4px', fontWeight: 700 }}>Select</Link>
              </div>
            </div>
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

      {/* Final CTA */}
      <section style={{ padding: '6rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(212,175,55,0.08), transparent 70%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
              Your Health.<br/><span className="text-gold">Your Rules.</span>
            </h2>
            <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              No insurance required. Precision care, just for you. Start your free consultation today.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn-primary" style={{ fontSize: '1.125rem' }}>
                Get Started <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
              <Link href="/treatments" className="btn-outline" style={{ fontSize: '1.125rem' }}>
                View Treatments
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
