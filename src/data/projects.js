// Single source of truth for all project content.
// Featured projects render in the Work section; every project gets a
// case-study route at /project/:slug. Copy is intentional — no placeholders.

const projects = [
  {
    slug: 'cyclepay',
    name: 'CyclePay',
    year: '2026',
    tags: ['IoT', 'Fintech', 'Nigeria'],
    descriptor: 'Pay-per-weight recycling, settled to a wallet in real time.',
    accent: '#36D399', // Eco Mint — project's own brand accent
    span: 'lg', // masonry weight: lg = tall feature tile
     link: 'https://www.figma.com/proto/hhQDjubazsztnA9Te65uyb/Cycle-pay?node-id=317-4251&starting-point-node-id=317%3A10972&show-proto-sidebar=1',
    summary:
      'A pay-per-weight recycling platform where smart IoT scales weigh material at the point of collection and settle value straight into an in-app wallet.',
    context: {
      role: 'Product Design · Design System',
      timeline: '2026',
      platform: 'iOS · Android',
      stack: 'React, Figma, IoT scale firmware bridge',
    },
    overview:
      "Recycling in Nigeria runs on trust and cash — collectors weigh on uncalibrated scales and pay whatever they decide. CyclePay puts a calibrated IoT scale between the material and the money, so the weight you see is the weight you're paid for. The number on the scale is the number in your wallet.",
    sections: [
      {
        kicker: 'The problem',
        title: 'Value disappears between the scale and the payout.',
        body: "Informal recyclers lose income to manual weighing, opaque rates, and cash that never quite adds up. There was no shared record either side could trust, and no way to track a driver mid-route. The whole exchange depended on goodwill.",
      },
      {
        kicker: 'The approach',
        title: 'Make the weight the contract.',
        body: 'The smart scale streams a signed weight reading into the app the instant material lands. Rate cards are public and per-material. The wallet credits before the driver leaves. I designed the live driver-tracking map and the wallet flow so a first-time user could complete a pickup without a single explanation.',
      },
      {
        kicker: 'The outcome',
        title: 'A receipt everyone agrees on.',
        body: 'Deep Forest, Eco Mint, and Warm Sand became a calm, legible system that works in bright sun and low-end Android alike. The interface earns trust by showing its work — weight, rate, total, settled — every single time.',
      },
    ],
    facts: [
      { k: 'Wallet', v: 'Real-time settlement' },
      { k: 'Hardware', v: 'Calibrated IoT scales' },
      { k: 'Tracking', v: 'Live driver routing' },
      { k: 'Palette', v: 'Deep Forest · Eco Mint · Warm Sand' },
    ],
  },
  {
    slug: 'swift-passkit',
    name: 'Swift PassKit',
    year: '2026',
    tags: ['Events', 'SaaS', 'Deployed'],
    descriptor: 'QR event passes for African SMEs — live at swift14.netlify.app.',
    accent: '#C8F542',
    span: 'md',
    link: 'https://swift14.netlify.app',
    summary:
      'A deployed React/Vite web app that generates digital, QR-based event passes for African SME events — ticketing without the enterprise overhead.',
    context: {
      role: 'Design · Frontend · Ship',
      timeline: '2026 — shipped',
      platform: 'Web · React + Vite',
      stack: 'React, Vite, QR generation, Netlify',
    },
    overview:
      'Small event organisers across Africa run on WhatsApp lists and printed tickets. Swift PassKit gives them a real pass system — generate a branded QR pass in seconds, send it, scan it at the door. No app install, no enterprise contract.',
    sections: [
      {
        kicker: 'The problem',
        title: 'Enterprise ticketing priced out the people who need it most.',
        body: 'SME organisers needed verifiable entry without per-ticket fees or a platform lock-in. The existing options were built for stadiums, not for a 200-person launch party in Lagos.',
      },
      {
        kicker: 'The approach',
        title: 'A pass you can make and send in under a minute.',
        body: 'I designed and built the full flow in React + Vite — pass creation, QR encoding, and a scan-ready format — then shipped it to production. The interface assumes a busy organiser on a phone, not a desk.',
      },
      {
        kicker: 'The outcome',
        title: 'Live, used, and self-serve.',
        body: 'Swift PassKit runs in production at swift14.netlify.app. It proves the smallest viable ticketing surface that still feels credible at the door.',
      },
    ],
    facts: [
      { k: 'Status', v: 'Deployed · live' },
      { k: 'Pass', v: 'QR-encoded' },
      { k: 'Stack', v: 'React + Vite' },
      { k: 'Host', v: 'Netlify' },
    ],
  },
  {
    slug: 'energyiq',
    name: 'EnergyIQ',
    year: '2026',
    tags: ['AI', 'Dashboard', 'SME', 'Energy'],
    descriptor: 'AI energy management for Nigerian SMEs running on mixed power.',
    accent: '#C8F542',
    span: 'md',
    link: 'https://energy-iq.hng14.com/',
    summary:
      'An AI-powered energy management dashboard built for Nigerian SMEs juggling grid, generator, and inverter power across an unpredictable day.',
    context: {
      role: 'Product Design · Data UX',
      timeline: '2026',
      platform: 'Responsive web dashboard',
      stack: 'React, charting, forecast models, Figma, next.js',
    },
    overview:
      'A Nigerian SME might switch between the grid, a diesel generator, and an inverter three times before lunch. EnergyIQ reads that mess and tells the owner the one thing they actually want to know: what is power costing me right now, and what should I switch to.',
    sections: [
      {
        kicker: 'The problem',
        title: 'Power data is everywhere; a decision is nowhere.',
        body: 'Owners have meters, fuel receipts, and gut feel — but no single view that turns all of it into a next action. The cost of a wrong call is real diesel money.',
      },
      {
        kicker: 'The approach',
        title: 'Lead with the recommendation, keep the proof one tap away.',
        body: 'I Collaborated with other designers to design a smart energy dashboard for Nigerian SMEs —EnergyIQ is an AI-powered energy management & optimization platform for Nigerian SMEs and African businesses.',
      },
      {
        kicker: 'The outcome',
        title: 'An analyst in the corner of the screen.',
        body: 'EnergyIQ reads like a quiet advisor, not a spreadsheet. The AI does the reconciliation; the owner just gets the call.',
      },
    ],
    facts: [
      { k: 'Engine', v: 'AI forecasting' },
      { k: 'Sources', v: 'Grid · Gen · Inverter' },
      { k: 'Output', v: 'Cost-per-kWh, live' },
      { k: 'For', v: 'Nigerian SMEs' },
    ],
  },
]

export const featuredSlugs = ['cyclepay', 'safewatch-ng', 'swift-passkit', 'energyiq']

export const getProject = (slug) => projects.find((p) => p.slug === slug)

export const getAdjacent = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug)
  if (i === -1) return { prev: null, next: null }
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  }
}

export default projects
