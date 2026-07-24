'use client'

import { motion } from 'framer-motion'
import { Check, Dna, Zap, RefreshCw } from 'lucide-react'
import Image from 'next/image'
import TreatmentHero from '@/components/treatments/TreatmentHero'
import StatsBar from '@/components/treatments/StatsBar'
import FeaturedPricing from '@/components/treatments/FeaturedPricing'
import TreatmentFaq from '@/components/treatments/TreatmentFaq'
import CheckList from '@/components/ui/CheckList'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import {
  peptideTherapyFaqs,
  peptideTherapyStats,
  peptideTherapyIncludes,
} from '@/data/treatments/full'

const bpcBullets = [
  'Accelerates ligament, tendon, and joint recovery',
  'Down-regulates systemic inflammatory cytokine cascades',
  'Restores damaged gut mucosal barrier and leaky gut',
  'Synergistic with CJC-1295 / Ipamorelin GH secretagogues',
]

const benefitCards = [
  {
    title: 'Tendon & Ligament Repair (BPC-157)',
    desc: 'Accelerates blood vessel formation (angiogenesis) to deliver oxygen and amino acids directly to low-blood-flow connective tissues.',
    icon: <RefreshCw size={32} />,
    detail: 'Proven for sports injuries, joints & gut lining.',
  },
  {
    title: 'GH Secretagogues (CJC/Ipamorelin)',
    desc: 'Stimulates the anterior pituitary gland to release endogenous growth hormone, boosting deep stage-4 sleep and fat metabolism.',
    icon: <Zap size={32} />,
    detail: 'Maintains natural endocrine feedback loops.',
  },
  {
    title: 'Copper Peptide (GHK-Cu)',
    desc: 'Modulates over 4,000 human genes, promoting skin extracellular matrix remodeling, hair follicle density, and nerve health.',
    icon: <Dna size={32} />,
    detail: 'Powerful anti-inflammatory & skin remodeling.',
  },
]

export default function PeptideTherapy() {
  return (
    <main>
      <TreatmentHero
        images={['/gen_peptides1.webp', '/gen_peptides2.webp']}
        alt="Peptide Therapy Hero"
        badgeIcon="dna"
        badge="Cellular Regeneration Science"
        title={
          <>
            Peptide <span className="text-gold">Therapy</span>
            <br />
            & Tissue Repair.
          </>
        }
        subtitle="Doctor-prescribed BPC-157, CJC-1295 / Ipamorelin, and GHK-Cu protocols to accelerate tendon healing, boost natural GH release, and restore cellular vitality."
        ctaLabel="Check Eligibility"
      />

      <StatsBar stats={peptideTherapyStats} />

      {/* 2. UNIQUE CUSTOM VISUAL: PEPTIDE AMINO ACID MOLECULAR CHAIN GRAPHIC */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div>
              <SectionEyebrow>Molecular Signaling</SectionEyebrow>
              <h2 className="h2" style={{ marginTop: '0.5rem' }}>BPC-157 <span className="text-gold">15-Amino Acid Sequence</span></h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                BPC-157 (Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val) acts directly on early growth factors to stimulate blood vessel formation (angiogenesis) in poorly-vascularized tissues like tendons, ligaments, and gut lining.
              </p>
              <CheckList items={bpcBullets} />
            </div>

            {/* Vector SVG Peptide Molecular Sequence Visual */}
            <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--card-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderRadius: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-gold)', textTransform: 'uppercase' }}>Amino Acid Sequence Map</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>Pentadecapeptide BPC-157 Structure</div>
                </div>
                <span style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>15 Amino Acids</span>
              </div>

              {/* Peptide Node Chain Graphic */}
              <div style={{ width: '100%', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <svg width="100%" height="100%" viewBox="0 0 380 180">
                  <path d="M 30 90 Q 90 30 150 90 T 270 90 T 350 90" stroke="rgba(212,175,55,0.4)" strokeWidth="3" fill="none" strokeDasharray="6 4" />

                  {/* Glowing Amino Acid Nodes */}
                  {[
                    { x: 30, y: 90, name: 'GLY' },
                    { x: 75, y: 55, name: 'GLU' },
                    { x: 120, y: 55, name: 'PRO' },
                    { x: 165, y: 90, name: 'PRO' },
                    { x: 210, y: 125, name: 'LYS' },
                    { x: 255, y: 125, name: 'ALA' },
                    { x: 300, y: 90, name: 'LEU' },
                    { x: 345, y: 90, name: 'VAL' },
                  ].map((node, i) => (
                    <g key={i}>
                      <circle cx={node.x} cy={node.y} r="16" fill="#0B132B" stroke="#D4AF37" strokeWidth="2" />
                      <text x={node.x} y={node.y + 4} fill="#D4AF37" fontSize="9" fontWeight="900" textAnchor="middle">{node.name}</text>
                    </g>
                  ))}
                </svg>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
                <span>N-Terminus (Glycine)</span>
                <span>Cell-Signaling Domain</span>
                <span>C-Terminus (Valine)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPOUNDING & RESEARCH DIAGNOSTICS */}
      <section style={{ backgroundColor: 'var(--foreground)', color: 'var(--primary-navy)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', color: 'var(--primary-gold)' }}>Research & Diagnostics</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem' }}>Pharmaceutical Purity & Cold-Chain Shipping</h2>
          </div>

          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div style={{ position: 'relative', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}>
              <Image src="/gen_peptides2.webp" alt="Peptide Research & Diagnostics" fill style={{ objectFit: 'cover' }} />
            </div>

            <div>
              <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', color: 'var(--primary-gold)' }}>Sterility & Stability</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--primary-navy)' }}>503A Licensed Pharmacy Standards</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Therapeutic peptides are delicate protein fragments. Every VitalWellRx peptide formulation is compounded under sterile ISO class 5 cleanroom conditions and shipped in thermal cold-packs to ensure 100% molecular stability upon arrival.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #E2E8F0', flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary-gold)' }}>99.4% Purity HPLC</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>Third-party laboratory batch verified.</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #E2E8F0', flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary-navy)' }}>Cold-Chain Delivery</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>Expedited insulated packaging.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <SectionEyebrow>Targeted Signaling</SectionEyebrow>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>The Power of <span className="text-gold">Bioactive Peptides</span></h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {benefitCards.map((card, i) => (
              <motion.div key={i} className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} whileHover={{ y: -6 }}>
                <div>
                  <div style={{ padding: '0.85rem', backgroundColor: 'rgba(212,175,55,0.15)', borderRadius: '0.85rem', color: 'var(--primary-gold)', width: 'fit-content', marginBottom: '1.25rem' }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: 'white' }}>{card.title}</h3>
                  <p className="text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{card.desc}</p>
                </div>
                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Check size={14} /> {card.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedPricing
        eyebrow="Complete Program"
        heading="Peptide Recovery Protocol Plan"
        badge="Doctor-Supervised Full Protocol"
        price="$349"
        description="All-inclusive membership. No insurance co-pays or hidden fees."
        includes={peptideTherapyIncludes}
        ctaLabel="Start 5-Minute Questionnaire"
      />

      <TreatmentFaq faqs={peptideTherapyFaqs} variant="animated" />
    </main>
  )
}
