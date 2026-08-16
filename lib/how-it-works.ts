export type HowStep = {
  n: string
  title: string
  titleItalic: string
  body: string
  image: { src: string; alt: string }
  chips?: string[]
  callout?: { value: string; label: string }
}

export const howSteps: HowStep[] = [
  {
    n: '01',
    title: 'Choose a',
    titleItalic: 'treatment plan',
    body: 'Start with Personalized Tirzepatide+ or Semaglutide+. Select the plan that fits your goals, then complete a short medical history questionnaire — it takes just a few minutes and helps our providers confirm you’re a good fit.',
    image: {
      src: '/hiw-step1.webp',
      alt: 'VitalWellRx Tirzepatide and Semaglutide treatment vials',
    },
    chips: ['Tirzepatide+', 'Semaglutide+'],
    callout: {
      value: '2 treatments',
      label: 'Personalized Tirzepatide+ and Semaglutide+ weight loss protocols',
    },
  },
  {
    n: '02',
    title: 'Checkout &',
    titleItalic: 'verify identity',
    body: 'Complete your purchase for Tirzepatide+ or Semaglutide+, then take one quick step to verify your identity. It’s a standard part of the process — and it ensures your prescription is issued safely and securely.',
    image: {
      src: '/images/unique/unique-hiw-step-verify.webp',
      alt: 'Secure checkout and identity verification',
    },
    chips: ['Secure checkout', 'ID verification', 'Cancel anytime'],
  },
  {
    n: '03',
    title: 'Provider',
    titleItalic: 'reviews intake',
    body: 'A licensed U.S. provider reviews your medical history and questionnaire — typically within 24 hours. If they need clarification or have recommendations, they’ll follow up directly. No live appointment needed.',
    image: {
      src: '/hiw-step2.webp',
      alt: 'Licensed provider reviewing patient intake',
    },
    chips: ['Licensed providers', 'Typically within 24h', 'No office visit'],
  },
  {
    n: '04',
    title: 'Receive your',
    titleItalic: 'medication',
    body: 'Once approved, your Tirzepatide+ or Semaglutide+ prescription may be sent to a licensed partner pharmacy for fulfillment. If prescribed, medication ships in discreet packaging. Delivery timing is not guaranteed.',
    image: {
      src: '/hiw-step3.webp',
      alt: 'Medication delivered to your door',
    },
    chips: ['Licensed pharmacy', 'Shipping if prescribed', 'Discreet packaging'],
    callout: {
      value: 'If prescribed',
      label: 'Includes insulation to help medication stay fresh in transit.',
    },
  },
  {
    n: '05',
    title: 'Start your',
    titleItalic: 'treatment',
    body: 'Your care doesn’t stop at delivery. From day one, you’ll have access to your Patient Center, a step-by-step onboarding checklist for your GLP-1 protocol, and a care team you can reach anytime.',
    image: {
      src: '/images/unique/unique-hiw-step-start.webp',
      alt: 'Patient starting Tirzepatide or Semaglutide treatment with ongoing support',
    },
    chips: ['Patient Center', 'Onboarding checklist', 'Ongoing support'],
  },
]

export const howWhy = [
  {
    image: { src: '/images/why-1.jpg', alt: 'Quality sourcing verified' },
    title: 'Transparent & Trusted',
    body: 'From sourcing to delivery, we prioritize pharmaceutical-grade quality standards and clear information about how care works.',
  },
  {
    image: { src: '/images/why-2.jpg', alt: 'Personalized medical care' },
    title: 'Tailored Personalized Care',
    body: 'Plans are guided by licensed provider review of your health history and goals — not one-size-fits-all marketing promises.',
  },
  {
    image: { src: '/images/why-3.jpg', alt: 'Science-backed results' },
    title: 'Clinically Guided Care',
    body: 'Care is designed to support weight-management goals under clinical judgment. Individual outcomes vary and are not guaranteed.',
  },
] as const

export const howFaqs = [
  {
    q: 'How does VitalWellRx work?',
    a: 'Choose Tirzepatide+ or Semaglutide+, complete a short online intake, a licensed U.S. provider reviews it within 24 hours, and if approved, your medication is compounded and shipped directly to your door.',
  },
  {
    q: 'Is a prescription required?',
    a: 'Yes. Tirzepatide+ and Semaglutide+ are prescription-only. Our licensed providers review your medical history and, if appropriate, issue a prescription through our HIPAA-compliant platform.',
  },
  {
    q: 'What treatments do you offer?',
    a: 'How It Works covers our two personalized weight-loss protocols: Tirzepatide+ (dual GIP/GLP-1) and Semaglutide+ (GLP-1) — prescribed by licensed U.S. providers when clinically appropriate and fulfilled by licensed U.S. pharmacy partners.',
  },
  {
    q: 'How fast is shipping?',
    a: 'If approved and prescribed, a licensed pharmacy may ship your medication in discreet packaging. Temperature-controlled packaging may be used when appropriate. Timing is not guaranteed.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Plans are month-to-month with no long-term commitment. You can pause or cancel anytime from your member portal.',
  },
]
