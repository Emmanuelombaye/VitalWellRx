'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Check, ArrowRight, ShieldCheck, Dumbbell, Flame, Sparkles, ChevronDown, Activity, Heart, HelpCircle, Award, Stethoscope, Gauge } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ImageCarousel from '../../../components/ImageCarousel'

export default function MensHormoneHealth() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How do I know if my testosterone levels are low?',
      a: 'Common indicators include persistent brain fog, chronic afternoon fatigue, difficulty retaining lean muscle despite workouts, increased belly fat, decreased libido, and mood irritability. Our comprehensive blood panel measures total and free testosterone, estradiol, SHBG, and thyroid function.',
    },
    {
      q: 'How does VitalWellRx TRT differ from standard clinic visits?',
      a: 'We eliminate the hassle of weekly clinic visits. Your physician consultation is conducted online, your blood panel is reviewed remotely, and your bioidentical testosterone formulation is delivered directly to your home.',
    },
    {
      q: 'Will TRT suppress my natural testosterone production?',
      a: 'Exogenous testosterone can suppress natural output. Where appropriate, our providers include HCG or Enclomiphene in your customized protocol to maintain testicular size, natural hormone synthesis, and fertility.',
    },
    {
      q: 'What is included in the $199/month program?',
      a: 'Your monthly subscription includes your custom compounded testosterone (cypionate or enanthate), estrogen blocker (Anastrozole if needed), all medical supplies, quarterly lab panel analysis, physician consultations, and free home delivery.',
    },
  ]

  return (
    <main>
      {/* 1. HERO SECTION (2-Image Moving Carousel) */}
      <section style={{ position: 'relative', minHeight: '75vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ImageCarousel images={['/gen_mens1.jpg', '/gen_mens2.jpg']} alt="Men's Hormone Health Hero" height="100%" borderRadius="0" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,19,43,0.96) 0%, rgba(11,19,43,0.8) 55%, rgba(11,19,43,0.3) 100%)', zIndex: 1 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '5rem 1.5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '660px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', border: '1px solid rgba(212,175,55,0.3)' }}>
              <Zap size={16} /> Bioidentical TRT & Performance Science
            </div>
            <h1 className="h1" style={{ color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
              Men&apos;s <span className="text-gold">Hormone Health</span><br/>& TRT Optimization.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '580px' }}>
              Reclaim peak physical drive, mental clarity, and lean muscle composition. Doctor-supervised testosterone therapy tailored to your exact biomarkers.
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
              { val: '3x', label: 'Improved Daily Energy & Focus' },
              { val: '100%', label: 'Bioidentical Testosterone' },
              { val: 'Quarterly', label: 'Full Lab Biomarker Monitoring' },
              { val: '$199/mo', label: 'Flat-Rate Home Delivery' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary-gold)' }}>{stat.val}</div>
                <div style={{ fontSize: '0.875rem', color: '#94A3B8', fontWeight: 600, marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CLINICAL OVERSIGHT (Unique Image) */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div style={{ position: 'relative', height: '420px', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--card-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <Image src="/about_hero.png" alt="Board-Certified Hormone Doctors" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', backgroundColor: 'rgba(11,19,43,0.9)', backdropFilter: 'blur(10px)', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--primary-gold)', color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>
                👨‍⚕️ Board-Certified Men&apos;s Health Physicians
              </div>
            </div>

            <div>
              <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Physician Oversight</span>
              <h2 className="h2" style={{ marginTop: '0.5rem' }}>Expert-Guided <span className="text-gold">Hormone Protocols</span></h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Every TRT prescription is customized by a licensed physician specializing in male endocrinology. We continuously analyze your lab work to optimize free testosterone while controlling hematocrit and estradiol.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Quarterly blood panel analysis included', '1-on-1 online video consults with male health MDs', 'Precision dose titration (Cypionate or Enanthate)', 'On-demand provider support via Member Portal'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}>
                    <ShieldCheck size={18} className="text-gold" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UNIQUE CUSTOM VISUAL: TESTOSTERONE BIOMARKER RANGE GRAPHIC */}
      <section style={{ backgroundColor: 'var(--foreground)', color: 'var(--primary-navy)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', color: 'var(--primary-gold)' }}>Biomarker Target</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem' }}>Optimizing Your Testosterone Range</h2>
          </div>

          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--primary-navy)' }}>Moving Beyond "Normal" to Optimal</h3>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Standard lab reference ranges count anything above 264 ng/dL as "normal," even if you feel exhausted. VitalWellRx targets the upper optimal quartile (800–1,100 ng/dL) where physical stamina and mental drive thrive.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #E2E8F0', flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#EF4444' }}>Sub-Optimal (Low T)</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>&lt; 300 ng/dL — Brain fog, fatigue, muscle loss.</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #E2E8F0', flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary-gold)' }}>VitalWellRx Target</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>800 – 1,100 ng/dL — Peak stamina & drive.</div>
                </div>
              </div>
            </div>

            {/* Custom Vector SVG Testosterone Gauge Graphic */}
            <div style={{ backgroundColor: 'var(--primary-navy)', padding: '2.5rem', borderRadius: '1.5rem', border: '2px solid var(--primary-gold)', color: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-gold)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
                <Gauge size={20} /> Total Serum Testosterone (ng/dL)
              </div>

              {/* Gauge Bar */}
              <div style={{ margin: '2rem 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94A3B8', marginBottom: '0.5rem' }}>
                  <span>200 ng/dL</span>
                  <span style={{ color: '#EF4444' }}>Low Risk Zone</span>
                  <span style={{ color: '#D4AF37', fontWeight: 800 }}>Optimal Range</span>
                  <span>1200 ng/dL</span>
                </div>
                <div style={{ width: '100%', height: '16px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '99px', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: '25%', height: '100%', backgroundColor: '#EF4444' }}></div>
                  <div style={{ width: '35%', height: '100%', backgroundColor: '#F59E0B' }}></div>
                  <div style={{ width: '40%', height: '100%', backgroundColor: '#D4AF37' }}></div>
                </div>
              </div>

              <div style={{ backgroundColor: 'rgba(212,175,55,0.15)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(212,175,55,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>Target Free T Level</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>22.5 – 30.0 pg/mL</div>
                </div>
                <span style={{ backgroundColor: '#10B981', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>Optimal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Comprehensive Optimization</span>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>Why Restore Your <span className="text-gold">Free Testosterone?</span></h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: 'Cognitive Sharpness & Drive',
                desc: 'Restores neurotransmitter synthesis, sharpening decision-making, focus, and motivation while lifting chronic mood fog.',
                icon: <Zap size={32} />,
                detail: 'Protects against age-related cognitive fatigue.',
              },
              {
                title: 'Lean Muscle & Metabolic Rate',
                desc: 'Increases protein synthesis and nitrogen retention, enabling faster muscle recovery and body fat redistribution.',
                icon: <Dumbbell size={32} />,
                detail: 'Helps shed stubborn abdominal visceral fat.',
              },
              {
                title: 'Libido & Vitality',
                desc: 'Optimizes vascular blood flow, stamina, and sexual health while supporting healthy bone mineral density.',
                icon: <Flame size={32} />,
                detail: 'Promotes deep restorative sleep & recovery.',
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
          <h2 className="h2" style={{ marginTop: '0.5rem', marginBottom: '3.5rem' }}>Men&apos;s Hormone Optimization Plan</h2>

          <div style={{ maxWidth: '580px', margin: '0 auto', backgroundColor: 'var(--primary-navy)', borderRadius: '1.5rem', padding: '3.5rem 2.5rem', border: '2px solid var(--primary-gold)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <span style={{ backgroundColor: 'var(--primary-gold)', color: 'var(--primary-navy)', padding: '0.35rem 1rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase' }}>
              Doctor-Supervised Full Protocol
            </span>

            <div style={{ fontSize: '4rem', fontWeight: 900, margin: '1.25rem 0 0.5rem', color: 'white' }}>
              $199<span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#94A3B8' }}>/month</span>
            </div>
            <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>All-inclusive membership. No insurance co-pays or hidden fees.</p>

            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
              {[
                'Bioidentical Testosterone formulation (monthly supply)',
                'Estrogen blocker (Anastrozole) & fertility support if indicated',
                'Comprehensive blood panel review with hormone specialist MD',
                'All sterile syringes, alcohol pads, and administration supplies',
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
