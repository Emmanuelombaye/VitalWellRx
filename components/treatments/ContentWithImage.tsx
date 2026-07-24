import Image from 'next/image'
import CheckList from '@/components/ui/CheckList'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

interface ContentWithImageProps {
  eyebrow: string
  heading: string
  body: string
  bullets: string[]
  image: string
  imageAlt: string
  imageSizes?: string
}

export default function ContentWithImage({
  eyebrow,
  heading,
  body,
  bullets,
  image,
  imageAlt,
  imageSizes,
}: ContentWithImageProps) {
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
          <div>
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>
              {heading}
            </h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {body}
            </p>
            <CheckList items={bullets} />
          </div>

          <div
            style={{
              position: 'relative',
              height: '400px',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              border: '1px solid var(--card-border)',
            }}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes={imageSizes}
              quality={imageSizes ? 80 : undefined}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
