'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Lock, HeartPulse, ShieldAlert } from 'lucide-react'
import Link from 'next/link'
import {
  INTAKE_PHASES,
  US_STATES,
  emptyClinicalIntake,
  getActiveScreeningQuestions,
  isScreeningComplete,
  isValidAdultDob,
  isValidEmail,
  isValidPhone,
  isValidZip,
  questionIsDisqualified,
  screeningHasDisqualifier,
  type ClinicalIntake,
  type IntakePhaseId,
} from '../../lib/intake'

const TREATMENTS = [
  {
    id: 'tirzepatide',
    title: 'Tirzepatide+',
    sub: 'Dual GIP / GLP-1 — may support appetite regulation when prescribed',
    price: '$340/mo',
  },
  {
    id: 'semaglutide',
    title: 'Semaglutide+',
    sub: 'GLP-1 pathway — may support satiety when prescribed',
    price: '$310/mo',
  },
] as const

type FlowStep = 'treatment' | IntakePhaseId | 'success' | 'disqualified'

const FLOW: FlowStep[] = ['treatment', ...INTAKE_PHASES.map((p) => p.id), 'success']

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.8rem 1rem',
  borderRadius: '0.5rem',
  border: '1px solid rgba(255,255,255,0.15)',
  backgroundColor: 'rgba(255,255,255,0.05)',
  color: 'white',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: 700,
  marginBottom: '0.35rem',
  color: 'rgba(255,255,255,0.8)',
}

