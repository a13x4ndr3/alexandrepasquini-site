// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit text, numbers and links in this file — no need to touch
//  the components. Items marked TODO are waiting for real data.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Alexandre Pasquini',
  initials: 'AP',
  title: 'Operations & AI Transformation Leader',
  location: 'Orlando, FL',
  email: 'alexandrepasquini@gmail.com',
  linkedin: 'https://www.linkedin.com/in/a13x4ndr3',
  resume: '/assets/Alexandre-Pasquini-Resume.pdf',
  photo: '/assets/alexandre-pasquini.jpg',
  photoCaption: 'PMP · MSc in Artificial Intelligence (2027)',
  availability: 'Open to Senior Manager – Director roles · Orlando · US-wide · Global',
}

export const hero = {
  // Words wrapped in *asterisks* are highlighted in gold.
  headline: ['I scale operations —', 'and build the *AI systems*', 'that run them.'],
  lead:
    'Operations & AI Transformation Leader with 15+ years across Brazil, Portugal and the United States. Nine years as Country Manager at Autocab (an Uber company). Today I design and ship production AI — voice agents, CRMs and automations — that turn operational complexity into revenue.',
  trustedBy: ['Autocab · an Uber company', 'NCR Atleos', 'Minsait', 'Siemens Energy'],
}

export type Stat = { value: number | string; prefix?: string; suffix?: string; label: string }
export const stats: Stat[] = [
  { value: 15, suffix: '+', label: 'Years leading operations & client-facing teams' },
  { value: 9, label: 'Years as Country Manager for a national market' },
  { value: 50, prefix: '+', suffix: '%', label: 'Market share growth in under one year' },
  { value: 3, label: 'Countries operated in: Brazil, Portugal, USA' },
  { value: 3, label: 'Working languages: EN · ES · PT' },
  { value: 'PMP', label: 'Plus ITIL 4, COBIT 2019 & EXIN Agile' },
]

export const pillars = {
  eyebrow: 'What I bring',
  title: 'A rare combination: operator’s judgment, builder’s hands.',
  intro:
    'Most leaders can describe AI. Most engineers have never owned a P&L or a national market. I’ve done both — so the solutions I lead actually get adopted and move the numbers.',
  items: [
    {
      icon: 'chart',
      title: 'Operations at scale',
      text: 'Ran a national market end-to-end and led multi-team service operations for banking, retail and enterprise clients.',
      bullets: ['KPI & SLA governance', 'Service desk, logistics & field ops', 'Process design & scalability'],
    },
    {
      icon: 'chip',
      title: 'AI & automation, hands-on',
      text: 'I build what I recommend: production voice AI agents, a custom CRM, and workflow automation integrated with telephony, messaging and payments.',
      bullets: ['Voice AI & LLM agents', 'CRM & workflow automation', 'APIs, webhooks & cloud infra'],
    },
    {
      icon: 'people',
      title: 'Commercial growth',
      text: 'Opened markets, built strategic B2B partnerships and grew accounts by translating complex solutions into clear business value for executives.',
      bullets: ['Market expansion & BD', 'Enterprise account growth', 'Executive stakeholder management'],
    },
  ],
}

export type CaseStudy = {
  id: string
  company: string
  category: 'Leadership' | 'AI Systems' | 'Enterprise'
  title: string
  result: string
  resultLabel: string
  challenge: string
  action: string
  outcome: string
  tags: string[]
  todo?: string
}

