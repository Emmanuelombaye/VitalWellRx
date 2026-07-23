'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pill, Check, ArrowRight, ShieldCheck, Sparkles, ChevronDown, HelpCircle, Activity, HeartPulse } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ImageCarousel from '../../../components/ImageCarousel'

export default function ODTTabletsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How do Sublingual Oral Dissolving Tablets (ODT) work?',
      a: 'ODT formulations are placed under the tongue where they dissolve in under 90 seconds. The active peptide is absorbed directly through the sublingual vascular mucosa into the bloodstream, bypassing stomach acid breakdown.',
    },
    {
      q: 'Is ODT Tirzepatide as effective as weekly injections?',
      a: 'Clinical absorption studies show that sublingual mucosal delivery with specialized permeability enhancers achieves steady daily plasma drug levels comparable to weekly injections, making it ideal for needle-averse patients.',
    },
    {
      q: 'How should I take my daily ODT dose?',
      a: 'Place one tablet under your tongue first thing in the morning on an empty stomach. Allow it to dissolve completely for 90 seconds without swallowing or drinking water for 15 minutes afterward.',
    },
  ]

  return (
    <main>
      {/* HERO SECTION */}
      <section style={{ position: 'relative', minHeight: '75vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ImageCarousel images={['/supplement_bottle.png', '/gen_weight2.jpg']} alt="Sublingual ODT Hero" height="100%" borderRadius="0" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,19,43,0.96) 0%, rgba(11,19,43,0.8) 55%, rgba(11,19,43,0.3) 100%)', zIndex: 1 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '5rem 1.5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '660px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', border: '1px solid rgba(212,175,55,0.3)' }}>
              <Pill size={16} /> 100% Needle-Free Sublingual Delivery
            </div>
            <h1 className="h1" style={{ color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
              Sublingual <span className="text-gold">GLP-1 & Tirzepatide</span> ODT Tablets.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '580px' }}>
              Daily dissolving sublingual tablets engineered for painless, needle-free weight loss and continuous appetite control.
            </p>
            <Link href="/get-started" className="btn-primary">
              Check ODT Eligibility <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview & Formulations */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div>
              <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Painless Oral Delivery</span>
              <h2 className="h2" style={{ marginTop: '0.5rem' }}>Sublingual Bio-Absorption Technology</h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Formulated with SNAC mucosal absorption enhancers, our ODT tablets enter systemic capillary circulation directly under the tongue, bypassing digestive enzymatic degradation.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Dissolves under tongue in 90 seconds', 'Zero needles, syringes, or refrigeration required', 'Steady daily therapeutic blood plasma concentration', 'Compounded in FDA-regulated 503A U.S. pharmacies'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}>
                    <ShieldCheck size={18} className="text-gold" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ position: 'relative', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <Image src="/supplement_bottle.png" alt="ODT Sublingual Bottle Packaging" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Box */}
      <section style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Painless Plan</span>
          <h2 className="h2" style={{ marginTop: '0.5rem', marginBottom: '3.5rem' }}>ODT Oral Dissolving Protocol</h2>

          <div style={{ maxWidth: '580px', margin: '0 auto', backgroundColor: 'var(--primary-navy)', borderRadius: '1.5rem', padding: '3.5rem 2.5rem', border: '2px solid var(--primary-gold)' }}>
            <div style={{ fontSize: '4rem', fontWeight: 900, color: 'white', marginBottom: '0.5rem' }}>
              $310<span style={{ fontSize: '1.25rem', color: '#94A3B8' }}>/month</span>
            </div>
            <p className="text-muted" style={{ marginBottom: '2rem' }}>Monthly supply of 30 daily sublingual dissolving tablets shipped to your door.</p>
            <Link href="/get-started" className="btn-primary" style={{ width: '100%', padding: '1.1rem' }}>
              Start ODT Intake <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="h2">Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'white' }}>
                  <span>{faq.q}</span>
                  <ChevronDown size={20} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </div>
                {openFaq === idx && <p style={{ marginTop: '1rem', color: '#94A3B8', lineHeight: 1.6 }}>{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
