'use client'

import { useEffect, useState } from 'react'
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

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="site-header">
      <nav className="site-nav container">
        <Link href="/" className="site-nav__logo" onClick={() => setMobileMenuOpen(false)}>
            <Image
            src="/newlogo-nav.webp"
            alt="VitalWellRx Logo"
            width={160}
            height={48}
            sizes="160px"
            quality={80}
            priority
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Link>

        <div className="site-nav__links hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`site-nav__link ${link.href === '/shop' ? 'is-shop' : ''}`}
            >
              {link.icon ? <ShoppingBag size={17} /> : null}
              {link.label}
            </Link>
          ))}
        </div>

        <div className="site-nav__actions">
          <Link href="/dashboard" className="site-nav__portal hidden md:inline-flex">
            Portal
          </Link>
          <Link href="/get-started" className="site-nav__cta hidden md:inline-flex">
            Get Started
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="site-nav__burger md:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="site-nav__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="site-nav__drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 360, damping: 24 }}
          >
            <div className="site-nav__drawer-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`site-nav__drawer-link ${link.href === '/shop' ? 'is-shop' : ''}`}
                >
                  {link.icon ? <ShoppingBag size={16} /> : null}
                  {link.label}
                </Link>
              ))}

              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="site-nav__drawer-portal">
                Patient Portal
              </Link>

              <Link href="/get-started" onClick={() => setMobileMenuOpen(false)} className="site-nav__drawer-cta">
                Get Started →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
