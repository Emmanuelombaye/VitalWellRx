'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const doctors = [
  {
    name: 'Dr. Amira Hassan, MD',
    role: 'Head of Weight Loss, VitalWellRx',
    specialties: ['Metabolic Health', 'GLP-1 Therapy'],
    bio: 'Board-certified obesity medicine physician focused on Semaglutide+ and Tirzepatide+ protocols, sustainable fat loss, and long-term metabolic reset.',
    image: '/team/doctor-4.webp',
  },
  {
    name: 'Dr. Marcus Ellison, MD',
    role: 'Chief Medical Officer, VitalWellRx',
    specialties: ['Clinical Oversight', 'Patient Safety'],
    bio: 'Leads VitalWellRx clinical standards across all 50 states — ensuring every Tirzepatide+ and Semaglutide+ plan is reviewed with precision and care.',
    image: '/team/doctor-3.webp',
  },
  {
    name: 'Dr. Daniel Park, MD',
    role: 'Medical Director, Metabolic Care',
    specialties: ['Endocrinology', 'Appetite Regulation'],
    bio: 'Specializes in dual-agonist and GLP-1 pathways, dose titration strategy, and helping patients quiet food noise without guesswork.',
    image: '/team/doctor-2.webp',
  },
  {
    name: 'Dr. James Whitfield, MD',
    role: 'Advisor, Longevity & Metabolic Health',
    specialties: ['Preventive Medicine', 'Weight Management'],
    bio: 'Brings decades of clinical experience to provider-guided weight care — pairing evidence-based protocols with clear, patient-first communication.',
    image: '/team/doctor-1.webp',
  },
]

export default function MedicalTeam() {
  return (
    <section className="med-team">
      <div className="med-team__shell">
        <motion.div
          className="med-team__head"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="med-team__title">
            <em>The best care</em>
            <span>by the best in medicine</span>
          </h2>
          <p className="med-team__sub">
            Meet the team of leading specialists with decades of combined experience across metabolic health and weight care.
          </p>
        </motion.div>

        <div className="med-team__grid">
          {doctors.map((doc, i) => (
            <motion.article
              key={doc.name}
              className="med-team__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="med-team__hero">
                <div className="med-team__photo">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="(max-width:700px) 45vw, (max-width:1100px) 25vw, 180px"
                    quality={70}
                    loading="lazy"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
                <div className="med-team__role">
                  <h3>{doc.role}</h3>
                  <ul>
                    {doc.specialties.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="med-team__bio">
                <h4>{doc.name}</h4>
                <p>{doc.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
