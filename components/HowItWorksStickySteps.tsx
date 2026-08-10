'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { howSteps } from '../lib/how-it-works'

const STICKY_VH = 23
const EXTRA_PX = 350

/**
 * Exact Yucca / novimid how-it-works sticky stack:
 * sticky top 23vh + 50vh gaps; prior cards scrub to opacity 0 / scale 0.88 via ScrollTrigger.
 */
export function HowItWorksStickySteps() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const desktopMq = window.matchMedia('(min-width: 992px)')
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const triggers: ScrollTrigger[] = []

    const clearCards = () => {
      root.querySelectorAll<HTMLElement>('.hiw-step-card').forEach((card) => {
        gsap.set(card, { clearProps: 'opacity,transform' })
      })
    }

    const kill = () => {
      triggers.splice(0).forEach((t) => t.kill())
      clearCards()
      delete root.dataset.hiwInit
    }

    const init = () => {
      kill()
      if (!desktopMq.matches || motionMq.matches) {
        root.dataset.hiwInit = 'skipped'
        return
      }

      gsap.registerPlugin(ScrollTrigger)

      const steps = Array.from(root.querySelectorAll<HTMLElement>('.hiw-step'))
      steps.forEach((step, i) => {
        const card = step.querySelector<HTMLElement>('.hiw-step-card')
        const next = steps[i + 1]
        if (!card || !next) return

        const tween = gsap.to(card, {
          opacity: 0,
          scale: 0.88,
          ease: 'none',
          scrollTrigger: {
            trigger: next,
            start: () =>
              `top ${window.innerHeight * (STICKY_VH / 100) + card.offsetHeight + EXTRA_PX}px`,
            end: () =>
              `top ${window.innerHeight * (STICKY_VH / 100) + card.offsetHeight / 2}px`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })

        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
      })

      root.dataset.hiwInit = 'true'
      ScrollTrigger.refresh()
    }

    init()

    const onChange = () => init()
    desktopMq.addEventListener('change', onChange)
    motionMq.addEventListener('change', onChange)

    return () => {
      desktopMq.removeEventListener('change', onChange)
      motionMq.removeEventListener('change', onChange)
      kill()
    }
  }, [])

  return (
    <section ref={rootRef} className="hiw-hero">
      <div className="hiw-steps-stack">
        {howSteps.map((step, i) => {
          const isLast = i === howSteps.length - 1
          return (
            <div
              key={step.n}
              className={`hiw-step ${isLast ? 'hiw-step--last' : 'hiw-step--sticky'}`}
              style={{ zIndex: i + 1 }}
            >
              <article className="hiw-step-card">
                <div className="hiw-step-media">
                  <div className="hiw-step-media__frame">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      className="hiw-step-media__img"
                      sizes="(max-width: 992px) 92vw, 50vw"
                      priority={i === 0}
                    />
                  </div>
                  {step.chips ? (
                    <div className="hiw-step-chips">
                      {step.chips.map((chip) => (
                        <span key={chip} className="hiw-step-chip">
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="hiw-step-copy">
                  <p className="hiw-step-label">Step {step.n}</p>
                  <h2 className="hiw-step-title">
                    {step.title}{' '}
                    <em>{step.titleItalic}</em>
                  </h2>
                  <p className="hiw-step-body">{step.body}</p>

                  {step.callout ? (
                    <div className="hiw-step-callout">
                      <p className="hiw-step-callout__value">{step.callout.value}</p>
                      <p className="hiw-step-callout__label">{step.callout.label}</p>
                    </div>
                  ) : null}

                  {step.n === '01' ? (
                    <Link href="/treatments/weight-loss" className="hiw-step-link">
                      Explore Tirzepatide+ & Semaglutide+ →
                    </Link>
                  ) : null}
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}
