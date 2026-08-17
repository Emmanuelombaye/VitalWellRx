'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type PatientOrder = {
  id: string
  status: string
  clinicalStatus: string
  productName: string
  trackingNumber: string
  carrier: string
  createdAt: string
}

function formatLabel(value: string) {
  return value.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}

export default function CheckoutSuccess() {
  const [hasSession, setHasSession] = useState(false)
  const [orders, setOrders] = useState<PatientOrder[]>([])
  const [ordersLoading, setOrdersLoading] = useState(false)
  const [ordersError, setOrdersError] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setHasSession(Boolean(params.get('session_id')))
    try {
      localStorage.setItem(
        'vitalwell_checkout_status_v1',
        JSON.stringify({ paid: true, at: new Date().toISOString() }),
      )
    } catch {
      /* ignore private-mode storage failures */
    }

    let email = ''
    try {
      email = localStorage.getItem('vitalwell_intake_email_v1') || ''
    } catch {
      email = ''
    }
    if (!email.trim()) return

    setOrdersLoading(true)
    fetch(`/api/orders?email=${encodeURIComponent(email.trim())}`)
      .then(async (res) => {
        const data = (await res.json().catch(() => ({}))) as { orders?: PatientOrder[]; error?: string }
        if (!res.ok) {
          setOrdersError(data.error || 'We could not load your orders right now.')
          return
        }
        setOrders(Array.isArray(data.orders) ? data.orders : [])
      })
      .catch(() => setOrdersError('We could not load your orders right now.'))
      .finally(() => setOrdersLoading(false))
  }, [])

  return (
    <main className="legal-page">
      <section className="container legal-page__hero" style={{ maxWidth: '42rem' }}>
        <p className="legal-page__eyebrow">Checkout complete</p>
        <h1 className="legal-page__title">Your intake is in clinical review.</h1>
        <p className="legal-page__lede">
          Payment was received. A licensed clinician will review your information before any prescription is issued.
          Watch the email you used at checkout for next steps.
        </p>
        {hasSession && (
          <p className="legal-page__updated">A payment confirmation has been recorded for this visit.</p>
        )}
        {(ordersLoading || orders.length > 0 || ordersError) && (
          <div className="glass-card" style={{ marginTop: '1.5rem', padding: '1.25rem 1.35rem', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.75rem' }}>Order status</h2>
            {ordersLoading && <p className="text-muted">Loading your orders…</p>}
            {!ordersLoading && ordersError && <p className="text-muted">{ordersError}</p>}
            {!ordersLoading && !ordersError && orders.length === 0 && (
              <p className="text-muted">Your order will appear here once processing begins.</p>
            )}
            {!ordersLoading &&
              orders.map((order) => (
                <div key={order.id || order.productName} style={{ paddingTop: '0.65rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <strong>{order.productName}</strong>
                  <p className="text-muted" style={{ margin: '0.25rem 0 0', fontSize: '0.9rem' }}>
                    Order {formatLabel(order.status)} · Clinical {formatLabel(order.clinicalStatus)}
                  </p>
                  {order.trackingNumber ? (
                    <p className="text-muted" style={{ margin: '0.35rem 0 0', fontSize: '0.85rem' }}>
                      {order.carrier ? `${order.carrier}: ` : 'Tracking: '}
                      {order.trackingNumber}
                    </p>
                  ) : null}
                </div>
              ))}
          </div>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginTop: '1.75rem' }}>
          <Link href="/dashboard" className="btn-primary">
            Open member portal
          </Link>
          <Link href="/" className="btn-outline">
            Return home
          </Link>
        </div>
      </section>
    </main>
  )
}
