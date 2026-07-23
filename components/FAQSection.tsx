'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown, Sparkles, ShieldCheck, Search, MessageSquarePlus } from 'lucide-react'
import Link from 'next/link'

interface FAQItem {
  id: string
  category: 'intake' | 'pharmacy' | 'pricing' | 'shipping'
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 'doctor-intake',
    category: 'intake',
    question: 'How does the 1-on-1 doctor consultation work?',
    answer: 'After completing your online medical intake, a U.S. board-certified physician reviews your health history, symptoms, and diagnostic biomarker labs. If medically appropriate, your prescription protocol is written and transmitted directly to our partner 503A compounding pharmacy.',
  },
  {
    id: 'insurance-requirement',
    category: 'pricing',
    question: 'Do I need health insurance to use VitalWellRx?',
    answer: 'No health insurance is needed. All VitalWellRx prescription protocols are flat-rate transparent pricing ($89–$349/month) that includes your physician consultation, compounded medication, supplies, and overnight shipping with zero hidden fees.',
  },
  {
    id: '503a-pharmacy-definition',
    category: 'pharmacy',
    question: 'What is a 503A Compounding Pharmacy?',
    answer: '503A compounding pharmacies are state-licensed facilities governed by strict USP <795> and USP <797> sterile preparation standards. They prepare customized, bioidentical, and high-purity prescription formulations specifically tailored for individual patient prescriptions.',
  },
  {
    id: 'cold-pack-shipping',
    category: 'shipping',
    question: 'How are temperature-sensitive medications shipped to my door?',
    answer: 'All peptide vials, GLP-1 injectables, and bioidentical hormones are packed inside insulated, temperature-monitored cold-packs and shipped via express overnight courier to preserve complete cold-chain stability from pharmacy lab to your doorstep.',
  },
  {
    id: 'sublingual-odt-absorption',
    category: 'pharmacy',
    question: 'How do Sublingual GLP-1 ODT tablets work without injections?',
    answer: 'Sublingual Oral Dissolving Tablets (ODT) dissolve under the tongue within 90 seconds. Formulated with advanced mucosal permeability enhancers, the active molecules absorb directly through sublingual capillary tissue into systemic circulation, bypassing gastrointestinal degradation.',
  },
  {
    id: 'lab-work-requirement',
    category: 'intake',
    question: 'What if I do not have recent blood lab work for TRT or BHRT?',
    answer: 'If your protocol requires diagnostic biomarker baseline labs (such as Testosterone, Estradiol, or CMP), our physician team immediately issues a convenient local LabCorp or Quest Diagnostics lab requisition order, or you can upload existing labs taken within the last 6 months.',
  },
  {
    id: 'subscription-cancellation',
    category: 'pricing',
    question: 'Are there any contract lock-ins or cancellation penalties?',
    answer: 'None at all. You have full control over your care. You can adjust your dosage protocol, pause refills, or cancel your month-to-month plan anytime directly inside your patient portal with a single click.',
  },
  {
    id: 'shipping-locations',
    category: 'shipping',
    question: 'Which U.S. states do you ship prescription protocols to?',
    answer: 'VitalWellRx partners with licensed 503A compounding pharmacies to deliver prescription protocols to patients across all 50 U.S. states with discrete, climate-controlled packaging.',
  },
]

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'intake' | 'pharmacy' | 'pricing' | 'shipping'>('all')
  const [expandedId, setExpandedId] = useState<string | null>('doctor-intake')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section style={{ backgroundColor: 'var(--primary-navy)', padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.75rem', border: '1px solid rgba(212,175,55,0.3)' }}>
            <HelpCircle size={16} /> Frequently Asked Questions
          </div>
          <h2 className="h2" style={{ color: 'white', marginTop: '0.5rem' }}>
            Everything You Need To Know <span className="text-gold">About Care.</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '0.75rem auto 0', lineHeight: 1.6 }}>
            Clear answers about board-certified telehealth consultations, 503A pharmacy compounding, sublingual ODT absorption, and doorstep shipping.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div style={{ maxWidth: '820px', margin: '0 auto 3rem' }}>
          {/* Search Input */}
          <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
            <Search size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-gold)' }} />
            <input
              type="text"
              placeholder="Search questions (e.g., insurance, cold-pack shipping, ODT tablets, labs)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3.25rem',
                borderRadius: '99px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(212,175,55,0.3)',
                color: 'white',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'border-color 0.2s',
              }}
            />
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'intake', label: '🩺 Doctor Consultation & Labs' },
              { id: 'pharmacy', label: '🧪 503A Pharmacy & ODT' },
              { id: 'pricing', label: '💳 Flat Pricing & Plans' },
              { id: 'shipping', label: '📦 Cold-Pack Shipping' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '99px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  border: activeCategory === tab.id ? '1.5px solid var(--primary-gold)' : '1px solid rgba(255,255,255,0.12)',
                  backgroundColor: activeCategory === tab.id ? 'var(--primary-gold)' : 'rgba(255,255,255,0.03)',
                  color: activeCategory === tab.id ? 'var(--primary-navy)' : '#CBD5E1',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Questions List */}
        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredFAQs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94A3B8' }}>
              No questions matching &quot;{searchQuery}&quot;. Have a specific question? Contact our medical team below.
            </div>
          ) : (
            filteredFAQs.map(faq => {
              const isExpanded = expandedId === faq.id

              return (
                <div
                  key={faq.id}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderRadius: '1.25rem',
                    border: isExpanded ? '1px solid var(--primary-gold)' : '1px solid rgba(255,255,255,0.08)',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                    boxShadow: isExpanded ? '0 15px 35px rgba(0,0,0,0.4)' : 'none',
                  }}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                    style={{
                      width: '100%',
                      padding: '1.5rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      background: 'none',
                      border: 'none',
                      color: 'white',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ color: isExpanded ? 'var(--primary-gold)' : 'white', transition: 'color 0.2s' }}>
                      {faq.question}
                    </span>
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={22} style={{ color: 'var(--primary-gold)', flexShrink: 0 }} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(0,0,0,0.2)' }}
                      >
                        <div style={{ padding: '1.5rem 1.75rem', color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.7 }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })
          )}
        </div>

        {/* Doctor Consultation CTA Footer Box */}
        <div style={{ maxWidth: '880px', margin: '3.5rem auto 0', backgroundColor: 'rgba(212,175,55,0.08)', borderRadius: '1.5rem', border: '1px solid rgba(212,175,55,0.3)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'white', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={20} className="text-gold" /> Ready to speak with a physician?
            </div>
            <div style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
              Take our 3-minute online intake to check your eligibility for doctor-prescribed protocols.
            </div>
          </div>

          <Link href="/get-started" className="btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem' }}>
            Start Doctor Intake →
          </Link>
        </div>
      </div>
    </section>
  )
}
