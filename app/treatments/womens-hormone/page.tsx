'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Check, ArrowRight, ShieldCheck, Sparkles, Moon, Sun, HelpCircle, Activity, ChevronDown, Pill, RefreshCw } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ImageCarousel from '../../../components/ImageCarousel'

export default function WomensHormoneHealth() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'What is Bioidentical Hormone Replacement Therapy (BHRT)?',
      a: 'Bioidentical hormones have an exact molecular structure matching the estrogen, progesterone, and DHEA naturally produced by the female body. This precise match allows for superior cell receptor binding and fewer side effects compared to synthetic hormones.',
    },
    {
      q: 'Will BHRT help with hot flashes, night sweats, and sleep disturbances?',
      a: 'Yes. Restoring balanced Estradiol and Micronized Progesterone levels directly targets vasomotor symptoms like hot flashes and night sweats, while progesterone promotes GABAergic brain activity for deep, restorative REM sleep.',
    },
    {
      q: 'How does the initial consultation and blood work process work?',
      a: 'After completing your online medical intake, you will receive a lab order to test your complete hormone panel. A VitalWellRx women’s health physician will review your lab values during a 1-on-1 consultation to customize your dosage.',
    },
    {
      q: 'Is there a long-term contract?',
      a: 'No. Our BHRT program operates on a month-to-month membership ($189/mo). You can adjust your prescription or cancel your subscription at any time.',
    },
  ]

  return (
    <main>
      {/* 1. HERO SECTION (2-Image Moving Carousel) */}
      <section style={{ position: 'relative', minHeight: '75vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ImageCarousel images={['/gen_womens1.webp', '/gen_womens2.webp']} alt="Women's Hormone Health Hero" height="100%" borderRadius="0" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,19,43,0.96) 0%, rgba(11,19,43,0.8) 55%, rgba(11,19,43,0.3) 100%)', zIndex: 1 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '5rem 1.5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '660px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', border: '1px solid rgba(212,175,55,0.3)' }}>
              <Heart size={16} /> Bioidentical BHRT Science
            </div>
            <h1 className="h1" style={{ color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
              Women&apos;s <span className="text-gold">Hormone Health</span><br/>& Balance Therapy.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '580px' }}>
              Restore restful sleep, skin collagen, emotional balance, and energy with doctor-formulated bioidentical estrogen, progesterone, and DHEA protocols.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/get-started" className="btn-primary">
                Check Eligibility <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-4 gap-6" style={{ textAlign: 'center' }}>
            {[
              { val: '100%', label: 'Bioidentical BHRT Formulations' },
              { val: '88%', label: 'Report Improved Sleep Quality' },
              { val: 'Dedicated', label: 'Female Health Physician Care' },
              { val: '$189/mo', label: 'All-Inclusive Home Delivery' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary-gold)' }}>{stat.val}</div>
                <div style={{ fontSize: '0.875rem', color: '#94A3B8', fontWeight: 600, marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FORMULATION & PACKAGING (Unique Bottle Mockup) */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div>
              <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Personalized BHRT</span>
              <h2 className="h2" style={{ marginTop: '0.5rem' }}>Compounded <span className="text-gold">Bioidentical Hormones</span></h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Synthetic hormones carry risks because their molecular structure doesn&apos;t match human receptors. VitalWellRx uses 100% bioidentical Estradiol, Micronized Progesterone, and DHEA compounded specifically to your blood lab values.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Exact molecular match to natural human hormones', 'Sublingual, topical creams, or oral capsule options', 'Supports GABAergic pathways for deep REM sleep', 'Promotes dermal collagen & cardiovascular lipid health'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}>
                    <ShieldCheck size={18} className="text-gold" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ position: 'relative', height: '420px', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--card-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <Image src="/supplement_bottle.webp" alt="Bioidentical Compound Packaging" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', backgroundColor: 'rgba(11,19,43,0.9)', backdropFilter: 'blur(10px)', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--primary-gold)', color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>
                💊 503A Licensed Compounding Quality
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UNIQUE CUSTOM VISUAL: BHRT HORMONE BALANCE RING GRAPHIC */}
      <section style={{ backgroundColor: 'var(--foreground)', color: 'var(--primary-navy)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', color: 'var(--primary-gold)' }}>Equilibrium Science</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem' }}>The Tri-Hormone Balance Ring</h2>
          </div>

          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            {/* Custom Vector SVG Circular Balance Ring */}
            <div style={{ backgroundColor: 'var(--primary-navy)', padding: '2.5rem', borderRadius: '1.5rem', border: '2px solid var(--primary-gold)', color: 'white', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary-gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Bioidentical Tri-Hormone Synergy
              </div>

              <div style={{ width: '220px', height: '220px', margin: '0 auto', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="220" height="220" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                  <circle cx="100" cy="100" r="80" stroke="#D4AF37" strokeWidth="8" strokeDasharray="502" strokeDashoffset="120" fill="none" />

                  {/* Tri-nodes */}
                  <circle cx="100" cy="20" r="10" fill="#D4AF37" />
                  <circle cx="170" cy="140" r="10" fill="#10B981" />
                  <circle cx="30" cy="140" r="10" fill="#3B82F6" />
                </svg>
                <div style={{ position: 'absolute', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary-gold)' }}>100%</div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase' }}>Equilibrium</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', marginTop: '2rem', fontSize: '0.75rem', fontWeight: 700 }}>
                <div style={{ color: '#D4AF37' }}>● Estradiol (E2)</div>
                <div style={{ color: '#10B981' }}>● Progesterone</div>
                <div style={{ color: '#3B82F6' }}>● DHEA-S</div>
              </div>
            </div>

            <div>
              <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', color: 'var(--primary-gold)' }}>Synergistic Care</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--primary-navy)' }}>3-Way Hormonal Calibration</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Estrogen, progesterone, and DHEA operate as a synchronized feedback triangle. Balancing one without the others leads to ongoing symptoms. Our women&apos;s health providers calibrate all three hormones in perfect proportion.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #E2E8F0', flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary-gold)' }}>Quarterly Labs</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>Precision blood work tracking.</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #E2E8F0', flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary-navy)' }}>1-on-1 Consults</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>Female health provider access.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Holistic Wellbeing</span>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>Restoring <span className="text-gold">Hormonal Harmony</span></h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: 'Restorative REM Sleep',
                desc: 'Micronized Progesterone calms the central nervous system, helping you fall asleep faster and stay in deep restorative sleep cycles.',
                icon: <Moon size={32} />,
                detail: 'Relieves night sweats & nocturnal awakenings.',
              },
              {
                title: 'Skin Elasticity & Bone Density',
                desc: 'Bioidentical Estradiol stimulates collagen synthesis in skin and locks calcium into bone matrix to protect bone density.',
                icon: <Sun size={32} />,
                detail: 'Supports glowing skin & joint health.',
              },
              {
                title: 'Mood & Libido Optimization',
                desc: 'Balanced DHEA and estrogen ratios enhance serotonin stability, boosting daily drive, libido, and emotional resilience.',
                icon: <Sparkles size={32} />,
                detail: 'Supports metabolic energy & brain focus.',
              },
            ].map((card, i) => (
              <motion.div key={i} className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} whileHover={{ y: -6 }}>
                <div>
                  <div style={{ padding: '0.85rem', backgroundColor: 'rgba(212,175,55,0.15)', borderRadius: '0.85rem', color: 'var(--primary-gold)', width: 'fit-content', marginBottom: '1.25rem' }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: 'white' }}>{card.title}</h3>
                  <p className="text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{card.desc}</p>
                </div>
                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Check size={14} /> {card.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Box */}
      <section style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Complete Program</span>
          <h2 className="h2" style={{ marginTop: '0.5rem', marginBottom: '3.5rem' }}>Women&apos;s BHRT Optimization Plan</h2>

          <div style={{ maxWidth: '580px', margin: '0 auto', backgroundColor: 'var(--primary-navy)', borderRadius: '1.5rem', padding: '3.5rem 2.5rem', border: '2px solid var(--primary-gold)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <span style={{ backgroundColor: 'var(--primary-gold)', color: 'var(--primary-navy)', padding: '0.35rem 1rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase' }}>
              Doctor-Supervised Full Protocol
            </span>

            <div style={{ fontSize: '4rem', fontWeight: 900, margin: '1.25rem 0 0.5rem', color: 'white' }}>
              $189<span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#94A3B8' }}>/month</span>
            </div>
            <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>All-inclusive membership. No insurance co-pays or hidden fees.</p>

            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
              {[
                'Bioidentical Estradiol & Micronized Progesterone formulations',
                'DHEA & thyroid hormone medical evaluation',
                'Comprehensive blood panel review with female health MD',
                'Ongoing dose calibration & unlimited messaging via Member Portal',
                'Free discreet shipping directly to your home address',
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
