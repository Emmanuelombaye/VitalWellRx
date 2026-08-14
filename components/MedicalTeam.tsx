'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Stethoscope, Truck, MessageCircle } from 'lucide-react'

const pillars = [
  {
    title: 'Clinical intake',
    role: 'Your starting point',
    specialties: ['Health history', 'Goals & eligibility'],
    bio: 'A structured online questionnaire captures your medical history, medications, and goals so a licensed provider can assess whether treatment may be appropriate.',
    Icon: ClipboardList,
  },
  {
    title: 'Licensed provider review',
    role: 'Clinical decision',
    specialties: ['U.S.-licensed clinicians', 'Rx when appropriate'],
    bio: 'A licensed U.S. provider reviews your intake and determines if a Semaglutide+ or Tirzepatide+ prescription is clinically appropriate — not automatic checkout.',
    Icon: Stethoscope,
  },
  {
    title: 'Partner pharmacy',
    role: 'Fulfillment quality',
    specialties: ['Licensed U.S. pharmacies', 'Cold-pack shipping'],
    bio: 'If prescribed, medication is prepared by a licensed U.S. pharmacy partner and shipped in discreet, temperature-controlled packaging.',
    Icon: Truck,
  },
  {
    title: 'Ongoing care',
    role: 'Support that continues',
    specialties: ['Patient portal', 'Dose & plan updates'],
    bio: 'Stay connected for questions, titration check-ins, and plan changes. Experiences vary — your care team helps you navigate adjustments over time.',
    Icon: MessageCircle,
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
            <em>Care that starts</em>
            <span>with clinical process</span>
          </h2>
          <p className="med-team__sub">
            From intake through pharmacy fulfillment — structured steps designed for clarity, safety, and provider oversight.
          </p>
        </motion.div>

        <div className="med-team__grid">
          {pillars.map(({ title, role, specialties, bio, Icon }, i) => (
            <motion.article
              key={title}
              className="med-team__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="med-team__hero">
                <div
                  className="med-team__photo"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                      'radial-gradient(circle at 30% 20%, rgba(212,175,55,0.28), transparent 55%), #0B132B',
                  }}
                >
                  <Icon size={42} color="#D4AF37" strokeWidth={1.75} aria-hidden />
                </div>
                <div className="med-team__role">
                  <h3>{role}</h3>
                  <ul>
                    {specialties.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="med-team__bio">
                <h4>{title}</h4>
                <p>{bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
