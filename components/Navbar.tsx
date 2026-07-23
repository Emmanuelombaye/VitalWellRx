'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Scale, Zap, Heart, Dna, ArrowRight, Sparkles, ShieldCheck, Menu, X, ShoppingBag, Scissors, Pill } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const treatmentCategories = [
    {
      category: 'Metabolic & Weight Loss',
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.15)',
      border: 'rgba(16, 185, 129, 0.35)',
      icon: <Scale size={16} style={{ color: '#10B981' }} />,
      items: [
        { name: 'Tirzepatide Dual GIP/GLP-1', desc: 'Up to 22.5% fat reduction', href: '/treatments/weight-loss' },
        { name: 'Sublingual GLP-1 ODT', desc: 'Needle-free oral tablets', href: '/treatments/odt-tablets' },
        { name: 'Metabolic Set-Point Reset', desc: 'Satiation & craving control', href: '/treatments/weight-loss' },
      ],
    },
    {
      category: "Men's Health & Hair",
      color: '#3B82F6',
      bg: 'rgba(59, 130, 246, 0.15)',
      border: 'rgba(59, 130, 246, 0.35)',
      icon: <Zap size={16} style={{ color: '#3B82F6' }} />,
      items: [
        { name: 'Bioidentical TRT Cypionate', desc: 'Free testosterone optimization', href: '/treatments/mens-hormone' },
        { name: 'Oral Finasteride + Minoxidil', desc: 'Dual-action hair restoration', href: '/treatments/mens-hairloss' },
        { name: 'HCG & Enclomiphene Fertility', desc: 'Male fertility preservation', href: '/treatments/fertility-mens' },
      ],
    },
    {
      category: "Women's Health & BHRT",
      color: '#EC4899',
      bg: 'rgba(236, 72, 153, 0.15)',
      border: 'rgba(236, 72, 153, 0.35)',
      icon: <Heart size={16} style={{ color: '#EC4899' }} />,
      items: [
        { name: 'BHRT Estradiol & Progesterone', desc: 'Female REM sleep & hot flashes', href: '/treatments/womens-hormone' },
        { name: 'DHEA & Thyroid Balance', desc: 'Energy & mood resilience', href: '/treatments/womens-hormone' },
      ],
    },
    {
      category: 'Peptide Therapy & Repair',
      color: '#F59E0B',
      bg: 'rgba(245, 158, 11, 0.15)',
      border: 'rgba(245, 158, 11, 0.35)',
      icon: <Dna size={16} style={{ color: '#F59E0B' }} />,
      items: [
        { name: 'BPC-157 Pentadecapeptide', desc: 'Tendon, joint & gut repair', href: '/treatments/peptide-therapy' },
        { name: 'CJC-1295 / Ipamorelin', desc: 'Pulsatile GH surge', href: '/treatments/cjc-ipamorelin' },
        { name: 'GHK-Cu Copper Peptide', desc: 'Dermal collagen & scalp density', href: '/treatments/ghk-cu' },
      ],
    }
  ]

  return (
    <header style={{ position: 'sticky', top: 0, left: 0, width: '100%', zIndex: 1000, backgroundColor: 'rgba(11, 19, 43, 0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <nav className="container" style={{ padding: '1.1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left: Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: '38px', height: '38px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
            <Image src="/logo.jpeg" alt="VitalWellRx Logo" fill sizes="38px" style={{ objectFit: 'cover' }} priority />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'white', letterSpacing: '-0.5px' }}>
            VitalWell<span className="text-gold" style={{ fontSize: '1.3rem' }}>Rx</span>
          </span>
        </Link>

        {/* Center Top Nav Links (Desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {/* Treatments Mega Dropdown */}
          <div
            style={{ position: 'relative', padding: '0.5rem 0' }}
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                fontWeight: 700,
                color: megaMenuOpen ? 'var(--primary-gold)' : 'white',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer',
                padding: '0.3rem 0.75rem',
                borderRadius: '0.5rem',
                backgroundColor: megaMenuOpen ? 'rgba(212,175,55,0.15)' : 'transparent',
              }}
            >
              Treatments
              <motion.div animate={{ rotate: megaMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={16} />
              </motion.div>
            </button>

            {/* Mega Dropdown Panel */}
            <AnimatePresence>
              {megaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-100px',
                    width: '920px',
                    backgroundColor: 'rgba(11, 19, 43, 0.98)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    borderRadius: '1.25rem',
                    padding: '2rem',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.65)',
                    zIndex: 200,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--primary-gold)', textTransform: 'uppercase', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Sparkles size={16} /> PRESCRIPTION TREATMENTS A–Z
                    </div>
                    <Link
                      href="/treatments"
                      onClick={() => setMegaMenuOpen(false)}
                      style={{ fontSize: '0.8rem', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
                    >
                      View All Protocols <ArrowRight size={14} className="text-gold" />
                    </Link>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                    {treatmentCategories.map((col, idx) => (
                      <div key={idx}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: 800,
                            fontSize: '0.8rem',
                            color: col.color,
                            backgroundColor: col.bg,
                            border: `1px solid ${col.border}`,
                            padding: '6px 12px',
                            borderRadius: '99px',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                          }}
                        >
                          {col.icon} {col.category}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                          {col.items.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              onClick={() => setMegaMenuOpen(false)}
                              style={{ textDecoration: 'none', display: 'block', padding: '0.5rem', borderRadius: '0.5rem', transition: 'background-color 0.2s' }}
                            >
                              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'white' }}>{item.name}</div>
                              <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '2px' }}>{item.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Shop Direct Link */}
          <Link href="/shop" style={{ fontWeight: 700, color: 'var(--primary-gold)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
            <ShoppingBag size={17} /> Shop
          </Link>

          {/* How It Works */}
          <Link href="/how-it-works" style={{ fontWeight: 600, color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none' }}>
            How It Works
          </Link>

          {/* About */}
          <Link href="/about" style={{ fontWeight: 600, color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none' }}>
            About
          </Link>
        </div>

        {/* Right CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/dashboard" style={{ fontWeight: 600, color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>
            Portal
          </Link>
          <Link href="/get-started" className="btn-primary" style={{ padding: '0.55rem 1.35rem', fontSize: '0.875rem' }}>
            Get Started
          </Link>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.4rem',
            }}
          >
            {mobileMenuOpen ? <X size={26} className="text-gold" /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Animated Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: 'var(--primary-navy)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              padding: '1.5rem',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Navigation & Treatments
              </div>
              <Link href="/shop" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--primary-gold)', fontWeight: 800, fontSize: '1.1rem' }}>
                🛒 Pharmacy Shop Catalog
              </Link>
              <Link href="/treatments" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem' }}>
                🌟 All Treatments
              </Link>
              <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontSize: '1rem' }}>
                ⚙️ How It Works
              </Link>
              <Link href="/treatments/weight-loss" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                🔥 Medical Weight Loss (Tirzepatide)
              </Link>
              <Link href="/treatments/odt-tablets" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                💊 Sublingual GLP-1 ODT Tablets
              </Link>
              <Link href="/treatments/mens-hormone" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                ⚡ Men&apos;s TRT Protocol
              </Link>
              <Link href="/treatments/mens-hairloss" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                💇 Men&apos;s Hair Loss (Finasteride + Minoxidil)
              </Link>
              <Link href="/treatments/fertility-mens" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                🌱 Male Fertility & HCG
              </Link>
              <Link href="/treatments/womens-hormone" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                🌸 Women&apos;s BHRT Therapy
              </Link>
              <Link href="/treatments/peptide-therapy" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                🧬 BPC-157 Peptide Repair
              </Link>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '1rem' }}>
                <Link href="/get-started" onClick={() => setMobileMenuOpen(false)} className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                  Get Started →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
