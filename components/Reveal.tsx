'use client'

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delayMs?: number
  style?: CSSProperties
}

export function Reveal({ children, className = '', delayMs = 0, style }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`vw-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{
        ...style,
        transitionDelay: visible ? `${delayMs}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
