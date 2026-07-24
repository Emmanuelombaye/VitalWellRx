'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import type { FaqItem } from '@/types'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

interface TreatmentFaqProps {
  faqs: FaqItem[]
  variant?: 'simple' | 'animated'
}

export default function TreatmentFaq({ faqs, variant = 'simple' }: TreatmentFaqProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  if (variant === 'animated') {
    return (
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <SectionEyebrow>Got Questions?</SectionEyebrow>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  cursor: 'pointer',
                  borderColor: openFaq === idx ? 'var(--primary-gold)' : 'var(--card-border)',
                }}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'white',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={20} className="text-gold" /> {faq.q}
                  </div>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                    }}
                  />
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
                      <p
                        style={{
                          marginTop: '1rem',
                          paddingTop: '1rem',
                          borderTop: '1px solid rgba(255,255,255,0.06)',
                          color: '#94A3B8',
                          lineHeight: 1.7,
                          fontSize: '0.95rem',
                        }}
                      >
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
    )
  }

  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="h2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="glass-card"
              style={{ padding: '1.5rem', cursor: 'pointer' }}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'white' }}>
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  style={{
                    transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}
                />
              </div>
              {openFaq === idx && (
                <p style={{ marginTop: '1rem', color: '#94A3B8', lineHeight: 1.6 }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
