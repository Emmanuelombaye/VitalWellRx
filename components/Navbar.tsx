'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/treatments', label: 'Treatments' },
  { href: '/shop', label: 'Shop', icon: true },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header style={{ position: 'sticky', top: 0, left: 0, width: '100%', zIndex: 1000, backgroundColor: '#ffffff', backdropFilter: 'blur(16px)', borderBottom: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
      <nav className="container" style={{ position: 'relative', padding: '1.1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: '160px', height: '48px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, backgroundColor: '#ffffff', padding: '4px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/newlogo.png" alt="VitalWellRx Logo" fill sizes="160px" style={{ objectFit: 'contain', padding: '2px' }} priority />
          </div>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontWeight: link.href === '/shop' ? 700 : 600,
                color: link.href === '/shop' ? 'var(--primary-gold)' : '#0f172a',
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              {link.icon ? <ShoppingBag size={17} /> : null}
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link href="/dashboard" className="hidden md:inline-flex" style={{ fontWeight: 600, color: '#64748b', fontSize: '0.875rem', textDecoration: 'none' }}>
            Portal
          </Link>
          <Link href="/get-started" className="btn-primary hidden md:inline-flex" style={{ padding: '0.55rem 1.35rem', fontSize: '0.875rem', backgroundColor: '#0B132B', color: '#ffffff', borderRadius: '9999px', fontWeight: 700, textDecoration: 'none' }}>
            Get Started
          </Link>

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
              color: '#0f172a',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: mobileMenuOpen ? 'rgba(212,175,55,0.15)' : 'rgba(0,0,0,0.04)',
            }}
          >
            {mobileMenuOpen ? <X size={24} className="text-gold" /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

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
              backgroundColor: 'rgba(15, 23, 42, 0.4)',
              backdropFilter: 'blur(8px)',
              zIndex: 998,
            }}
          />
        )}
      </AnimatePresence>

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
              backgroundColor: '#ffffff',
              backdropFilter: 'blur(28px)',
              borderTop: '1px solid #e2e8f0',
              borderBottom: '1px solid #e2e8f0',
              padding: '1.25rem 1.25rem 2rem',
              maxHeight: '82vh',
              overflowY: 'auto',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
              zIndex: 999,
              transformOrigin: 'top center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: link.href === '/shop' ? 'var(--primary-gold)' : '#0f172a',
                    fontWeight: 700,
                    fontSize: '1rem',
                    padding: '0.85rem 0.75rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    borderRadius: '0.75rem',
                    backgroundColor: link.href === '/shop' ? 'rgba(212,175,55,0.1)' : '#f8fafc',
                    border: link.href === '/shop' ? '1px solid rgba(212,175,55,0.35)' : '1px solid #e2e8f0',
                  }}
                >
                  {link.icon ? <ShoppingBag size={16} /> : null}
                  {link.label}
                </Link>
              ))}

              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#64748b', fontWeight: 600, fontSize: '0.95rem', padding: '0.75rem', textDecoration: 'none' }}
              >
                Patient Portal
              </Link>

              <Link
                href="/get-started"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  fontSize: '0.95rem',
                  backgroundColor: '#0B132B',
                  color: '#ffffff',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '0.5rem',
                }}
              >
                Get Started →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
