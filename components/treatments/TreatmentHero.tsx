'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ImageCarousel from '@/components/ImageCarousel'
import { getIcon } from '@/lib/icons'
import type { IconName } from '@/types'

interface TreatmentHeroProps {
  images: string[]
  alt: string
  badgeIcon: IconName
  badge: string
  title: ReactNode
  subtitle: string
  ctaLabel: string
  ctaHref?: string
}

export default function TreatmentHero({
  images,
  alt,
  badgeIcon,
  badge,
  title,
  subtitle,
  ctaLabel,
  ctaHref = '/get-started',
}: TreatmentHeroProps) {
  const BadgeIcon = getIcon(badgeIcon)

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <ImageCarousel images={images} alt={alt} height="100%" borderRadius="0" />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(11,19,43,0.96) 0%, rgba(11,19,43,0.8) 55%, rgba(11,19,43,0.3) 100%)',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '5rem 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '660px' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(212,175,55,0.15)',
              color: 'var(--primary-gold)',
              padding: '0.4rem 1rem',
              borderRadius: '99px',
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '1rem',
              border: '1px solid rgba(212,175,55,0.3)',
            }}
          >
            <BadgeIcon size={16} /> {badge}
          </div>
          <h1 className="h1" style={{ color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
            {title}
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '580px',
            }}
          >
            {subtitle}
          </p>
          <Link href={ctaHref} className="btn-primary">
            {ctaLabel} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
