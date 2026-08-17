import CheckoutSuccess from '../../../components/CheckoutSuccess'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout complete | VitalWellRx',
  description: 'Your VitalWellRx intake was submitted and is awaiting clinician review.',
  robots: { index: false, follow: false },
}

export default function Page() {
  return <CheckoutSuccess />
}
