'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck, Stethoscope, Package, Repeat, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const steps = [
  {
    num: '01',
    icon: <ClipboardCheck size={32} />,
    title: 'Complete Your Health Profile',
    desc: 'Fill out a quick, secure online questionnaire covering your health history, goals, and current lifestyle. This takes less than 5 minutes and lays the foundation for your personalized protocol.',
    image: '/category_wellness.png',
  },
  {
    num: '02',
    icon: <Stethoscope size={32} />,
    title: 'Physician Review & Consultation',
    desc: "A board-certified physician reviews your profile and lab work within 24-48 hours. You will receive a personalized treatment recommendation, and your provider is available for ongoing questions via our secure portal.",
    image: '/about_hero.png',
  },
  {
    num: '03',
    icon: <Package size={32} />,
    title: 'Medications Shipped to Your Door',
    desc: 'Your prescribed medications are compounded at a U.S. licensed pharmacy and shipped directly to you in discreet, temperature-controlled packaging. Free shipping, always.',
    image: '/supplement_bottle.png',
  },
  {
    num: '04',
    icon: <Repeat size={32} />,
    title: 'Ongoing Monitoring & Optimization',
    desc: 'Track your progress through your Member Portal dashboard. Your physician adjusts your protocol based on follow-up labs and your feedback, ensuring optimal results over time.',
    image: '/hero_bg.png',
  },
]

export default function HowItWorks() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '2px' }}>How It Works</span>
            <h1 className="h1" style={{ marginTop: '0.5rem' }}>
              Your Path to<br/><span className="text-gold">Better Health.</span>
            </h1>
            <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              From consultation to ongoing care — a seamless experience designed around you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '2rem 0 6rem' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
              }}
            >
              {/* Image */}
              <div style={{
                position: 'relative',
                height: '350px',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                order: i % 2 === 0 ? 0 : 1,
              }}>
                <Image src={step.image} alt={step.title} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11,19,43,0.6), rgba(212,175,55,0.1))' }}></div>
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', backgroundColor: 'var(--primary-gold)', color: 'var(--primary-navy)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.125rem' }}>
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div className="text-gold" style={{ marginBottom: '1rem' }}>{step.icon}</div>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>{step.title}</h2>
                <p className="text-muted" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Visual */}
      <section style={{ backgroundColor: 'var(--foreground)', color: 'var(--primary-navy)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem' }}>What to Expect</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { time: 'Day 1', label: 'Submit your health profile online', color: '#D4AF37' },
              { time: 'Day 1–2', label: 'Physician reviews and prescribes', color: '#10B981' },
              { time: 'Day 3–5', label: 'Medications compounded & shipped', color: '#3B82F6' },
              { time: 'Ongoing', label: 'Track progress & optimize', color: '#8B5CF6' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: item.color, margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.25rem' }}>
                  {i + 1}
                </div>
                <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.25rem' }}>{item.time}</div>
                <div style={{ fontSize: '0.9375rem', color: '#64748b' }}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="h2">Ready to begin your <span className="text-gold">journey?</span></h2>
          <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto 2rem' }}>It starts with a 5-minute questionnaire. No commitment required.</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '1.125rem' }}>
            Start Your Free Consultation <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>
    </main>
  )
}
