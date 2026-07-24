'use client'

import TreatmentHero from '@/components/treatments/TreatmentHero'
import ContentWithImage from '@/components/treatments/ContentWithImage'
import SimplePricing from '@/components/treatments/SimplePricing'
import TreatmentFaq from '@/components/treatments/TreatmentFaq'
import type { SimpleTreatmentConfig } from '@/data/treatments/simple'

interface SimpleTreatmentPageProps {
  config: SimpleTreatmentConfig
}

export default function SimpleTreatmentPage({ config }: SimpleTreatmentPageProps) {
  const { hero, content, pricing, faqs } = config

  return (
    <main>
      <TreatmentHero
        images={hero.images}
        alt={hero.alt}
        badgeIcon={hero.badgeIcon}
        badge={hero.badge}
        title={
          <>
            {hero.title} <span className="text-gold">{hero.titleHighlight}</span>
            {hero.titleSuffix}
          </>
        }
        subtitle={hero.subtitle}
        ctaLabel={hero.ctaLabel}
      />

      <ContentWithImage
        eyebrow={content.eyebrow}
        heading={content.heading}
        body={content.body}
        bullets={content.bullets}
        image={content.image}
        imageAlt={content.imageAlt}
        imageSizes={content.imageSizes}
      />

      <SimplePricing
        eyebrow={pricing.eyebrow}
        heading={pricing.heading}
        price={pricing.price}
        description={pricing.description}
        ctaLabel={pricing.ctaLabel}
      />

      <TreatmentFaq faqs={faqs} />
    </main>
  )
}
