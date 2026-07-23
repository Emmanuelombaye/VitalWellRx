'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, ArrowRight, Heart, Sparkles, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ImageCarousel from '../../../components/ImageCarousel'

export default function FertilityMensPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Why combine HCG or Enclomiphene with TRT?',
      a: 'TRT suppresses natural LH (Luteinizing Hormone) signals from the pituitary gland. HCG and Enclomiphene mimic LH to keep Leydig cells active, preserving testicular volume, sperm production, and natural testosterone synthesis.',
    },
    {
      q: 'Is Enclomiphene taken orally or injected?',
      a: 'Enclomiphene citrate is a selective estrogen receptor modulator (SERM) taken daily as a convenient oral capsule.',
    },
  ]

  return (
    <main>
      {/* HERO SECTION */}
      <section style={{ position: 'relative', minHeight: '75vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ImageCarousel images={['/gen_mens2.jpg', '/about_hero.png']} alt="Male Fertility Hero" height="100%" borderRadius="0" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,19,43,0.96) 0%, rgba(11,19,43,0.8) 55%, rgba(11,19,43,0.3) 100%)', zIndex: 1 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '5rem 1.5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '660px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', border: '1px solid rgba(212,175,55,0.3)' }}>
              <Sparkles size={16} /> Pituitary & Testicular Support
            </div>
            <h1 className="h1" style={{ color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
              Male Fertility & <span className="text-gold">HCG Protocols</span>.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '580px' }}>
              Protect endogenous sperm motility, testicular size, and natural hormone output alongside TRT with doctor-prescribed HCG and Enclomiphene.
            </p>
            <Link href="/get-started" className="btn-primary">
              Check Fertility Protocol <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div>
              <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Endocrine Protection</span>
              <h2 className="h2" style={{ marginTop: '0.5rem' }}>Preserving Endogenous Synthesis</h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Exogenous testosterone suppresses the hypothalamic-pituitary-gonadal (HPG) axis. Adding HCG or Enclomiphene keeps testicular tissue active and fertile.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Preserves natural testicular size & firmness', 'Supports sperm count and reproductive fertility metrics', 'Prevents intratesticular testosterone collapse', 'Supervised by male endocrinology specialists'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}>
                    <ShieldCheck size={18} className="text-gold" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ position: 'relative', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <Image src="/gen_mens2.jpg" alt="Male Fertility Consultation" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ marginBottom: '3.5rem' }}>HCG & Enclomiphene Plan</h2>
          <div style={{ maxWidth: '580px', margin: '0 auto', backgroundColor: 'var(--primary-navy)', borderRadius: '1.5rem', padding: '3.5rem 2.5rem', border: '2px solid var(--primary-gold)' }}>
            <div style={{ fontSize: '4rem', fontWeight: 900, color: 'white', marginBottom: '0.5rem' }}>
              $219<span style={{ fontSize: '1.25rem', color: '#94A3B8' }}>/month</span>
            </div>
            <p className="text-muted" style={{ marginBottom: '2rem' }}>Comprehensive fertility protection protocol prescribed by male health MDs.</p>
            <Link href="/get-started" className="btn-primary" style={{ width: '100%', padding: '1.1rem' }}>
              Start Assessment <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="h2" style={{ textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
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
