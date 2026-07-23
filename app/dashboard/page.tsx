'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Beaker, Dna, Settings, PieChart, Bell, Home, Lock, ShieldCheck, Check, ArrowRight, CreditCard, Sparkles, Truck, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Dashboard() {
  const [hasSubscription, setHasSubscription] = useState(false)
  const [selectedProtocol, setSelectedProtocol] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const protocols = [
    {
      id: 'weight-loss',
      name: 'Medical Weight Loss',
      badge: 'Dual GIP / GLP-1',
      price: '$340',
      period: '/month',
      desc: 'Tirzepatide & GLP-1 compounding, monthly blood panels, and provider visits.',
      icon: <Activity size={24} className="text-gold" />,
    },
    {
      id: 'mens-trt',
      name: "Men's Hormone Optimization",
      badge: 'Bioidentical TRT',
      price: '$199',
      period: '/month',
      desc: 'Testosterone Cypionate, Anastrozole support, quarterly labs, and MD consults.',
      icon: <Beaker size={24} className="text-gold" />,
    },
    {
      id: 'womens-bhrt',
      name: "Women's Bioidentical BHRT",
      badge: 'Tri-Hormone Synergy',
      price: '$189',
      period: '/month',
      desc: 'Estradiol, Micronized Progesterone & DHEA for sleep, skin & mood stability.',
      icon: <Sparkles size={24} className="text-gold" />,
    },
    {
      id: 'peptides',
      name: 'Peptide Therapy & Repair',
      badge: 'BPC-157 & CJC-1295',
      price: '$349',
      period: '/month',
      desc: 'Prescription peptides for tendon, joint & gut mucosa tissue regeneration.',
      icon: <Dna size={24} className="text-gold" />,
    },
  ]

  const handleCheckout = (protocolId: string) => {
    setSelectedProtocol(protocolId)
    setIsProcessing(true)

    // Simulate instant secure payment processing & enrollment unlock
    setTimeout(() => {
      setIsProcessing(false)
      setHasSubscription(true)
    }, 1800)
  }

  return (
    <div className="flex portal-layout" style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Sidebar Navigation */}
      <aside className="portal-aside" style={{ width: '260px', borderRight: '1px solid rgba(255,255,255,0.08)', padding: '2rem 1.5rem', backgroundColor: 'var(--primary-navy)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', marginBottom: '3rem' }}>
          <div style={{ position: 'relative', width: '84px', height: '40px', borderRadius: '6px', overflow: 'hidden', flexShrink: 0, backgroundColor: '#ffffff', padding: '3px 6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/newlogo.png" alt="VitalWellRx" fill sizes="84px" style={{ objectFit: 'contain', padding: '2px' }} />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'white' }}>
            VitalWell<span className="text-gold">Rx</span>
          </span>
        </Link>

        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-3 text-muted" style={{ padding: '0.75rem', borderRadius: '0.5rem', textDecoration: 'none' }}>
            <Home size={18} /> Website Home
          </Link>

          <div
            className="flex items-center gap-3"
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              backgroundColor: 'rgba(212,175,55,0.15)',
              color: 'var(--primary-gold)',
              fontWeight: 700,
            }}
          >
            <Activity size={18} /> Member Portal
          </div>

          <div className="flex items-center gap-3 text-muted" style={{ padding: '0.75rem', opacity: hasSubscription ? 1 : 0.4 }}>
            <PieChart size={18} /> Blood Biomarkers
          </div>

          <div className="flex items-center gap-3 text-muted" style={{ padding: '0.75rem', opacity: hasSubscription ? 1 : 0.4 }}>
            <MessageSquare size={18} /> Provider Chat
          </div>

          <div className="flex items-center gap-3 text-muted" style={{ padding: '0.75rem', opacity: hasSubscription ? 1 : 0.4 }}>
            <Settings size={18} /> Settings
          </div>
        </div>

        {/* Sidebar Status Pill */}
        <div style={{ marginTop: 'auto', paddingTop: '4rem' }}>
          {hasSubscription ? (
            <div style={{ backgroundColor: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', padding: '0.85rem', borderRadius: '0.75rem', color: '#10B981', fontSize: '0.8rem', fontWeight: 700 }}>
              <CheckCircle2 size={16} style={{ marginBottom: '4px' }} /> Active Member Plan
            </div>
          ) : (
            <div style={{ backgroundColor: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', padding: '0.85rem', borderRadius: '0.75rem', color: '#EF4444', fontSize: '0.8rem', fontWeight: 700 }}>
              <Lock size={16} style={{ marginBottom: '4px' }} /> Unsubscribed Status
            </div>
          )}
        </div>
      </aside>

      {/* Main Content View */}
      <main style={{ flex: 1, padding: '2.5rem 3.5rem' }}>
        {/* Header */}
        <header className="flex items-center justify-between" style={{ marginBottom: '2.5rem' }}>
          <div>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800 }}>
              Member <span className="text-gold">Portal</span>
            </h1>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>
              {hasSubscription ? 'Welcome back! Here is your active protocol overview.' : 'Please enroll in a treatment protocol to activate your portal.'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem', borderRadius: '0.5rem', cursor: 'pointer' }}>
              <Bell size={20} />
            </button>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--primary-gold)', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>
              VW
            </div>
          </div>
        </header>

        {/* ------------------------------------------------------------- */}
        {/* VIEW 1: GATE / PURCHASE REQUIRED SCREEN (If not subscribed)   */}
        {/* ------------------------------------------------------------- */}
        {!hasSubscription ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Warning Lock Banner */}
            <div
              style={{
                backgroundColor: 'rgba(212,175,55,0.1)',
                border: '2px solid var(--primary-gold)',
                borderRadius: '1.25rem',
                padding: '2rem',
                marginBottom: '3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
              }}
            >
              <div style={{ padding: '1rem', backgroundColor: 'var(--primary-gold)', color: 'var(--primary-navy)', borderRadius: '1rem' }}>
                <Lock size={36} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--primary-gold)', letterSpacing: '1.5px' }}>
                  Subscription Required First
                </span>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, marginTop: '0.25rem' }}>
                  Enroll in a Treatment Protocol to Unlock Your Portal
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginTop: '0.35rem', maxWidth: '700px' }}>
                  To access 1-on-1 board-certified physician consultation messaging, digital prescription refills, and real-time blood lab tracking, please select a treatment protocol below to complete your checkout.
                </p>
              </div>
            </div>

            {/* Protocol Enrollment Grid */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CreditCard size={20} className="text-gold" /> Select Your Protocol to Unlock Member Access
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {protocols.map(p => (
                  <div
                    key={p.id}
                    className="glass-card"
                    style={{
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: '1px solid var(--card-border)',
                      position: 'relative',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <div style={{ padding: '0.75rem', backgroundColor: 'rgba(212,175,55,0.15)', borderRadius: '0.75rem' }}>
                          {p.icon}
                        </div>
                        <span style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--primary-gold)', padding: '4px 12px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>
                          {p.badge}
                        </span>
                      </div>

                      <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'white', marginBottom: '0.35rem' }}>{p.name}</h4>
                      <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{p.desc}</p>
                    </div>

                    <div>
                      <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', marginBottom: '1.25rem' }}>
                        {p.price}<span style={{ fontSize: '1rem', color: '#94A3B8', fontWeight: 600 }}>{p.period}</span>
                      </div>

                      <button
                        onClick={() => handleCheckout(p.id)}
                        disabled={isProcessing}
                        className="btn-primary"
                        style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem' }}
                      >
                        {isProcessing && selectedProtocol === p.id ? 'Processing Enrollment...' : 'Enroll & Unlock Portal →'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                <ShieldCheck size={20} className="text-gold" /> No Insurance Needed (Flat Monthly Pricing)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                <Truck size={20} className="text-gold" /> Free Temperature-Controlled Discreet Delivery
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                <CheckCircle2 size={20} className="text-gold" /> Cancel or Adjust Your Plan Anytime
              </div>
            </div>
          </motion.div>
        ) : (
          /* ------------------------------------------------------------- */
          /* VIEW 2: UNLOCKED FULL PORTAL DASHBOARD (After purchase)       */
          /* ------------------------------------------------------------- */
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            {/* Active Subscription Banner */}
            <div style={{ backgroundColor: 'rgba(16,185,129,0.15)', border: '2px solid #10B981', borderRadius: '1.25rem', padding: '1.5rem 2rem', marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ backgroundColor: '#10B981', color: 'white', padding: '0.6rem', borderRadius: '50%' }}>
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#10B981', letterSpacing: '1px' }}>
                    Active Protocol Membership
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                    {protocols.find(p => p.id === selectedProtocol)?.name || 'Medical Weight Loss Protocol'}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Next Refill Order</div>
                <div style={{ fontWeight: 800, color: 'var(--primary-gold)' }}>August 15, 2026</div>
              </div>
            </div>

            {/* Portal Widgets */}
            <div className="grid grid-cols-3 gap-6" style={{ marginBottom: '2.5rem' }}>
              <div className="glass-card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <Activity size={24} className="text-gold" />
                  <span style={{ color: '#10B981', fontWeight: 800, fontSize: '0.85rem' }}>ON TRACK</span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.25rem' }}>Current Weight</h4>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>
                  188 <span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 600 }}>lbs (-14 lbs)</span>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <Beaker size={24} className="text-gold" />
                  <span style={{ color: 'var(--primary-gold)', fontWeight: 800, fontSize: '0.85rem' }}>LABS APPROVED</span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.25rem' }}>Total Testosterone</h4>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>
                  920 <span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 600 }}>ng/dL (Optimal)</span>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <Truck size={24} className="text-gold" />
                  <span style={{ color: '#3B82F6', fontWeight: 800, fontSize: '0.85rem' }}>DISPATCHED</span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.25rem' }}>Prescription Shipment</h4>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white' }}>
                  FedEx Express #9482..
                </div>
              </div>
            </div>

            {/* Provider Messaging & Refill Requests */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MessageSquare size={20} className="text-gold" /> Physician Telehealth Chat
                </h4>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '0.75rem', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-gold)', marginBottom: '4px' }}>Dr. Marcus Vance, MD (Medical Director)</div>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                    "Your blood panel looks excellent. I have authorized your Week 4 titration dose increase. Keep up the high protein intake."
                  </p>
                </div>
                <button className="btn-primary" style={{ width: '100%', padding: '0.75rem' }}>Send Message to Provider</button>
              </div>

              <div className="glass-card" style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <PieChart size={20} className="text-gold" /> Blood Panel Diagnostics
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                  {['Free Testosterone: 26.4 pg/mL (Optimal)', 'Fasting Glucose: 88 mg/dL (Normal)', 'HbA1c: 5.2% (Optimal)', 'hs-CRP: 0.6 mg/L (Low Inflammation)'].map((lab, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'white', padding: '0.5rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '0.5rem' }}>
                      <span>{lab.split(':')[0]}</span>
                      <span style={{ color: 'var(--primary-gold)', fontWeight: 700 }}>{lab.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
                <button style={{ width: '100%', padding: '0.75rem', backgroundColor: 'transparent', border: '1px solid var(--primary-gold)', color: 'var(--primary-gold)', borderRadius: '99px', fontWeight: 700, cursor: 'pointer' }}>
                  Download Full PDF Blood Work
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  )
}
