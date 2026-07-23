'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scale, Check, ArrowRight, ShieldCheck, Flame, HeartPulse, Sparkles, ChevronDown, Clock, HelpCircle, Pill, Activity, TrendingDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ImageCarousel from '../../../components/ImageCarousel'

export default function MedicalWeightLoss() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How does Tirzepatide differ from standard GLP-1 medications like Semaglutide?',
      a: 'Tirzepatide is a dual GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 (glucagon-like peptide-1) receptor agonist. By targeting two distinct metabolic pathways instead of one, clinical trials have shown up to 22.5% average body weight loss compared to 15% with single-action GLP-1s.',
    },
    {
      q: 'Do I need insurance to participate in this medical weight loss program?',
      a: 'No. VitalWellRx operates on a flat-rate cash model. Your monthly subscription covers your physician consultation, prescription compounding, medication supply, and free discreet shipping directly to your door.',
    },
    {
      q: 'Are the medications compounded at accredited U.S. pharmacies?',
      a: 'Yes, 100%. All VitalWellRx medications are compounded at FDA-regulated 503A/503B U.S. licensed pharmacies adhering to strict cGMP sterility and potency standards.',
    },
    {
      q: 'How quickly can I expect to see results?',
      a: 'Most patients notice appetite suppression within 24 to 48 hours of their first dose, with measurable weight loss typically starting in Weeks 1–2 as your dosage is safely titrated by your physician.',
    },
  ]

  return (
    <main>
      {/* 1. HERO SECTION (2-Image Moving Carousel) */}
      <section style={{ position: 'relative', minHeight: '75vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ImageCarousel images={['/gen_weight1.webp', '/gen_weight2.webp']} alt="Medical Weight Loss Hero" height="100%" borderRadius="0" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,19,43,0.96) 0%, rgba(11,19,43,0.8) 55%, rgba(11,19,43,0.3) 100%)', zIndex: 1 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '5rem 1.5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '660px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', border: '1px solid rgba(212,175,55,0.3)' }}>
              <Sparkles size={16} /> Dual-Action GIP/GLP-1 Science
            </div>
            <h1 className="h1" style={{ color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
              Medical <span className="text-gold">Weight Loss</span><br />& Metabolic Optimization.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '580px' }}>
              Reset your body set-point with doctor-guided Tirzepatide and GLP-1 protocols. Average clinical weight loss of up to 22.5% without restrictive dieting or muscle loss.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/get-started" className="btn-primary">
                Check Eligibility <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-4 gap-6" style={{ textAlign: 'center' }}>
            {[
              { val: 'up to 22.5%', label: 'Average Body Weight Loss' },
              { val: '24-48 hrs', label: 'Appetite Control Onset' },
              { val: '100%', label: 'Physician-Guided Care' },
              { val: '50 States', label: 'Licensed US Coverage' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary-gold)' }}>{stat.val}</div>
                <div style={{ fontSize: '0.875rem', color: '#94A3B8', fontWeight: 600, marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. UNIQUE CUSTOM VISUAL: INTERACTIVE METABOLIC FAT LOSS CHART */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div>
              <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Clinical Data</span>
              <h2 className="h2" style={{ marginTop: '0.5rem' }}>Proven <span className="text-gold">Fat Loss Curve</span></h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Clinical studies demonstrate sustained, steady weight reduction over a 12 to 24 week timeline. Dual GIP/GLP-1 receptors preserve lean muscle mass while accelerating fat loss.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Curbs food noise and cravings within 48 hours', 'Protects lean skeletal muscle during caloric reduction', 'Improves insulin resistance and glucose disposal', 'Ongoing monthly physician blood panel monitoring'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}>
                    <ShieldCheck size={18} className="text-gold" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom SVG Weight Loss Chart Graphic */}
            <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--card-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderRadius: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-gold)', textTransform: 'uppercase' }}>Clinical Weight Reduction Trial</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>12-Week Weight Loss Curve</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#10B981', fontWeight: 800, fontSize: '0.875rem' }}>
                  <TrendingDown size={18} /> -22.5% Average
                </div>
              </div>

              {/* Vector SVG Chart Graphic */}
              <div style={{ width: '100%', height: '220px', position: 'relative' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid lines */}
                  <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  <line x1="0" y1="140" x2="400" y2="140" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                  {/* Standard Diet Line (Grey) */}
                  <path d="M 20 40 Q 150 70 380 95" stroke="#64748B" strokeWidth="2" strokeDasharray="6 6" fill="none" />

                  {/* Tirzepatide Curve (Gold Fill Area) */}
                  <path d="M 20 40 Q 120 120 380 175 L 380 200 L 20 200 Z" fill="url(#goldGradient)" opacity="0.3" />
                  <path d="M 20 40 Q 120 120 380 175" stroke="#D4AF37" strokeWidth="4" fill="none" />

                  {/* Nodes */}
                  <circle cx="20" cy="40" r="6" fill="#D4AF37" />
                  <circle cx="140" cy="110" r="6" fill="#D4AF37" />
                  <circle cx="380" cy="175" r="6" fill="#D4AF37" />

                  <defs>
                    <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
                <span>Week 1 (Baseline)</span>
                <span>Week 6 (-12%)</span>
                <span>Week 12 (-22.5%)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORMULATION SHOWCASE (Unique Bottle Product Mockup) */}
      <section style={{ backgroundColor: 'var(--foreground)', color: 'var(--primary-navy)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', color: 'var(--primary-gold)' }}>Formulation Options</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem' }}>Pharmaceutical-Grade Compounding</h2>
          </div>

          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div style={{ position: 'relative', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
              <Image src="/supplement_bottle.webp" alt="Cere Vitality & Tirzepatide Compounds" fill style={{ objectFit: 'cover' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '1.75rem', border: '2px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-gold)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  <Pill size={16} /> Sublingual ODT Dissolving Tablets
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>Oral Dissolving Tirzepatide / GLP-1</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Perfect for patients who prefer a needle-free experience. Placed under the tongue, sublingual formulations absorb directly into the bloodstream for maximum bioavailability.
                </p>
              </div>

              <div style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '1.75rem', border: '2px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-navy)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  <Activity size={16} /> Weekly Micro-Injections
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>Subcutaneous Injectable Compounds</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Once-weekly painless micro-injections using ultra-fine insulin needles. Delivers steady, long-acting therapeutic plasma concentration across 7 full days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey Timeline */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Treatment Progression</span>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>Your 90-Day <span className="text-gold">Transformation Roadmap</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { phase: 'Weeks 1–2', title: 'Initiation & Adaptation', desc: 'Low starter dose to assess tolerance. Craving reduction begins within 48 hours.' },
              { phase: 'Weeks 3–6', title: 'Steady Reduction', desc: 'Gradual dose titration. Fat loss accelerates while maintaining high energy levels.' },
              { phase: 'Weeks 7–12', title: 'Peak Metabolic Velocity', desc: 'Target weight loss range achieved. Significant reduction in waist circumference.' },
              { phase: 'Month 4+', title: 'Maintenance Protocol', desc: 'Dose stabilization or gradual tapering to lock in your new baseline weight permanently.' },
            ].map((step, i) => (
              <div key={i} className="glass-card" style={{ padding: '1.75rem', position: 'relative' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>{step.phase}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0.5rem 0', color: 'white' }}>{step.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All-Inclusive Pricing Card */}
      <section style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Simple Monthly Subscription</span>
          <h2 className="h2" style={{ marginTop: '0.5rem', marginBottom: '3.5rem' }}>Everything Included. Cancel Anytime.</h2>

          <div style={{ maxWidth: '580px', margin: '0 auto', backgroundColor: 'var(--primary-navy)', borderRadius: '1.5rem', padding: '3.5rem 2.5rem', border: '2px solid var(--primary-gold)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <span style={{ backgroundColor: 'var(--primary-gold)', color: 'var(--primary-navy)', padding: '0.35rem 1rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase' }}>
              Doctor-Guided Complete Program
            </span>

            <div style={{ fontSize: '4rem', fontWeight: 900, margin: '1.25rem 0 0.5rem', color: 'white' }}>
              $340<span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#94A3B8' }}>/month</span>
            </div>
            <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>No medical insurance required. No surprise co-pays or shipping fees.</p>

            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
              {[
                'Compounded Tirzepatide or GLP-1 medication (monthly supply)',
                'Initial medical review & 1-on-1 provider intake consultation',
                'All injection supplies (needles, alcohol prep pads) or ODT tablets',
                'Ongoing dose adjustments & unlimited messaging via Member Portal',
                'Free overnight temperature-controlled discreet delivery',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}>
                  <ShieldCheck size={18} className="text-gold" style={{ flexShrink: 0 }} /> {item}
                </div>
              ))}
            </div>

            <Link href="/get-started" className="btn-primary" style={{ width: '100%', padding: '1.15rem' }}>
              Start 5-Minute Questionnaire <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Got Questions?</span>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>Frequently Asked <span className="text-gold">Questions</span></h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{ padding: '1.5rem', cursor: 'pointer', borderColor: openFaq === idx ? 'var(--primary-gold)' : 'var(--card-border)' }}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={20} className="text-gold" /> {faq.q}
                  </div>
                  <ChevronDown size={20} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </div>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', color: '#94A3B8', lineHeight: 1.7, fontSize: '0.95rem' }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
