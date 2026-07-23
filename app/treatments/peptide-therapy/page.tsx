'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dna, Check, ArrowRight, ShieldCheck, Zap, RefreshCw, Sparkles, ChevronDown, Activity, HelpCircle, Microscope } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ImageCarousel from '../../../components/ImageCarousel'

export default function PeptideTherapy() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'What are therapeutic peptides and how do they work?',
      a: 'Peptides are short chains of amino acids that act as biological signaling molecules in the body. They instruct specific cells to perform targeted healing tasks—such as releasing growth hormone, repairing connective tissue, or down-regulating gut inflammation.',
    },
    {
      q: 'What is BPC-157 used for?',
      a: 'BPC-157 (Body Protection Compound 157) is renowned for accelerating tendon-to-bone healing, repairing damaged muscle fibers, promoting micro-vascular angiogenesis, and healing leaky gut mucosa.',
    },
    {
      q: 'How are CJC-1295 and Ipamorelin different from synthetic Human Growth Hormone (hGH)?',
      a: 'CJC-1295 and Ipamorelin are secretagogues—they stimulate your pituitary gland to release your OWN natural growth hormone in pulsatile spurts. Unlike synthetic hGH, this preserves your natural endocrine feedback loop without risking gland shutdown.',
    },
    {
      q: 'Are the peptides cold-shipped to protect stability?',
      a: 'Yes. Therapeutic peptides are temperature-sensitive protein fragments. VitalWellRx ships all peptide prescriptions in insulated cold-pack containers via expedited courier to preserve 100% biological potency.',
    },
  ]

  return (
    <main>
      {/* 1. HERO SECTION (2-Image Moving Carousel) */}
      <section style={{ position: 'relative', minHeight: '75vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ImageCarousel images={['/gen_peptides1.jpg', '/gen_peptides2.jpg']} alt="Peptide Therapy Hero" height="100%" borderRadius="0" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,19,43,0.96) 0%, rgba(11,19,43,0.8) 55%, rgba(11,19,43,0.3) 100%)', zIndex: 1 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '5rem 1.5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '660px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--primary-gold)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', border: '1px solid rgba(212,175,55,0.3)' }}>
              <Dna size={16} /> Cellular Regeneration Science
            </div>
            <h1 className="h1" style={{ color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
              Peptide <span className="text-gold">Therapy</span><br/>& Tissue Repair.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '580px' }}>
              Doctor-prescribed BPC-157, CJC-1295 / Ipamorelin, and GHK-Cu protocols to accelerate tendon healing, boost natural GH release, and restore cellular vitality.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/get-started" className="btn-primary">
                Check Eligibility <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-4 gap-6" style={{ textAlign: 'center' }}>
            {[
              { val: '503A', label: 'US Licensed Pharmacy Compounded' },
              { val: '2x-3x', label: 'Faster Tendon & Joint Recovery' },
              { val: 'Pulsatile', label: 'Natural GH Pituitary Release' },
              { val: 'Cold-Chain', label: 'Insulated Expedited Shipping' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary-gold)' }}>{stat.val}</div>
                <div style={{ fontSize: '0.875rem', color: '#94A3B8', fontWeight: 600, marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. UNIQUE CUSTOM VISUAL: PEPTIDE AMINO ACID MOLECULAR CHAIN GRAPHIC */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div>
              <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Molecular Signaling</span>
              <h2 className="h2" style={{ marginTop: '0.5rem' }}>BPC-157 <span className="text-gold">15-Amino Acid Sequence</span></h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                BPC-157 (Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val) acts directly on early growth factors to stimulate blood vessel formation (angiogenesis) in poorly-vascularized tissues like tendons, ligaments, and gut lining.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Accelerates ligament, tendon, and joint recovery', 'Down-regulates systemic inflammatory cytokine cascades', 'Restores damaged gut mucosal barrier and leaky gut', 'Synergistic with CJC-1295 / Ipamorelin GH secretagogues'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}>
                    <ShieldCheck size={18} className="text-gold" /> {item}
                  </li>
                ))}
              </ul>
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
              <Image src="/gen_peptides2.jpg" alt="Peptide Research & Diagnostics" fill style={{ objectFit: 'cover' }} />
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
            <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Targeted Signaling</span>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>The Power of <span className="text-gold">Bioactive Peptides</span></h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
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
            ].map((card, i) => (
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

      {/* Pricing Box */}
      <section style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Complete Program</span>
          <h2 className="h2" style={{ marginTop: '0.5rem', marginBottom: '3.5rem' }}>Peptide Recovery Protocol Plan</h2>

          <div style={{ maxWidth: '580px', margin: '0 auto', backgroundColor: 'var(--primary-navy)', borderRadius: '1.5rem', padding: '3.5rem 2.5rem', border: '2px solid var(--primary-gold)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <span style={{ backgroundColor: 'var(--primary-gold)', color: 'var(--primary-navy)', padding: '0.35rem 1rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase' }}>
              Doctor-Supervised Full Protocol
            </span>

            <div style={{ fontSize: '4rem', fontWeight: 900, margin: '1.25rem 0 0.5rem', color: 'white' }}>
              $349<span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#94A3B8' }}>/month</span>
            </div>
            <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>All-inclusive membership. No insurance co-pays or hidden fees.</p>

            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
              {[
                'Prescription BPC-157 or CJC-1295 / Ipamorelin formulation',
                'Comprehensive medical intake & physician protocol design',
                'Compounded at accredited U.S. 503A licensed pharmacies',
                'All sterile supplies & administration guidance included',
                'Free insulated cold-chain expedited shipping',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}>
                  <ShieldCheck size={18} className="text-gold" style={{ flexShrink: 0 }} /> {item}
                </div>
              ))}
            </div>

            <Link href="/get-started" className="btn-primary" style={{ width: '100%', padding: '1.15rem' }}>
              Start 5-Minute Questionnaire <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>Got Questions?</span>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>Frequently Asked <span className="text-gold">Questions</span></h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{ padding: '1.5rem', cursor: 'pointer', borderColor: openFaq === idx ? 'var(--primary-gold)' : 'var(--card-border)' }}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={20} className="text-gold" /> {faq.q}
                  </div>
                  <ChevronDown size={20} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </div>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', color: '#94A3B8', lineHeight: 1.7, fontSize: '0.95rem' }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
