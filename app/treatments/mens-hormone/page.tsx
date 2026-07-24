'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Dumbbell, Flame, Gauge } from 'lucide-react'
import Image from 'next/image'
import TreatmentHero from '@/components/treatments/TreatmentHero'
import StatsBar from '@/components/treatments/StatsBar'
import FeaturedPricing from '@/components/treatments/FeaturedPricing'
import TreatmentFaq from '@/components/treatments/TreatmentFaq'
import CheckList from '@/components/ui/CheckList'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import {
  mensHormoneFaqs,
  mensHormoneStats,
  mensHormoneIncludes,
} from '@/data/treatments/full'

const oversightBullets = [
  'Quarterly blood panel analysis included',
  '1-on-1 online video consults with male health MDs',
  'Precision dose titration (Cypionate or Enanthate)',
  'On-demand provider support via Member Portal',
]

const benefitCards = [
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
]

export default function MensHormoneHealth() {
  return (
    <main>
      <TreatmentHero
        images={['/gen_mens1.webp', '/gen_mens2.webp']}
        alt="Men's Hormone Health Hero"
        badgeIcon="zap"
        badge="Bioidentical TRT & Performance Science"
        title={
          <>
            Men&apos;s <span className="text-gold">Hormone Health</span>
            <br />
            & TRT Optimization.
          </>
        }
        subtitle="Reclaim peak physical drive, mental clarity, and lean muscle composition. Doctor-supervised testosterone therapy tailored to your exact biomarkers."
        ctaLabel="Check Eligibility"
      />

      <StatsBar stats={mensHormoneStats} />

      {/* 2. CLINICAL OVERSIGHT (Unique Image) */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div style={{ position: 'relative', height: '420px', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--card-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <Image src="/about_hero.webp" alt="Board-Certified Hormone Doctors" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', backgroundColor: 'rgba(11,19,43,0.9)', backdropFilter: 'blur(10px)', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--primary-gold)', color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>
                👨‍⚕️ Board-Certified Men&apos;s Health Physicians
              </div>
            </div>

            <div>
              <SectionEyebrow>Physician Oversight</SectionEyebrow>
              <h2 className="h2" style={{ marginTop: '0.5rem' }}>Expert-Guided <span className="text-gold">Hormone Protocols</span></h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Every TRT prescription is customized by a licensed physician specializing in male endocrinology. We continuously analyze your lab work to optimize free testosterone while controlling hematocrit and estradiol.
              </p>
              <CheckList items={oversightBullets} />
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
            <SectionEyebrow>Comprehensive Optimization</SectionEyebrow>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>Why Restore Your <span className="text-gold">Free Testosterone?</span></h2>
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
        heading={<>Men&apos;s Hormone Optimization Plan</>}
        badge="Doctor-Supervised Full Protocol"
        price="$199"
        description="All-inclusive membership. No insurance co-pays or hidden fees."
        includes={mensHormoneIncludes}
        ctaLabel="Start 5-Minute Questionnaire"
      />

      <TreatmentFaq faqs={mensHormoneFaqs} variant="animated" />
    </main>
  )
}
