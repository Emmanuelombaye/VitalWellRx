'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scale, Zap, Heart, Dna, ArrowRight, ShieldCheck, Sparkles, ChevronDown, Activity, Clock, Award, FileText, CheckCircle2, HelpCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ConditionDetail {
  id: string
  category: 'weight' | 'mens' | 'womens' | 'peptides'
  badge: string
  title: string
  subtitle: string
  desc: string
  longMechanism: string
  requiredLabs: string[]
  adminFormats: string
  timeline: string
  stat: string
  statLabel: string
  image: string
  href: string
}

const detailedConditions: ConditionDetail[] = [
  {
    id: 'tirzepatide',
    category: 'weight',
    badge: 'Dual GIP / GLP-1 Agonist',
    title: 'Medical Weight Loss (Tirzepatide)',
    subtitle: 'Dual-action metabolic set-point recalibration',
    desc: 'Binds to both GIP and GLP-1 receptors to slow gastric emptying, eliminate food noise, and improve peripheral insulin sensitivity.',
    longMechanism: 'Dual GIP/GLP-1 receptor agonism acts on satiety centers in the hypothalamus while promoting glucagon secretion during hypoglycemia. Preserves skeletal muscle during caloric deficits.',
    requiredLabs: ['HbA1c & Fasting Glucose', 'Comprehensive Metabolic Panel (CMP)', 'Lipid Panel', 'Thyroid Function (TSH/Free T4)'],
    adminFormats: 'Once-weekly subcutaneous micro-injection or daily sublingual ODT tablet',
    timeline: 'Appetite suppression onset in 24-48 hrs; steady weight loss of 1.5–3 lbs/week through Week 12+',
    stat: 'Up to 22.5%',
    statLabel: 'Average Weight Loss',
    image: '/shop_tirzepatide.webp',
    href: '/treatments/weight-loss',
  },
  {
    id: 'odt-tablets',
    category: 'weight',
    badge: 'Sublingual Dissolving Tablet',
    title: 'Oral Tirzepatide / GLP-1 ODT',
    subtitle: 'Needle-free daily oral dissolution protocol',
    desc: 'Formulated with advanced mucosal permeability enhancers for high sublingual bio-absorption directly into systemic circulation.',
    longMechanism: 'Bypasses hepatic first-pass metabolism through sublingual mucosal absorption, providing smooth daily therapeutic plasma concentrations without injections.',
    requiredLabs: ['Fasting Glucose & Insulin', 'Renal & Hepatic Panels', 'Lipid Profile'],
    adminFormats: 'Daily sublingual dissolving tablet placed under the tongue for 90 seconds',
    timeline: 'Consistent appetite regulation starting Day 1; zero injection discomfort',
    stat: '100%',
    statLabel: 'Painless Oral Delivery',
    image: '/shop_glp1_odt.webp',
    href: '/treatments/odt-tablets',
  },
  {
    id: 'trt-mens',
    category: 'mens',
    badge: 'Bioidentical TRT Protocol',
    title: "Men's Testosterone Optimization",
    subtitle: 'Restoring free serum testosterone to upper optimal quartile',
    desc: 'Reclaims lean muscle retention, mental drive, bone mineral density, and sexual stamina through physician-titrated bioidentical TRT.',
    longMechanism: 'Exogenous testosterone cypionate replaces deficient androgen production, normalizing androgen receptor occupancy across brain, muscle, and vascular tissue.',
    requiredLabs: ['Total & Free Testosterone', 'Estradiol (Sensitive LC-MS/MS)', 'CBC / Hematocrit', 'PSA & SHBG'],
    adminFormats: 'Twice-weekly subcutaneous or intramuscular injections, or topical bioidentical gel',
    timeline: 'Energy & libido improvements in 2-3 weeks; lean muscle & fat reduction by Weeks 6-8',
    stat: '800–1,100 ng/dL',
    statLabel: 'Target Free Serum Range',
    image: '/shop_trt.webp',
    href: '/treatments/mens-hormone',
  },
  {
    id: 'fertility-mens',
    category: 'mens',
    badge: 'HCG & Enclomiphene',
    title: 'Male Fertility & Pituitary Support',
    subtitle: 'Preserving natural testicular function during TRT',
    desc: 'Prevents testicular atrophy and maintains endogenous LH/FSH signaling, protecting natural sperm motility and testosterone synthesis.',
    longMechanism: 'HCG acts as a luteinizing hormone (LH) analogue directly stimulating Leydig cells, while Enclomiphene blocks estrogenic negative feedback at the hypothalamus.',
    requiredLabs: ['Semen Analysis (optional)', 'LH & FSH Levels', 'Total Testosterone'],
    adminFormats: 'Subcutaneous injections (HCG) or daily oral capsules (Enclomiphene)',
    timeline: 'Maintains testicular volume and fertility metrics continuously throughout therapy',
    stat: '100%',
    statLabel: 'Endocrine Protection',
    image: '/shop_fertility.webp',
    href: '/treatments/fertility-mens',
  },
  {
    id: 'bhrt-womens',
    category: 'womens',
    badge: 'Tri-Hormone Synergy',
    title: "Women's Bioidentical BHRT",
    subtitle: 'Estradiol, Micronized Progesterone & DHEA calibration',
    desc: 'Resolves vasomotor hot flashes, nocturnal awakenings, and mood instability while supporting dermal collagen and cardiovascular health.',
    longMechanism: 'Molecularly identical Estradiol and Micronized Progesterone bind human cell receptors cleanly, restoring physiological hormonal equilibrium without synthetic side effects.',
    requiredLabs: ['Estradiol (E2)', 'Progesterone', 'DHEA-S', 'Comprehensive Thyroid Panel'],
    adminFormats: 'Custom compounded sublingual troches, topical creams, or oral bedtime capsules',
    timeline: 'Hot flashes & sleep disruptions abate within 7-14 days; skin elasticity improves by Month 2',
    stat: '88%',
    statLabel: 'Sleep Quality Relief',
    image: '/shop_womens_bhrt.webp',
    href: '/treatments/womens-hormone',
  },
  {
    id: 'peptides-bpc157',
    category: 'peptides',
    badge: 'Pentadecapeptide BPC-157',
    title: 'Cellular Repair & Tendon Recovery',
    subtitle: 'Micro-vascular angiogenesis & tissue repair',
    desc: 'Accelerates healing of torn ligaments, tendons, joint inflammation, and leaky gut intestinal mucosa.',
    longMechanism: 'Up-regulates growth factors (VEGFR2, FAK, Paxillin) to recruit endothelial stem cells and form new micro-blood vessels in low-blood-flow collagen tissue.',
    requiredLabs: ['Inflammatory Biomarkers (hs-CRP)', 'CBC with Differential'],
    adminFormats: 'Targeted subcutaneous micro-injections near recovery site or oral delayed-release capsules',
    timeline: 'Noticeable reduction in joint stiffness and pain within 7-10 days of protocol start',
    stat: '2x – 3x',
    statLabel: 'Faster Tissue Recovery',
    image: '/shop_bpc157.webp',
    href: '/treatments/peptide-therapy',
  },
  {
    id: 'cjc-ipamorelin',
    category: 'peptides',
    badge: 'Dual GH Secretagogue Blend',
    title: 'CJC-1295 / Ipamorelin Secretagogue',
    subtitle: 'Pulsatile pituitary growth hormone release',
    desc: 'Triggers natural endogenous somatotroph growth hormone pulses to enhance deep REM sleep, fat oxidation, and skin matrix elasticity.',
    longMechanism: 'CJC-1295 (GHRH analogue) and Ipamorelin (Ghrelin receptor agonist) act synergistically on the anterior pituitary, stimulating GH release without elevating cortisol or prolactin.',
    requiredLabs: ['IGF-1 (Insulin-Like Growth Factor 1)', 'Fasting Glucose & Insulin'],
    adminFormats: 'Nightly subcutaneous micro-injection before sleep on an empty stomach',
    timeline: 'Deeper REM sleep and faster workout recovery within Week 1; fat loss noticeable by Week 4',
    stat: 'Pulsatile',
    statLabel: 'Natural GH Surge',
    image: '/shop_cjc_ipamorelin.webp',
    href: '/treatments/cjc-ipamorelin',
  },
]

