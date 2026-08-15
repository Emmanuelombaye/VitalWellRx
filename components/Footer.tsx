import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { site, trustBadges, contact } from '@/data/site'
import { legalLinks } from '@/data/legal'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#060d1e', borderTop: '1px solid rgba(212,175,55,0.2)', color: 'white', padding: '5rem 0 2.5rem' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Top Banner CTA */}
        <div style={{ backgroundColor: 'rgba(212,175,55,0.08)', borderRadius: '1.5rem', border: '1px solid rgba(212,175,55,0.3)', padding: '2.5rem', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-gold)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.35rem' }}>
              <Sparkles size={14} /> Start Your Longevity Journey
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white' }}>Ready to Optimize Your Biomarkers?</h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginTop: '0.25rem' }}>Take our 5-minute online intake assessment. No insurance needed.</p>
          </div>
          <Link href="/get-started" className="btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}>
            Check Eligibility Now <ArrowRight size={16} style={{ marginLeft: '6px' }} />
          </Link>
        </div>

        {/* Main Columns Grid */}
        <div className="footer-main-grid">
          {/* Brand & Overview */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <div style={{ position: 'relative', width: '135px', height: '62px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#ffffff', padding: '4px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/newlogo.webp" alt={`${site.name} Logo`} fill sizes="135px" quality={80} loading="lazy" style={{ objectFit: 'contain', padding: '2px' }} />
              </div>
            </Link>
            <p style={{ color: '#94A3B8', fontSize: '0.925rem', lineHeight: 1.7, maxWidth: '320px', marginBottom: '1.5rem' }}>
              {site.legalName} d/b/a {site.dba}. Licensed clinical care. Clear pricing. Qualified U.S. pharmacy fulfillment.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--primary-gold)', fontWeight: 700 }}>
              {trustBadges.map((badge) => (
                <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} /> {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Care / Treatments */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
              Care
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="/treatments/weight-loss" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Tirzepatide+</Link>
              <Link href="/treatments/odt-tablets" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Semaglutide+</Link>
              <Link href="/treatments" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>All treatments</Link>
              <Link href="/how-it-works" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>How it works</Link>
              <Link href="/shop" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Shop</Link>
            </div>
          </div>

          {/* Legal — Nexa/Pax pattern */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
              Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
              Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="/about" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>About VitalWellRx</Link>
              <Link href="/get-started" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Check Eligibility</Link>
              <Link href="/dashboard" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Patient portal</Link>
              <Link href="/contact" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Contact</Link>
              <a href={`mailto:${contact.email}`} style={{ color: 'var(--primary-gold)', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 600 }}>
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fine print — Nexa/Pax style */}
        <div className="footer-bottom-block">
          <p className="footer-bottom-copy">
            {site.legalName} d/b/a {site.dba} · © {new Date().getFullYear()} {site.dba}. All rights reserved.
          </p>
          <nav className="footer-legal-links" aria-label="Legal">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="footer-legal-note">
            VitaWellRx® is a telehealth platform that connects eligible patients with independent US-licensed providers and
            licensed pharmacy partners. VitaWellRx® is not a pharmacy and does not itself practice medicine. Prescription
            products are provided only if clinically appropriate after review by a US-licensed provider. Individual results
            may vary.
          </p>
          <p className="footer-legal-note">
            <strong>Service availability:</strong> Services may not be available in all states. Availability may vary by
            treatment, provider licensure, pharmacy fulfillment, and patient eligibility.
          </p>
          <p className="footer-legal-note">
            <strong>Pharmacy &amp; fulfillment:</strong> If prescription treatment is clinically appropriate, medication may
            be fulfilled through a licensed dispensing pharmacy pursuant to a patient-specific prescription. Compounded
            medications are not FDA-approved as finished branded products. Product imagery is illustrative; actual packaging
            and labeling may differ. *Timing not guaranteed.
          </p>
        </div>
      </div>
    </footer>
  )
}
