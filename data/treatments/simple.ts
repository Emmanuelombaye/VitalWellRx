import type { FaqItem, IconName } from '@/types'

export interface SimpleTreatmentConfig {
  hero: {
    images: string[]
    alt: string
    badgeIcon: IconName
    badge: string
    title: string
    titleHighlight: string
    titleSuffix?: string
    subtitle: string
    ctaLabel: string
  }
  content: {
    eyebrow: string
    heading: string
    body: string
    bullets: string[]
    image: string
    imageAlt: string
    imageSizes?: string
  }
  pricing: {
    eyebrow?: string
    heading: string
    price: string
    description: string
    ctaLabel: string
  }
  faqs: FaqItem[]
}

export const cjcIpamorelin: SimpleTreatmentConfig = {
  hero: {
    images: ['/gen_peptides2.webp', '/category_peptides.webp'],
    alt: 'CJC-1295 Hero',
    badgeIcon: 'zap',
    badge: 'Pituitary GH Secretagogue',
    title: 'CJC-1295 &',
    titleHighlight: 'Ipamorelin Blend',
    titleSuffix: '.',
    subtitle:
      'Triggers pulsatile nocturnal growth hormone release to accelerate fat oxidation, enhance deep stage-4 sleep, and stimulate collagen.',
    ctaLabel: 'Check Protocol Eligibility',
  },
  content: {
    eyebrow: 'Pulsatile Signaling',
    heading: 'Synergistic GHRH & Ghrelin Receptor Binding',
    body: 'CJC-1295 acts as a Growth Hormone Releasing Hormone (GHRH) analogue, while Ipamorelin targets ghrelin receptors. Together, they produce a clean GH pulse without spiking cortisol or appetite.',
    bullets: [
      'Enhances deep restorative stage-4 REM sleep',
      'Accelerates fat burning & lean muscle repair',
      'Promotes skin extracellular matrix elasticity',
      'Maintains natural endocrine pituitary feedback',
    ],
    image: '/gen_peptides2.webp',
    imageAlt: 'CJC-1295 Compounded Vial',
  },
  pricing: {
    heading: 'CJC-1295 / Ipamorelin Secretagogue Plan',
    price: '$329',
    description: 'Compounded 503A cold-shipped peptide vial supply + injection kits.',
    ctaLabel: 'Start Assessment',
  },
  faqs: [
    {
      q: 'How does CJC-1295 / Ipamorelin differ from synthetic hGH?',
      a: 'Synthetic hGH introduces exogenous growth hormone which can shut down your pituitary gland. CJC-1295 and Ipamorelin are secretagogues that stimulate your pituitary to release pulses of your OWN growth hormone natively.',
    },
    {
      q: 'When is the best time to administer CJC-1295 / Ipamorelin?',
      a: 'Administer subcutaneously before bed at least 90 minutes after your last meal. This aligns with your natural nocturnal REM growth hormone pulse.',
    },
  ],
}

export const ghkCu: SimpleTreatmentConfig = {
  hero: {
    images: ['/gen_peptides1.webp', '/supplement_bottle.webp'],
    alt: 'GHK-Cu Hero',
    badgeIcon: 'sparkles',
    badge: 'Dermal & Cellular Matrix Remodeling',
    title: 'GHK-Cu',
    titleHighlight: 'Copper Peptide',
    titleSuffix: '.',
    subtitle:
      'Modulates over 4,000 human genes to promote skin collagen synthesis, elastin repair, and hair follicle density.',
    ctaLabel: 'Check Protocol Eligibility',
  },
  content: {
    eyebrow: 'Gene Expression',
    heading: 'Dermal Matrix Rejuvenation',
    body: 'GHK-Cu up-regulates genes responsible for tissue repair, decorin synthesis, and anti-inflammatory pathways while down-regulating aging markers.',
    bullets: [
      'Stimulates Type I & III dermal collagen formation',
      'Increases hair follicle size and scalp vascularization',
      'Accelerates skin wound healing and scar remodeling',
      'Potent antioxidant & anti-inflammatory activity',
    ],
    image: '/gen_peptides1.webp',
    imageAlt: 'GHK-Cu Copper Peptide',
  },
  pricing: {
    heading: 'GHK-Cu Protocol Plan',
    price: '$195',
    description: 'Compounded GHK-Cu copper peptide formulation (serum or injection kit).',
    ctaLabel: 'Start Assessment',
  },
  faqs: [
    {
      q: 'What is GHK-Cu Copper Peptide?',
      a: 'GHK-Cu is a naturally occurring tripeptide (Glycyl-L-histidyl-L-lysine copper complex) that declines with age. It modulates gene expression to stimulate collagen, elastin, and hair follicle vascularization.',
    },
    {
      q: 'How is GHK-Cu administered?',
      a: 'VitalWellRx offers GHK-Cu as a targeted topical serum, sublingual solution, or subcutaneous micro-injection depending on your primary goal (dermal rejuvenation vs. systemic healing).',
    },
  ],
}

