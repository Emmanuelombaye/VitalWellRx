'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck, Stethoscope, Package, Repeat, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const steps = [
  {
    num: '01',
    icon: <ClipboardCheck size={32} />,
    title: '1. Complete Your Online Health Profile',
    subtitle: '5-Minute Intake Assessment',
    desc: 'Fill out a confidential, HIPAA-compliant questionnaire detailing your medical history, fitness goals, and lifestyle habits. This creates your personalized clinical intake baseline.',
    image: '/step1_profile.jpg',
    highlights: ['100% online intake in under 5 minutes', 'No medical insurance or referral needed', 'Secure 256-bit encrypted data privacy'],
  },
  {
    num: '02',
    icon: <Stethoscope size={32} />,
    title: '2. Board-Certified Doctor Review',
    subtitle: '24–48 Hour Clinical Evaluation',
    desc: 'A licensed U.S. physician reviews your health intake and blood lab biomarkers. Your doctor designs a custom prescription protocol tailored specifically to your metabolic profile.',
    image: '/step2_doctor.jpg',
    highlights: ['1-on-1 telehealth physician oversight', 'Comprehensive blood lab biomarker analysis', 'Customized precision dose titration'],
  },
  {
    num: '03',
    icon: <Package size={32} />,
    title: '3. Compounded Meds Delivered to Door',
    subtitle: 'Discreet Express Shipping',
    desc: 'Your prescribed medication is freshly compounded at an accredited 503A U.S. pharmacy and shipped directly to your home in temperature-controlled, discreet packaging.',
    image: '/step3_shipping.jpg',
    highlights: ['FDA-regulated 503A compounding quality', 'Temperature-controlled cold-chain packaging', 'Free overnight expedited doorstep delivery'],
  },
  {
    num: '04',
    icon: <Repeat size={32} />,
    title: '4. Ongoing Tracking & Protocol Tuning',
    subtitle: 'Dedicated Member Portal',
    desc: 'Monitor your weight loss, hormone levels, and energy progress inside your Member Portal. Unlimited direct messaging with your physician ensures long-term sustained results.',
    image: '/step4_dashboard.jpg',
    highlights: ['Quarterly follow-up blood panel tracking', 'Direct 1-on-1 provider portal messaging', 'Flexible month-to-month subscription (cancel anytime)'],
  },
]

export default function HowItWorks() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.75rem' }}>
              <Clock size={16} /> Simple 4-Step Telehealth Journey
            </div>
            <h1 className="h1" style={{ marginTop: '0.5rem' }}>
              Your Path to <span className="text-gold">Optimal Health.</span>
            </h1>
            <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              From online assessment to doorstep delivery and ongoing physician care — a seamless process built around your life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section style={{ padding: '2rem 0 6rem' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`treatment-card-layout ${i % 2 === 0 ? 'treatment-card-even' : 'treatment-card-odd'}`}
              style={{ backgroundColor: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--card-border)', overflow: 'hidden' }}
            >
              {/* Image side */}
              <div
                style={{
                  position: 'relative',
                  height: '380px',
                  width: '100%',
                  order: i % 2 === 0 ? 0 : 1,
                }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                  priority={i === 0}
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,19,43,0.7), transparent)' }}></div>
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    backgroundColor: 'var(--primary-gold)',
                    color: 'var(--primary-navy)',
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '1.25rem',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                  }}
                >
                  {step.num}
                </div>
              </div>

              {/* Content side */}
              <div style={{ padding: '2.5rem', order: i % 2 === 0 ? 1 : 0 }}>
                <div className="text-gold" style={{ marginBottom: '0.75rem' }}>{step.icon}</div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary-gold)' }}>{step.subtitle}</span>
                <h2 style={{ fontSize: '1.85rem', fontWeight: 800, margin: '0.35rem 0 0.85rem', lineHeight: 1.2, color: 'white' }}>{step.title}</h2>
                <p className="text-muted" style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{step.desc}</p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {step.highlights.map((h, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)' }}>
                      <CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ backgroundColor: 'var(--foreground)', color: 'var(--primary-navy)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--primary-gold)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Clear Milestones</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '3rem' }}>What to Expect Timeline</h2>
          
          <div className="grid grid-cols-4 gap-6">
            {[
              { time: 'Day 1', label: 'Submit your 5-min health profile online', color: '#D4AF37' },
              { time: 'Day 1–2', label: 'Physician reviews labs and prescribes protocol', color: '#10B981' },
              { time: 'Day 3–5', label: 'Freshly compounded meds shipped to your door', color: '#3B82F6' },
              { time: 'Ongoing', label: 'Continuous monitoring & dose optimization', color: '#8B5CF6' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: item.color, margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.25rem', boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}>
                  {i + 1}
                </div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--primary-navy)' }}>{item.time}</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5 }}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="h2">Ready to start your <span className="text-gold">health transformation?</span></h2>
          <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '520px', margin: '0 auto 2rem' }}>Complete your 5-minute online intake now for physician review.</p>
          <Link href="/get-started" className="btn-primary" style={{ fontSize: '1.1rem' }}>
            Start 5-Minute Intake <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>
    </main>
  )
}
