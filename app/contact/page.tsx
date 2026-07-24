'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { contact } from '@/data/site'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '2px' }}>Get In Touch</span>
            <h1 className="h1" style={{ marginTop: '0.5rem' }}>
              Start Your <span className="text-gold">Journey</span><br/>Today.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}>
              Have questions? Our care team is here to help you find the right protocol for your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section style={{ padding: '2rem 0 6rem' }}>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Contact <span className="text-gold">Information</span></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { icon: <Mail size={24} />, label: 'Email Us', value: contact.email, sub: 'We respond within 24 hours' },
                { icon: <Phone size={24} />, label: 'Call Us', value: contact.phoneDisplay, sub: 'Mon – Fri, 8am – 8pm EST' },
                { icon: <MapPin size={24} />, label: 'Headquarters', value: contact.city, sub: 'Telehealth available in all 50 states' },
                { icon: <Clock size={24} />, label: 'Response Time', value: '24–48 Hours', sub: 'For medical reviews' },
              ].map((item, i) => (
                <div key={i} className="glass-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.5rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(212,175,55,0.1)', borderRadius: '0.75rem', flexShrink: 0 }}>
                    <span className="text-gold">{item.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary-gold)', marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 700 }}>{item.value}</div>
                    <div className="text-muted" style={{ fontSize: '0.875rem' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            {submitted ? (
              <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(16,185,129,0.1)', border: '2px solid #10B981', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Send size={36} style={{ color: '#10B981' }} />
                </div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Thank You!</h2>
                <p className="text-muted" style={{ fontSize: '1.125rem' }}>We've received your message. A member of our care team will reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Send Us a Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>First Name *</label>
                    <input required type="text" placeholder="John" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>Last Name *</label>
                    <input required type="text" placeholder="Doe" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>Email *</label>
                  <input required type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>Phone</label>
                  <input type="tel" placeholder="(555) 123-4567" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>I&apos;m interested in...</label>
                  <select style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none' }}>
                    <option value="" style={{ color: '#333' }}>Select a treatment</option>
                    <option value="weight" style={{ color: '#333' }}>Weight & Metabolic Health</option>
                    <option value="hormone" style={{ color: '#333' }}>Hormone Optimization</option>
                    <option value="peptide" style={{ color: '#333' }}>Peptide Therapy</option>
                    <option value="other" style={{ color: '#333' }}>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>Message *</label>
                  <textarea required placeholder="Tell us about your health goals..." rows={4} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none', resize: 'vertical' }} />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  Send Message <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </button>
                <p className="text-muted" style={{ fontSize: '0.75rem', textAlign: 'center' }}>By submitting, you agree to our Privacy Policy. We will never share your information.</p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
