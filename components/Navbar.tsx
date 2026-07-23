'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Scale, Zap, Heart, Dna, ArrowRight, Sparkles, ShieldCheck, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const quickLinks = [
    { title: 'Weight Loss', href: '/treatments/weight-loss' },
    { title: "Men's Health", href: '/treatments/mens-hormone' },
    { title: "Women's Health", href: '/treatments/womens-hormone' },
    { title: 'Peptides', href: '/treatments/peptide-therapy' },
  ]

  const aToZCategories = [
    {
      category: 'Metabolic & Weight Loss',
      icon: <Scale size={18} className="text-gold" />,
      items: [
        { name: 'Tirzepatide Dual GIP/GLP-1', desc: 'Up to 22.5% fat reduction', href: '/treatments/weight-loss' },
        { name: 'Sublingual GLP-1 ODT', desc: 'Needle-free oral tablets', href: '/treatments/odt-tablets' },
        { name: 'Metabolic Rate Reset', desc: 'Set-point calibration', href: '/treatments/weight-loss' },
        { name: 'Appetite & Craving Control', desc: '24-48hr onset', href: '/treatments/weight-loss' },
      ],
    },
    {
      category: "Men's & Women's Hormones",
      icon: <Zap size={18} className="text-gold" />,
      items: [
        { name: 'Bioidentical TRT Cypionate', desc: 'Testosterone optimization', href: '/treatments/mens-hormone' },
        { name: 'HCG & Enclomiphene Support', desc: 'Male fertility preservation', href: '/treatments/fertility-mens' },
        { name: 'BHRT Estradiol & Progesterone', desc: 'Female REM sleep & hot flashes', href: '/treatments/womens-hormone' },
        { name: 'DHEA & Thyroid Balance', desc: 'Energy & emotional resilience', href: '/treatments/womens-hormone' },
      ],
    },
    {
      category: 'Cellular Repair & Peptides',
      icon: <Dna size={18} className="text-gold" />,
      items: [
        { name: 'BPC-157 Pentadecapeptide', desc: 'Tendon, joint & gut repair', href: '/treatments/peptide-therapy' },
        { name: 'CJC-1295 / Ipamorelin', desc: 'Pulsatile pituitary GH surge', href: '/treatments/cjc-ipamorelin' },
        { name: 'GHK-Cu Copper Peptide', desc: 'Dermal collagen & hair density', href: '/treatments/ghk-cu' },
        { name: '503A Compounded Sterile Vials', desc: 'Insulated cold-pack shipping', href: '/treatments/peptide-therapy' },
      ],
    },
  ]

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(11, 19, 43, 0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
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

        {/* Center Nav Links & Ro-style What We Treat Mega Dropdown (Desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="hidden md:flex">
          {quickLinks.map(link => (
            <Link
              key={link.title}
              href={link.href}
              style={{ fontWeight: 600, color: 'rgba(255,255,255,0.85)', fontSize: '0.925rem', transition: 'color 0.2s', textDecoration: 'none' }}
            >
              {link.title}
            </Link>
          ))}

          {/* Ro-Style Mega Dropdown */}
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
                fontSize: '0.925rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer',
                padding: '0.2rem 0.6rem',
                borderRadius: '0.5rem',
                backgroundColor: megaMenuOpen ? 'rgba(212,175,55,0.15)' : 'transparent',
              }}
            >
              What We Treat
              <motion.div animate={{ rotate: megaMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={16} />
              </motion.div>
            </button>

            {/* Full Mega Dropdown Menu Panel */}
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
                    right: '-160px',
                    width: '880px',
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
                      <Sparkles size={16} /> WHAT WE TREAT A–Z
                    </div>
                    <Link
                      href="/treatments"
                      onClick={() => setMegaMenuOpen(false)}
                      style={{ fontSize: '0.8rem', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
                    >
                      View All Protocols <ArrowRight size={14} className="text-gold" />
                    </Link>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                    {aToZCategories.map((col, idx) => (
                      <div key={idx}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '0.95rem', color: 'white', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.5rem' }}>
                          {col.icon} {col.category}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                          {col.items.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              onClick={() => setMegaMenuOpen(false)}
                              style={{ textDecoration: 'none', display: 'block', padding: '0.4rem 0.6rem', borderRadius: '0.5rem' }}
                            >
                              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255,255,255,0.95)' }}>{item.name}</div>
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
        </div>

        {/* Right CTA (Desktop) */}
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
              <Link href="/treatments" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>
                🌟 All Treatments
              </Link>
              <Link href="/treatments/weight-loss" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                🔥 Medical Weight Loss (Tirzepatide)
              </Link>
              <Link href="/treatments/odt-tablets" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                💊 Sublingual GLP-1 ODT Tablets
              </Link>
              <Link href="/treatments/mens-hormone" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                ⚡ Men&apos;s TRT Protocol
              </Link>
              <Link href="/treatments/fertility-mens" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                🌱 Male Fertility & HCG
              </Link>
              <Link href="/treatments/womens-hormone" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                🌸 Women&apos;s BHRT Therapy
              </Link>
              <Link href="/treatments/peptide-therapy" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                🧬 BPC-157 Peptide Repair
              </Link>
              <Link href="/treatments/cjc-ipamorelin" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                ⚡ CJC-1295 / Ipamorelin
              </Link>
              <Link href="/treatments/ghk-cu" onClick={() => setMobileMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                ✨ GHK-Cu Copper Peptide
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