export const odtTablets: SimpleTreatmentConfig = {
  hero: {
    images: ['/supplement_bottle.webp', '/gen_weight2.webp'],
    alt: 'Sublingual ODT Hero',
    badgeIcon: 'pill',
    badge: '100% Needle-Free Sublingual Delivery',
    title: 'Sublingual',
    titleHighlight: 'GLP-1 & Tirzepatide',
    titleSuffix: ' ODT Tablets.',
    subtitle:
      'Daily dissolving sublingual tablets engineered for painless, needle-free weight loss and continuous appetite control.',
    ctaLabel: 'Check ODT Eligibility',
  },
  content: {
    eyebrow: 'Painless Oral Delivery',
    heading: 'Sublingual Bio-Absorption Technology',
    body: 'Formulated with SNAC mucosal absorption enhancers, our ODT tablets enter systemic capillary circulation directly under the tongue, bypassing digestive enzymatic degradation.',
    bullets: [
      'Dissolves under tongue in 90 seconds',
      'Zero needles, syringes, or refrigeration required',
      'Steady daily therapeutic blood plasma concentration',
      'Compounded in FDA-regulated 503A U.S. pharmacies',
    ],
    image: '/supplement_bottle.webp',
    imageAlt: 'ODT Sublingual Bottle Packaging',
  },
  pricing: {
    eyebrow: 'Painless Plan',
    heading: 'ODT Oral Dissolving Protocol',
    price: '$310',
    description: 'Monthly supply of 30 daily sublingual dissolving tablets shipped to your door.',
    ctaLabel: 'Start ODT Intake',
  },
  faqs: [
    {
      q: 'How do Sublingual Oral Dissolving Tablets (ODT) work?',
      a: 'ODT formulations are placed under the tongue where they dissolve in under 90 seconds. The active peptide is absorbed directly through the sublingual vascular mucosa into the bloodstream, bypassing stomach acid breakdown.',
    },
    {
      q: 'Is ODT Tirzepatide as effective as weekly injections?',
      a: 'Clinical absorption studies show that sublingual mucosal delivery with specialized permeability enhancers achieves steady daily plasma drug levels comparable to weekly injections, making it ideal for needle-averse patients.',
    },
    {
      q: 'How should I take my daily ODT dose?',
      a: 'Place one tablet under your tongue first thing in the morning on an empty stomach. Allow it to dissolve completely for 90 seconds without swallowing or drinking water for 15 minutes afterward.',
    },
  ],
}

