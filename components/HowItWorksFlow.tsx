'use client'

import Image from 'next/image'
import Link from 'next/link'
import { howFaqs, howWhy } from '../lib/how-it-works'
import { HowItWorksStickySteps } from './HowItWorksStickySteps'
import { Reveal } from './Reveal'

const stories = [
  {
    step: '01',
    img: '/images/result-1.jpg',
    title: 'Tirzepatide+ Progress',
    timeline: 'Month 3 · Dual GIP/GLP-1',
    quote: 'My provider adjusted my Tirzepatide+ dosing based on how I responded — not a template.',
    patient: 'Alex R.',
    metric: 'Tirzepatide+',
  },
  {
    step: '02',
    img: '/images/result-2.jpg',
    title: 'Semaglutide+ Steady Loss',
    timeline: 'Month 2 · GLP-1 Protocol',
    quote: 'Clear instructions and direct communication with my care team on Semaglutide+.',
    patient: 'Morgan S.',
    metric: 'Semaglutide+',
  },
  {
    step: '03',
    img: '/images/result-3.jpg',
    title: 'Discreet Delivery',
    timeline: 'Month 1 · Fulfillment',
    quote: 'Fulfillment was calm, cold-chain shipped, and completely discreet.',
    patient: 'Blaze B.',
    metric: 'Pharmacy Direct',
  },
  {
    step: '04',
    img: '/images/closing-cta-lifestyle.webp',
    title: 'Ongoing GLP-1 Care',
    timeline: 'Month 6 · Optimization',
    quote: 'Ongoing check-ins kept my Tirzepatide+ goals on track long term.',
    patient: 'Taylor H.',
    metric: 'Ongoing Support',
  },
]

export function HowItWorksFlow() {
  return (
    <div className="hiw-flow">
      <HowItWorksStickySteps />

      <section className="hiw-story">
        <Reveal>
          <div className="hiw-story__head">
            <span className="hiw-story__eyebrow">Patient Care Milestones</span>
            <h2 className="hiw-story__title">
              Every treatment has a <em>story</em>
            </h2>
            <p className="hiw-story__sub">
              Provider-directed care, clear compounding language, and accountable follow-through.
            </p>
          </div>
        </Reveal>

        <div className="hiw-story__grid">
          {stories.map((story, i) => (
            <Reveal key={story.title} delayMs={i * 60} className="hiw-story-card">
              <div className="hiw-story-card__media">
                <Image
                  src={story.img}
                  alt={story.title}
                  fill
                  sizes="300px"
                  quality={70}
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
                <span className="hiw-story-card__phase">Phase {story.step}</span>
              </div>
              <div className="hiw-story-card__body">
                <span className="hiw-story-card__metric">{story.metric}</span>
                <h3>{story.title}</h3>
                <p className="hiw-story-card__timeline">{story.timeline}</p>
                <p className="hiw-story-card__quote">&ldquo;{story.quote}&rdquo;</p>
                <div className="hiw-story-card__footer">
                  <strong>{story.patient}</strong>
                  <span>Verified Patient</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="hiw-why">
        <Reveal>
          <h2 className="hiw-why__title">
            Why <em>VitalWellRx</em>?
          </h2>
        </Reveal>
        <div className="hiw-why__grid">
          {howWhy.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 70} className="hiw-why-card">
              <div className="hiw-why-card__media">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="hiw-why-card__body">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="hiw-why__cta-wrap">
          <Link href="/treatments/weight-loss" className="hiw-btn-primary">
            Start with Tirzepatide+ or Semaglutide+
          </Link>
        </div>
      </section>

      <section className="hiw-priority">
        <div className="hiw-priority__card">
          <div className="hiw-priority__media">
            <Image
              src="/images/physician-1.webp"
              alt="VitalWellRx care team support"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              quality={70}
              loading="lazy"
              style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
            />
          </div>
          <div className="hiw-priority__copy">
            <h2>Exceptional experience is our priority</h2>
            <ul>
              <li>Stay in touch with your provider</li>
              <li>Update your treatment when clinically appropriate</li>
              <li>Track follow-up with clear accountability</li>
            </ul>
            <Link href="/get-started" className="hiw-btn-primary">
              Start your intake
            </Link>
          </div>
        </div>
      </section>

      <section className="hiw-faq">
        <Reveal>
          <p className="hiw-faq__eyebrow">We&apos;ve got you.</p>
          <h2 className="hiw-faq__title">You have questions, we have answers.</h2>
        </Reveal>
        <div className="hiw-faq__list">
          {howFaqs.map((item, i) => (
            <Reveal key={item.q} delayMs={i * 40}>
              <details className="hiw-faq__item">
                <summary>
                  <span>{item.q}</span>
                  <span className="hiw-faq__icon" aria-hidden>+</span>
                </summary>
                <div className="hiw-faq__answer">
                  <p>{item.a}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="hiw-cta">
        <div className="hiw-cta__grid">
          <div className="hiw-cta__media">
            <Image
              src="/images/cta-banner.webp"
              alt="Ready to start with VitalWellRx"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              quality={70}
              loading="lazy"
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            />
          </div>
          <div className="hiw-cta__copy">
            <p className="hiw-cta__eyebrow">Begin care</p>
            <h2>Ready for provider-led care?</h2>
            <p>Complete your intake. A licensed provider reviews within 24 hours.</p>
            <div className="hiw-cta__actions">
              <Link href="/get-started" className="hiw-btn-primary">
                Get started
              </Link>
              <Link href="/treatments/weight-loss" className="hiw-btn-secondary">
                View Tirzepatide+ & Semaglutide+
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
