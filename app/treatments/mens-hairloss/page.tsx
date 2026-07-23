'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, ArrowRight, Sparkles, ChevronDown, Check, Scissors, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ImageCarousel from '../../../components/ImageCarousel'

export default function MensHairLossPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How does the Oral Finasteride + Minoxidil dual complex stop hair loss?',
      a: 'Finasteride blocks 5-alpha reductase, reducing DHT (dihydrotestosterone) levels at the hair follicle by up to 70%. Minoxidil widens follicle blood vessels, delivering oxygen and nutrients to reverse miniaturization and trigger thick regrowth.',
    },
    {
      q: 'Is topical GHK-Cu copper peptide combined with the oral treatment?',
      a: 'Yes, our prescription hair restoration protocol pairs daily oral dual-action capsules with topical GHK-Cu copper peptide scalp spray to stimulate hair follicle stem cell proliferation and scalp extracellular matrix density.',
    },
  ]

  return (
    <main>
      {/* HERO SECTION */}
      <section style={{ position: 'relative', minHeight: '75vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ImageCarousel images={['/gen_mens2.jpg', '/gen_mens1.jpg']} alt="Men's Hair Loss Protocol Hero" height="100%" borderRadius="0" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,19,43,0.96) 0%, rgba(11,19,43,0.8) 55%, rgba(11,19,43,0.3) 100%)', zIndex: 1 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '5rem 1.5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '660px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', border: '1px solid rgba(212,175,55,0.3)' }}>
              <Zap size={16} /> DHT Blocker & Follicle Regrowth Complex
            </div>
            <h1 className="h1" style={{ color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
              Men&apos;s Advanced <span className="text-gold">Hair Loss Protocol</span>.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '580px' }}>
              Halt male pattern baldness and regrow thick hair density with doctor-compounded Oral Finasteride, Minoxidil, and GHK-Cu copper peptides.
            </p>
            <Link href="/get-started" className="btn-primary">
              Check Hair Loss Eligibility <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Science & Formulations */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div>
              <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Follicle Vascularization</span>
              <h2 className="h2" style={{ marginTop: '0.5rem' }}>Dual-Action DHT Suppression</h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Male pattern androgenic alopecia is triggered by scalp DHT accumulation. Our dual oral capsule suppresses follicle DHT by up to 70% while boosting blood micro-circulation.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Blocks 5-alpha reductase & scalp DHT binding', 'Increases follicle vascularization & shaft thickness', 'Formulated in convenient daily oral 2-in-1 capsules', 'Board-certified dermatologist telehealth oversight'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}>
                    <ShieldCheck size={18} className="text-gold" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ position: 'relative', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <Image src="/gen_mens2.jpg" alt="Men's Hair Loss Restoration" fill sizes="(max-width: 768px) 100vw, 50vw" quality={80} style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Box */}
      <section style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Complete Regrowth Kit</span>
          <h2 className="h2" style={{ marginTop: '0.5rem', marginBottom: '3.5rem' }}>Oral Finasteride + Minoxidil Protocol</h2>

          <div style={{ maxWidth: '580px', margin: '0 auto', backgroundColor: 'var(--primary-navy)', borderRadius: '1.5rem', padding: '3.5rem 2.5rem', border: '2px solid var(--primary-gold)' }}>
            <div style={{ fontSize: '4rem', fontWeight: 900, color: 'white', marginBottom: '0.5rem' }}>
              $89<span style={{ fontSize: '1.25rem', color: '#94A3B8' }}>/month</span>
            </div>
            <p className="text-muted" style={{ marginBottom: '2rem' }}>Monthly supply of 2-in-1 oral dissolving capsules + GHK-Cu scalp spray shipped directly to your door.</p>
            <Link href="/get-started" className="btn-primary" style={{ width: '100%', padding: '1.1rem' }}>
              Start Hair Assessment <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
