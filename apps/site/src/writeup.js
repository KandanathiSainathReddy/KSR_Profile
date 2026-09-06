/** Project catalog + deep dives. Telus work is separate cards, not one lump. */

const LIVE_MC = "https://main.d3mk2czzbnq9or.amplifyapp.com/";
const GH_MC = "https://github.com/KandanathiSainathReddy/agent-maker-checker";

export const writeup = {
  kicker: "PROJECTS  ·  TWO TO OPEN FIRST, THEN THE REST",
  title: "Projects",
  lede: "Start with maker-checker (live, solo) and the serverless video pipeline — those are the two proud-project walkthroughs. Pico, n8n, the personal cost tool, and Ellucian are supporting cards. Telus is split, not one blob. Live links only where a public app exists.",

  q1: {
    heading: "What I have built myself",
    paragraphs: [
      "Public/solo vs employment are different jobs. I do not blur them.",
      "Maker-checker is mine end to end — design, git, deploy. Coding agents are tools; I own what ships.",
      "At Telus I was recruited to build one serverless pipeline. It took about three months to ship and fix. That pipeline is the $1.2M/year cloud savings and the 15-person process cut to one operator. After it landed I kept making cost-saving changes. This year is Pico robotics: two APKs, the capture video pipeline, companion websites, and one on-site client visit in the Philippines. n8n battle cards are a separate Telus delivery.",
      "Ellucian was four years of customer-facing delivery (200+ tenants). The multi-cloud cost tool is a personal skills project, solo, in progress — not a second employer. RAG and MCP live there, not under Telus.",
    ],
  },

  q2: {
    heading: "Tools and techniques — and why",
    paragraphs: [
      "Python / FastAPI when the product is a service with tests. YAML policies when spend-control must be deterministic — Nova never evaluates a payment. Nova Lite for cheap tool-loops. Razorpay MCP because allowed calls should hit real test-mode APIs. Amplify Gen 2 + container Lambdas + DynamoDB so local and cloud share one image and velocity stays atomic.",
      "Pico robotics this year: two Android APKs, capture video pipeline, and websites — Claude Code and Cursor only. Telus cost pipeline: Step Functions, EventBridge, Lambda, Batch. n8n on EKS. Personal cost tool: React, Python, serverless, Terraform across AWS/GCP/Azure.",
      "I stay current by shipping — MCP servers, Bedrock/Nova, event-driven AWS — not by collecting paper.",
    ],
  },

  projects: [
    {
      id: "maker-checker",
      title: "Agent maker-checker",
      pill: "Live · personal",
      live: true,
      startHere: true,
      summary:
        "Spend-control plane in front of Razorpay MCP. Payment-tool calls are allow / deny / escalate before they can spend. Console is a cached policy testbed by default; live MCP is opt-in. Test-mode only.",
      stack: "Python · FastAPI · Nova · Razorpay MCP · Amplify · DynamoDB",
      liveUrl: LIVE_MC,
      github: GH_MC,
      heading: "Agent maker-checker — spend-control architecture",
      sub: "Solo. Live demo and GitHub. Test-mode only; no real money.",
      blocks: [
        {
          title: "Problem",
          body: "An AI agent that can call Razorpay payment tools should not get more trust than an employee. I needed a second pair of eyes in front of Razorpay MCP: each of those tool calls checked before it executes, with an audit trail and a human queue when policy is unsure.",
        },
        {
          title: "Approach",
          body: "Not a classifier and not a chatbot. A proxy sits between the demo agent and Razorpay MCP — this is spend-control for Razorpay payment tools, not a blanket gate on every tool an agent might ever call. Policies are payments-semantic: rupee caps, cross-call velocity (structuring), payee allowlist, refund-to-capture ratio, argument provenance (indirect prompt-injection). Decision is allow / deny / escalate-to-human.",
        },
        {
          title: "Architecture",
          body: "Nova agent (Bedrock, container Lambda) → enforcement proxy (FastAPI, container Lambda) → on allow, Razorpay MCP (stdio binary baked into the image) → test-mode APIs. State in DynamoDB (atomic UpdateItem ADD). Sha256 hash-chained audit. HITL approvals. Dashboard: Policy studio + Console.",
        },
        {
          title: "Trade-offs",
          body: "Cached vs live: Console is a real policy testbed by default. Live MCP can mint real rzp.io test links; it is off by default because empty test-mode state makes attack scenarios messy. HTTP proxy today; exposing this as its own MCP is next, not faked. Public endpoints for click-to-try — not a live-money pattern.",
        },
        {
          title: "Challenges",
          body: "MCP is stdio-only; a Lambda cannot run Docker, so the image bundles razorpay-mcp-server. Structuring must survive concurrent Lambdas — atomic DynamoDB counters, proven against DynamoDB Local. Amplify’s build has no Docker daemon; images are pre-pushed to ECR.",
        },
        {
          title: "Outcome",
          body: "A live, clickable spend-control plane. A cap set in Policy studio changes the next Console decision for real. Attack pack includes a 20-call clean pass with 0 false blocks. I cut auth, multi-tenancy, and a fake payout create rather than overclaim.",
        },
      ],
    },
    {
      id: "pico",
      title: "Pico robotics — APKs, pipeline, websites",
      pill: "Telus · this year",
      live: false,
      startHere: false,
      summary:
        "This year’s Pico robotics work: two Android APKs, the capture video pipeline, and companion websites. One on-site client visit in the Philippines to land the same drop. Performance historian: battery, FPS, GPU, CPU frequency.",
      stack: "Android / Pico 4 · video pipeline · web apps · Claude Code · Cursor",
      liveUrl: null,
      github: null,
      heading: "Pico robotics — APKs, video pipeline, websites",
      sub: "Telus, this year. No public demo. Claude Code and Cursor only — not Codex. I do not prefix this with “Client”.",
      blocks: [
        {
          title: "Problem",
          body: "The robotics POC needed working capture on device, a video path, and websites — not a deck. If the APKs and sites were not in people’s hands, the POC failed.",
        },
        {
          title: "What I built",
          body: "Two Android APKs on Pico 4, the capture video pipeline, and companion websites. A performance historian over time: battery, FPS, GPU, and CPU frequency — so we could see whether the build was usable, not just whether it compiled.",
        },
        {
          title: "How",
          body: "Shipped with Claude Code and Cursor. I used the agents to close the Android/web syntax gap quickly; I owned the product decisions and the drop. Coordinated with vendors, PM, and the customer. Went on-site in the Philippines once for this work.",
        },
        {
          title: "Outcome",
          body: "This year’s Pico robotics drop landed: APKs, video pipeline, websites, and the Philippines visit. This is not the $1.2M pipeline I was recruited to build — that is a different card.",
        },
      ],
    },
    {
      id: "video-pipeline",
      title: "Serverless video pipeline",
      pill: "Telus",
      live: false,
      startHere: true,
      summary:
        "The pipeline I was recruited to build. About three months to ship and fix. $1.2M/year from this pipeline. Later I kept making cost-saving changes. Event-driven: S3 → EventBridge → Lambda → Step Functions → Batch.",
      stack: "Step Functions · EventBridge · Lambda · Batch · S3",
      liveUrl: null,
      github: null,
      heading: "Trigger-based serverless video processing",
      sub: "Telus. The pipeline I was recruited to build. No public demo. Event-driven so you do not pay for idle GPU.",
      blocks: [
        {
          title: "Problem",
          body: "Always-on GPU for video and labelling is a bill. A 15-person manual process does not scale. Compute had to run when work arrived, not all day. I was hired to make that pipeline real.",
        },
        {
          title: "Approach",
          body: "Productize video processing as a trigger-based Step Functions workflow. Orchestrate on events. Retries, then human-in-the-loop recovery — not silent drops. About three months to build it and work through the issues until it held.",
        },
        {
          title: "Architecture",
          body: "S3 → EventBridge → Lambda → Step Functions → AWS Batch. After the pipeline landed I kept making cost-saving changes on top of it. Related production work: orchestrator–worker anonymisation (multi-PB/month) on a g5.12xlarge → g5.48xlarge fleet, SageMaker fine-tunes, Gemini Flash on Vertex for video labelling.",
        },
        {
          title: "Outcome",
          body: "$1.2M/year cloud savings from this pipeline. 15-person process → one operator (93%). Recruited to build it; ~3 months to ship and stabilize; more cost-saving changes after. This is not Pico robotics — that is this year’s card.",
        },
      ],
    },
    {
      id: "n8n",
      title: "n8n battle-card agent",
      pill: "Telus",
      live: false,
      startHere: false,
      summary:
        "Pre-sales agentic workflow: PDFs and requirements in, battle cards out, state kept on EKS and S3 so the next session is not amnesia.",
      stack: "n8n · EKS · S3 · Python",
      liveUrl: null,
      github: null,
      heading: "n8n agentic workflow — PDFs to battle cards",
      sub: "Telus. No public demo. Persistent memory across sessions.",
      blocks: [
        {
          title: "Problem",
          body: "Pre-sales packs were rebuilt from PDFs and notes every time. Nothing persisted, so the agent had no memory of the last customer.",
        },
        {
          title: "Approach",
          body: "An n8n agent ingests submitted PDFs and requirements, reconciles them, and writes battle cards to somewhere durable.",
        },
        {
          title: "Architecture",
          body: "n8n for the agent loop. Persistence on Amazon EKS (volume) and S3 so cards survive across sessions. Adjacent Telus apps: React + Python, some retrieval over internal docs, some direct LLM APIs — not the same as the personal RAG/MCP project.",
        },
        {
          title: "Outcome",
          body: "A reusable pre-sales workflow with state, not a one-shot chat. Separate from Pico hardware and from the video pipeline.",
        },
      ],
    },
    {
      id: "multicloud",
      title: "Multi-cloud cost analysis",
      pill: "Personal · in progress",
      live: false,
      startHere: false,
      summary:
        "Normalize spend across AWS, GCP, and Azure; forecast; recommend remediations. MCP so an agent can inspect and act with limits. RAG over repos. Solo. No public URL yet.",
      stack: "React · Python · serverless · Terraform · MCP · RAG · AWS / GCP / Azure",
      liveUrl: null,
      github: null,
      heading: "Multi-cloud cost analysis and savings",
      sub: "Personal skills project. Solo (Claude Code, Cursor). In progress. No public demo. Not a second employer.",
      blocks: [
        {
          title: "Problem",
          body: "Spend is split across AWS, GCP, and Azure. Spreadsheets do not forecast or recommend with a confidence score, and they do not stop an agent from taking unconstrained cloud actions.",
        },
        {
          title: "FinOps",
          body: "Normalize cost across the three clouds, forecast, and recommend remediations so a human can act — not a dump of line items.",
        },
        {
          title: "MCP control plane",
          body: "Cloud operations as callable tools (inspect and one-click remediations) with validation, rate limits, and tool-call observability. Same idea as spend-control: the agent may propose; policy bounds what can run.",
        },
        {
          title: "RAG over code",
          body: "Code-comprehension over repositories (chunking, retrieval, grounding) so you can ask what a service actually does from source. This RAG/MCP work is personal-project only — it is not Telus.",
        },
        {
          title: "Status",
          body: "In progress. No public URL. I will not pad this card with a fake demo.",
        },
      ],
    },
    {
      id: "ellucian",
      title: "Ellucian — tenant delivery and internal tools",
      pill: "Ellucian",
      live: false,
      startHere: false,
      summary:
        "200+ higher-ed clients. EC2 → Kubernetes for 50+. SAML, Terraform, CI/CD. Node validation 2h → 5 min. Slack ops bot.",
      stack: "AWS · Kubernetes · Terraform · SAML · Node.js",
      liveUrl: null,
      github: null,
      heading: "Ellucian — customer delivery at tenant scale",
      sub: "Feb 2021 – Apr 2025. No public demo. This is the long customer-facing story, not an AI demo.",
      blocks: [
        {
          title: "Problem",
          body: "Hundreds of higher-ed tenants. Migrations, identity, and ops were slow when they were tickets instead of tools.",
        },
        {
          title: "What I owned",
          body: "Customer-facing delivery for 200+ clients: discovery, migration, onboarding, knowledge transfer. Led EC2 → Kubernetes for 50+ with minimal downtime. Automated provisioning (AWS, Terraform, CI/CD) and SAML onboarding.",
        },
        {
          title: "Tools that stuck",
          body: "A Node.js validation app that cut a 2+ hour process to under 5 minutes. A Slack ops bot for restarts, certificate renewal, and pipeline status.",
        },
        {
          title: "Outcome",
          body: "Field problems became templates. This card is employment delivery. It is not a live app for a recruiter to click.",
        },
      ],
    },
  ],
};
