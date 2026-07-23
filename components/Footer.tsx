import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Lock, Award, HeartPulse, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

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

        {/* 4 Main Columns Grid */}
        <div className="footer-main-grid">
          {/* Brand & Overview */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <div style={{ position: 'relative', width: '160px', height: '42px' }}>
                <Image src="/newlogo.png" alt="VitalWellRx Logo" fill sizes="160px" style={{ objectFit: 'contain' }} />
              </div>
            </Link>
            <p style={{ color: '#94A3B8', fontSize: '0.925rem', lineHeight: 1.7, maxWidth: '320px', marginBottom: '1.5rem' }}>
              VitalWellRx delivers physician-guided medical weight loss, bioidentical TRT & BHRT hormone balance, and cellular peptide protocols directly to your door.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--primary-gold)', fontWeight: 700 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} /> 100% Board-Certified US Doctors
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} /> FDA-Regulated 503A Pharmacies
              </div>
            </div>
          </div>

          {/* Treatments & Protocols */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
              Treatments
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="/treatments/weight-loss" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Medical Weight Loss</Link>
              <Link href="/treatments/mens-hormone" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Men&apos;s TRT Protocol</Link>
              <Link href="/treatments/mens-hairloss" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Men&apos;s Hair Loss Restoration</Link>
              <Link href="/treatments/womens-hormone" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Women&apos;s Bioidentical BHRT</Link>
              <Link href="/treatments/peptide-therapy" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Peptide Tissue Repair (BPC-157)</Link>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="/shop" style={{ color: 'var(--primary-gold)', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>🛒 Pharmacy Shop Catalog</Link>
              <Link href="/about" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>About VitalWellRx</Link>
              <Link href="/how-it-works" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Telehealth Process</Link>
              <Link href="/treatments" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>What We Treat A–Z</Link>
              <Link href="/get-started" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>5-Minute Assessment</Link>
              <Link href="/dashboard" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>Member Patient Portal</Link>
            </div>
          </div>

          {/* Security & Compliance */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
              Compliance & Security
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94A3B8', fontSize: '0.85rem' }}>
                <ShieldCheck size={16} className="text-gold" /> HIPAA Privacy Standard
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94A3B8', fontSize: '0.85rem' }}>
                <Lock size={16} className="text-gold" /> 256-Bit SSL Encrypted
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94A3B8', fontSize: '0.85rem' }}>
                <Award size={16} className="text-gold" /> 503A Licensed Pharmacy
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94A3B8', fontSize: '0.85rem' }}>
                <HeartPulse size={16} className="text-gold" /> 50 State Telehealth
              </div>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer Panel */}
        <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '2.5rem' }}>
          <p style={{ color: '#64748B', fontSize: '0.75rem', lineHeight: 1.6 }}>
            <strong>Medical Disclaimer:</strong> Information provided on VitalWellRx is for informational and educational purposes only and does not substitute professional medical advice. Prescriptions are subject to online clinical review and physician approval. Compounded medications are compounded in 503A/503B FDA-regulated licensed compounding pharmacies based on individual patient prescriptions. VitalWellRx is not an emergency medical provider. If you are experiencing a medical emergency, please call 911 immediately.
          </p>
        </div>

        {/* Bottom Rights & Badges */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#64748B', fontSize: '0.8125rem' }}>
            © {new Date().getFullYear()} VitalWellRx Medical PC. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#64748B', fontSize: '0.8125rem' }}>
            <Link href="/privacy" style={{ color: '#64748B', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: '#64748B', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/contact" style={{ color: '#64748B', textDecoration: 'none' }}>Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