export const cases: CaseStudy[] = [
  {
    id: 'autocab',
    company: 'Autocab · an Uber company · Brazil',
    category: 'Leadership',
    title: 'Turning around a national market',
    result: '+50%',
    resultLabel: 'market share in under 12 months',
    challenge: 'Grow Autocab’s position in Brazil — a large, competitive and operationally complex mobility market.',
    action:
      'As Country Manager, rebuilt the commercial and operational strategy, built strategic B2B partnerships, and worked with enterprise clients to define scope, feasibility and rollout plans — representing the company to executives and partners.',
    outcome:
      'Expanded market share by 50% in under one year and sustained revenue growth through long-term client retention across a 12+ year tenure that began in technical operations.',
    tags: ['P&L ownership', 'Market expansion', 'B2B partnerships', 'Enterprise rollouts'],
    todo: 'Add # of clients/fleets, cities, team size, revenue growth',
  },
  {
    id: 'axelis',
    company: 'Axelis AI · Founder',
    category: 'AI Systems',
    title: 'Voice AI agents that answer, qualify and book',
    result: '24/7',
    resultLabel: 'always-on AI voice agents',
    challenge: 'Service businesses lose revenue to missed calls and slow follow-up — but can’t afford a front desk around the clock.',
    action:
      'Designed and built a voice AI engine with conversational agents that handle inbound calls, qualify leads and schedule appointments — connected to real phone numbers through SIP trunking and synced to the CRM and calendar via webhooks.',
    outcome:
      'A live system running on self-managed cloud infrastructure, plus a multilingual (EN/PT/ES) website with an embedded “talk to the agent” experience.',
    tags: ['Voice AI', 'LLM agents', 'Twilio · SIP', 'GoHighLevel', 'Node.js', 'Vercel'],
    todo: 'Add calls handled, response time, booking rate, # clients',
  },
  {
    id: 'intelvora',
    company: 'Intelvora · AI Consulting',
    category: 'AI Systems',
    title: 'An AI appointment-setting CRM, built from scratch',
    result: 'End-to-end',
    resultLabel: 'lead → conversation → payment',
    challenge:
      'Law firms in Brazil needed to respond to leads instantly on WhatsApp and phone, and convert them into paid consultations without adding staff.',
    action:
      'Built a custom Node.js CRM integrating WhatsApp messaging, PIX payments and a squad of Portuguese-speaking voice agents connected to the calendar. Migrated the stack to a dedicated VPS with nginx and process management for reliability.',
    outcome:
      'A single platform that captures, qualifies, books and collects payment — plus a full go-to-market kit: ICP research, offers, ad scripts and a 10-email nurture sequence.',
    tags: ['Node.js CRM', 'WhatsApp API', 'Vapi · ElevenLabs', 'PIX payments', 'nginx · PM2'],
    todo: 'Add firms served, leads processed, conversion rate',
  },
  {
    id: 'siemens',
    company: 'Siemens Energy · Orlando',
    category: 'Enterprise',
    title: 'Bringing AI thinking into enterprise operations',
    result: 'Automation',
    resultLabel: 'for business operations workflows',
    challenge: 'Improve efficiency and cross-team visibility in business operations at a global energy technology company.',
    action:
      'Support process automation and project organization initiatives, restructure internal workflows, and partner with technical and business stakeholders to identify where AI and automation can remove manual work.',
    outcome:
      'Streamlined workflows and documentation that support delivery timelines — applying MSc in AI coursework directly to real enterprise processes.',
    tags: ['Process automation', 'Workflow design', 'Stakeholder alignment'],
    todo: 'Add shareable impact, e.g. hours saved, processes automated',
  },
]

