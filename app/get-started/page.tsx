'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Lock, HeartPulse, ShieldAlert } from 'lucide-react'
import Link from 'next/link'
import {
  INTAKE_PHASES,
  SCREENING_CONDITIONS,
  US_STATES,
  emptyClinicalIntake,
  isValidAdultDob,
  isValidEmail,
  isValidPhone,
  isValidZip,
  type ClinicalIntake,
  type IntakePhaseId,
} from '../../lib/intake'
import { site } from '../../data/site'

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
  const [submitting, setSubmitting] = useState(false)
  const [couponInput, setCouponInput] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string
    discountAmountCents?: number
    finalAmountCents?: number
  } | null>(null)
  const [couponBusy, setCouponBusy] = useState(false)
  const [couponMessage, setCouponMessage] = useState('')
  const [intake, setIntake] = useState<ClinicalIntake>(() => emptyClinicalIntake())

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (new URLSearchParams(window.location.search).get('canceled') === '1') {
      setError('Checkout was canceled. Your intake is still here — continue when you are ready.')
    }
  }, [])

  const phaseIndex = Math.max(0, FLOW.indexOf(step))
  const progressSteps = Math.max(1, FLOW.length - 1)
  const progressPercent = step === 'disqualified' ? 100 : Math.min((phaseIndex / progressSteps) * 100, 100)
  const intakeStepNumber = INTAKE_PHASES.findIndex((phase) => phase.id === step) + 1

  const updateIntake = <K extends keyof ClinicalIntake>(key: K, value: ClinicalIntake[K]) => {
    setIntake((prev) => ({ ...prev, [key]: value }))
    setError('')
  }

  const applyCoupon = async () => {
    const code = couponInput.trim()
    if (!code) {
      setCouponMessage('Enter a promo code.')
      setAppliedCoupon(null)
      return
    }
    if (!treatment) {
      setCouponMessage('Select a care program first.')
      return
    }

    setCouponBusy(true)
    setCouponMessage('')
    try {
      const res = await fetch('/api/checkout/coupon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, programSlug: treatment }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        valid?: boolean
        code?: string
        discountAmountCents?: number
        finalAmountCents?: number
        error?: string
      }
      if (!res.ok || data.valid !== true) {
        setAppliedCoupon(null)
        setCouponMessage(data.error || 'This code is not valid for this order.')
        return
      }
      setAppliedCoupon({
        code: data.code || code,
        discountAmountCents: data.discountAmountCents,
        finalAmountCents: data.finalAmountCents,
      })
      setCouponMessage('Promo code applied.')
    } catch {
      setAppliedCoupon(null)
      setCouponMessage('We could not check this code right now. Please try again.')
    } finally {
      setCouponBusy(false)
    }
  }

  const clearCoupon = () => {
    setAppliedCoupon(null)
    setCouponMessage('')
  }

  const goBack = () => {
    setError('')
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
    setStep('patient')
  }

  const continuePatient = () => {
    if (!email.trim() || !firstName.trim() || !lastName.trim() || !phone.trim() || !intake.dob || !intake.sexAtBirth) {
      setError('Please complete all required patient information fields.')
      return
    }
    if (!isValidEmail(email)) {
      setError('Enter a valid email address.')
      return
    }
    if (!isValidPhone(phone)) {
      setError('Enter a valid phone number.')
      return
    }
    if (!isValidAdultDob(intake.dob)) {
      setError('You must be 18 or older to continue.')
      return
    }
    goNext()
  }

  const continueScreening = () => {
    if (intake.conditionsApply !== 'yes' && intake.conditionsApply !== 'no') {
      setError('Please answer the medical screening question to continue.')
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

  const submitConsent = async () => {
    if (!intake.consentTelehealth || !intake.consentReview) {
      setError('Please accept both agreements to submit your intake.')
      return
    }
    if (!treatment || (treatment !== 'semaglutide' && treatment !== 'tirzepatide')) {
      setError('Select a care program to continue.')
      return
    }

    setSubmitting(true)
    setError('')

    try {
      localStorage.setItem('vitalwell_intake_email_v1', email.trim())
    } catch {
      /* ignore private-mode storage failures */
    }

    try {
      const res = await fetch('/api/checkout/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          programSlug: treatment,
          patientInfo: {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            phone: phone.replace(/\D/g, ''),
            dob: intake.dob,
            state: intake.state,
          },
          intakeAnswers: {
            program: TREATMENTS.find((t) => t.id === treatment)?.title || treatment,
            programSlug: treatment,
            sexAssignedAtBirth: intake.sexAtBirth,
            shippingStreet: intake.address1,
            shippingApartment: intake.address2,
            shippingCity: intake.city,
            shippingState: intake.state,
            shippingZip: intake.zip,
            conditionsApply: intake.conditionsApply,
            screeningConditions: SCREENING_CONDITIONS.join('; '),
            consentTermsAndTelehealth: intake.consentTelehealth,
            authorizeClinicianReview: intake.consentReview,
            source: 'vitalwell-get-started',
          },
          ...(appliedCoupon?.code ? { couponCode: appliedCoupon.code } : {}),
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string; checkoutUrl?: string }
      if (!res.ok || !data.checkoutUrl) {
        setError(data.error || 'We could not start checkout. Please try again.')
        return
      }
      window.location.href = data.checkoutUrl
    } catch {
      setError('Network error. Check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
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
                ? 'Checkout complete'
                : step === 'treatment'
                  ? 'Choose treatment'
                  : `Step ${intakeStepNumber} of ${INTAKE_PHASES.length}`}
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

            {step === 'patient' && (
              <motion.div key="patient" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Step 1 — Patient Information</h2>
                </div>
                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>First Name *</label>
                      <input style={inputStyle} value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="given-name" />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name *</label>
                      <input style={inputStyle} value={lastName} onChange={(e) => setLastName(e.target.value)} autoComplete="family-name" />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input style={inputStyle} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
                  </div>
                  <div>
                    <label style={labelStyle}>Date of Birth *</label>
                    <input style={inputStyle} type="date" value={intake.dob} onChange={(e) => updateIntake('dob', e.target.value)} autoComplete="bday" />
                  </div>
                  <div>
                    <label style={labelStyle}>Sex Assigned at Birth *</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      {['Male', 'Female'].map((sex) => (
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
                  <button type="button" onClick={continuePatient} className="btn-primary" style={{ width: '100%' }}>
                    Next Step <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'shipping' && (
              <motion.div key="shipping" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Step 2 — Shipping Address</h2>
                </div>
                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>Street Address *</label>
                    <input style={inputStyle} value={intake.address1} onChange={(e) => updateIntake('address1', e.target.value)} autoComplete="address-line1" />
                  </div>
                  <div>
                    <label style={labelStyle}>Apartment / Suite (Optional)</label>
                    <input style={inputStyle} value={intake.address2} onChange={(e) => updateIntake('address2', e.target.value)} autoComplete="address-line2" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label style={labelStyle}>City *</label>
                      <input style={inputStyle} value={intake.city} onChange={(e) => updateIntake('city', e.target.value)} autoComplete="address-level2" />
                    </div>
                    <div>
                      <label style={labelStyle}>State *</label>
                      <select
                        style={{ ...inputStyle, backgroundColor: 'var(--primary-navy)' }}
                        value={intake.state}
                        onChange={(e) => updateIntake('state', e.target.value)}
                        autoComplete="address-level1"
                      >
                        <option value="">Select</option>
                        {US_STATES.map((st) => (
                          <option key={st.value} value={st.value}>
                            {st.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>ZIP / Postcode *</label>
                      <input style={inputStyle} value={intake.zip} onChange={(e) => updateIntake('zip', e.target.value)} autoComplete="postal-code" />
                    </div>
                  </div>
                  {error ? <p style={{ color: '#F87171', fontSize: '0.9rem' }}>{error}</p> : null}
                  <button type="button" onClick={continueShipping} className="btn-primary" style={{ width: '100%' }}>
                    Next Step <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'screening' && (
              <motion.div key="screening" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Step 3 — Medical Screening</h2>
                </div>
                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <p style={{ fontSize: '1rem', fontWeight: 700 }}>Do any of the following conditions apply to you? *</p>
                  <ul style={{ margin: 0, paddingLeft: '1.15rem', display: 'grid', gap: '0.35rem', color: '#94A3B8', fontSize: '0.92rem' }}>
                    {SCREENING_CONDITIONS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {[
                      { value: 'yes', label: 'Yes, one or more' },
                      { value: 'no', label: 'No, none apply' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => updateIntake('conditionsApply', opt.value)}
                        style={{
                          padding: '0.9rem 1rem',
                          borderRadius: '0.5rem',
                          border: intake.conditionsApply === opt.value ? '2px solid var(--primary-gold)' : '1px solid rgba(255,255,255,0.1)',
                          backgroundColor: intake.conditionsApply === opt.value ? 'rgba(212,175,55,0.15)' : 'transparent',
                          color: 'white',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  {intake.conditionsApply === 'yes' && (
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                      A licensed clinician will review your history before deciding whether treatment is appropriate.
                      Answering yes does not automatically disqualify you.
                    </p>
                  )}
                  {error ? <p style={{ color: '#F87171', fontSize: '0.9rem' }}>{error}</p> : null}
                  <button type="button" onClick={continueScreening} className="btn-primary" style={{ width: '100%' }}>
                    Next Step <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'consent' && (
              <motion.div key="consent" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Step 4 — Agreements &amp; Checkout</h2>
                  <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                    You will complete payment securely with Stripe. A licensed provider still reviews your intake
                    before any prescription is issued.
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
                      I agree to the{' '}
                      <Link href="/terms" target="_blank" rel="noreferrer">
                        Terms of Service
                      </Link>
                      , Medical Consent form, and acknowledge the{' '}
                      <Link href="/telehealth-consent" target="_blank" rel="noreferrer">
                        Telehealth Informed Consent
                      </Link>{' '}
                      for specialized medical protocols. *
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
                      I authorize {site.name}&apos;s affiliated clinicians to securely review my medical records and
                      prescribe the necessary medication if I am a candidate. *
                    </span>
                  </label>
                  <div style={{ display: 'grid', gap: '0.55rem' }}>
                    <label htmlFor="vitalwell-coupon" style={{ ...labelStyle, marginBottom: 0 }}>
                      Promo code <span style={{ fontWeight: 500, textTransform: 'none' }}>(optional)</span>
                    </label>
                    <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                      <input
                        id="vitalwell-coupon"
                        type="text"
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value)
                          if (appliedCoupon) clearCoupon()
                        }}
                        placeholder="Enter code"
                        autoComplete="off"
                        disabled={couponBusy || submitting}
                        style={{ ...inputStyle, flex: '1 1 180px' }}
                      />
                      <button
                        type="button"
                        className="btn-outline"
                        onClick={applyCoupon}
                        disabled={couponBusy || submitting || !couponInput.trim()}
                        style={{ padding: '0.8rem 1.1rem', whiteSpace: 'nowrap' }}
                      >
                        {couponBusy ? 'Checking…' : 'Apply'}
                      </button>
                    </div>
                    {appliedCoupon && (
                      <p style={{ margin: 0, fontSize: '0.88rem', color: '#34D399', fontWeight: 600 }}>
                        {appliedCoupon.code} applied
                        {typeof appliedCoupon.discountAmountCents === 'number'
                          ? ` — saves $${(appliedCoupon.discountAmountCents / 100).toFixed(2)}`
                          : ''}
                      </p>
                    )}
                    {couponMessage && !appliedCoupon && (
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>{couponMessage}</p>
                    )}
                  </div>
                  {error ? <p style={{ color: '#F87171', fontSize: '0.9rem' }}>{error}</p> : null}
                  <button
                    type="button"
                    onClick={submitConsent}
                    className="btn-primary"
                    style={{ width: '100%' }}
                    disabled={submitting}
                    aria-busy={submitting}
                  >
                    {submitting ? 'Starting secure checkout…' : 'Continue to secure checkout'}{' '}
                    <ArrowRight size={18} style={{ marginLeft: '8px' }} />
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
