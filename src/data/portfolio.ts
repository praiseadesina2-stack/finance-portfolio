// Centralised copy — nothing invented beyond the supplied professional profile.

export const identity = {
  fullName: 'Omotola Sina Elijah',
  firstName: 'Omotola',
  lastName:  'Sina Elijah',
  monogram:  'OSE',
  title:     'Financial Analyst & Accounting Professional',
  email:     'oluwasinaayo309@gmail.com',
  phones:    ['+234 814 207 8768', '+234 810 624 3939'],
  location:  'Nigeria',
  photo:     'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
}

export const heroContent = {
  statusLabel: 'AVAILABLE FOR HIRE',
  tagline:     'Finance, Precision, Purpose.',
  headline:    'Welcome to the Finance World.',
  sub:         'I will be your guide.',
  body:        'Accounting graduate. Audit-proven. Market-informed. Ready to generate immediate value for your team.',
  cta:         'Hire Me',
  cv:          'Download CV',
}

export const stats = [
  { value: '100%', label: 'Audit Accuracy' },
  { value: '3-Way', label: 'Financial Models' },
  { value: 'ICAN', label: 'Trainee (In-View)' },
  { value: 'B.Tech', label: 'Accounting Graduate' },
]

export const aboutContent = {
  eyebrow: 'ABOUT',
  heading: 'Strategic. Precise. Results-driven.',
  body:    'Accounting graduate with hands-on audit, financial modelling, and compliance experience. I bring disciplined analysis and institutional integrity to every engagement.',
  pillars: [
    { title: 'Financial Modelling',    desc: '3-statement forecasts, DCF, scenario analysis.' },
    { title: 'Audit & Assurance',      desc: 'Zero-variance ledger audits and bank reconciliations.' },
    { title: 'Market Intelligence',    desc: 'FX, macro drivers, and risk-adjusted frameworks.' },
    { title: 'Regulatory Compliance',  desc: 'IFRS standards, KYC, and statutory documentation.' },
  ],
}

export interface Experience {
  id: string; index: string; title: string; org: string; location: string
  bullets: string[]
  note?: string
}

export const experiences: Experience[] = [
  {
    id: 'cross-border-payments',
    index: '01',
    title: 'Cross-Border Payments Merchant',
    org:   'Accrue Fintech',
    location: 'Remote',
    bullets: [
      'Supported cross-border payment operations and end-to-end transaction execution',
      'Gained deep understanding of international payment flows, settlement processes, and operational workflows',
      'Navigated operational challenges and opportunities within global cross-border financial transactions',
    ],
    note: 'Currently supporting the execution and fulfillment of cross-border payment transactions within a fast-paced fintech environment.',
  },
  {
    id: 'crypto-p2p-merchant',
    index: '02',
    title: 'Cryptocurrency P2P Merchant',
    org:   'Binance, Bybit & Gate.io',
    location: 'Remote',
    bullets: [
      'Executed peer-to-peer cryptocurrency trades across multiple exchange ecosystem protocols',
      'Monitored market pricing, exchange-rate movements, and liquidity to maintain competitive pricing strategies',
      'Managed transaction coordination, escrow release processes, and effective customer communication',
      'Applied strong risk awareness to mitigate fraud, chargeback risks, and transaction disputes within digital asset markets',
    ],
    note: 'Facilitated high-volume peer-to-peer cryptocurrency transactions across major digital asset exchanges.',
  },
  {
    id: 'audit-assistant',
    index: '03',
    title: 'Audit Assistant',
    org:   'Olusuyi Agbola & Co.',
    location: 'Abuja',
    bullets: [
      'Conducted financial audits and verified records for multiple client accounts',
      'Executed bank reconciliations with zero unreconciled variances',
      'Structured Excel-based tax computation workflows',
      'Maintained strict statutory ethics and client confidentiality',
    ],
  },
  {
    id: 'kyc-officer',
    index: '04',
    title: 'KYC Verification Officer',
    org:   'Pi Network (PI)',
    location: 'Remote',
    bullets: [
      'Managed AML-compliant identity verification for new account onboarding',
      'Audited KYC documentation and flagged discrepancies',
      'Maintained encrypted verification registries in a fast-paced fintech environment',
      'Protected sensitive customer data under strict security protocols',
    ],
    note: 'Compliance and verification role — not trading or investment management.',
  },
]

// Education — university degree only
export const education = {
  degree:      'Bachelor of Technology (B.Tech) — Accounting',
  institution: 'Ladoke Akintola University of Technology',
  period:      '2018 — 2024',
  courses: [
    'Financial Management & Accounting',
    'Financial Statement Analysis',
    'Advanced Excel & Sage',
    'Technology in Accounting Systems',
    'Applied Economics & Corporate Strategy',
  ],
}

export const credentials = [
  { name: 'Financial Modelling',                      status: 'CERTIFIED'  as const },
  { name: 'Customer Service & Relationship Management', status: 'CERTIFIED'  as const },
  { name: 'Project Management',                        status: 'CERTIFIED'  as const },
  { name: 'ICAN — Institute of Chartered Accountants', status: 'IN VIEW'    as const },
  { name: 'Data Analyst Certification',                status: 'IN VIEW'    as const },
  { name: 'Digital Marketing & Business Growth',       status: 'INFORMAL'   as const },
]

export type CredentialStatus = 'CERTIFIED' | 'IN VIEW' | 'INFORMAL'

export const skills = [
  { group: 'Analytical',   items: ['Analytical Thinking', 'Critical Thinking', 'Variance Analysis', 'Data Interpretation'] },
  { group: 'Financial',    items: ['Financial Modelling', 'Financial Reporting', 'Auditing & Assurance', 'Tax Computation'] },
  { group: 'Technical',    items: ['Microsoft Excel (Advanced)', 'Sage Accounting', 'Data Processing'] },
  { group: 'Professional', items: ['Executive Communication', 'Task Prioritisation', 'Team Collaboration', 'Confidentiality'] },
]

export const practiceAreas = [
  { label: 'Financial Modelling',   pct: 92 },
  { label: 'Financial Reporting',   pct: 90 },
  { label: 'Audit & Assurance',     pct: 80 },
  { label: 'Market Research',       pct: 78 },
  { label: 'Data Analysis',         pct: 70 },
]

export const interests = [
  'Financial Technology',
  'Market Research',
  'Business Strategy',
  'Finance Literature',
]

export const navLinks = [
  { label: 'About',         href: '#about' },
  { label: 'Experience',    href: '#experience' },
  { label: 'Analysis',      href: '#analysis' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Education',     href: '#education' },
  { label: 'Contact',       href: '#contact' },
]

export const tickerItems = [
  'ACCOUNTING', 'AUDITING', 'FINANCIAL MODELLING',
  'MARKET RESEARCH', 'INVESTMENT ANALYSIS', 'KYC COMPLIANCE', 'DATA ANALYSIS',
]

// Illustrative chart data — not real market performance
export const chartData = [
  { q: 'Q1', v: 42 }, { q: 'Q2', v: 58 }, { q: 'Q3', v: 50 },
  { q: 'Q4', v: 67 }, { q: 'Q5', v: 62 }, { q: 'Q6', v: 74 },
]
