import type { GlobalFaqItem } from '@/types'

export const globalFaqs: GlobalFaqItem[] = [
  {
    id: 'doctor-intake',
    category: 'intake',
    question: 'How does provider review work?',
    answer:
      'After you complete the online medical intake, a U.S.-licensed provider reviews your health history and submitted information. If clinically appropriate, a prescription may be issued and fulfilled by a licensed partner pharmacy. Treatment is not guaranteed.',
  },
  {
    id: 'insurance-requirement',
    category: 'pricing',
    question: 'Do I need health insurance to use VitalWellRx?',
    answer:
      'No health insurance is required. Pricing for Tirzepatide+ and Semaglutide+ is shown on product pages before you begin. Where stated, you are charged only if a licensed provider prescribes treatment.',
  },
  {
    id: '503a-pharmacy-definition',
    category: 'pharmacy',
    question: 'What is a 503A compounding pharmacy?',
    answer:
      '503A compounding pharmacies are state-licensed pharmacies that prepare patient-specific compounded medications pursuant to a valid prescription. VitalWellRx is not a pharmacy and does not compound or dispense medications.',
  },
  {
    id: 'cold-pack-shipping',
    category: 'shipping',
    question: 'How is medication shipped if prescribed?',
    answer:
      'If prescribed, a licensed pharmacy may ship medication via expedited courier in discreet packaging. Temperature-controlled packaging may be used when appropriate. Timing is not guaranteed. See Shipping & Fulfillment for details.',
  },
  {
    id: 'what-we-offer',
    category: 'pharmacy',
    question: 'What treatments does VitalWellRx currently offer?',
    answer:
      'VitalWellRx currently focuses on personalized weight-care protocols: Tirzepatide+ (dual GIP/GLP-1) and Semaglutide+ (GLP-1). Both require licensed provider review and are available only if prescribed.',
  },
  {
    id: 'fda-approval',
    category: 'pharmacy',
    question: 'Are compounded medications FDA-approved?',
    answer:
      'No. Compounded medications prepared by licensed U.S. pharmacies are not FDA-approved as finished branded products and are not reviewed by the FDA for safety, effectiveness, or quality in the same manner as FDA-approved drugs. Product imagery is illustrative.',
  },
  {
    id: 'subscription-cancellation',
    category: 'pricing',
    question: 'Can I cancel or pause?',
    answer:
      'Plans are generally month-to-month. You may request to cancel or pause future refills through the patient portal or by contacting support. Cancellation does not automatically refund prior fulfilled shipments.',
  },
  {
    id: 'shipping-locations',
    category: 'shipping',
    question: 'Where is VitalWellRx available?',
    answer:
      'Availability varies by state, provider licensure, pharmacy fulfillment, and clinical eligibility. Completing intake does not guarantee treatment. See States We Serve for details.',
  },
]
