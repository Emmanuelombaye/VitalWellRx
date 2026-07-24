'use client'

import { Pill, Activity, TrendingDown } from 'lucide-react'
import Image from 'next/image'
import TreatmentHero from '@/components/treatments/TreatmentHero'
import StatsBar from '@/components/treatments/StatsBar'
import FeaturedPricing from '@/components/treatments/FeaturedPricing'
import TreatmentFaq from '@/components/treatments/TreatmentFaq'
import CheckList from '@/components/ui/CheckList'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import {
  weightLossFaqs,
  weightLossStats,
  weightLossIncludes,
} from '@/data/treatments/full'

const clinicalBullets = [
  'Curbs food noise and cravings within 48 hours',
  'Protects lean skeletal muscle during caloric reduction',
  'Improves insulin resistance and glucose disposal',
  'Ongoing monthly physician blood panel monitoring',
]

const roadmap = [
  {
    phase: 'Weeks 1–2',
    title: 'Initiation & Adaptation',
    desc: 'Low starter dose to assess tolerance. Craving reduction begins within 48 hours.',
  },
  {
    phase: 'Weeks 3–6',
    title: 'Steady Reduction',
    desc: 'Gradual dose titration. Fat loss accelerates while maintaining high energy levels.',
  },
  {
    phase: 'Weeks 7–12',
    title: 'Peak Metabolic Velocity',
    desc: 'Target weight loss range achieved. Significant reduction in waist circumference.',
  },
  {
    phase: 'Month 4+',
    title: 'Maintenance Protocol',
    desc: 'Dose stabilization or gradual tapering to lock in your new baseline weight permanently.',
  },
]

export default function MedicalWeightLoss() {
  return (
    <main>
      <TreatmentHero
        images={['/gen_weight1.webp', '/gen_weight2.webp']}
        alt="Medical Weight Loss Hero"
        badgeIcon="sparkles"
        badge="Dual-Action GIP/GLP-1 Science"
        title={
          <>
            Medical <span className="text-gold">Weight Loss</span>
            <br />
            & Metabolic Optimization.
          </>
        }
        subtitle="Reset your body set-point with doctor-guided Tirzepatide and GLP-1 protocols. Average clinical weight loss of up to 22.5% without restrictive dieting or muscle loss."
        ctaLabel="Check Eligibility"
      />

      <StatsBar stats={weightLossStats} />

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div>
              <SectionEyebrow>Clinical Data</SectionEyebrow>
              <h2 className="h2" style={{ marginTop: '0.5rem' }}>
                Proven <span className="text-gold">Fat Loss Curve</span>
              </h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Clinical studies demonstrate sustained, steady weight reduction over a 12 to 24 week timeline. Dual
                GIP/GLP-1 receptors preserve lean muscle mass while accelerating fat loss.
              </p>
              <CheckList items={clinicalBullets} />
            </div>

            <div
              className="glass-card"
              style={{
                padding: '2rem',
                border: '1px solid var(--card-border)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                borderRadius: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--primary-gold)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Clinical Weight Reduction Trial
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>12-Week Weight Loss Curve</div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#10B981',
                    fontWeight: 800,
                    fontSize: '0.875rem',
                  }}
                >
                  <TrendingDown size={18} /> -22.5% Average
                </div>
              </div>

              <div style={{ width: '100%', height: '220px', position: 'relative' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  <line x1="0" y1="140" x2="400" y2="140" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  <path d="M 20 40 Q 150 70 380 95" stroke="#64748B" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                  <path d="M 20 40 Q 120 120 380 175 L 380 200 L 20 200 Z" fill="url(#goldGradient)" opacity="0.3" />
                  <path d="M 20 40 Q 120 120 380 175" stroke="#D4AF37" strokeWidth="4" fill="none" />
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

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '1rem',
                  fontSize: '0.75rem',
                  color: '#94A3B8',
                  fontWeight: 600,
                }}
              >
                <span>Week 1 (Baseline)</span>
                <span>Week 6 (-12%)</span>
                <span>Week 12 (-22.5%)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--foreground)', color: 'var(--primary-navy)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              style={{
                fontWeight: 800,
                textTransform: 'uppercase',
                fontSize: '0.85rem',
                letterSpacing: '2px',
                color: 'var(--primary-gold)',
              }}
            >
              Formulation Options
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem' }}>
              Pharmaceutical-Grade Compounding
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div
              style={{
                position: 'relative',
                height: '400px',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              }}
            >
              <Image
                src="/supplement_bottle.webp"
                alt="Cere Vitality & Tirzepatide Compounds"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1.25rem',
                  padding: '1.75rem',
                  border: '2px solid #E2E8F0',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--primary-gold)',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    marginBottom: '0.35rem',
                  }}
                >
                  <Pill size={16} /> Sublingual ODT Dissolving Tablets
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Oral Dissolving Tirzepatide / GLP-1
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Perfect for patients who prefer a needle-free experience. Placed under the tongue, sublingual
                  formulations absorb directly into the bloodstream for maximum bioavailability.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1.25rem',
                  padding: '1.75rem',
                  border: '2px solid #E2E8F0',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--primary-navy)',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    marginBottom: '0.35rem',
                  }}
                >
                  <Activity size={16} /> Weekly Micro-Injections
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Subcutaneous Injectable Compounds
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Once-weekly painless micro-injections using ultra-fine insulin needles. Delivers steady, long-acting
                  therapeutic plasma concentration across 7 full days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <SectionEyebrow>Treatment Progression</SectionEyebrow>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>
              Your 90-Day <span className="text-gold">Transformation Roadmap</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {roadmap.map((step) => (
              <div key={step.phase} className="glass-card" style={{ padding: '1.75rem', position: 'relative' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: 'var(--primary-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  {step.phase}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0.5rem 0', color: 'white' }}>{step.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedPricing
        badge="Doctor-Guided Complete Program"
        price="$340"
        description="No medical insurance required. No surprise co-pays or shipping fees."
        includes={weightLossIncludes}
        ctaLabel="Start 5-Minute Questionnaire"
      />

      <TreatmentFaq faqs={weightLossFaqs} variant="animated" />
    </main>
  )
}
