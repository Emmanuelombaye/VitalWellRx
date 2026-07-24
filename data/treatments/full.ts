import type { FaqItem, StatItem } from '@/types'

export const weightLossFaqs: FaqItem[] = [
  {
    q: 'How does Tirzepatide differ from standard GLP-1 medications like Semaglutide?',
    a: 'Tirzepatide is a dual GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 (glucagon-like peptide-1) receptor agonist. By targeting two distinct metabolic pathways instead of one, clinical trials have shown up to 22.5% average body weight loss compared to 15% with single-action GLP-1s.',
  },
  {
    q: 'Do I need insurance to participate in this medical weight loss program?',
    a: 'No. VitalWellRx operates on a flat-rate cash model. Your monthly subscription covers your physician consultation, prescription compounding, medication supply, and free discreet shipping directly to your door.',
  },
  {
    q: 'Are the medications compounded at accredited U.S. pharmacies?',
    a: 'Yes, 100%. All VitalWellRx medications are compounded at FDA-regulated 503A/503B U.S. licensed pharmacies adhering to strict cGMP sterility and potency standards.',
  },
  {
    q: 'How quickly can I expect to see results?',
    a: 'Most patients notice appetite suppression within 24 to 48 hours of their first dose, with measurable weight loss typically starting in Weeks 1–2 as your dosage is safely titrated by your physician.',
  },
]

export const weightLossStats: StatItem[] = [
  { val: 'up to 22.5%', label: 'Average Body Weight Loss' },
  { val: '24-48 hrs', label: 'Appetite Control Onset' },
  { val: '100%', label: 'Physician-Guided Care' },
  { val: '50 States', label: 'Licensed US Coverage' },
]

export const weightLossIncludes = [
  'Compounded Tirzepatide or GLP-1 medication (monthly supply)',
  'Initial medical review & 1-on-1 provider intake consultation',
  'All injection supplies (needles, alcohol prep pads) or ODT tablets',
  'Ongoing dose adjustments & unlimited messaging via Member Portal',
  'Free overnight temperature-controlled discreet delivery',
]

export const mensHormoneFaqs: FaqItem[] = [
  {
    q: 'How do I know if my testosterone levels are low?',
    a: 'Common indicators include persistent brain fog, chronic afternoon fatigue, difficulty retaining lean muscle despite workouts, increased belly fat, decreased libido, and mood irritability. Our comprehensive blood panel measures total and free testosterone, estradiol, SHBG, and thyroid function.',
  },
  {
    q: 'How does VitalWellRx TRT differ from standard clinic visits?',
    a: 'We eliminate the hassle of weekly clinic visits. Your physician consultation is conducted online, your blood panel is reviewed remotely, and your bioidentical testosterone formulation is delivered directly to your home.',
  },
  {
    q: 'Will TRT suppress my natural testosterone production?',
    a: 'Exogenous testosterone can suppress natural output. Where appropriate, our providers include HCG or Enclomiphene in your customized protocol to maintain testicular size, natural hormone synthesis, and fertility.',
  },
  {
    q: 'What is included in the $199/month program?',
    a: 'Your monthly subscription includes your custom compounded testosterone (cypionate or enanthate), estrogen blocker (Anastrozole if needed), all medical supplies, quarterly lab panel analysis, physician consultations, and free home delivery.',
  },
]

export const mensHormoneStats: StatItem[] = [
  { val: '3x', label: 'Improved Daily Energy & Focus' },
  { val: '100%', label: 'Bioidentical Testosterone' },
  { val: 'Quarterly', label: 'Full Lab Biomarker Monitoring' },
  { val: '$199/mo', label: 'Flat-Rate Home Delivery' },
]

export const mensHormoneIncludes = [
  'Bioidentical Testosterone formulation (monthly supply)',
  'Estrogen blocker (Anastrozole) & fertility support if indicated',
  'Comprehensive blood panel review with hormone specialist MD',
  'All sterile syringes, alcohol pads, and administration supplies',
  'Free discreet shipping directly to your home address',
]

export const womensHormoneFaqs: FaqItem[] = [
  {
    q: 'What is Bioidentical Hormone Replacement Therapy (BHRT)?',
    a: 'Bioidentical hormones have an exact molecular structure matching the estrogen, progesterone, and DHEA naturally produced by the female body. This precise match allows for superior cell receptor binding and fewer side effects compared to synthetic hormones.',
  },
  {
    q: 'Will BHRT help with hot flashes, night sweats, and sleep disturbances?',
    a: 'Yes. Restoring balanced Estradiol and Micronized Progesterone levels directly targets vasomotor symptoms like hot flashes and night sweats, while progesterone promotes GABAergic brain activity for deep, restorative REM sleep.',
  },
  {
    q: 'How does the initial consultation and blood work process work?',
    a: 'After completing your online medical intake, you will receive a lab order to test your complete hormone panel. A VitalWellRx women’s health physician will review your lab values during a 1-on-1 consultation to customize your dosage.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No. Our BHRT program operates on a month-to-month membership ($189/mo). You can adjust your prescription or cancel your subscription at any time.',
  },
]

export const womensHormoneStats: StatItem[] = [
  { val: '100%', label: 'Bioidentical BHRT Formulations' },
  { val: '88%', label: 'Report Improved Sleep Quality' },
  { val: 'Dedicated', label: 'Female Health Physician Care' },
  { val: '$189/mo', label: 'All-Inclusive Home Delivery' },
]

export const womensHormoneIncludes = [
  'Bioidentical Estradiol & Micronized Progesterone formulations',
  'DHEA & thyroid hormone medical evaluation',
  'Comprehensive blood panel review with female health MD',
  'Ongoing dose calibration & unlimited messaging via Member Portal',
  'Free discreet shipping directly to your home address',
]

export const peptideTherapyFaqs: FaqItem[] = [
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

export const peptideTherapyStats: StatItem[] = [
  { val: '503A', label: 'US Licensed Pharmacy Compounded' },
  { val: '2x-3x', label: 'Faster Tendon & Joint Recovery' },
  { val: 'Pulsatile', label: 'Natural GH Pituitary Release' },
  { val: 'Cold-Chain', label: 'Insulated Expedited Shipping' },
]

export const peptideTherapyIncludes = [
  'Prescription BPC-157 or CJC-1295 / Ipamorelin formulation',
  'Comprehensive medical intake & physician protocol design',
  'Compounded at accredited U.S. 503A licensed pharmacies',
  'All sterile supplies & administration guidance included',
  'Free insulated cold-chain expedited shipping',
]