export const mensHairloss: SimpleTreatmentConfig = {
  hero: {
    images: ['/gen_mens2.webp', '/gen_mens1.webp'],
    alt: "Men's Hair Loss Protocol Hero",
    badgeIcon: 'zap',
    badge: 'DHT Blocker & Follicle Regrowth Complex',
    title: "Men's Advanced",
    titleHighlight: 'Hair Loss Protocol',
    titleSuffix: '.',
    subtitle:
      'Halt male pattern baldness and regrow thick hair density with doctor-compounded Oral Finasteride, Minoxidil, and GHK-Cu copper peptides.',
    ctaLabel: 'Check Hair Loss Eligibility',
  },
  content: {
    eyebrow: 'Follicle Vascularization',
    heading: 'Dual-Action DHT Suppression',
    body: 'Male pattern androgenic alopecia is triggered by scalp DHT accumulation. Our dual oral capsule suppresses follicle DHT by up to 70% while boosting blood micro-circulation.',
    bullets: [
      'Blocks 5-alpha reductase & scalp DHT binding',
      'Increases follicle vascularization & shaft thickness',
      'Formulated in convenient daily oral 2-in-1 capsules',
      'Board-certified dermatologist telehealth oversight',
    ],
    image: '/gen_mens2.webp',
    imageAlt: "Men's Hair Loss Restoration",
    imageSizes: '(max-width: 768px) 100vw, 50vw',
  },
  pricing: {
    eyebrow: 'Complete Regrowth Kit',
    heading: 'Oral Finasteride + Minoxidil Protocol',
    price: '$89',
    description:
      'Monthly supply of 2-in-1 oral dissolving capsules + GHK-Cu scalp spray shipped directly to your door.',
    ctaLabel: 'Start Hair Assessment',
  },
  faqs: [
    {
      q: 'How does the Oral Finasteride + Minoxidil dual complex stop hair loss?',
      a: 'Finasteride blocks 5-alpha reductase, reducing DHT (dihydrotestosterone) levels at the hair follicle by up to 70%. Minoxidil widens follicle blood vessels, delivering oxygen and nutrients to reverse miniaturization and trigger thick regrowth.',
    },
    {
      q: 'Is topical GHK-Cu copper peptide combined with the oral treatment?',
      a: 'Yes, our prescription hair restoration protocol pairs daily oral dual-action capsules with topical GHK-Cu copper peptide scalp spray to stimulate hair follicle stem cell proliferation and scalp extracellular matrix density.',
    },
  ],
}

export const fertilityMens: SimpleTreatmentConfig = {
  hero: {
    images: ['/gen_mens2.webp', '/about_hero.webp'],
    alt: 'Male Fertility Hero',
    badgeIcon: 'sparkles',
    badge: 'Pituitary & Testicular Support',
    title: 'Male Fertility &',
    titleHighlight: 'HCG Protocols',
    titleSuffix: '.',
    subtitle:
      'Protect endogenous sperm motility, testicular size, and natural hormone output alongside TRT with doctor-prescribed HCG and Enclomiphene.',
    ctaLabel: 'Check Fertility Protocol',
  },
  content: {
    eyebrow: 'Endocrine Protection',
    heading: 'Preserving Endogenous Synthesis',
    body: 'Exogenous testosterone suppresses the hypothalamic-pituitary-gonadal (HPG) axis. Adding HCG or Enclomiphene keeps testicular tissue active and fertile.',
    bullets: [
      'Preserves natural testicular size & firmness',
      'Supports sperm count and reproductive fertility metrics',
      'Prevents intratesticular testosterone collapse',
      'Supervised by male endocrinology specialists',
    ],
    image: '/gen_mens2.webp',
    imageAlt: 'Male Fertility Consultation',
  },
  pricing: {
    heading: 'HCG & Enclomiphene Plan',
    price: '$219',
    description: 'Comprehensive fertility protection protocol prescribed by male health MDs.',
    ctaLabel: 'Start Assessment',
  },
  faqs: [
    {
      q: 'Why combine HCG or Enclomiphene with TRT?',
      a: 'TRT suppresses natural LH (Luteinizing Hormone) signals from the pituitary gland. HCG and Enclomiphene mimic LH to keep Leydig cells active, preserving testicular volume, sperm production, and natural testosterone synthesis.',
    },
    {
      q: 'Is Enclomiphene taken orally or injected?',
      a: 'Enclomiphene citrate is a selective estrogen receptor modulator (SERM) taken daily as a convenient oral capsule.',
    },
  ],
}
