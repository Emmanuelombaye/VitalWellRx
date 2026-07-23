'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, ShieldCheck, Truck, Lock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import FAQSection from '../../components/FAQSection'

interface Product {
  id: string
  category: 'weight' | 'mens' | 'womens' | 'peptides'
  badge: string
  name: string
  dosage: string
  price: string
  period: string
  desc: string
  image: string
  href: string
  tags: string[]
}

const products: Product[] = [
  {
    id: 'tirzepatide-injectable',
    category: 'weight',
    badge: 'Dual GIP / GLP-1',
    name: 'Tirzepatide Injectable Protocol',
    dosage: '10 mg/mL Compounded Vial',
    price: '$340',
    period: '/month',
    desc: 'Once-weekly subcutaneous Dual GIP/GLP-1 receptor agonist for up to 22.5% body fat reduction.',
    image: '/shop_tirzepatide.webp',
    href: '/treatments/weight-loss',
    tags: ['Fat Loss', 'Appetite Control', '503A Compounded'],
  },
  {
    id: 'glp1-odt',
    category: 'weight',
    badge: '100% Needle-Free',
    name: 'Sublingual GLP-1 & Tirzepatide ODT',
    dosage: 'Daily Oral Dissolving Tablets (30ct)',
    price: '$310',
    period: '/month',
    desc: 'Daily sublingual tablets engineered for painless, needle-free weight loss and appetite regulation.',
    image: '/shop_glp1_odt.webp',
    href: '/treatments/odt-tablets',
    tags: ['Oral Dissolving', 'No Syringes', 'Fast Absorption'],
  },
  {
    id: 'trt-cypionate',
    category: 'mens',
    badge: 'Bioidentical TRT',
    name: 'Testosterone Cypionate Protocol',
    dosage: '200 mg/mL Intramuscular / SubQ',
    price: '$199',
    period: '/month',
    desc: 'Reclaims free serum testosterone (800-1100 ng/dL) for muscle retention, libido, and drive.',
    image: '/shop_trt.webp',
    href: '/treatments/mens-hormone',
    tags: ['Men\'s Health', 'Testosterone', 'Estradiol Blocker'],
  },
  {
    id: 'mens-hairloss',
    category: 'mens',
    badge: 'Dual Hair Restoration',
    name: 'Oral Finasteride + Minoxidil Complex',
    dosage: '1mg Finasteride + 2.5mg Minoxidil',
    price: '$89',
    period: '/month',
    desc: 'Dual-action daily capsule suppresses scalp DHT by up to 70% while stimulating hair regrowth.',
    image: '/shop_hairloss.webp',
    href: '/treatments/mens-hairloss',
    tags: ['Hair Loss', 'DHT Blocker', '2-in-1 Daily Pill'],
  },
  {
    id: 'hcg-enclomiphene',
    category: 'mens',
    badge: 'Pituitary Support',
    name: 'HCG & Enclomiphene Fertility Support',
    dosage: '5,000 IU HCG Vial / 25mg Capsules',
    price: '$219',
    period: '/month',
    desc: 'Preserves testicular volume, endogenous sperm motility, and natural testosterone synthesis.',
    image: '/shop_fertility.webp',
    href: '/treatments/fertility-mens',
    tags: ['Fertility', 'Testicular Size', 'LH Signaling'],
  },
  {
    id: 'womens-bhrt',
    category: 'womens',
    badge: 'Tri-Hormone Synergy',
    name: 'Women\'s Bioidentical BHRT Troches',
    dosage: 'Estradiol + Micronized Progesterone Troches',
    price: '$189',
    period: '/month',
    desc: 'Resolves vasomotor hot flashes, nocturnal awakenings, and mood instability while supporting skin collagen.',
    image: '/shop_womens_bhrt.webp',
    href: '/treatments/womens-hormone',
    tags: ['Women\'s Health', 'Sleep Quality', 'Bioidentical'],
  },
  {
    id: 'bpc-157',
    category: 'peptides',
    badge: 'Pentadecapeptide',
    name: 'BPC-157 Cellular Tissue Repair',
    dosage: '5 mg SubQ Vial / Oral Capsules',
    price: '$349',
    period: '/month',
    desc: 'Promotes micro-vascular angiogenesis to accelerate healing of torn tendons, joints, and leaky gut mucosa.',
    image: '/shop_bpc157.webp',
    href: '/treatments/peptide-therapy',
    tags: ['Tendon Healing', 'Joint Repair', 'Gut Lining'],
  },
  {
    id: 'cjc-ipamorelin',
    category: 'peptides',
    badge: 'Pituitary Secretagogue',
    name: 'CJC-1295 / Ipamorelin Blend',
    dosage: '5mg/5mg Compounded Peptide Vial',
    price: '$329',
    period: '/month',
    desc: 'Triggers natural pulsatile growth hormone surges for deep REM sleep, fat oxidation, and collagen.',
    image: '/shop_cjc_ipamorelin.webp',
    href: '/treatments/cjc-ipamorelin',
    tags: ['Growth Hormone', 'Stage-4 REM Sleep', 'Skin Elasticity'],
  },
  {
    id: 'ghk-cu',
    category: 'peptides',
    badge: 'Copper Peptide Matrix',
    name: 'GHK-Cu Dermal Rejuvenation Serum',
    dosage: '50 mg Topical / SubQ Formulation',
    price: '$195',
    period: '/month',
    desc: 'Modulates over 4,000 human genes to up-regulate skin collagen synthesis and hair follicle density.',
    image: '/shop_ghk_cu.webp',
    href: '/treatments/ghk-cu',
    tags: ['Dermal Collagen', 'Gene Expression', 'Scalp Density'],
  },
]

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'weight' | 'mens' | 'womens' | 'peptides'>('all')

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <main>
      {/* HERO SECTION */}
      <section style={{ backgroundColor: 'var(--primary-navy)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '5rem 0 3.5rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1rem', border: '1px solid rgba(212,175,55,0.3)' }}>
              <ShoppingBag size={16} /> 100% Doctor-Prescribed Compounded Pharmacy Catalog
            </div>
            <h1 className="h1" style={{ color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
              VitalWellRx <span className="text-gold">Pharmacy Shop.</span>
            </h1>
            <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '680px', margin: '0.75rem auto 0', lineHeight: 1.6 }}>
              Browse our complete catalog of board-certified prescription protocols, bioidentical hormones, hair loss complexes, and peptides shipped cold-packed to your door.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SHOP PRODUCTS CATALOG SECTION */}
      <section style={{ padding: '5rem 0 7rem' }}>
        <div className="container">
          {/* Category Filter Pills Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: '🛒 All Prescription Meds' },
              { id: 'weight', label: '🔥 Weight & GLP-1 ODT' },
              { id: 'mens', label: '⚡ Men\'s Health & Hair Loss' },
              { id: 'womens', label: '🌸 Women\'s Bioidentical BHRT' },
              { id: 'peptides', label: '🧬 Peptides & Repair' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '99px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  border: activeCategory === tab.id ? '2px solid var(--primary-gold)' : '1px solid rgba(255,255,255,0.15)',
                  backgroundColor: activeCategory === tab.id ? 'var(--primary-gold)' : 'rgba(255,255,255,0.04)',
                  color: activeCategory === tab.id ? 'var(--primary-navy)' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-3 gap-8">
            {filteredProducts.map(p => (
              <motion.div
                key={p.id}
                whileHover={{ y: -6 }}
                style={{
                  backgroundColor: 'var(--primary-navy)',
                  borderRadius: '1.5rem',
                  border: '1px solid var(--card-border)',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Product Image */}
                  <div style={{ position: 'relative', height: '230px', width: '100%', overflow: 'hidden' }}>
                    <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, 33vw" quality={80} loading="eager" priority={p.id === 'tirzepatide-injectable' || p.id === 'glp1-odt'} style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem', backgroundColor: 'rgba(11,19,43,0.9)', backdropFilter: 'blur(8px)', color: 'var(--primary-gold)', padding: '4px 12px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', border: '1px solid rgba(212,175,55,0.4)' }}>
                      {p.badge}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div style={{ padding: '1.75rem 1.5rem 1rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary-gold)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {p.dosage}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'white', marginBottom: '0.65rem', lineHeight: 1.25 }}>
                      {p.name}
                    </h3>
                    <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {p.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '1rem' }}>
                      {p.tags.map(t => (
                        <span key={t} style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#CBD5E1', padding: '3px 10px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing & Add Button */}
                <div style={{ padding: '1.25rem 1.5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>
                      {p.price}<span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>{p.period}</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700, marginTop: '2px' }}>503A Pharmacy Compounded</div>
                  </div>

                  <Link href={p.href} className="btn-primary" style={{ padding: '0.7rem 1.25rem', fontSize: '0.875rem' }}>
                    Order & Intake →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guarantee Badges */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>
              <ShieldCheck size={22} className="text-gold" /> 100% Board-Certified Physician Consultation Included
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>
              <Truck size={22} className="text-gold" /> Cold-Pack Insulated Overnight Pharmacy Delivery
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>
              <Lock size={22} className="text-gold" /> Flat Monthly Subscription — No Surprise Hidden Fees
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <FAQSection />
    </main>
  )
}