export default function GetStarted() {
  const [step, setStep] = useState<FlowStep>('treatment')
  const [treatment, setTreatment] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [intake, setIntake] = useState<ClinicalIntake>(() => emptyClinicalIntake())

  const phaseIndex = Math.max(0, FLOW.indexOf(step))
  const progressSteps = FLOW.length - 1
  const progressPercent = step === 'disqualified' ? 100 : Math.min((phaseIndex / progressSteps) * 100, 100)

  const screeningQuestions = useMemo(
    () => getActiveScreeningQuestions(intake),
    [intake],
  )

  const updateIntake = <K extends keyof ClinicalIntake>(key: K, value: ClinicalIntake[K]) => {
    setIntake((prev) => ({ ...prev, [key]: value }))
    setError('')
  }

  const setAnswer = (id: string, value: string) => {
    setIntake((prev) => ({ ...prev, answers: { ...prev.answers, [id]: value } }))
    setError('')
  }

  const goBack = () => {
    setError('')
    if (step === 'disqualified') {
      setStep('screening')
      return
    }
    const idx = FLOW.indexOf(step)
    if (idx > 0) setStep(FLOW[idx - 1])
  }

  const goNext = () => {
    setError('')
    const idx = FLOW.indexOf(step)
    if (idx >= 0 && idx < FLOW.length - 1) setStep(FLOW[idx + 1])
  }

  const continueFromTreatment = (id: string) => {
    setTreatment(id)
    setStep('metrics')
  }

  const continueMetrics = () => {
    if (!intake.height.trim() || !intake.weight.trim() || !intake.sexAtBirth || !isValidAdultDob(intake.dob)) {
      setError('Enter height, weight, sex at birth, and a valid date of birth (18+).')
      return
    }
    goNext()
  }

  const continueScreening = () => {
    if (screeningHasDisqualifier(intake)) {
      setStep('disqualified')
      return
    }
    if (!isScreeningComplete(intake)) {
      setError('Answer every required screening question to continue.')
      return
    }
    goNext()
  }

  const continuePatient = () => {
    if (!firstName.trim() || !lastName.trim() || !isValidEmail(email) || !isValidPhone(phone)) {
      setError('Enter your full name, a valid email, and a phone number.')
      return
    }
    goNext()
  }

  const continueShipping = () => {
    if (!intake.address1.trim() || !intake.city.trim() || !intake.state || !isValidZip(intake.zip)) {
      setError('Enter a complete U.S. shipping address with a valid ZIP code.')
      return
    }
    goNext()
  }

  const submitConsent = () => {
    if (!intake.consentTelehealth || !intake.consentReview) {
      setError('Please accept both agreements to submit your intake.')
      return
    }
    // Mock provider-review handoff — no real EHR submit in this repo
    setStep('success')
  }

  const showBack = step !== 'treatment' && step !== 'success'

  return (
    <main style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '1rem 0',
          backgroundColor: 'rgba(11,19,43,0.8)',
          backdropFilter: 'blur(10px)',
          position: 'sticky',
          top: 0,
          zIndex: 30,
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {showBack ? (
            <button
              type="button"
              onClick={goBack}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--primary-gold)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 600,
                fontSize: '0.875rem',
              }}
            >
              <ArrowLeft size={18} /> Back
            </button>
          ) : (
            <div style={{ width: '60px' }} />
          )}

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, maxWidth: '400px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--primary-gold)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '0.35rem',
              }}
            >
              {step === 'success'
                ? 'Provider review'
                : step === 'disqualified'
                  ? 'Medical review required'
                  : step === 'treatment'
                    ? 'Step 1 of 6'
                    : `Step ${phaseIndex + 1} of ${progressSteps}`}
            </span>
            <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '99px', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  backgroundColor: 'var(--primary-gold)',
                  borderRadius: '99px',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
            <Lock size={14} className="text-gold" /> HIPAA Compliant
          </div>
        </div>
      </div>

      <div className="container" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem' }}>
        <div style={{ width: '100%', maxWidth: '720px' }}>
          <AnimatePresence mode="wait">
            {step === 'treatment' && (
              <motion.div key="treatment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <span
                    style={{
                      backgroundColor: 'rgba(212,175,55,0.1)',
                      color: 'var(--primary-gold)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '99px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    Medical intake
                  </span>
                  <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginTop: '0.75rem', lineHeight: 1.2 }}>
                    Which treatment are you <span className="text-gold">exploring?</span>
                  </h1>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    Selecting a treatment starts clinical intake. A prescription is never guaranteed.
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {TREATMENTS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => continueFromTreatment(item.id)}
                      className="glass-card"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1.25rem 1.5rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        borderColor: treatment === item.id ? 'var(--primary-gold)' : 'var(--card-border)',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'white' }}>{item.title}</div>
                        <div style={{ fontSize: '0.875rem', color: '#94A3B8', marginTop: '2px' }}>{item.sub}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--primary-gold)', marginTop: '0.45rem', fontWeight: 700 }}>
                          From {item.price} · charged only if prescribed
                        </div>
                      </div>
                      <ArrowRight size={20} className="text-gold" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'metrics' && (
              <motion.div key="metrics" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
                    Body <span className="text-gold">metrics</span>
                  </h2>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    Used for clinical screening. Adults 18+ only.
                  </p>
                </div>
                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Height *</label>
                      <input style={inputStyle} placeholder="5ft 10in" value={intake.height} onChange={(e) => updateIntake('height', e.target.value)} />
                    </div>
                    <div>
                      <label style={labelStyle}>Weight (lbs) *</label>
                      <input style={inputStyle} type="number" placeholder="180" value={intake.weight} onChange={(e) => updateIntake('weight', e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Date of birth *</label>
                    <input style={inputStyle} type="date" value={intake.dob} onChange={(e) => updateIntake('dob', e.target.value)} />
                  </div>
                  <div>
                    <label style={labelStyle}>Sex assigned at birth *</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                      {['Male', 'Female', 'Other'].map((sex) => (
                        <button
                          key={sex}
                          type="button"
                          onClick={() => updateIntake('sexAtBirth', sex)}
                          style={{
                            padding: '0.75rem',
                            borderRadius: '0.5rem',
                            border: intake.sexAtBirth === sex ? '2px solid var(--primary-gold)' : '1px solid rgba(255,255,255,0.1)',
                            backgroundColor: intake.sexAtBirth === sex ? 'rgba(212,175,55,0.15)' : 'transparent',
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
                  {error ? <p style={{ color: '#F87171', fontSize: '0.9rem' }}>{error}</p> : null}
                  <button type="button" onClick={continueMetrics} className="btn-primary" style={{ width: '100%' }}>
                    Continue to screening <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'screening' && (
              <motion.div key="screening" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
                    Clinical <span className="text-gold">screening</span>
                  </h2>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    Answer each question honestly. Completing intake does not guarantee a prescription.
                  </p>
                </div>
                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {screeningQuestions.map((q) => {
                    const value = intake.answers[q.id] || ''
                    const blocked = questionIsDisqualified(q, value)
                    return (
                      <div
                        key={q.id}
                        style={{
                          padding: blocked ? '1rem' : 0,
                          borderRadius: '0.75rem',
                          border: blocked ? '1px solid rgba(248,113,113,0.45)' : 'none',
                          backgroundColor: blocked ? 'rgba(248,113,113,0.08)' : 'transparent',
                        }}
                      >
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
                          <select style={{ ...inputStyle, backgroundColor: 'var(--primary-navy)' }} value={value} onChange={(e) => setAnswer(q.id, e.target.value)}>
                            <option value="">—</option>
                            {(q.options || []).map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            style={inputStyle}
                            type={q.type === 'number' ? 'number' : 'text'}
                            value={value}
                            onChange={(e) => setAnswer(q.id, e.target.value)}
                          />
                        )}
                        {blocked ? (
                          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#F87171' }}>
                            Medical review required — this answer may prevent treatment from continuing.
                          </p>
                        ) : null}
                      </div>
                    )
                  })}
                  {error ? <p style={{ color: '#F87171', fontSize: '0.9rem' }}>{error}</p> : null}
                  <button type="button" onClick={continueScreening} className="btn-primary" style={{ width: '100%' }}>
                    Continue <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'patient' && (
              <motion.div key="patient" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
                    Patient <span className="text-gold">information</span>
                  </h2>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    Used to contact you about provider review — not a treatment approval.
                  </p>
                </div>
                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>First name *</label>
                      <input style={inputStyle} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                      <label style={labelStyle}>Last name *</label>
                      <input style={inputStyle} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <input style={inputStyle} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  {error ? <p style={{ color: '#F87171', fontSize: '0.9rem' }}>{error}</p> : null}
                  <button type="button" onClick={continuePatient} className="btn-primary" style={{ width: '100%' }}>
                    Continue to shipping <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'shipping' && (
              <motion.div key="shipping" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
                    Shipping <span className="text-gold">address</span>
                  </h2>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    Where medication would ship if a licensed provider determines treatment is appropriate.
                  </p>
                </div>
                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>Address line 1 *</label>
                    <input style={inputStyle} value={intake.address1} onChange={(e) => updateIntake('address1', e.target.value)} />
                  </div>
                  <div>
                    <label style={labelStyle}>Address line 2</label>
                    <input style={inputStyle} value={intake.address2} onChange={(e) => updateIntake('address2', e.target.value)} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label style={labelStyle}>City *</label>
                      <input style={inputStyle} value={intake.city} onChange={(e) => updateIntake('city', e.target.value)} />
                    </div>
                    <div>
                      <label style={labelStyle}>State *</label>
                      <select
                        style={{ ...inputStyle, backgroundColor: 'var(--primary-navy)' }}
                        value={intake.state}
                        onChange={(e) => updateIntake('state', e.target.value)}
                      >
                        <option value="">—</option>
                        {US_STATES.map((st) => (
                          <option key={st.value} value={st.value}>
                            {st.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>ZIP *</label>
                      <input style={inputStyle} value={intake.zip} onChange={(e) => updateIntake('zip', e.target.value)} />
                    </div>
                  </div>
                  {error ? <p style={{ color: '#F87171', fontSize: '0.9rem' }}>{error}</p> : null}
                  <button type="button" onClick={continueShipping} className="btn-primary" style={{ width: '100%' }}>
                    Continue to agreements <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'consent' && (
              <motion.div key="consent" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
                    Review <span className="text-gold">agreements</span>
                  </h2>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    Submitting does not guarantee a prescription. A licensed provider reviews your intake.
                  </p>
                </div>
                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <label style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={intake.consentTelehealth}
                      onChange={(e) => updateIntake('consentTelehealth', e.target.checked)}
                      style={{ marginTop: '0.25rem' }}
                    />
                    <span style={{ fontSize: '0.95rem', color: '#E2E8F0', lineHeight: 1.5 }}>
                      I agree to the Terms of Use, Medical Consent, and Telehealth Informed Consent for VitalWellRx care.
                    </span>
                  </label>
                  <label style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={intake.consentReview}
                      onChange={(e) => updateIntake('consentReview', e.target.checked)}
                      style={{ marginTop: '0.25rem' }}
                    />
                    <span style={{ fontSize: '0.95rem', color: '#E2E8F0', lineHeight: 1.5 }}>
                      I authorize affiliated licensed clinicians to review my intake and prescribe only if clinically appropriate.
                    </span>
                  </label>
                  {error ? <p style={{ color: '#F87171', fontSize: '0.9rem' }}>{error}</p> : null}
                  <button type="button" onClick={submitConsent} className="btn-primary" style={{ width: '100%' }}>
                    Submit for provider review <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'disqualified' && (
              <motion.div key="disqualified" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center' }}>
                <div className="glass-card" style={{ padding: '3rem 2rem', border: '1px solid rgba(248,113,113,0.45)' }}>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(248,113,113,0.12)',
                      border: '2px solid rgba(248,113,113,0.55)',
                      margin: '0 auto 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ShieldAlert size={36} color="#F87171" />
                  </div>
                  <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem' }}>Medical review required</h1>
                  <p className="text-muted" style={{ fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                    Based on your answers, treatment cannot continue through this online intake. Please contact care@vitalwellrx.com if you have questions — a clinician may still advise on next steps.
                  </p>
                  <Link href="/" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                    Return home
                  </Link>
                </div>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center' }}>
                <div className="glass-card" style={{ padding: '3.5rem 2rem', border: '2px solid var(--primary-gold)' }}>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(212,175,55,0.15)',
                      border: '2px solid var(--primary-gold)',
                      margin: '0 auto 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <HeartPulse size={40} className="text-gold" />
                  </div>
                  <span
                    style={{
                      backgroundColor: 'rgba(16,185,129,0.15)',
                      color: '#10B981',
                      padding: '0.35rem 1rem',
                      borderRadius: '99px',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    Intake received
                  </span>
                  <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0 0.5rem' }}>
                    Thank you, <span className="text-gold">{firstName || 'there'}.</span>
                  </h1>
                  <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                    A licensed provider will review your questionnaire
                    {intake.state ? ` for ${intake.state}` : ''}. Completing intake does not guarantee a prescription.
                  </p>
                  <div
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      borderRadius: '1rem',
                      padding: '1.5rem',
                      margin: '0 auto 2rem',
                      maxWidth: '480px',
                      textAlign: 'left',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--primary-gold)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Mock provider review
                    </div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'white' }}>
                      {TREATMENTS.find((t) => t.id === treatment)?.title || 'Selected protocol'}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#94A3B8', marginTop: '4px' }}>
                      Review typically within 24 hours when available · Rx not guaranteed
                    </div>
                  </div>
                  <Link href="/" className="btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
                    Return home <ArrowRight size={18} style={{ marginLeft: '8px' }} />
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
