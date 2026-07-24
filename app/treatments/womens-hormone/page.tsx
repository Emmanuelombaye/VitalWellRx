'use client'

import { motion } from 'framer-motion'
import { Check, Moon, Sun, Sparkles } from 'lucide-react'
import Image from 'next/image'
import TreatmentHero from '@/components/treatments/TreatmentHero'
import StatsBar from '@/components/treatments/StatsBar'
import FeaturedPricing from '@/components/treatments/FeaturedPricing'
import TreatmentFaq from '@/components/treatments/TreatmentFaq'
import CheckList from '@/components/ui/CheckList'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import {
  womensHormoneFaqs,
  womensHormoneStats,
  womensHormoneIncludes,
} from '@/data/treatments/full'

const formulationBullets = [
  'Exact molecular match to natural human hormones',
  'Sublingual, topical creams, or oral capsule options',
  'Supports GABAergic pathways for deep REM sleep',
  'Promotes dermal collagen & cardiovascular lipid health',
]

const benefitCards = [
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
]

export default function WomensHormoneHealth() {
  return (
    <main>
      <TreatmentHero
        images={['/gen_womens1.webp', '/gen_womens2.webp']}
        alt="Women's Hormone Health Hero"
        badgeIcon="heart"
        badge="Bioidentical BHRT Science"
        title={
          <>
            Women&apos;s <span className="text-gold">Hormone Health</span>
            <br />
            & Balance Therapy.
          </>
        }
        subtitle="Restore restful sleep, skin collagen, emotional balance, and energy with doctor-formulated bioidentical estrogen, progesterone, and DHEA protocols."
        ctaLabel="Check Eligibility"
      />

      <StatsBar stats={womensHormoneStats} />

      {/* 2. FORMULATION & PACKAGING (Unique Bottle Mockup) */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div>
              <SectionEyebrow>Personalized BHRT</SectionEyebrow>
              <h2 className="h2" style={{ marginTop: '0.5rem' }}>Compounded <span className="text-gold">Bioidentical Hormones</span></h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Synthetic hormones carry risks because their molecular structure doesn&apos;t match human receptors. VitalWellRx uses 100% bioidentical Estradiol, Micronized Progesterone, and DHEA compounded specifically to your blood lab values.
              </p>
              <CheckList items={formulationBullets} />
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" style={{ marginTop: '2rem', fontSize: '0.75rem', fontWeight: 700 }}>
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
            <SectionEyebrow>Holistic Wellbeing</SectionEyebrow>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>Restoring <span className="text-gold">Hormonal Harmony</span></h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {benefitCards.map((card, i) => (
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

      <FeaturedPricing
        eyebrow="Complete Program"
        heading={<>Women&apos;s BHRT Optimization Plan</>}
        badge="Doctor-Supervised Full Protocol"
        price="$189"
        description="All-inclusive membership. No insurance co-pays or hidden fees."
        includes={womensHormoneIncludes}
        ctaLabel="Start 5-Minute Questionnaire"
      />

      <TreatmentFaq faqs={womensHormoneFaqs} variant="animated" />
    </main>
  )
}
