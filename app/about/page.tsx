'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Heart, Users, Award, Target, Microscope, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  return (
    <main>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="/about_hero.png" alt="Our Medical Team" fill priority style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,19,43,0.95) 0%, rgba(11,19,43,0.6) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '6rem 1.5rem' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '2px' }}>About VitalWellRx</span>
            <h1 className="h1" style={{ marginTop: '1rem' }}>
              Redefining <span className="text-gold">Personalized</span><br/>Healthcare.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '550px', lineHeight: 1.7 }}>
              We combine cutting-edge science with compassionate care to deliver health optimization protocols that are as unique as you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ backgroundColor: 'var(--foreground)', color: 'var(--primary-navy)', padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '2px', color: 'var(--primary-gold)' }}>Our Mission</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem', lineHeight: 1.1 }}>
                Live Vital.<br/>Live Well.
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.8, marginTop: '1.5rem' }}>
                At VitalWellRx, we believe that everyone deserves access to the highest standard of personalized medicine. Our mission is to democratize longevity science through accessible telehealth consultations, data-driven protocols, and pharmaceutical-grade supplements.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.8, marginTop: '1rem' }}>
                Every protocol we design is backed by real-time biomarker data and overseen by board-certified physicians who specialize in metabolic health, hormone optimization, and cellular longevity.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { icon: <Heart size={28} />, title: 'Patient-First', desc: 'Your health goals drive every decision we make.' },
                { icon: <Microscope size={28} />, title: 'Science-Backed', desc: 'Protocols grounded in peer-reviewed research.' },
                { icon: <ShieldCheck size={28} />, title: 'Board-Certified', desc: 'Every plan is overseen by licensed physicians.' },
                { icon: <Target size={28} />, title: 'Precision Care', desc: 'Bio-individualized, never one-size-fits-all.' },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0' }}>
                  <div style={{ color: 'var(--primary-gold)', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: 'var(--primary-navy)', padding: '5rem 0', borderTop: '1px solid rgba(212,175,55,0.2)', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '30,000+', label: 'Patients Served' },
              { num: '98%', label: 'Satisfaction Rate' },
              { num: '50+', label: 'Licensed Providers' },
              { num: '24/7', label: 'Patient Support' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="text-gold" style={{ fontSize: '3rem', fontWeight: 800 }}>{stat.num}</div>
                <div className="text-muted" style={{ fontSize: '1rem', fontWeight: 600 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '2px' }}>Our Values</span>
          <h2 className="h2" style={{ marginTop: '0.5rem' }}>What Sets Us <span className="text-gold">Apart</span></h2>
          <div className="grid grid-cols-3 gap-6" style={{ marginTop: '3rem' }}>
            {[
              { icon: <Sparkles size={32} />, title: 'Innovation', desc: 'We stay at the frontier of longevity medicine, integrating the latest breakthroughs into actionable protocols.' },
              { icon: <Users size={32} />, title: 'Community', desc: 'Join an exclusive community of health-conscious individuals committed to optimizing their vitality.' },
              { icon: <Award size={32} />, title: 'Excellence', desc: 'From our pharmacy-grade supplements to our physician network, we settle for nothing less than the best.' },
            ].map((value, i) => (
              <motion.div key={i} className="glass-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(212,175,55,0.1)', borderRadius: '50%' }}>
                  <span className="text-gold">{value.icon}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{value.title}</h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
