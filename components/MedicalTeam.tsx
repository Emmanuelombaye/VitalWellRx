'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ClipboardList, Stethoscope, Truck, MessageCircle, ArrowRight } from 'lucide-react'

const pillars = [
  {
    n: '01',
    title: 'Clinical intake',
    role: 'Your starting point',
    specialties: ['Health history', 'Goals & eligibility'],
    bio: 'A structured online questionnaire captures your medical history, medications, and goals so a licensed provider can assess whether treatment may be appropriate.',
    Icon: ClipboardList,
    image: {
      src: '/step1_profile.webp',
      alt: 'Patient completing a secure clinical intake on a tablet',
    },
  },
  {
    n: '02',
    title: 'Licensed provider review',
    role: 'Clinical decision',
    specialties: ['U.S.-licensed clinicians', 'Rx when appropriate'],
    bio: 'A licensed U.S. provider reviews your intake and determines if a Semaglutide+ or Tirzepatide+ prescription is clinically appropriate — not automatic checkout.',
    Icon: Stethoscope,
    image: {
      src: '/step2_doctor.webp',
      alt: 'Licensed clinician reviewing a patient intake',
    },
  },
  {
    n: '03',
    title: 'Partner pharmacy',
    role: 'Fulfillment quality',
    specialties: ['Licensed U.S. pharmacies', 'Cold-pack shipping'],
    bio: 'If prescribed, medication is prepared by a licensed U.S. pharmacy partner and shipped in discreet, temperature-controlled packaging.',
    Icon: Truck,
    image: {
      src: '/step3_shipping.webp',
      alt: 'Temperature-controlled pharmacy shipment prepared for delivery',
    },
  },
  {
    n: '04',
    title: 'Ongoing care',
    role: 'Support that continues',
    specialties: ['Patient portal', 'Dose & plan updates'],
    bio: 'Stay connected for questions, titration check-ins, and plan changes. Experiences vary — your care team helps you navigate adjustments over time.',
    Icon: MessageCircle,
    image: {
      src: '/step4_dashboard.webp',
      alt: 'Patient portal for ongoing care and plan updates',
    },
  },
]

/**
 * Clinical process — photography-led pathway cards with VitalWell brand language.
 */
export default function MedicalTeam() {
  return (
    <section className="med-team" aria-labelledby="med-team-title">
      <div className="med-team__glow" aria-hidden="true" />

      <div className="med-team__shell">
        <motion.div
          className="med-team__head"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="med-team__eyebrow">Clinical pathway</p>
          <h2 className="med-team__title" id="med-team-title">
            <em>Care that starts</em>
            <span>with clinical process</span>
          </h2>
          <p className="med-team__sub">
            From intake through pharmacy fulfillment — structured steps designed for
            clarity, safety, and provider oversight.
          </p>
        </motion.div>

        <ol className="med-team__grid">
          {pillars.map(({ n, title, role, specialties, bio, Icon, image }, i) => (
            <motion.li
              key={title}
              className="med-team__card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <article>
                <div className="med-team__hero">
                  <div className="med-team__photo">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width:700px) 90vw, (max-width:1100px) 45vw, 280px"
                      quality={72}
                      className="med-team__photo-img"
                    />
                    <div className="med-team__photo-shade" aria-hidden="true" />
                    <span className="med-team__step" aria-hidden="true">
                      {n}
                    </span>
                    <span className="med-team__icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
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
              </article>
            </motion.li>
          ))}
        </ol>

        <motion.div
          className="med-team__footer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.45 }}
        >
          <p>Licensed review first. Medication only when clinically appropriate.</p>
          <Link href="/get-started" className="med-team__cta">
            Start clinical intake <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
