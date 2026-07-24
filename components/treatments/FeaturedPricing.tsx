import { ArrowRight, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

interface FeaturedPricingProps {
  eyebrow?: string
  heading?: React.ReactNode
  badge: string
  price: string
  description: string
  includes: string[]
  ctaLabel: string
  ctaHref?: string
}

export default function FeaturedPricing({
  eyebrow = 'Simple Monthly Subscription',
  heading = (
    <>
      Everything Included. Cancel Anytime.
    </>
  ),
  badge,
  price,
  description,
  includes,
  ctaLabel,
  ctaHref = '/get-started',
}: FeaturedPricingProps) {
  return (
    <section
      style={{
        backgroundColor: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '6rem 0',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2 className="h2" style={{ marginTop: '0.5rem', marginBottom: '3.5rem' }}>
          {heading}
        </h2>

        <div
          style={{
            maxWidth: '580px',
            margin: '0 auto',
            backgroundColor: 'var(--primary-navy)',
            borderRadius: '1.5rem',
            padding: '3.5rem 2.5rem',
            border: '2px solid var(--primary-gold)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          }}
        >
          <span
            style={{
              backgroundColor: 'var(--primary-gold)',
              color: 'var(--primary-navy)',
              padding: '0.35rem 1rem',
              borderRadius: '99px',
              fontSize: '0.75rem',
              fontWeight: 900,
              textTransform: 'uppercase',
            }}
          >
            {badge}
          </span>

          <div style={{ fontSize: '4rem', fontWeight: 900, margin: '1.25rem 0 0.5rem', color: 'white' }}>
            {price}
            <span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#94A3B8' }}>/month</span>
          </div>
          <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>
            {description}
          </p>

          <div
            style={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.9rem',
              marginBottom: '2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '1.5rem',
            }}
          >
            {includes.map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.9)',
                }}
              >
                <ShieldCheck size={18} className="text-gold" style={{ flexShrink: 0 }} /> {item}
              </div>
            ))}
          </div>

          <Link href={ctaHref} className="btn-primary" style={{ width: '100%', padding: '1.15rem' }}>
            {ctaLabel} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </div>
    </section>
  )
}
