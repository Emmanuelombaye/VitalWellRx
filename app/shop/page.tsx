'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, ShieldCheck, Truck, Lock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import FAQSection from '@/components/FAQSection'
import { products, shopCategories } from '@/data/products'
import type { ProductCategory } from '@/types'

type ShopFilter = 'all' | ProductCategory

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<ShopFilter>('all')

  const filteredProducts =
    activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory)

  return (
    <main>
      <section
        style={{
          backgroundColor: 'var(--primary-navy)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '5rem 0 3.5rem',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(212,175,55,0.15)',
                color: 'var(--primary-gold)',
                padding: '0.4rem 1rem',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1rem',
                border: '1px solid rgba(212,175,55,0.3)',
              }}
            >
              <ShoppingBag size={16} /> 100% Doctor-Prescribed Compounded Pharmacy Catalog
            </div>
            <h1 className="h1" style={{ color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
              VitalWellRx <span className="text-gold">Pharmacy Shop.</span>
            </h1>
            <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '680px', margin: '0.75rem auto 0', lineHeight: 1.6 }}>
              Browse our complete catalog of board-certified prescription protocols, bioidentical hormones, hair loss
              complexes, and peptides shipped cold-packed to your door.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '5rem 0 7rem' }}>
        <div className="container">
          <div
            className="no-scrollbar"
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '0.65rem',
              marginBottom: '3rem',
              overflowX: 'auto',
              paddingBottom: '0.5rem',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {shopCategories.map((tab) => (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.94 }}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: '99px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  border: activeCategory === tab.id ? '2px solid var(--primary-gold)' : '1px solid rgba(255,255,255,0.15)',
                  backgroundColor: activeCategory === tab.id ? 'var(--primary-gold)' : 'rgba(255,255,255,0.05)',
                  color: activeCategory === tab.id ? 'var(--primary-navy)' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: activeCategory === tab.id ? '0 8px 20px rgba(212,175,55,0.3)' : 'none',
                }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8">
            {filteredProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                whileHover={{ y: -8, scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: idx * 0.05 }}
                style={{
                  backgroundColor: 'var(--primary-navy)',
                  borderRadius: '1.5rem',
                  border: '1px solid var(--card-border)',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    style={{ position: 'relative', height: '230px', width: '100%', overflow: 'hidden' }}
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={80}
                      loading="eager"
                      priority={p.id === 'tirzepatide-injectable' || p.id === 'glp1-odt'}
                      style={{ objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.85rem',
                        left: '0.85rem',
                        backgroundColor: 'rgba(11,19,43,0.9)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--primary-gold)',
                        padding: '4px 12px',
                        borderRadius: '99px',
                        fontSize: '0.75rem',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        border: '1px solid rgba(212,175,55,0.4)',
                      }}
                    >
                      {p.badge}
                    </div>
                  </motion.div>

                  <div style={{ padding: '1.5rem 1.25rem 1rem' }}>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        color: 'var(--primary-gold)',
                        marginBottom: '0.35rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {p.dosage}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'white', marginBottom: '0.65rem', lineHeight: 1.25 }}>
                      {p.name}
                    </h3>
                    <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {p.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '1rem' }}>
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.06)',
                            color: '#CBD5E1',
                            padding: '3px 10px',
                            borderRadius: '99px',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: '1.25rem 1.25rem 1.5rem',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '1.85rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>
                      {p.price}
                      <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>{p.period}</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700, marginTop: '2px' }}>
                      503A Pharmacy Compounded
                    </div>
                  </div>

                  <Link href={p.href} className="btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}>
                    Select Protocol →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
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

      <FAQSection />
    </main>
  )
}
