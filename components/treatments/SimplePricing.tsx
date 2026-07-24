import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

interface SimplePricingProps {
  eyebrow?: string
  heading: string
  price: string
  description: string
  ctaLabel: string
  ctaHref?: string
}

export default function SimplePricing({
  eyebrow,
  heading,
  price,
  description,
  ctaLabel,
  ctaHref = '/get-started',
}: SimplePricingProps) {
  return (
    <section
      style={{
        backgroundColor: 'rgba(255,255,255,0.02)',
        padding: '6rem 0',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {eyebrow ? (
          <>
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2 className="h2" style={{ marginTop: '0.5rem', marginBottom: '3.5rem' }}>
              {heading}
            </h2>
          </>
        ) : (
          <h2 className="h2" style={{ marginBottom: '3.5rem' }}>
            {heading}
          </h2>
        )}

        <div
          style={{
            maxWidth: '580px',
            margin: '0 auto',
            backgroundColor: 'var(--primary-navy)',
            borderRadius: '1.5rem',
            padding: '3.5rem 2.5rem',
            border: '2px solid var(--primary-gold)',
          }}
        >
          <div style={{ fontSize: '4rem', fontWeight: 900, color: 'white', marginBottom: '0.5rem' }}>
            {price}
            <span style={{ fontSize: '1.25rem', color: '#94A3B8' }}>/month</span>
          </div>
          <p className="text-muted" style={{ marginBottom: '2rem' }}>
            {description}
          </p>
          <Link href={ctaHref} className="btn-primary" style={{ width: '100%', padding: '1.1rem' }}>
            {ctaLabel} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </div>
    </section>
  )
}
