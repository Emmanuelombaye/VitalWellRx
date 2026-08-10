'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, ArrowRight, HeartPulse, Stethoscope, BadgeCheck, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import WhatWeTreat from '../components/WhatWeTreat'
import GoalTreatments from '../components/GoalTreatments'
import MedicalTeam from '../components/MedicalTeam'
import WhyVitalWell from '../components/WhyVitalWell'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
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
      <section className="home-hero" style={{
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
            quality={60}
            priority
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
          className="home-hero__copy flex-col gap-6"
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

      {/* Goal-based treatments — tryyucca-style selector */}
      <GoalTreatments />

      {/* Hims-style medical team */}
      <MedicalTeam />

      {/* Why VitalWellRx — 4 trust cards */}
      <WhyVitalWell />

      {/* From here down: Yucca-style lower homepage (2 treatments only) */}
      <WhatWeTreat />
    </main>
  )
}