export type Job = { when: string; role: string; where: string; promoted?: boolean; bullets: string[] }
export const experience: Job[] = [
  {
    when: 'Aug 2025 — Present',
    role: 'Business Professional Intern (CPT) — Process Automation',
    where: 'Siemens Energy · Orlando, FL',
    bullets: [
      'Support process automation and project organization initiatives across business operations.',
      'Structure and streamline internal workflows to improve efficiency and cross-team visibility.',
      'Partner with technical and business stakeholders to identify automation opportunities.',
    ],
  },
  {
    when: 'Ongoing', // TODO: add start date
    role: 'Founder — AI Automation Ventures',
    where: 'Axelis AI & Intelvora · US & Brazil',
    bullets: [
      'Design and ship voice AI agents, CRM and automation systems for service businesses and law firms.',
      'Own the full stack: product, infrastructure, integrations and go-to-market.',
    ],
  },
  {
    when: 'Jan 2025 — Aug 2025',
    role: 'Service / Operations Manager',
    where: 'Minsait · Lisbon, Portugal',
    bullets: [
      'Managed client-facing service operations driving customer satisfaction, contract performance and retention.',
      'Oversaw service desk, logistics, planning and technical support teams.',
      'Monitored KPIs and SLAs; partnered with commercial, technical and leadership teams to raise efficiency.',
    ],
  },
  {
    when: 'Mar 2023 — Dec 2024',
    role: 'Territory Manager',
    where: 'NCR Atleos · Lisbon, Portugal',
    bullets: [
      'Managed territory-level relationships across banking and retail with owners and decision-makers.',
      'Identified new business and expanded existing B2B accounts.',
      'Coordinated installations, maintenance and training as the single point of contact between clients and internal teams.',
    ],
  },
  {
    when: 'Jan 2014 — Feb 2023',
    role: 'Country Manager',
    promoted: true,
    where: 'Autocab, an Uber company · São Paulo, Brazil',
    bullets: [
      'Led national market operations and business growth initiatives.',
      'Expanded market share by 50% in under one year through improved commercial and operational strategy.',
      'Built strategic B2B partnerships and represented the company with executives and enterprise customers.',
    ],
  },
  {
    when: 'Sep 2010 — Dec 2013',
    role: 'Technical Operations Manager',
    where: 'Autocab, an Uber company · São Paulo, Brazil',
    bullets: [
      'Led client onboarding, technical deployments and service support.',
      'Documented workflows that improved service consistency and scalability.',
    ],
  },
]

export const skills = [
  { title: 'Leadership & Operations', items: ['P&L & market ownership', 'KPI / SLA management', 'Service delivery', 'Team leadership', 'Process optimization', 'Cross-functional delivery'] },
  { title: 'AI & Automation', items: ['LLM & voice agents', 'Vapi · ElevenLabs', 'Twilio · SIP trunks', 'GoHighLevel', 'Webhooks & APIs', 'Machine learning', 'NLP'] },
  { title: 'Engineering & Cloud', items: ['Node.js', 'TypeScript / JavaScript', 'React', 'Python', 'Linux VPS', 'nginx · PM2', 'Vercel', 'Git / GitHub'] },
  { title: 'Commercial', items: ['Business development', 'B2B & enterprise sales', 'Account growth', 'Negotiation', 'CRM & pipeline', 'Go-to-market'] },
]

export const book = {
  title: 'The AI Revenue Engine',
  text: 'A practical business book on using AI to capture, qualify and convert demand — written from the field, based on the systems I design and deploy for real businesses.',
  link: '', // TODO: purchase link (Amazon etc.). Empty = button goes to contact.
  cover: '', // TODO: e.g. '/assets/book-cover.jpg'. Empty = designed placeholder cover.
}

export const education = [
  { degree: 'MSc in Artificial Intelligence', school: 'Atlantis University · Miami, FL · Expected July 2027' },
  { degree: 'Bachelor’s in Information Systems', school: 'Anhanguera University · São Paulo, Brazil' },
]
export const certifications = ['PMP®', 'PMBOK', 'ITIL 4', 'COBIT 2019', 'EXIN Agile Business Professional', 'Security Awareness']
export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Spanish', level: 'Fluent' },
  { name: 'Portuguese', level: 'Native' },
]

// TODO: paste 2–3 LinkedIn recommendations. The section appears automatically when this list is not empty.
export const testimonials: { quote: string; name: string; role: string }[] = []

export const contact = {
  eyebrow: 'Let’s talk',
  title: 'Need someone who can run the operation *and* build the AI behind it?',
  text: 'I’m open to Senior Manager and Director roles in Operations, AI Transformation and Program Management — in Orlando, remote across the US, or internationally.',
}
