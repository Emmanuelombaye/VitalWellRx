'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Stethoscope,
  Truck,
  Check,
  MessageCircle,
  TrendingUp,
  ShoppingBag,
} from 'lucide-react'

const trustRows = [
  { label: 'Quality Sourcing', Icon: Sparkles },
  { label: 'Medical Review', Icon: Stethoscope },
  { label: 'Home Delivery', Icon: Truck },
]

const supportPills = [
  { label: 'Stay in touch with doctor', Icon: MessageCircle, pos: 'why-vw-card__float--a' },
  { label: 'Track your progress', Icon: TrendingUp, pos: 'why-vw-card__float--b' },
  { label: 'Update or change your treatment', Icon: ShoppingBag, pos: 'why-vw-card__float--c' },
]

const chartPoints = '8,72 48,58 88,42 128,28 168,18 208,12'

export default function WhyVitalWell() {
  return (
    <section className="why-vw" aria-labelledby="why-vw-title">
      <div className="why-vw__shell">
        <motion.h2
          id="why-vw-title"
          className="why-vw__title"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          Why VitalWellRx?
        </motion.h2>

        <div className="why-vw__grid">
          {/* Card 1 — Transparent & Trusted */}
          <motion.article
            className="why-vw-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="why-vw-card__copy">
              <h3>
                Transparent & <em>Trusted</em>
              </h3>
              <p>
                From ingredient sourcing to doorstep delivery, we prioritize pharmaceutical-grade
                quality and complete transparency.
              </p>
            </div>
            <ul className="why-vw-card__rows">
              {trustRows.map(({ label, Icon }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
                >
                  <span className="why-vw-card__row-icon" aria-hidden>
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span>{label}</span>
                  <span className="why-vw-card__check" aria-hidden>
                    <Check size={12} strokeWidth={3} />
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.article>

          {/* Card 2 — Personalized Care */}
          <motion.article
            className="why-vw-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <div className="why-vw-card__copy">
              <h3>
                Tailored <em>Personalized</em> Care
              </h3>
              <p>
                We create tailored plans based on your health goals, ensuring the best path to your
                success.
              </p>
            </div>
            <div className="why-vw-card__chart" aria-hidden>
              <span className="why-vw-card__chart-stat">Provider-guided</span>
              <svg viewBox="0 0 220 90" className="why-vw-card__chart-svg" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="whyChartGlow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#F3C94F" stopOpacity="1" />
                  </linearGradient>
                  <filter id="whyChartBlur" x="-20%" y="-40%" width="140%" height="180%">
                    <feGaussianBlur stdDeviation="2.5" />
                  </filter>
                </defs>
                <polyline
                  points={chartPoints}
                  fill="none"
                  stroke="url(#whyChartGlow)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#whyChartBlur)"
                  className="why-vw-card__chart-glow"
                />
                <polyline
                  points={chartPoints}
                  fill="none"
                  stroke="#F3C94F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="why-vw-card__chart-line"
                />
                <circle cx="208" cy="12" r="4" fill="#F3C94F" className="why-vw-card__chart-dot" />
              </svg>
              <div className="why-vw-card__chart-axis">
                <span>Week 1</span>
                <span>Week 3</span>
                <span>Week 6</span>
              </div>
            </div>
          </motion.article>

          {/* Card 3 — Science-backed Results */}
          <motion.article
            className="why-vw-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <div className="why-vw-card__copy">
              <h3>
                Science-backed <em>Results</em>
              </h3>
              <p>
                Clinically guided care designed to support long-term health, performance, and overall
                wellbeing.
              </p>
            </div>
            <div className="why-vw-card__vials">
              <Image
                src="/about/vitalwell-dual-vials.webp"
                alt="VitalWellRx Semaglutide+ and Tirzepatide+ vials"
                width={360}
                height={280}
                quality={70}
                loading="lazy"
                sizes="(max-width:900px) 70vw, 220px"
              />
            </div>
          </motion.article>

          {/* Card 4 — Ongoing Support */}
          <motion.article
            className="why-vw-card why-vw-card--support"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <div className="why-vw-card__copy">
              <h3>
                <em>Ongoing Support</em> is Always Within Reach
              </h3>
              <p>
                Your patient portal, your care team, and your treatment details — in one place,
                available whenever you need them.
              </p>
            </div>
            <div className="why-vw-card__portal">
              <div className="why-vw-card__phone">
                <Image
                  src="/about/vitalwell-patient-portal.webp"
                  alt="VitalWellRx patient portal on phone"
                  width={280}
                  height={360}
                  quality={70}
                  loading="lazy"
                  sizes="(max-width:900px) 55vw, 180px"
                />
              </div>
              {supportPills.map(({ label, Icon, pos }, i) => (
                <motion.div
                  key={label}
                  className={`why-vw-card__float ${pos}`}
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
                >
                  <Icon size={14} strokeWidth={2.25} aria-hidden />
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
