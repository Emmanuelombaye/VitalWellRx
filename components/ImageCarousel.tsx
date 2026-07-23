'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ImageCarouselProps {
  images: string[]
  alt: string
  height?: string
  borderRadius?: string
}

export default function ImageCarousel({
  images,
  alt,
  height = '400px',
  borderRadius = '1.5rem',
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length <= 1) return
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [images])

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height,
        borderRadius,
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Image
            src={images[index]}
            alt={`${alt} ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
            priority={index === 0}
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(11,19,43,0.85) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Moving Indicator Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          display: 'flex',
          gap: '6px',
          zIndex: 10,
          alignItems: 'center',
          backgroundColor: 'rgba(11,19,43,0.6)',
          backdropFilter: 'blur(8px)',
          padding: '4px 8px',
          borderRadius: '99px',
          border: '1px solid rgba(212,175,55,0.3)',
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: i === index ? '18px' : '6px',
              height: '6px',
              borderRadius: '4px',
              backgroundColor: i === index ? 'var(--primary-gold)' : 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}
