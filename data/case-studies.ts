export interface Tag {
  label: string;
  variant?: "purple" | "neutral";
}

export interface TechCard {
  title: string;
  description: string;
}

export interface ContentSection {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imageContained?: boolean;
  imageContainedLg?: boolean;
  subCards?: TechCard[];
}

export interface MetricCard {
  headline: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  category: string;
  subtitle: string;
  title: string;
  detailTitle?: string;
  description: string;
  role: string;
  heroImage: string;
  thumbnailImage: string;
  heroColor: string;
  tools: string[];
  timeline: string;
  metrics: string;
  tags: Tag[];
  contentSections: ContentSection[];
  businessImpact: MetricCard[];
  relatedCaseSlugs: string[];
}

import basePath from "@/lib/basePath";

export const caseStudies: CaseStudy[] = [
  {
    slug: "civitas",
    category: "SaaS UX Design & GovTech",
    subtitle: "SaaS UX Design & GovTech",
    title: "Civitas: Designing the Missing Layer Between Construction Professionals and Government",
    detailTitle: "Civitas: Bureaucracy Made Legible",
    description:
      "Designing a full SaaS platform to digitize Costa Rica's construction permit workflow — bridging construction professionals, property owners, and municipal authorities for the first time.",
    role: "Lead Product Designer (UX Research, Interaction Design, Design Systems, AI-Assisted Prototyping)",
    heroImage: `${basePath}/civitas-hero.png`,
    thumbnailImage: `${basePath}/civitas-card-image.jpg`,
    heroColor: "#0B1628",
    tools: ["Figma", "Claude Code", "Figma Make", "Adobe Creative Suite", "Claude", "ChatGPT", "Gemini", "Perplexity"],
    timeline: "Full Product Cycle — Research to Prototype",
    metrics: "80% Prototype Satisfaction | 44,600+ Addressable Projects | 5 Core User Flows",
    tags: [
      { label: "SaaS UX", variant: "purple" },
      { label: "GovTech", variant: "neutral" },
      { label: "UX Research", variant: "neutral" },
      { label: "AI-Assisted", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: The Permit Wall",
        body: "Costa Rica has no digital infrastructure connecting construction professionals, property owners, and municipal authorities. Every building permit — and there are dozens per project — requires navigating fragmented, analog government processes that consume weeks of a professional's time and create unpredictable delays for property owners.\n\nThe scale of the problem is not small. In 2025 alone, over 44,600 construction projects were initiated in the country. There are more than 40,286 professionals registered with the CFIA (Costa Rica's professional architecture and engineering board). And across owner interviews, one pattern emerged consistently: dealing with municipal and government paperwork is cited as one of the hardest parts of building — not the construction itself.\n\nNo platform existed to solve this. Not in Costa Rica. Civitas was built to be that platform.",
        image: `${basePath}/civitas-image-2.jpg`,
        imageAlt:
          "Multiple Civitas dashboard screens showing the permit management interface, project detail view, and professional workflow across overlapping browser windows",
      },
      {
        heading: "Research: Understanding the Market and the Users",
        body: "Before designing a single screen, we validated the problem from three directions.\n\nMarket research confirmed there was no local equivalent — the only government-adjacent tool was the CFIA's own registry, which handles professional credentials, not project workflows. International platforms existed in other markets but none mapped to Costa Rica's specific municipal and regulatory structure.\n\nUser research went deeper. We conducted 10–15 in-depth interviews with construction professionals across different experience levels and age ranges, mapping their current permit-request process step by step. What emerged was a picture of fragmentation: professionals using WhatsApp to follow up on permits, printing documents that could be digital, making in-person trips that could be eliminated, and losing track of status across dozens of simultaneous projects.\n\nFrom this research we built two distinct user personas — the professional (architect or engineer managing the process) and the owner (who needs visibility without needing to understand the bureaucracy). Both had fundamentally different needs, mental models, and levels of technical comfort — and the platform had to serve both without compromise.",
        image: `${basePath}/civitas-image-user-flow.jpg`,
        imageAlt:
          "Civitas user flow diagram showing all 5 critical platform flows: Administrator onboarding with AI-assisted project creation, Guest document upload and AI validation, end-of-cycle review and approval, new project creation stepper, and project settings panel with Stripe integration",
        imageContainedLg: true,
      },
      {
        heading: "Design Strategy & Concept: \"Bureaucracy Made Legible\"",
        body: "The core design challenge wasn't visual — it was cognitive. Municipal permit processes are genuinely complex, with multiple entities, interdependencies, and status states that professionals track manually today. The system needed to make that complexity navigable without oversimplifying it into uselessness for the professionals who live in it daily.\n\nThe design framework I called \"Bureaucracy Made Legible\" operated on three principles:",
        subCards: [
          {
            title: "Progressive Disclosure",
            description:
              "Owners see a simplified status view. Professionals see the full complexity — but structured, not raw. Each user type gets exactly the information density they need.",
          },
          {
            title: "Process Fidelity",
            description:
              "The platform mirrors the real permit process closely enough that professionals can onboard without relearning their workflow. It digitizes the process; it doesn't reinvent it.",
          },
          {
            title: "Trust Through Clarity",
            description:
              "In a domain where errors have legal and financial consequences, the UI must communicate certainty. Every status, every required document, every deadline must be unambiguous.",
          },
        ],
        image: `${basePath}/civitas-image-1.png`,
        imageAlt:
          "Civitas app screens showing the new project creation stepper and the login screen — illustrating the end-to-end onboarding and access flow for construction professionals",
      },
      {
        heading: "The Design System",
        body: "Structure that scales with complexity.",
        subCards: [
          {
            title: "Typography & Hierarchy",
            description:
              "A functional typographic system designed for data-dense screens — clear hierarchy between project names, status labels, dates, and actions, readable across the age range of our user base.",
          },
          {
            title: "Component Architecture",
            description:
              "Components built to handle the platform's state complexity: permits in draft, submitted, in review, approved, rejected, and expired states — each requiring distinct visual treatment while maintaining system coherence.",
          },
          {
            title: "AI-Assisted Design Process",
            description:
              "The design system was built to feed directly into Claude Design's generation pipeline, enabling rapid page generation while maintaining token fidelity and component consistency across 40+ screens.",
          },
        ],
        image: `${basePath}/civitas-card-image.jpg`,
        imageAlt:
          "Civitas project card interface showing permit status, timeline, and professional assignment — a core repeating component of the design system applied across the platform",
        imageContained: true,
      },
      {
        heading: "What Made This Complex",
        body: "GovTech products operate at the intersection of regulatory accuracy and user experience — two things that are often in tension. A permit tracker that simplifies too aggressively becomes misleading; one that exposes full complexity becomes unusable for the owner persona.\n\nThe user research revealed a wide spread in technical literacy. Professionals ranged from recent graduates comfortable with digital tools to experienced architects in their 50s and 60s who had managed permits manually for decades. Designing for both without creating two separate products was a core constraint that shaped every information architecture decision.\n\nThe AI-assisted workflow added another layer: designing with Claude Design required structuring the design system and user flows as machine-readable context documents — forcing a level of documentation rigor that ultimately made the developer handoff cleaner than on any previous project.",
      },
      {
        heading: "Key Solutions",
        body: "Three design interventions addressed the platform's core challenges across both user types.",
        subCards: [
          {
            title: "A. Dual-Role Architecture",
            description:
              "Rather than building one interface that tried to serve both user types, Civitas uses a role-based system where professionals and owners see different views of the same project data. Owners get clarity; professionals get control.",
          },
          {
            title: "B. 5 Core User Flows",
            description:
              "From the research and epics we defined, I designed 5 complete user flows covering the platform's critical paths — permit initiation, document management, municipal communication, project status tracking, and professional-to-owner reporting. Each flow was validated against real professional workflows from the interviews.",
          },
          {
            title: "C. Functional Prototype for Validation",
            description:
              "Before committing to full development, I built a complete working prototype using Claude Code. This prototype was tested with 10 additional professionals spanning different age groups and experience levels, achieving an 80% satisfaction rate — the threshold we set to greenlight development.",
          },
        ],
        image: `${basePath}/civitas-closer-image.png`,
        imageAlt:
          "Civitas 'Nuevo Proyecto' onboarding screen on a laptop mockup showing the 3-step stepper form — demonstrating the design system's component architecture applied to a complex multi-step professional workflow",
        imageContained: true,
      },
    ],
    businessImpact: [
      {
        headline: "44,600+",
        description:
          "Construction projects initiated in Costa Rica in 2025 — the addressable market Civitas is built for.",
      },
      {
        headline: "80%",
        description:
          "Satisfaction rate on prototype validation with 10 professionals across age groups and experience levels — the threshold set to approve development and move to launch.",
      },
      {
        headline: "40,286",
        description:
          "Registered CFIA professionals in Costa Rica — Civitas's core user base, none of whom have a purpose-built tool for this workflow today.",
      },
      {
        headline: "5 Flows",
        description:
          "Complete user flows covering every critical platform path — validated against real workflows from 10–15 professional interviews before a single production screen was designed.",
      },
    ],
    relatedCaseSlugs: ["cleaning-app", "audivia", "arkose-labs"],
  },
  {
    slug: "cleaning-app",
    category: "AI Implementation & Rapid Prototyping",
    subtitle: "AI Implementation & Rapid Prototyping",
    title: "From Concept to Functional MVP in 21 Days",
    detailTitle: "AI-Driven Cleaning Ecosystem",
    description:
      "Orchestrating a hybrid workflow between generative AI and product design to launch a cleaning services MVP in record time.",
    role: "Lead Product Designer & AI Orchestrator",
    heroImage: `${basePath}/cleaning-app-case-hero.png`,
    thumbnailImage: `${basePath}/card-ai-implementation-rapid-prototyping.png`,
    heroColor: "#02102D",
    tools: ["Lovable", "Figma", "Claude/GPT-4", "Prompt Engineering"],
    timeline: "3 Weeks (Concept to Functional App)",
    metrics: "MVP in 1 week | 60% Workflow Efficiency | 100% Functional Logic",
    tags: [
      { label: "AI Strategy", variant: "purple" },
      { label: "Lovable", variant: "neutral" },
      { label: "Figma", variant: "neutral" },
      { label: "Product Design", variant: "neutral" },
      { label: "Vibe Coding", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: Velocity vs. Viability",
        body: "The objective was to validate a complex cleaning service business model by launching a functional MVP in record time. Traditional development cycles (3-6 months) were not an option. We needed a solution that wasn't just a \"clickable prototype\" but a live, data-driven application capable of handling real booking logic and user management.",
        image: `${basePath}/cleaning-app-case-the-chalence-image.png`,
        imageAlt: "Four Home Harmony app screens showing the Daily View, Weekly View, Home dashboard, and New Task creation flow on mobile",
      },
      {
        heading: "The Strategic Approach: The 60/40 Hybrid Workflow",
        body: "I pioneered a \"Vibe Coding\" methodology, acting as the bridge between generative AI and product excellence.\n\n• AI-First Logic (60%): I utilized Lovable to generate the core back-end logic, database schemas, and initial front-end architecture. This allowed for near-instantaneous deployment of functional features.\n\n• Human-Centric Refinement (40%): I took the raw AI output into Figma to perform \"Surgery on the UX.\" AI often generates overly complicated user flows; my role was to simplify, brand, and optimize for mobile-first constraints.",
      },
      {
        heading: "Technical Deep Dive",
        body: "The implementation strategy centered on three key pillars that enabled the compressed timeline without compromising quality.",
        subCards: [
          {
            title: "Prompt Engineering for UX",
            description:
              "I developed complex \"Giga Prompts\" to ensure the AI respected accessibility standards and logical hierarchies.",
          },
          {
            title: "Correcting AI Hallucinations",
            description:
              "The initial AI-generated user flow for \"Recurring Bookings\" was logically flawed. I manually re-architected the logic in Figma and re-prompted the engine to ensure a 0% error rate in the live app.",
          },
          {
            title: "The 7-Day Sprint",
            description:
              "We moved from a blank canvas to a verified MVP in 1 week. By week 3, the application was fully functional and ready for market testing.",
          },
        ],
        image: `${basePath}/cleaning-app-case-closer-image.png`,
        imageAlt: "Home Harmony app Task Distribution and Monthly Calendar screens showing data visualization and task management UI",
        imageContained: true,
      },
    ],
    businessImpact: [
      {
        headline: "60%",
        description: "Reduction in traditional development costs",
      },
      {
        headline: "Time-to-Market",
        description: "3 weeks vs. the industry average of 16 weeks",
      },
      {
        headline: "Result",
        description:
          "A fully functional, scalable MVP that allowed the client to secure early-stage feedback with zero design debt",
      },
    ],
    relatedCaseSlugs: ["propelus", "continuing-education", "urban-bites"],
  },
  {
    slug: "propelus",
    category: "Design Systems & Engineering",
    subtitle: "Design Systems & Engineering",
    title: "Scalable Architecture: The Design-to-Code Bridge",
    description:
      "Building a modular design system using Figma Variables to unify the identity of 20+ commercial pages and streamline developer handoff.",
    role: "Senior Product Designer & Design Systems Lead",
    heroImage: `${basePath}/propelus-case-hero.png`,
    thumbnailImage: `${basePath}/card-design-systems-engineering.png`,
    heroColor: "#002213",
    tools: ["Figma", "Tailwind CSS", "React", "Storybook"],
    timeline: "8 Weeks: System Architecture & Implementation",
    metrics: "20+ Pages Impacted | Figma Variables | 0% Handoff Friction",
    tags: [
      { label: "Design Systems", variant: "purple" },
      { label: "Tailwind", variant: "neutral" },
      { label: "React", variant: "neutral" },
      { label: "Architecture", variant: "neutral" },
      { label: "Design Engineering", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: Eliminating Design Debt",
        body: "Propelus had accumulated significant design debt across 20+ product pages. Inconsistent component usage, undefined spacing rules, and a disconnect between Figma designs and coded components created friction in every sprint. Engineers spent hours interpreting design intent, and designers were rebuilding components that already existed in slightly different forms.",
        image: `${basePath}/propelus-case-the-chalence-image.png`,
        imageAlt: "Propelus product pages before the redesign, showing inconsistent component usage, mismatched spacing, and visual fragmentation across views",
      },
      {
        heading: "Solution: Logic-First System Architecture",
        body: "I designed a token-based system architecture that created a 1:1 mapping between Figma variables and Tailwind CSS utilities. Every design decision — from spacing scales to color variants — was encoded as a token that could be directly referenced in code. This eliminated the interpretation layer that caused most handoff friction.",
      },
      {
        heading: "Technical Implementation",
        body: "The system was built around three architectural layers that ensured scalability and maintainability.",
        subCards: [
          {
            title: "Token Architecture",
            description:
              "Semantic tokens mapped to Figma variables and Tailwind config, enabling one-click theme updates across the entire product.",
          },
          {
            title: "Component Library",
            description:
              "40+ components built with compound component patterns, supporting variants, sizes, and states through a unified API.",
          },
          {
            title: "Documentation System",
            description:
              "Storybook-driven documentation with live code examples, usage guidelines, and accessibility annotations.",
          },
        ],
        image: `${basePath}/propelus-case-closer-image.png`,
        imageAlt: "Figma variables panel and Tailwind CSS config side by side, demonstrating the 1-to-1 token mapping that eliminated design-to-code handoff friction",
        imageContained: true,
      },
    ],
    businessImpact: [
      {
        headline: "20+",
        description: "Product pages updated with consistent design language",
      },
      {
        headline: "2%",
        description: "Handoff friction rate (down from 35%)",
      },
      {
        headline: "40%",
        description: "Faster feature development with reusable components",
      },
    ],
    relatedCaseSlugs: ["cleaning-app", "continuing-education", "urban-bites"],
  },
  {
    slug: "continuing-education",
    category: "B2B CMS Design & Flexibility",
    subtitle: "B2B CMS Design & Flexibility",
    title: "Empowering the End-User: The 'Chameleon' Component System",
    description:
      "Redesigning the administrative and public experience of a CMS to allow dynamic content creation without compromising brand integrity.",
    role: "Lead Product Designer",
    heroImage: `${basePath}/continuing-education-company-case-hero.png`,
    thumbnailImage: `${basePath}/card-b2b-cms-design-flexibility.png`,
    heroColor: "#2B3A72",
    tools: ["Figma", "React", "Headless CMS", "User Testing"],
    timeline: "12 Weeks: Research, Design & Validation",
    metrics:
      "100% Client Autonomy | Modular Flexibility | Multi-Theme Components",
    tags: [
      { label: "CMS Design", variant: "purple" },
      { label: "B2B UX", variant: "neutral" },
      { label: "UI Components", variant: "neutral" },
      { label: "User Empowerment", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: Breaking the Rigidity",
        body: "The continuing education platform served multiple institutional clients, each with distinct branding, content structures, and user workflows. The existing CMS was rigid — every customization required developer involvement, creating bottlenecks and escalating costs. Clients were frustrated by their inability to manage their own platforms independently.",
        image: `${basePath}/continuing-education-company-case-the-chalence-image.png`,
        imageAlt: "Continuing Education Company CMS admin panel and public-facing conference listing pages showing the rigid, developer-dependent content workflow",
      },
      {
        heading: "Solution: The Chameleon Component System",
        body: "I designed a component system that could adapt to any brand context while maintaining structural integrity. Each component was built with configurable 'slots' — areas where clients could inject their own content, colors, and imagery without breaking the layout or accessibility standards. The system used constraint-based flexibility: freedom within guardrails.",
      },
      {
        heading: "Key Strategic Features",
        body: "The Chameleon system was built on three principles that balanced flexibility with consistency.",
        subCards: [
          {
            title: "Theme Engine",
            description:
              "Token-based theming that allowed full brand customization through a simple configuration panel, no code required.",
          },
          {
            title: "Modular Layouts",
            description:
              "Drag-and-drop layout system with pre-validated component combinations that prevented broken layouts.",
          },
          {
            title: "Content Governance",
            description:
              "Role-based permissions ensuring brand consistency while empowering content editors with appropriate autonomy.",
          },
        ],
        image: `${basePath}/continuing-education-company-case-closer-image.png`,
        imageAlt: "Chameleon component system showing the drag-and-drop layout builder alongside the live public-facing conference detail page with multi-theme configuration",
        imageContained: true,
      },
    ],
    businessImpact: [
      {
        headline: "100%",
        description: "Client autonomy for content and brand management",
      },
      {
        headline: "70%",
        description: "Reduction in developer support tickets",
      },
      {
        headline: "5x",
        description: "Faster client onboarding with self-service configuration",
      },
    ],
    relatedCaseSlugs: ["cleaning-app", "propelus", "urban-bites"],
  },
  {
    slug: "arkose-labs",
    category: "UX Audit & Conversion Rate Optimization",
    subtitle: "UX Audit & Conversion Rate Optimization",
    title: "Strategic Storytelling: Shifting from 'Technical' to 'Decision-Maker'",
    description:
      "A deep-dive UX audit and strategic redesign to transform a technical informational site into a high-converting B2B sales machine.",
    role: "Senior Product Designer & UX Strategist",
    heroImage: `${basePath}/arkose-labs-case-hero.png`,
    thumbnailImage: `${basePath}/card-ux-audit-conversion-rate-optimization.png`,
    heroColor: "#16023E",
    tools: ["Figma", "Hotjar", "Google Analytics", "UserTesting"],
    timeline: "6 Weeks: Audit, Strategy & Redesign",
    metrics: "Reduced Bounce Rate | Strategic Mega-Menu | CRO-Focused Narrative",
    tags: [
      { label: "UX Audit", variant: "purple" },
      { label: "CRO", variant: "neutral" },
      { label: "B2B Strategy", variant: "neutral" },
      { label: "Data-Driven Design", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: High Traffic, Low Intent",
        body: "Arkose Labs had strong organic traffic but poor conversion metrics. Visitors were landing on technically dense pages that spoke to engineers rather than the C-suite decision-makers who controlled purchasing budgets. The website was winning the SEO game but losing the conversion game — a classic case of traffic without intent alignment.",
        image: `${basePath}/arkose-labs-case-the-chalence-image.png`,
        imageAlt: "Arkose Labs desktop website with mega-menu open and mobile views showing information architecture before and after the strategic redesign",
        imageContained: true,
      },
      {
        heading: "Diagnosis: The Persona Mismatch",
        body: "Through heatmap analysis, session recordings, and stakeholder interviews, I identified the core issue: the site's information architecture and content strategy were optimized for technical validators (engineers evaluating the product) rather than economic buyers (executives approving the purchase). The navigation buried business value propositions under layers of technical documentation.",
      },
      {
        heading: "Tactical Redesign",
        body: "The redesign focused on three strategic interventions that realigned the experience with buyer psychology.",
        subCards: [
          {
            title: "Strategic Mega Menu",
            description:
              "Reorganized navigation into buyer-journey stages: Discover, Evaluate, Implement — making business value immediately accessible.",
          },
          {
            title: "Narrative-Driven Pages",
            description:
              "Replaced technical spec sheets with outcome-focused storytelling: ROI calculators, customer success stories, and competitive differentiation.",
          },
          {
            title: "Conversion Architecture",
            description:
              "Implemented progressive CTAs aligned with buyer readiness: 'Learn More' → 'See Demo' → 'Talk to Sales' at appropriate content depths.",
          },
        ],
        image: `${basePath}/arkose-labs-case-closer-image.png`,
        imageAlt: "Redesigned Arkose Labs mega-menu with buyer-journey navigation organized into Discover, Evaluate, and Implement stages for executive decision-makers",
        imageContained: true,
      },
    ],
    businessImpact: [
      {
        headline: "35%",
        description: "Reduction in bounce rate on key landing pages",
      },
      {
        headline: "2.5x",
        description: "Increase in demo request conversions",
      },
      {
        headline: "45%",
        description: "More time spent on solution pages by target personas",
      },
    ],
    relatedCaseSlugs: ["cleaning-app", "propelus", "urban-bites"],
  },
  {
    slug: "urban-bites",
    category: "Brand Strategy & B2B UX Design",
    subtitle: "Brand Strategy & B2B UX Design",
    title: "Urban Bites: Scaling Street Food into a Corporate Catering Powerhouse",
    description:
      "Bridging the gap between 'street cred' and 'corporate trust' to unlock high-ticket catering contracts for a fast-growing Mexican street food brand.",
    role: "Lead UI/UX Designer",
    heroImage: `${basePath}/urban-bites-case-hero.webp`,
    thumbnailImage: `${basePath}/card-urban-bites.webp`,
    heroColor: "#1C1300",
    tools: ["Figma", "Adobe Creative Cloud", "Midjourney", "VI Visual Assets"],
    timeline: "3-Week Sprint (Discovery to High-Fidelity Prototype)",
    metrics: "26% Booking Increase | 40% Support Efficiency | B2B Brand Authority",
    tags: [
      { label: "Brand Strategy", variant: "purple" },
      { label: "B2B UX", variant: "neutral" },
      { label: "Figma", variant: "neutral" },
      { label: "Adobe CC", variant: "neutral" },
      { label: "Midjourney", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: Street Cred vs. Corporate Trust",
        body: "The client, an emerging street food brand on Upwork, was a victim of their own success. With a massive following on Instagram and TikTok, they were perfectly speaking the 'foodie' market, but their brand was scaring away B2B clients.\n\nThe Problem: They were losing high-value corporate contracts and wedding bookings because they lacked a formal, trustworthy platform. Potential B2B clients found it difficult to book services through DMs, leading to a 'perception gap' — they looked like a great taco stand, but not like a professional catering partner.",
        image: `${basePath}/urban-bites-case-the-chalence-image.webp`,
        imageAlt: "Urban Bites website mockup screens showing the brand transformation from street food aesthetics to a professional catering platform, including menu, event booking, and location tracker sections",
        imageContained: true,
      },
      {
        heading: "The Strategic Approach: Dual-Intent Architecture",
        body: "Instead of a simple landing page, I engineered a 80/20 Hybrid Strategy designed to serve two distinct masters:\n\n1. The Street Consumer (B2C): Needs instant gratification — live location, today's menu, and social proof.\n\n2. The Event Planner (B2B): Needs reliability, logistics, scalable menus, and a frictionless 'Request a Quote' flow.",
      },
      {
        heading: "Tactical Deep Dive",
        body: "Turning strategy into a high-fidelity reality meant deconstructing the user journey into its most critical touchpoints. By merging data-driven research with experiential UI, I developed a framework that eliminates the friction of traditional catering bookings while amplifying the brand's authentic street-food energy.",
        subCards: [
          {
            title: "01. Competitive Benchmarking",
            description:
              "I analyzed leaders like Los Tacos No. 1 and local caterers. Most competitors were too 'messy' or too 'corporate'. Urban Bites needed to be edgy to stand out.",
          },
          {
            title: "02. User Personas & Flow",
            description:
              "I mapped the journey of 'The Busy HR Manager' and 'The Weekend Foodie.' This created a Dual-Path Navigation, ensuring corporate leads find menus easily and hungry customers avoid booking frustrations.",
          },
          {
            title: "03. Storytelling & 'Gritty' Copy",
            description:
              "We used a bold, rhythmic tone to let users 'smell the smoke' of the grill. This high-impact storytelling justifies their premium positioning.",
          },
        ],
        image: `${basePath}/urban-bites-case-closer-image.webp`,
        imageAlt: "Urban Bites 'Cath the Truck' section displayed on a laptop mockup, showing the live GPS tracker and weekly route schedule with location and time slots",
        imageContained: true,
      },
    ],
    businessImpact: [
      {
        headline: "26% Increase",
        description: "Total event bookings within the first 30 days post-launch.",
      },
      {
        headline: "40% Efficiency Gain",
        description: "Reduction in manual customer support via DMs regarding catering logistics.",
      },
      {
        headline: "Brand Authority",
        description:
          "Successfully secured three major corporate contracts in the first month, marking a clear market differentiator.",
      },
    ],
    relatedCaseSlugs: ["cleaning-app", "arkose-labs", "fine-raw"],
  },
  {
    slug: "audivia",
    category: "Healthcare UX & Brand Strategy",
    subtitle: "Healthcare UX & Brand Strategy",
    title: "Building Trust Through Design: A Full Digital Presence for an Audiology Clinic",
    detailTitle: "Building Trust Through Design",
    description:
      "Designing a complete digital identity for a newly established audiology clinic — from zero brand presence to top-3 Google Local Pack within 2–3 months of launch.",
    role: "Lead Designer (UX/UI, Brand Strategy, Copywriting, SEO, Implementation)",
    heroImage: `${basePath}/audivia-hero.png`,
    thumbnailImage: `${basePath}/audivia-case-study-card.png`,
    heroColor: "#0A1F3D",
    tools: ["UX/UI Design", "Branding", "Healthcare", "SEO"],
    timeline: "Full Brand Build — Concept to Launch",
    metrics: "Top 3 Google Local Pack | 30% Task Completion Lift | Day-One SEO",
    tags: [
      { label: "Healthcare UX", variant: "purple" },
      { label: "Branding", variant: "neutral" },
      { label: "SEO", variant: "neutral" },
      { label: "Copywriting", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: The Trust Gap",
        body: "The client — a newly established audiology practice — had zero digital presence. No website, no brand identity, no online discoverability. In the healthcare space, this isn't just a visibility problem: it's a credibility problem.\n\nPatients seeking audiological care make high-stakes decisions. They're trusting a specialist with something as intimate as their hearing. Without a professional digital presence, the clinic couldn't compete against established practices — regardless of the quality of its clinical care.\n\nThree core friction points emerged from initial discovery:\n\n• No brand language: The clinic had no visual identity, tone of voice, or narrative to communicate expertise and warmth simultaneously.\n\n• No patient pathway: There was no clear journey from \"I have a concern\" to \"I'm booking an appointment.\"\n\n• No search presence: A new practice in a specialized field is invisible without deliberate SEO strategy from day one.",
        image: `${basePath}/audivia-case-study-1.png`,
        imageAlt:
          "Multiple screens of the Audivia website showing the complete digital presence built for the audiology clinic, from hero to services, process, FAQ, and footer sections",
      },
      {
        heading: "Design Strategy & Concept: \"Clinical Warmth\"",
        body: "Healthcare design lives in a tension: it must signal clinical authority while remaining emotionally approachable for patients who are often anxious or vulnerable. I built the entire visual and verbal system around what I called the \"Clinical Warmth\" framework.\n\n• Visual language: A palette rooted in calm, trust-signaling tones — soft neutrals anchored by a confident primary color that communicates expertise without coldness.\n\n• Typography: Clean, legible hierarchy that reads as professional on first glance but never intimidating — designed for patients of all ages, including older adults who are a core demographic for audiology.\n\n• Tone of voice: Copy written to be warm, clear, and jargon-free. Patients don't speak in audiological terms — the site shouldn't either.",
      },
      {
        heading: "Key Solutions",
        body: "Three design pillars addressed the core friction points and built a complete patient experience from first awareness to booking confirmation.",
        subCards: [
          {
            title: "A. Patient-First Information Architecture",
            description:
              "I mapped the full patient journey — from first symptom awareness to booking — and structured the site's navigation around it. Every page answers the question the patient has at that moment, not the question the clinic wants to answer.",
          },
          {
            title: "B. Trust-Building Homepage",
            description:
              "The homepage was designed to resolve the three biggest patient hesitations in the first scroll: Is this clinic legitimate? Do they understand my problem? Can I easily contact them? Hero copy, social proof placement, and CTA positioning were all informed by this framework.",
          },
          {
            title: "C. Local SEO from Day One",
            description:
              "Rather than treating SEO as a post-launch layer, I embedded it into the content strategy from the start — keyword-informed copy, semantic HTML structure, Google Business alignment, and location-specific page architecture to capture local search intent.",
          },
        ],
        image: `${basePath}/audivia-case-study-2.png`,
        imageAlt:
          "Detailed views of the Audivia website showing the services section and patient process steps, illustrating the patient-first information architecture and trust-building design decisions",
        imageContained: true,
      },
      {
        heading: "The Design System",
        body: "Elegance in the details.\n\n• Typography: A dual-type system — a trustworthy serif for headings that signals clinical authority, paired with a highly legible sans-serif for body copy optimized for readability across age groups.\n\n• Iconography & Visual Assets: Custom-directed visual language that avoids generic stock photography. Imagery was curated to show real human connection — not clinical coldness — consistent with the \"Clinical Warmth\" framework.",
        image: `${basePath}/audivia-case-study-3.png`,
        imageAlt:
          "Audivia FAQ section on a laptop mockup showing the design system in action — clean typographic hierarchy, accessible color usage, and structured content layout",
        imageContained: true,
      },
      {
        heading: "What Made This Complex",
        body: "Designing for healthcare isn't just a visual challenge. It requires understanding regulatory sensitivities around medical claims, the emotional state of the end user, and the trust signals specific to clinical environments. Every copy decision, color choice, and interaction pattern was evaluated through that lens — the same rigor required when designing digital experiences for pharmaceutical and life sciences clients.\n\nOne of the most critical discoveries came directly from user testing. Our primary audience — older adults — revealed an accessibility gap that wasn't visible in design review. The original brand palette included an orange that failed WCAG AA contrast standards when tested with actual users in that demographic. Participants consistently struggled to read text and CTAs rendered in that color, and engagement with key touchpoints dropped as a result.\n\nRather than overriding the brand color entirely, I made a targeted recommendation: introduce a darkened variant of the orange exclusively for web — dark enough to pass AA contrast thresholds, while preserving the brand's warmth and visual identity across other touchpoints like print and social.\n\nWe re-tested with the same user group. The adjusted palette produced a 30% improvement in task completion and positive reception — a direct, measurable result of letting real users, not assumptions, drive design decisions.\n\nAccessibility as a clinical imperative, not a checkbox. For a healthcare audience, WCAG compliance isn't a technical formality — it's the difference between a patient finding the help they need or abandoning the site entirely. This project reinforced that inclusive design and effective healthcare design are the same thing.",
      },
    ],
    businessImpact: [
      {
        headline: "Top 3",
        description:
          "Google Local Pack ranking for audiology searches within 2–3 months of launch — competing against practices with years of established presence. New patients consistently mentioned finding the clinic through Google.",
      },
      {
        headline: "30%",
        description:
          "Improvement in task completion after the accessibility-driven palette iteration. User testers described the site as \"easy to understand\" and \"professional but not intimidating\" — validating the Clinical Warmth framework.",
      },
      {
        headline: "Day-One SEO",
        description:
          "The brand identity gave the practice a visual presence on par with established clinics from day one, removing the credibility gap — while semantic HTML and keyword copy meant the site ranked without any post-launch sprint.",
      },
    ],
    relatedCaseSlugs: ["urban-bites", "fine-raw", "arkose-labs"],
  },
  {
    slug: "fine-raw",
    category: "E-Commerce & Brand Experience Design",
    subtitle: "E-Commerce & Brand Experience Design",
    title: "Fine & Raw: Elevating Artisanal Chocolate through Digital Artistry",
    detailTitle: "Fine & Raw — Digital Boutique Experience",
    description:
      "Redesigning a premium chocolate brand's e-commerce experience to close the 'Premium Gap' — transforming a generic template into an immersive digital boutique that justifies a luxury price point.",
    role: "Lead Product Designer (UI/UX, Brand Strategy)",
    heroImage: `${basePath}/fine-raw-case-hero.webp`,
    thumbnailImage: `${basePath}/card-fine-raw.webp`,
    heroColor: "#0D0D0D",
    tools: ["Figma", "Lovable", "Prototyping", "Adobe Illustrator"],
    timeline: "6 Weeks",
    metrics: "Elevated Market Positioning | Reduced Funnel Friction | AOV Growth",
    tags: [
      { label: "E-Commerce UX", variant: "purple" },
      { label: "Brand Strategy", variant: "neutral" },
      { label: "Figma", variant: "neutral" },
      { label: "UI Design", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: The \"Premium Gap\"",
        body: "The original site was functional but generic. It failed to justify the premium price point of the products because the unique 'hand-drawn' essence of the brand was buried under a standard e-commerce template.\n\n• Pain Point: Low engagement with the brand story.\n\n• Visual Friction: The illustrations (the brand's biggest asset) weren't integrated into the UI.",
        image: `${basePath}/fine-raw-case-the-chalence-image.webp`,
        imageAlt: "Fine & Raw original e-commerce site showing generic template layout with disconnected brand illustrations and low visual hierarchy across product pages",
        imageContained: true,
      },
      {
        heading: "Design Strategy & Concept: The \"Artistic Rawness\" Framework",
        body: "I established a design system based on \"Structured Luxury.\" This involved a neutral, paper-like palette to ground the brand, high-contrast black for the hand-drawn elements, and \"Old Gold\" accents to denote quality and prestige.\n\n• Minimalism as a Canvas: Using generous white space to let the intricate illustrations breathe.\n\n• Sensory UX: Implementing micro-interactions and skeleton loaders to ensure the high-res photography felt fast and fluid, mimicking the smooth texture of the chocolate.",
      },
      {
        heading: "Key Solutions",
        body: "Executing the \"Artistic Rawness\" vision required rethinking every major touchpoint — from the first impression to the final checkout step.",
        subCards: [
          {
            title: "A. The Immersive Home",
            description:
              "I replaced the static banners with a mixed-media Hero section. By blending macro product photography with parallax-driven illustrations, I created a sensory entry point that communicates the brand's dual nature: Raw Ingredients + Fine Art.",
          },
          {
            title: "B. Curated Catalog (PLP)",
            description:
              "Rather than a standard grid, I designed an asymmetric layout that feels like browsing a gallery. Hover States reveal the ingredient profile and the artist's story behind each wrapper.",
          },
          {
            title: "C. The \"Masterpiece\" Product Page",
            description:
              "The new PDP focuses on the Unboxing Experience. I gave the illustration its own dedicated section and optimized the mobile checkout flow, incorporating a Quick-Add feature for returning customers.",
          },
        ],
        image: `${basePath}/fine-raw-case-closer-image.webp`,
        imageAlt: "Fine & Raw redesigned product catalog on a laptop mockup, showcasing the asymmetric gallery-style grid layout with curated collections and luxury visual hierarchy",
        imageContained: true,
      },
    ],
    businessImpact: [
      {
        headline: "Elevated Market Positioning",
        description:
          "The 'Artistic Rawness' framework aligns digital aesthetics with artisanal quality for a luxury experience.",
      },
      {
        headline: "Conversion & Funnel Efficiency",
        description:
          "The 'Masterpiece' PDP and mobile checkout reduce friction, boosting conversion rates.",
      },
      {
        headline: "AOV & Brand Scalability",
        description:
          "Curated Collections boost product discovery and order value. The Design System offers a scalable visual language.",
      },
    ],
    relatedCaseSlugs: ["urban-bites", "propelus", "arkose-labs"],
  },
];

// Controls display order across all pages
export const displayOrder = [
  "civitas",
  "propelus",
  "audivia",
  "continuing-education",
  "arkose-labs",
  "cleaning-app",
  "fine-raw",
  "urban-bites",
];

export function getOrderedCaseStudies(limit?: number): CaseStudy[] {
  const ordered = displayOrder
    .map((slug) => caseStudies.find((cs) => cs.slug === slug))
    .filter((cs): cs is CaseStudy => cs !== undefined);
  return limit ? ordered.slice(0, limit) : ordered;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getRelatedCaseStudies(slugs: string[]): CaseStudy[] {
  return slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((cs): cs is CaseStudy => cs !== undefined);
}
