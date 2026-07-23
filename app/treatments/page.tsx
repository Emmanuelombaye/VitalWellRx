'use client'

import { motion } from 'framer-motion'
import { Scale, Beaker, Heart, Dna, ArrowRight, ShieldCheck, Play } from 'lucide-react'
import Link from 'next/link'
import ImageCarousel from '../../components/ImageCarousel'

const treatments = [
  {
    id: 'weight-loss',
    href: '/treatments/weight-loss',
    title: 'Medical Weight Loss',
    subtitle: 'GLP-1 & Tirzepatide Protocols',
    desc: 'Clinically-proven metabolic treatments including GLP-1 receptor agonists and dual-action compounds. Physician-guided, with ongoing lab monitoring.',
    price: '$340/mo',
    icon: <Scale size={28} />,
    tags: ['GLP-1', 'Heart Health', 'Metabolism Boost'],
    images: ['/gen_weight1.webp', '/gen_weight2.webp'],
    features: ['Provider-guided weight management', 'Monthly blood panels', 'Customized dose titration', 'Free discreet shipping'],
  },
  {
    id: 'mens-hormone',
    href: '/treatments/mens-hormone',
    title: "Men's Hormone Health",
    subtitle: 'TRT & Energy Optimization',
    desc: 'Restore stamina, mental focus, and muscle mass with precision-compounded testosterone and hormone balancing treatments.',
    price: '$199/mo',
    icon: <Beaker size={28} />,
    tags: ['TRT', 'Stamina', 'Lean Muscle'],
    images: ['/gen_mens1.webp', '/gen_mens2.webp'],
    features: ['Bioidentical TRT formulation', 'Estrogen blocker support', 'Quarterly blood work analysis', '1-on-1 specialist consults'],
  },
  {
    id: 'womens-hormone',
    href: '/treatments/womens-hormone',
    title: "Women's Hormone Health",
    subtitle: 'Estrogen, Progesterone & Balance',
    desc: 'Bioidentical hormone replacement therapy (BHRT) to relieve fatigue, hot flashes, and mood fluctuations while promoting restorative sleep.',
    price: '$189/mo',
    icon: <Heart size={28} />,
    tags: ['BHRT Balance', 'Sleep & Mood', 'Skin Collagen'],
    images: ['/gen_womens1.webp', '/gen_womens2.webp'],
    features: ['Bioidentical Estradiol & Progesterone', 'DHEA & thyroid evaluation', 'Dedicated female health MD', 'Discreet doorstep delivery'],
  },
  {
    id: 'peptide-therapy',
    href: '/treatments/peptide-therapy',
    title: 'Peptide Therapy',
    subtitle: 'BPC-157, CJC/Ipamorelin & More',
    desc: 'Unlock next-level recovery, growth, and cellular repair with pharmaceutical-grade peptides. Prescribed and monitored by our specialist providers.',
    price: '$349/mo',
    icon: <Dna size={28} />,
    tags: ['Recovery', 'Muscle Growth', 'Cellular Repair'],
    images: ['/gen_peptides1.webp', '/gen_peptides2.webp'],
    features: ['Prescription BPC-157 & CJC/Ipamorelin', '503A licensed compounding', 'Growth hormone pulse release', 'Cold-chain shipping'],
  },
]

export default function Treatments() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-gold)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '2px' }}>
              <Play size={14} fill="var(--primary-gold)" /> Live Protocol Previews
            </div>
            <h1 className="h1" style={{ marginTop: '0.5rem' }}>
              Precision <span className="text-gold">Treatments</span><br/>Built for You.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              Doctor-prescribed, pharmacy-compounded, delivered to your door. Each card features live rotating dual-image previews.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatment Cards Grid */}
      <section style={{ padding: '2rem 0 6rem' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {treatments.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`treatment-card-layout ${i % 2 === 0 ? 'treatment-card-even' : 'treatment-card-odd'}`}
            >
              {/* Moving Image Carousel side */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <ImageCarousel images={t.images} alt={t.title} height="420px" borderRadius="1.5rem 0 0 1.5rem" />
              </div>

              {/* Content side */}
              <div style={{ padding: '2.5rem', order: i % 2 === 0 ? 1 : 0 }}>
                <div className="text-gold" style={{ marginBottom: '0.75rem' }}>{t.icon}</div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary-gold)' }}>{t.subtitle}</span>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, margin: '0.5rem 0 1rem', lineHeight: 1.1 }}>{t.title}</h2>
                <p className="text-muted" style={{ lineHeight: 1.7, marginBottom: '1.25rem' }}>{t.desc}</p>

                <div style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  {t.tags.map(tag => (
                    <span key={tag} style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '4px 12px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700 }}>{tag}</span>
                  ))}
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem' }}>
                  {t.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      <ShieldCheck size={16} style={{ color: 'var(--primary-gold)', flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>{t.price}</span>
                  <Link href={t.href} className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9375rem' }}>
                    View Protocol Details <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(212,175,55,0.2)', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="h2">Not sure which protocol is right for you?</h2>
            <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto 2rem' }}>Complete our 5-step intake questionnaire to get doctor pre-approval.</p>
            <Link href="/get-started" className="btn-primary" style={{ fontSize: '1.125rem' }}>
              Start 5-Min Assessment <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
