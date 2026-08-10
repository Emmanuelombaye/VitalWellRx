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
      src: '/hiw-step1.png',
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
      src: '/images/how-step2.jpg',
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
      src: '/hiw-step2.png',
      alt: 'Licensed provider reviewing patient intake',
    },
    chips: ['Licensed providers', 'Review within 24h', 'No office visit'],
  },
  {
    n: '04',
    title: 'Receive your',
    titleItalic: 'medication',
    body: 'Once approved, your Tirzepatide+ or Semaglutide+ prescription is sent to our licensed partner pharmacy and fulfilled to your exact plan. Medication ships via expedited delivery — securely packaged and delivered to your door.',
    image: {
      src: '/hiw-step3.png',
      alt: 'Medication delivered to your door',
    },
    chips: ['Licensed pharmacy', 'Expedited shipping', 'Discreet packaging'],
    callout: {
      value: 'Free expedited',
      label: 'Includes insulation to help medication stay fresh in transit.',
    },
  },
  {
    n: '05',
    title: 'Start your',
    titleItalic: 'treatment',
    body: 'Your care doesn’t stop at delivery. From day one, you’ll have access to your Patient Center, a step-by-step onboarding checklist for your GLP-1 protocol, and a care team you can reach anytime.',
    image: {
      src: '/images/how-step5.jpg',
      alt: 'Patient starting Tirzepatide or Semaglutide treatment with ongoing support',
    },
    chips: ['Patient Center', 'Onboarding checklist', 'Ongoing support'],
  },
]

export const howWhy = [
  {
    image: { src: '/images/why-1.jpg', alt: 'Quality sourcing verified' },
    title: 'Transparent & Trusted',
    body: 'From ingredient sourcing to doorstep delivery, we prioritize pharmaceutical-grade quality and complete transparency.',
  },
  {
    image: { src: '/images/why-2.jpg', alt: 'Personalized medical care' },
    title: 'Tailored Personalized Care',
    body: 'We create tailored plans based on your health goals, ensuring the best path to your success.',
  },
  {
    image: { src: '/images/why-3.jpg', alt: 'Science-backed results' },
    title: 'Science-backed Results',
    body: 'Clinically guided care designed to support long-term health, performance, and overall wellbeing.',
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
    a: 'How It Works covers our two personalized weight-loss protocols: Tirzepatide+ (dual GIP/GLP-1) and Semaglutide+ (GLP-1) — prescribed by licensed U.S. providers and fulfilled by FDA-regulated pharmacies.',
  },
  {
    q: 'How fast is shipping?',
    a: 'Once approved and prescribed, your medication ships with free expedited delivery in discreet, temperature-controlled packaging.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Plans are month-to-month with no long-term commitment. You can pause or cancel anytime from your member portal.',
  },
]
