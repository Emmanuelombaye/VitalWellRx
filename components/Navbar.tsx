'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Scale, Zap, Heart, Dna, ArrowRight, Sparkles, Menu, X, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>('Metabolic & Weight Loss')

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
      <nav className="container" style={{ position: 'relative', padding: '1.1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left: Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: '160px', height: '48px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, backgroundColor: '#ffffff', padding: '4px 8px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/newlogo.png" alt="VitalWellRx Logo" fill sizes="160px" style={{ objectFit: 'contain', padding: '2px' }} priority />
          </div>
        </Link>

        {/* Center Top Nav Links (Desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {/* Treatments Mega Dropdown */}
          <div
            style={{ padding: '0.5rem 0' }}
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

            {/* Mega Dropdown Panel Anchored to Nav Container */}
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
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'min(1100px, calc(100vw - 2rem))',
                    maxWidth: 'calc(100vw - 2rem)',
                    boxSizing: 'border-box',
                    backgroundColor: 'rgba(11, 19, 43, 0.98)',
                    backdropFilter: 'blur(24px)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    borderRadius: '1.25rem',
                    padding: '1.75rem 2rem',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.75)',
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

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
                    {treatmentCategories.map((col, idx) => (
                      <div key={idx}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontWeight: 800,
                            fontSize: '0.725rem',
                            color: col.color,
                            backgroundColor: col.bg,
                            border: `1px solid ${col.border}`,
                            padding: '6px 10px',
                            borderRadius: '99px',
                            marginBottom: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {col.icon} {col.category}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                          {col.items.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              onClick={() => setMegaMenuOpen(false)}
                              style={{ textDecoration: 'none', display: 'block', padding: '0.45rem', borderRadius: '0.5rem', transition: 'background-color 0.2s' }}
                            >
                              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'white' }}>{item.name}</div>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link href="/dashboard" className="hidden md:inline-flex" style={{ fontWeight: 600, color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>
            Portal
          </Link>
          <Link href="/get-started" className="btn-primary hidden md:inline-flex" style={{ padding: '0.55rem 1.35rem', fontSize: '0.875rem' }}>
            Get Started
          </Link>

          {/* Mobile Menu Hamburger Toggle */}
          <motion.button
            whileTap={{ scale: 0.92 }}
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
              padding: '0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: mobileMenuOpen ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.06)',
            }}
          >
            {mobileMenuOpen ? <X size={24} className="text-gold" /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(5, 10, 25, 0.75)',
              backdropFilter: 'blur(8px)',
              zIndex: 998,
            }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Animated Accordion Dropdown Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: 'rgba(11, 19, 43, 0.98)',
              backdropFilter: 'blur(28px)',
              borderTop: '1px solid rgba(212,175,55,0.25)',
              borderBottom: '1px solid rgba(212,175,55,0.25)',
              padding: '1.25rem 1.25rem 2rem',
              maxHeight: '82vh',
              overflowY: 'auto',
              boxShadow: '0 30px 70px rgba(0,0,0,0.85)',
              zIndex: 999,
              transformOrigin: 'top center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Quick Navigation Links */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.25rem' }}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.92 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                  <Link
                    href="/shop"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      backgroundColor: 'rgba(212,175,55,0.15)',
                      border: '1px solid rgba(212,175,55,0.4)',
                      color: 'var(--primary-gold)',
                      fontWeight: 800,
                      fontSize: '0.875rem',
                      padding: '0.75rem 0.85rem',
                      borderRadius: '0.75rem',
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <ShoppingBag size={16} /> Shop Catalog
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.92 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                  <Link
                    href="/treatments"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      padding: '0.75rem 0.85rem',
                      borderRadius: '0.75rem',
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    🌟 All Treatments
                  </Link>
                </motion.div>
              </div>

              {/* Treatment Categories Collapsible Accordion Dropdowns */}
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-gold)', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '0.25rem' }}>
                Prescription Protocols Dropdown
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {treatmentCategories.map((col, idx) => {
                  const isExpanded = mobileExpandedCat === col.category

                  return (
                    <motion.div
                      key={idx}
                      layout
                      style={{
                        backgroundColor: isExpanded ? 'rgba(212,175,55,0.08)' : 'rgba(255,255,255,0.03)',
                        borderRadius: '0.85rem',
                        border: isExpanded ? `1.5px solid ${col.color}` : `1px solid ${col.border}`,
                        overflow: 'hidden',
                        boxShadow: isExpanded ? `0 8px 25px rgba(0,0,0,0.3)` : 'none',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setMobileExpandedCat(isExpanded ? null : col.category)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1rem',
                          background: 'none',
                          border: 'none',
                          color: 'white',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: col.color }}>
                          {col.icon} {col.category}
                        </div>
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0, scale: isExpanded ? 1.15 : 1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                          <ChevronDown size={18} style={{ color: 'var(--primary-gold)' }} />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, scaleY: 0.95 }}
                            animate={{ height: 'auto', opacity: 1, scaleY: 1 }}
                            exit={{ height: 0, opacity: 0, scaleY: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                            style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(0,0,0,0.28)', padding: '0.5rem 0.75rem 0.75rem' }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                              {col.items.map((item, i) => (
                                <motion.div key={i} whileHover={{ x: 4, scale: 1.01 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
                                  <Link
                                    href={item.href}
                                    onClick={() => { setMobileMenuOpen(false); setMobileExpandedCat(null) }}
                                    style={{
                                      display: 'block',
                                      padding: '0.6rem 0.75rem',
                                      borderRadius: '0.5rem',
                                      backgroundColor: 'rgba(255,255,255,0.04)',
                                      textDecoration: 'none'
                                    }}
                                  >
                                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'white' }}>{item.name}</div>
                                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '2px' }}>{item.desc}</div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>

              {/* General Navigation Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.96 }}>
                  <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontSize: '0.9rem', padding: '0.4rem 0.5rem', textDecoration: 'none', display: 'block' }}>
                    ⚙️ How It Works
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.96 }}>
                  <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontSize: '0.9rem', padding: '0.4rem 0.5rem', textDecoration: 'none', display: 'block' }}>
                    ℹ️ About VitalWellRx
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.96 }}>
                  <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} style={{ color: '#94A3B8', fontWeight: 600, fontSize: '0.9rem', padding: '0.4rem 0.5rem', textDecoration: 'none', display: 'block' }}>
                    🔑 Patient Portal
                  </Link>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <div style={{ paddingTop: '0.5rem' }}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.93 }} transition={{ type: 'spring', stiffness: 400, damping: 16 }}>
                  <Link href="/get-started" onClick={() => setMobileMenuOpen(false)} className="btn-primary" style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}>
                    Get Started Intake →
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