export default function WhatWeTreat() {
  const [activeTab, setActiveTab] = useState<'all' | 'weight' | 'mens' | 'womens' | 'peptides'>('all')
  const [expandedId, setExpandedId] = useState<string | null>('tirzepatide')

  const filtered = activeTab === 'all' ? detailedConditions : detailedConditions.filter(c => c.category === activeTab)

  return (
    <section style={{ backgroundColor: 'var(--foreground)', color: 'var(--primary-navy)', padding: '6rem 0' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.75rem' }}>
            <Sparkles size={16} /> Clinical Condition Directory
          </div>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '0.5rem', lineHeight: 1.1 }}>
            What We <span className="text-gold">Treat</span> & How It Works.
          </h2>
          <p style={{ color: '#475569', fontSize: '1.15rem', maxWidth: '680px', margin: '0.75rem auto 0', lineHeight: 1.6 }}>
            In-depth clinical protocols engineered for sustainable body composition, hormone equilibrium, and cellular repair.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="no-scrollbar" style={{ display: 'flex', justifyContent: 'flex-start', gap: '0.65rem', marginBottom: '3rem', overflowX: 'auto', paddingBottom: '0.5rem', WebkitOverflowScrolling: 'touch' }}>
          {[
            { id: 'all', label: '🌟 All Conditions' },
            { id: 'weight', label: '🔥 Weight & Metabolism' },
            { id: 'mens', label: '⚡ Men\'s Vitality (TRT)' },
            { id: 'womens', label: '🌸 Women\'s Balance (BHRT)' },
            { id: 'peptides', label: '🧬 Peptides & Repair' },
          ].map(tab => (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.94 }}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '99px',
                fontWeight: 700,
                fontSize: '0.875rem',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                border: activeTab === tab.id ? '2px solid var(--primary-gold)' : '1px solid #CBD5E1',
                backgroundColor: activeTab === tab.id ? 'var(--primary-navy)' : 'white',
                color: activeTab === tab.id ? 'white' : '#334155',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeTab === tab.id ? '0 8px 20px rgba(11,19,43,0.2)' : 'none',
              }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Condition Cards Grid */}
        <motion.div layout className="grid grid-cols-1 gap-8">
          <AnimatePresence>
            {filtered.map((item, idx) => {
              const isExpanded = expandedId === item.id

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  whileHover={{ y: -4, scale: 1.005 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22, delay: idx * 0.05 }}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    border: isExpanded ? '2px solid var(--primary-gold)' : '1px solid #E2E8F0',
                    boxShadow: isExpanded
                      ? '0 0 30px rgba(212,175,55,0.4), 0 20px 45px rgba(11,19,43,0.15)'
                      : '0 10px 25px rgba(0,0,0,0.04)',
                    transition: 'border-color 0.25s, box-shadow 0.25s',
                  }}
                >
                  {/* Card Header & Main Overview */}
                  <div className="condition-card-grid">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      style={{ position: 'relative', height: '220px', width: '100%', borderRadius: '1rem', overflow: 'hidden' }}
                    >
                      <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 320px" quality={80} loading="eager" style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', backgroundColor: 'rgba(11,19,43,0.85)', backdropFilter: 'blur(8px)', color: 'var(--primary-gold)', padding: '4px 12px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', border: '1px solid rgba(212,175,55,0.3)' }}>
                        {item.badge}
                      </div>
                    </motion.div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <div style={{ flex: '1 1 200px' }}>
                          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>
                            {item.title}
                          </h3>
                          <div style={{ fontSize: '0.875rem', color: 'var(--primary-gold)', fontWeight: 700, marginBottom: '0.75rem' }}>
                            {item.subtitle}
                          </div>
                        </div>

                        <div style={{ backgroundColor: 'rgba(11,19,43,0.04)', padding: '0.5rem 0.85rem', borderRadius: '0.75rem', border: '1px solid #E2E8F0', flexShrink: 0 }}>
                          <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--primary-navy)' }}>{item.stat}</div>
                          <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>{item.statLabel}</div>
                        </div>
                      </div>

                      <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                        {item.desc}
                      </p>

                      <div className="card-actions-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <motion.button
                          whileTap={{ scale: 0.96 }}
                          onClick={() => setExpandedId(isExpanded ? null : item.id)}
                          className="btn-card-secondary"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            backgroundColor: isExpanded ? 'rgba(11,19,43,0.08)' : 'white',
                            color: 'var(--primary-navy)',
                            border: isExpanded ? '2px solid var(--primary-navy)' : '1.5px solid var(--primary-navy)',
                            padding: '0.6rem 1.15rem',
                            borderRadius: '99px',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                        >
                          {isExpanded ? 'Hide Clinical Science' : 'View Clinical Science & Labs'}
                          <ChevronDown size={16} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                        </motion.button>

                        <motion.div whileTap={{ scale: 0.96 }}>
                          <Link
                            href={item.href}
                            className="btn-card-primary"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '6px',
                              backgroundColor: 'var(--primary-navy)',
                              color: 'white',
                              padding: '0.65rem 1.25rem',
                              borderRadius: '99px',
                              fontSize: '0.85rem',
                              fontWeight: 700,
                              textDecoration: 'none',
                            }}
                          >
                            Check Eligibility <ArrowRight size={16} />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Long-Form Clinical Specification Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden', borderTop: '1px solid #E2E8F0', backgroundColor: '#F8FAFC', padding: '1.75rem' }}
                      >
                        <div className="detail-panel-grid">
                          {/* Column 1: Mechanism & Timeline */}
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '0.95rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                              <Activity size={18} className="text-gold" /> Biological Mechanism of Action
                            </div>
                            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                              {item.longMechanism}
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '0.95rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                              <Clock size={18} className="text-gold" /> Clinical Onset & Timeline
                            </div>
                            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.7 }}>
                              {item.timeline}
                            </p>
                          </div>

                          {/* Column 2: Required Blood Labs & Admin Formats */}
                          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
                              <FileText size={16} className="text-gold" /> Required Diagnostic Biomarkers
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                              {item.requiredLabs.map((lab, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#334155', fontWeight: 600 }}>
                                  <CheckCircle2 size={14} style={{ color: '#10B981', flexShrink: 0 }} /> {lab}
                                </li>
                              ))}
                            </ul>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                              <Award size={16} className="text-gold" /> Administration Formats
                            </div>
                            <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.5 }}>
                              {item.adminFormats}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
