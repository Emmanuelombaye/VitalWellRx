'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, Scale, Activity, Lock, HeartPulse } from 'lucide-react'
import Link from 'next/link'
import {
  getActiveScreeningQuestions,
  isScreeningComplete,
  questionIsDisqualified,
} from '../../lib/intake'

export default function GetStarted() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    goal: '',
    outcome: '',
    state: 'FL',
    ageGroup: '30-44',
    treatment: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    height: '',
    weight: '',
    sex: '',
    answers: {} as Record<string, string>,
  })

  const totalSteps = 6
  const screeningIntake = useMemo(
    () => ({ answers: formData.answers, sexAtBirth: formData.sex }),
    [formData.answers, formData.sex],
  )
  const screeningQuestions = useMemo(
    () => getActiveScreeningQuestions(screeningIntake),
    [screeningIntake],
  )

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }
  const setAnswer = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, answers: { ...prev.answers, [id]: value } }))
  }

  const nextStep = () => {
    if (step < totalSteps + 1) setStep(prev => prev + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(prev => prev - 1)
  }

  const progressPercent = Math.min((step / totalSteps) * 100, 100)

  return (
    <main style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
      {/* Top Progress Navigation */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '1rem 0', backgroundColor: 'rgba(11,19,43,0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 30 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {step > 1 && step <= totalSteps ? (
            <button onClick={prevStep} style={{ background: 'transparent', border: 'none', color: 'var(--primary-gold)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.875rem' }}>
              <ArrowLeft size={18} /> Back
            </button>
          ) : (
            <div style={{ width: '60px' }}></div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, maxWidth: '400px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.35rem' }}>
              {step <= totalSteps ? `Step ${step} of ${totalSteps}` : 'Eligibility Result'}
            </span>
            <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '99px', overflow: 'hidden' }}>
              <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: 'var(--primary-gold)', borderRadius: '99px', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
            <Lock size={14} className="text-gold" /> HIPAA Compliant
          </div>
        </div>
      </div>

      {/* Main Flow Container */}
      <div className="container" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem' }}>
        <div style={{ width: '100%', maxWidth: '680px' }}>
          <AnimatePresence mode="wait">
            {/* Step 1: Goal Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <span style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: 'var(--primary-gold)', padding: '0.35rem 0.85rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Personalized Intake
                  </span>
                  <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginTop: '0.75rem', lineHeight: 1.2 }}>
                    What treatment are you <span className="text-gold">interested in?</span>
                  </h1>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    Select Tirzepatide+ or Semaglutide+ so our physicians can tailor your medical intake.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { id: 'tirzepatide', title: 'Tirzepatide+', sub: 'Dual GIP / GLP-1 — stronger appetite control & metabolic reset', icon: <Scale size={24} /> },
                    { id: 'semaglutide', title: 'Semaglutide+', sub: 'Proven GLP-1 — steady, sustainable weight-loss support', icon: <Activity size={24} /> },
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        updateForm('goal', item.id)
                        nextStep()
                      }}
                      className="glass-card"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1.25rem 1.5rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        borderColor: formData.goal === item.id ? 'var(--primary-gold)' : 'var(--card-border)',
                        backgroundColor: formData.goal === item.id ? 'rgba(212,175,55,0.1)' : 'var(--card-bg)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ padding: '0.75rem', backgroundColor: 'rgba(212,175,55,0.15)', borderRadius: '0.75rem', color: 'var(--primary-gold)' }}>
                          {item.icon}
                        </div>
                        <div>
                          <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'white' }}>{item.title}</div>
                          <div style={{ fontSize: '0.875rem', color: '#94A3B8', marginTop: '2px' }}>{item.sub}</div>
                        </div>
                      </div>
                      <ArrowRight size={20} className="text-gold" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Target Outcome */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
                    What results are you looking to <span className="text-gold">achieve?</span>
                  </h2>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    Choose the target outcome that matters most to you.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { id: 'target_weight', title: 'Lose 20+ lbs & quiet food noise', desc: 'Appetite control and sustainable weekly progress' },
                    { id: 'target_metabolic', title: 'Improve metabolic health & energy', desc: 'Steadier blood sugar, fewer crashes, clearer focus' },
                    { id: 'target_maintain', title: 'Build lasting habits that stick', desc: 'Provider-guided care with accountable follow-through' },
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        updateForm('outcome', item.id)
                        nextStep()
                      }}
                      className="glass-card"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1.25rem 1.5rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        borderColor: formData.outcome === item.id ? 'var(--primary-gold)' : 'var(--card-border)',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white' }}>{item.title}</div>
                        <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '4px' }}>{item.desc}</div>
                      </div>
                      <Check size={20} style={{ color: formData.outcome === item.id ? 'var(--primary-gold)' : 'rgba(255,255,255,0.2)' }} />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Location & Age Verification */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
                    Confirm your <span className="text-gold">telehealth eligibility</span>
                  </h2>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    VitalWellRx licensed physicians operate across all 50 U.S. states.
                  </p>
                </div>

                <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--primary-gold)' }}>State of Residence</label>
                    <select
                      value={formData.state}
                      onChange={e => updateForm('state', e.target.value)}
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(212,175,55,0.3)', backgroundColor: 'var(--primary-navy)', color: 'white', fontSize: '1rem', outline: 'none' }}
                    >
                      {['FL', 'CA', 'TX', 'NY', 'FL', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI', 'NJ', 'VA', 'WA', 'AZ', 'MA', 'TN', 'CO', 'MD', 'MO', 'Other US State'].map(st => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--primary-gold)' }}>Age Group</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                      {['18-29', '30-44', '45+'].map(age => (
                        <button
                          key={age}
                          type="button"
                          onClick={() => updateForm('ageGroup', age)}
                          style={{
                            padding: '0.75rem',
                            borderRadius: '0.5rem',
                            border: formData.ageGroup === age ? '2px solid var(--primary-gold)' : '1px solid rgba(255,255,255,0.1)',
                            backgroundColor: formData.ageGroup === age ? 'rgba(212,175,55,0.15)' : 'transparent',
                            color: 'white',
                            fontWeight: 700,
                            cursor: 'pointer',
                          }}
                        >
                          {age}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '1rem', backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <ShieldCheck size={24} style={{ color: '#10B981', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.85rem', color: '#E2E8F0', lineHeight: 1.4 }}>
                      Physician network active in <strong>{formData.state}</strong>. No insurance required.
                    </span>
                  </div>

                  <button onClick={nextStep} className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    Continue Intake <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Recommended Protocol Selection */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
                    Select your preferred <span className="text-gold">Protocol</span>
                  </h2>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    All plans include MD medical review, prescription compounding, and shipping.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { id: 'tirzepatide', name: 'Personalized Tirzepatide+', price: '$340/mo', badge: 'Best Seller', desc: 'Dual GIP / GLP-1 weekly injection with licensed provider review and pharmacy fulfillment.' },
                    { id: 'semaglutide', name: 'Personalized Semaglutide+', price: '$310/mo', badge: 'Proven GLP-1', desc: 'Once-weekly GLP-1 protocol for steady, sustainable weight loss and ongoing care support.' },
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        updateForm('treatment', item.id)
                        nextStep()
                      }}
                      className="glass-card"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1.25rem 1.5rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        borderColor: formData.treatment === item.id ? 'var(--primary-gold)' : 'var(--card-border)',
                      }}
                    >
                      <div style={{ maxWidth: '420px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                          <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: 'var(--primary-gold)', color: 'var(--primary-navy)', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                            {item.badge}
                          </span>
                        </div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white' }}>{item.name}</div>
                        <div style={{ fontSize: '0.825rem', color: '#94A3B8', marginTop: '4px' }}>{item.desc}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-gold)' }}>{item.price}</div>
                        <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Cancel anytime</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 5: Contact Information */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
                    Where should we send your <span className="text-gold">Medical Review?</span>
                  </h2>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    Enter your contact info so our medical team can finalize your intake.
                  </p>
                </div>

                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.35rem', color: 'rgba(255,255,255,0.8)' }}>First Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Alexander"
                        value={formData.firstName}
                        onChange={e => updateForm('firstName', e.target.value)}
                        style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.35rem', color: 'rgba(255,255,255,0.8)' }}>Last Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Wright"
                        value={formData.lastName}
                        onChange={e => updateForm('lastName', e.target.value)}
                        style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.35rem', color: 'rgba(255,255,255,0.8)' }}>Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="alexander@example.com"
                      value={formData.email}
                      onChange={e => updateForm('email', e.target.value)}
                      style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.35rem', color: 'rgba(255,255,255,0.8)' }}>Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="(555) 234-5678"
                      value={formData.phone}
                      onChange={e => updateForm('phone', e.target.value)}
                      style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.35rem', color: 'rgba(255,255,255,0.8)' }}>Height *</label>
                      <input
                        type="text"
                        placeholder="5ft 10in"
                        value={formData.height}
                        onChange={e => updateForm('height', e.target.value)}
                        style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.35rem', color: 'rgba(255,255,255,0.8)' }}>Weight (lbs) *</label>
                      <input
                        type="number"
                        placeholder="180"
                        value={formData.weight}
                        onChange={e => updateForm('weight', e.target.value)}
                        style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.35rem', color: 'rgba(255,255,255,0.8)' }}>Sex assigned at birth *</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      {['Male', 'Female'].map(sex => (
                        <button
                          key={sex}
                          type="button"
                          onClick={() => updateForm('sex', sex)}
                          style={{
                            padding: '0.75rem',
                            borderRadius: '0.5rem',
                            border: formData.sex === sex ? '2px solid var(--primary-gold)' : '1px solid rgba(255,255,255,0.1)',
                            backgroundColor: formData.sex === sex ? 'rgba(212,175,55,0.15)' : 'transparent',
                            color: 'white',
                            fontWeight: 700,
                            cursor: 'pointer',
                          }}
                        >
                          {sex}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (formData.firstName && formData.email && formData.height && formData.weight && formData.sex) {
                        nextStep()
                      }
                    }}
                    className="btn-primary"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    Continue to screening <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
                    Clinical <span className="text-gold">screening</span>
                  </h2>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    Answer each question. Completing intake does not guarantee a prescription.
                  </p>
                </div>
                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {screeningQuestions.map((q) => {
                    const value = formData.answers[q.id] || ''
                    const blocked = questionIsDisqualified(q, value)
                    return (
                      <div key={q.id}>
                        <p style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>{q.question}</p>
                        {q.type === 'boolean' ? (
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                            {(['yes', 'no'] as const).map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => setAnswer(q.id, opt)}
                                style={{
                                  padding: '0.75rem',
                                  borderRadius: '0.5rem',
                                  border: value === opt ? '2px solid var(--primary-gold)' : '1px solid rgba(255,255,255,0.1)',
                                  backgroundColor: value === opt ? 'rgba(212,175,55,0.15)' : 'transparent',
                                  color: 'white',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                }}
                              >
                                {opt === 'yes' ? 'Yes' : 'No'}
                              </button>
                            ))}
                          </div>
                        ) : q.type === 'select' ? (
                          <select
                            value={value}
                            onChange={(e) => setAnswer(q.id, e.target.value)}
                            style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'var(--primary-navy)', color: 'white' }}
                          >
                            <option value="">—</option>
                            {(q.options || []).map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={q.type === 'number' ? 'number' : 'text'}
                            value={value}
                            onChange={(e) => setAnswer(q.id, e.target.value)}
                            style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white' }}
                          />
                        )}
                        {blocked ? (
                          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#F87171' }}>
                            This answer requires physician review before treatment can continue.
                          </p>
                        ) : null}
                      </div>
                    )
                  })}
                  <button
                    onClick={() => {
                      if (isScreeningComplete(screeningIntake)) nextStep()
                    }}
                    className="btn-primary"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    Submit intake <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </motion.div>
            )}

            {step > totalSteps && (
              <motion.div
                key="approval"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center' }}
              >
                <div className="glass-card" style={{ padding: '3.5rem 2rem', border: '2px solid var(--primary-gold)' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(212,175,55,0.15)', border: '2px solid var(--primary-gold)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HeartPulse size={40} className="text-gold" />
                  </div>

                  <span style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#10B981', padding: '0.35rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Intake received
                  </span>

                  <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0 0.5rem' }}>
                    Thank you, <span className="text-gold">{formData.firstName || 'there'}.</span>
                  </h1>

                  <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                    A licensed provider will review your questionnaire for <strong>{formData.state}</strong>. Completing intake does not guarantee a prescription.
                  </p>

                  <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '1.5rem', margin: '0 auto 2rem', maxWidth: '480px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Selected Protocol Summary</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'white' }}>VitalWellRx Precision Telehealth Protocol</div>
                    <div style={{ fontSize: '0.875rem', color: '#94A3B8', marginTop: '4px' }}>State: {formData.state} | Doctor Review Pending (24h)</div>
                  </div>

                  <Link href="/dashboard" className="btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
                    Access Member Portal <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
