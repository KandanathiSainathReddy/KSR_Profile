/** Reusable profile copy. Swap this module to retarget (Razorpay, FDE, etc.). */
const liveDemo = "https://main.d3mk2czzbnq9or.amplifyapp.com/";
const githubRepo = "https://github.com/KandanathiSainathReddy/agent-maker-checker";

export const site = {
  meta: {
    title: "Kandanathi Sainath Reddy — AI Engineer",
    description:
      "Cost-aware serverless systems that scale — spend-control architecture, then AI in them. ~5.5 years. Python and AWS. Bengaluru.",
  },

  brand: {
    initials: "KSR",
    name: "Kandanathi Sainath Reddy",
    pill: "Bengaluru",
  },

  nav: [
    { href: "#explore", label: "Explore" },
    { href: "notes.html", label: "Projects" },
    { href: "#work", label: "Work" },
    { href: "#approach", label: "Approach" },
    { href: "#certs", label: "Certs" },
    { href: "#contact", label: "Contact" },
  ],

  headerCta: {
    href: liveDemo,
    label: "Open live demo →",
    external: true,
  },

  kicker: "BENGALURU — AI ENGINEER  ·  SERVERLESS  ·  SPEND-CONTROL",

  headline: [
    "Kandanathi Sainath Reddy",
    "Cost-aware serverless systems that scale.",
  ],

  lede: "I design spend-control architecture first — then put AI into the system so agents can act without unbounded spend. Serverless on AWS: you pay for events, not idle. ~5.5 years. Python. Customer-facing at Telus and Ellucian. Claude Code and Cursor daily. Featured work is a live maker-checker in front of Razorpay’s open-source MCP.",

  heroActions: [
    { href: liveDemo, label: "Open maker-checker →", kind: "solid", external: true },
    { href: githubRepo, label: "GitHub ↗", kind: "text", external: true },
  ],

  explore: {
    heading: "What you can open",
    lede: "Live demos and source first. Employment work is real production — those systems are not public apps, so there is no demo URL to pad this list with.",
    items: [
      {
        title: "Agent maker-checker",
        kind: "Live",
        live: true,
        blurb: "Spend-control plane in front of Razorpay MCP. Click through the Console and Policy studio. Test-mode only — no real money.",
        links: [
          { href: liveDemo, label: "Live demo →" },
          { href: githubRepo, label: "GitHub ↗" },
        ],
      },
      {
        title: "This work page",
        kind: "Live",
        live: true,
        blurb: "This site — the public index. Projects (what I built, tools, two walkthroughs first) is a separate page. Hosted on Amplify Gen 2.",
        links: [
          { href: "https://main.d2ak3mw598e3nx.amplifyapp.com/", label: "Live page →" },
          { href: "https://main.d2ak3mw598e3nx.amplifyapp.com/notes.html", label: "Projects →" },
          { href: "https://github.com/KandanathiSainathReddy/KSR_Profile", label: "GitHub ↗" },
        ],
      },
      {
        title: "Multi-cloud platform",
        kind: "In progress",
        live: false,
        blurb: "Normalize AWS / GCP / Azure spend, forecast, remediations. MCP + RAG. Solo, in progress, no public URL. Deep dive on Projects.",
        links: [{ href: "notes.html#multicloud", label: "Deep dive →" }],
      },
      {
        title: "Telus — three separate deliveries",
        kind: "Employment",
        live: false,
        blurb:
          "Not one blob. Recruited to build one serverless pipeline (~3 months, $1.2M/year). Later more cost-saving changes. This year: Pico robotics — APKs, video pipeline, websites — plus one client visit in the Philippines. n8n battle cards. Deep dives on Projects.",
        links: [
          { href: "notes.html#pico", label: "Pico robotics →" },
          { href: "notes.html#video-pipeline", label: "Video pipeline →" },
          { href: "notes.html#n8n", label: "n8n →" },
        ],
      },
      {
        title: "Ellucian",
        kind: "Employment",
        live: false,
        blurb: "200+ higher-ed tenants, EC2 → Kubernetes, SAML, internal tools. Customer delivery — no public deploy.",
        links: [],
      },
    ],
  },

  stats: [
    { value: "~5.5 yrs", label: "Python-first engineering, CKA" },
    { value: "$1.2M/yr", label: "Cloud savings — one Telus pipeline" },
    { value: "93%", label: "15-person process → one operator" },
    { value: "200+", label: "Higher-ed clients at Ellucian" },
  ],

  featured: {
    kicker: "FEATURED — LIVE",
    title: "Agent maker-checker",
    subtitle: "Spend-control architecture for Razorpay MCP payment tools",
    blurb:
      "A spend-control plane in front of Razorpay MCP: each Razorpay payment-tool call is intercepted and evaluated against payments-semantic policies before execution — allow / deny / escalate-to-human. Caps, velocity / structuring, payee allowlist, refund-to-capture, prompt-injection provenance. Hash-chained audit and a HITL queue. Shipped serverless: container Lambdas + DynamoDB on Amplify Gen 2, idle near zero. Console is a cached policy testbed by default; live MCP is opt-in. Test-mode only — no real money.",
    flow: ["Nova agent", "Enforcement proxy", "Razorpay MCP", "Test-mode APIs"],
    policies: [
      "Per-call rupee cap",
      "Velocity / structuring",
      "Payee allowlist",
      "Refund-to-capture ratio",
      "Prompt-injection provenance",
    ],
    note: "Deterministic YAML policies — spend-control is architecture, not a prompt. Nova drafts guardrails; a human Applies. Nova never evaluates a payment. Console defaults to cached scenarios so you can press attacks without minting rzp.io test links; live MCP is a toggle, not the public default. Test-mode only — no real money.",
    stack: "Python · FastAPI · Amazon Nova · Razorpay MCP · Amplify Gen 2 · container Lambdas · DynamoDB · Vite",
    links: [
      { href: liveDemo, label: "Live demo →", kind: "solid" },
      { href: githubRepo, label: "GitHub ↗", kind: "text" },
      { href: "notes.html#maker-checker", label: "Deep dive →", kind: "text" },
    ],
  },

  work: [
    {
      title: "Multi-cloud platform (personal, in progress)",
      pill: "Personal",
      live: false,
      blurb:
        "End-to-end cost intelligence and agent control across AWS, GCP, and Azure. FinOps: normalize spend, forecast, recommend remediations. MCP: expose cloud operations as callable tools with validation, rate limits, and tool-call observability — a runtime policy layer so agents cannot take unconstrained cloud actions. RAG: code-comprehension knowledge base over repositories. Built solo with Claude Code and Cursor. Not a second employer — a skills project I run myself.",
      stack: "React · Python · serverless · Terraform · MCP · RAG · AWS / GCP / Azure",
      links: [],
    },
    {
      title: "Telus International — Cloud Solutions Engineer",
      pill: "Employment",
      live: false,
      blurb:
        "Current role. Recruited to build one serverless pipeline (S3 → EventBridge → Lambda → Step Functions → Batch) — about three months to ship and fix; $1.2M/year from that pipeline; 15-person process → one operator. Later I kept making cost-saving changes. This year: Pico robotics — two Android APKs, capture video pipeline, websites (Claude Code + Cursor), performance historian (battery, FPS, GPU, CPU frequency), and one on-site client visit in the Philippines. n8n agentic workflow with persistent memory.",
      stack: "Python · React · Android / Pico 4 · Serverless · Step Functions · EventBridge · Lambda · n8n · EKS",
      links: [],
    },
    {
      title: "Ellucian — Cloud Engineer / Cloud Application Administrator",
      pill: "Employment",
      live: false,
      blurb:
        "2021–2025. Customer-facing delivery for 200+ higher-education tenants: EC2 → Kubernetes for 50+ clients, SAML onboarding, Terraform / CI/CD provisioning, internal tools (Node validation 2h → 5 min, Slack ops bot).",
      stack: "AWS · Kubernetes (CKA) · Terraform · SAML · Python · Node.js",
      links: [],
    },
  ],

  platform: {
    heading: "Personal — multi-cloud platform",
    lede: "Solo build with Claude Code and Cursor. Not a second employer — a skills project. Cost intelligence and agent control across AWS, GCP, and Azure. In progress; no public demo yet.",
    pillars: [
      {
        title: "FinOps",
        body: "Normalize spend across clouds, forecast, and recommend remediations so a human can act — not a spreadsheet dump.",
      },
      {
        title: "MCP control plane",
        body: "Expose cloud operations as callable tools with validation, rate limits, and tool-call observability. Agents cannot take unconstrained cloud actions.",
      },
      {
        title: "RAG over code",
        body: 'Code-comprehension knowledge base over repositories so the system can answer "what does this service actually do" from the source, not from a wiki.',
      },
    ],
  },

  approach: [
    {
      title: "Spend-control is architecture.",
      body: "A proxy in front of the tools. Allow / deny / human from YAML policy — not from the model’s mood.",
    },
    {
      title: "Serverless so it scales without idle.",
      body: "S3 → EventBridge → Lambda → Step Functions → Batch at work. Maker-checker is container Lambdas + DynamoDB; you pay when it runs.",
    },
    {
      title: "AI in the system, not instead of it.",
      body: "Agents call tools; deterministic policy decides. Nova drafts guardrails; a human Applies.",
    },
    {
      title: "Honest cuts.",
      body: "If payouts are fetch-only on the MCP, I document it. I don't fake a live money path.",
    },
  ],

  certs: {
    heading: "Certifications & education",
    items: [
      {
        title: "Certified Kubernetes Administrator (CKA)",
        meta: "The Linux Foundation · active Feb 2025 – Feb 2027",
      },
      {
        title: "AWS Certified Developer – Associate",
        meta: "2022–2025",
      },
      {
        title: "HashiCorp Terraform Associate",
        meta: "2022–2024",
      },
      {
        title: "HashiCorp Vault Associate",
        meta: "2023–2025",
      },
      {
        title: "B.E., Electronics & Communication Engineering",
        meta: "M.S. Ramaiah Institute of Technology, Bengaluru · 2017–2021",
      },
    ],
  },

  contact: {
    email: "kandanathisainath9959@gmail.com",
    github: "https://github.com/KandanathiSainathReddy/",
    linkedin: "https://www.linkedin.com/in/kandanathi-sainath-reddy-a56343159",
    line: "Bengaluru · open to FDE / applied AI delivery",
  },
};
