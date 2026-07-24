import type { GlobalFaqItem } from '@/types'

export const globalFaqs: GlobalFaqItem[] = [
  {
    id: 'doctor-intake',
    category: 'intake',
    question: 'How does the 1-on-1 doctor consultation work?',
    answer:
      'After completing your online medical intake, a U.S. board-certified physician reviews your health history, symptoms, and diagnostic biomarker labs. If medically appropriate, your prescription protocol is written and transmitted directly to our partner 503A compounding pharmacy.',
  },
  {
    id: 'insurance-requirement',
    category: 'pricing',
    question: 'Do I need health insurance to use VitalWellRx?',
    answer:
      'No health insurance is needed. All VitalWellRx prescription protocols are flat-rate transparent pricing ($89–$349/month) that includes your physician consultation, compounded medication, supplies, and overnight shipping with zero hidden fees.',
  },
  {
    id: '503a-pharmacy-definition',
    category: 'pharmacy',
    question: 'What is a 503A Compounding Pharmacy?',
    answer:
      '503A compounding pharmacies are state-licensed facilities governed by strict USP <795> and USP <797> sterile preparation standards. They prepare customized, bioidentical, and high-purity prescription formulations specifically tailored for individual patient prescriptions.',
  },
  {
    id: 'cold-pack-shipping',
    category: 'shipping',
    question: 'How are temperature-sensitive medications shipped to my door?',
    answer:
      'All peptide vials, GLP-1 injectables, and bioidentical hormones are packed inside insulated, temperature-monitored cold-packs and shipped via express overnight courier to preserve complete cold-chain stability from pharmacy lab to your doorstep.',
  },
  {
    id: 'sublingual-odt-absorption',
    category: 'pharmacy',
    question: 'How do Sublingual GLP-1 ODT tablets work without injections?',
    answer:
      'Sublingual Oral Dissolving Tablets (ODT) dissolve under the tongue within 90 seconds. Formulated with advanced mucosal permeability enhancers, the active molecules absorb directly through sublingual capillary tissue into systemic circulation, bypassing gastrointestinal degradation.',
  },
  {
    id: 'lab-work-requirement',
    category: 'intake',
    question: 'What if I do not have recent blood lab work for TRT or BHRT?',
    answer:
      'If your protocol requires diagnostic biomarker baseline labs (such as Testosterone, Estradiol, or CMP), our physician team immediately issues a convenient local LabCorp or Quest Diagnostics lab requisition order, or you can upload existing labs taken within the last 6 months.',
  },
  {
    id: 'subscription-cancellation',
    category: 'pricing',
    question: 'Are there any contract lock-ins or cancellation penalties?',
    answer:
      'None at all. You have full control over your care. You can adjust your dosage protocol, pause refills, or cancel your month-to-month plan anytime directly inside your patient portal with a single click.',
  },
  {
    id: 'shipping-locations',
    category: 'shipping',
    question: 'Which U.S. states do you ship prescription protocols to?',
    answer:
      'VitalWellRx partners with licensed 503A compounding pharmacies to deliver prescription protocols to patients across all 50 U.S. states with discrete, climate-controlled packaging.',
  },
]
