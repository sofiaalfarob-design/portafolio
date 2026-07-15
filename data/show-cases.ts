export interface Tag {
  label: string;
  variant?: "purple" | "neutral";
}

export interface TechCard {
  title: string;
  description: string;
}

export interface ColorSwatch {
  hex: string;
  name: string;
  ratio: string;
  passes: boolean;
  /** "button" renders the hex as a filled button preview; "text" renders it as sample text on a dark surface. Defaults to "button". */
  kind?: "button" | "text";
}

export interface ContentSection {
  heading?: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imageContained?: boolean;
  imageContainedLg?: boolean;
  imageAlmostFull?: boolean;
  imageLightbox?: boolean;
  imageLightboxZoom?: number;
  topImage?: string;
  topImageAlt?: string;
  topImageContained?: boolean;
  topImageContainedLg?: boolean;
  topImageAlmostFull?: boolean;
  subCards?: TechCard[];
  colorSwatches?: ColorSwatch[];
  colorSwatchesCaption?: string;
}

export interface MetricCard {
  headline: string;
  description: string;
}

export interface ShowCase {
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

export const showCases: ShowCase[] = [
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
    timeline: "2 Months — Research to Prototype",
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
        topImage: `${basePath}/civitas-user-persona.png`,
        topImageAlt:
          "User personas: Esteban Solano (The Busy Architect, age 38, independent architect managing 4 projects simultaneously) and Lucía Méndez (Owner of the Construction, age 42, building her first home with savings and a bank loan)",
        topImageAlmostFull: true,
        image: `${basePath}/civitas-image-user-flow.jpg`,
        imageAlt:
          "Civitas user flow diagram showing all 5 critical platform flows: Administrator onboarding with AI-assisted project creation, Guest document upload and AI validation, end-of-cycle review and approval, new project creation stepper, and project settings panel with Stripe integration",
        imageContainedLg: true,
        imageLightbox: true,
        imageLightboxZoom: 1.5,
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
        image: `${basePath}/civitas-design-system.png`,
        imageAlt:
          "Civitas design system documentation showing the color system with navy and warm orange palettes, typography pairing of Sora and Inter, and spacing & radius scale",
        imageAlmostFull: true,
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
    relatedCaseSlugs: ["audivia", "propelus", "arkose-labs"],
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
    title: "Scalable Architecture: Translating a Bold Brand Rebrand into a Living Design System",
    detailTitle: "Propelus: From Rebrand to Living System",
    description:
      "Translating a bold healthcare tech rebrand into a living design system — 20+ commercial pages unified under a token-based architecture delivered ahead of a US government compliance audit.",
    role: "Lead Designer — Marketing Site (Design Systems Architecture, Brand Adaptation, Stakeholder Management, Developer Handoff)",
    heroImage: `${basePath}/propelus-case-hero.png`,
    thumbnailImage: `${basePath}/card-design-systems-engineering.png`,
    heroColor: "#002213",
    tools: ["Figma", "Figma Variables", "Tailwind CSS", "React", "Storybook"],
    timeline: "8 Weeks: Brand Adaptation, System Architecture & Implementation",
    metrics: "20+ Pages Unified | 2% Handoff Friction | 40% Faster Dev | 6 Breakpoints | 100% Client Autonomy",
    tags: [
      { label: "Design Systems", variant: "purple" },
      { label: "Healthcare Tech", variant: "neutral" },
      { label: "Brand Adaptation", variant: "neutral" },
      { label: "Design Engineering", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: The Rebrand Bottleneck",
        body: "Propelus sits at the intersection of healthcare and compliance technology — connecting medical professionals across the United States with the accreditation bodies, hospitals, and regulatory entities that manage their credentials. When a medical professional's certification is due for renewal, Propelus handles the communication, the tracking, and the notification. It's infrastructure that the US healthcare system depends on, but rarely sees.\n\nThe company had made a deliberate decision to stand apart. The healthcare technology space is visually homogeneous — the same blues, the same stock imagery of doctors in white coats, the same corporate language. Propelus had invested in a bold brand rebrand designed to break from that pattern entirely.\n\nThe rebrand existed internally. The challenge was getting it onto the web — and doing it fast. A US government compliance audit was scheduled for April. The marketing site needed to reflect the new brand before that date, without exceptions.\n\nThree compounding factors made this harder than a typical redesign:\n\n• A complex new brand: The rebrand was deliberately unconventional for healthcare tech. Translating it to web without diluting it or making it inaccessible required careful judgment at every decision point.\n\n• 20+ pages with no system: Each page had been built independently over time, with inconsistent components, undefined spacing rules, and no shared foundation. There was no design system to extend — one had to be built from scratch.\n\n• 7+ stakeholders with different agendas: Marketing, brand, development, leadership — each with a legitimate stake in how the new brand appeared publicly, and each with a different definition of \"done.\"",
        image: `${basePath}/propelus-case-the-chalence-image.png`,
        imageAlt: "Propelus marketing site pages showing the visual fragmentation before the design system — inconsistent components, undefined spacing, and no shared brand foundation across 20+ pages",
      },
      {
        heading: "Strategy: The First Page as the Foundation",
        body: "Rather than attempting to redesign all 20+ pages simultaneously — which would have paralyzed the approval process — I proposed a different approach: design one page first, and design it perfectly.\n\nThe homepage became the proving ground. I worked through multiple iterations, balancing the visual ambition of the new brand against the practical requirements of the site's commercial audiences: potential enterprise clients, healthcare administrators, and regulatory bodies who needed to trust what they were reading.\n\nThe key insight from working with the 7+ stakeholder group was that Marketing and Brand were the hardest to align — not because they were difficult, but because their standards were highest. Once the homepage cleared their bar, the approval logic for every subsequent page was already established. The first page became the visual contract for everything that followed.\n\nWith a fully approved homepage in hand, I built the design system — not the other way around.",
      },
      {
        heading: "Technical Implementation: A System Built to Scale Without Its Author",
        body: "The design system was architected around one principle: the client's designers should be able to build any new page without involving me. Every component, every token, every layout decision was made with that constraint in mind.",
        subCards: [
          {
            title: "Token Architecture",
            description:
              "The system starts at the primitive layer — raw values for color, spacing, typography, and elevation — mapped directly as Figma Variables. Those primitives feed into semantic tokens that carry meaning: color-button-primary, spacing-section-gap, text-heading-large. Every semantic token maps 1:1 to a Tailwind CSS utility class, meaning a change made in Figma propagates directly into the codebase with no manual translation required.",
          },
          {
            title: "Component Library: 40+ at 6 Breakpoints",
            description:
              "Every component was built with Figma Auto Layout and auto-constraints configured for 6 responsive breakpoints — covering mobile through large desktop. Components are not just visually complete — they're behaviorally specified. Variants, states, sizes, and content flexibility are all built in. A developer receiving a handoff file sees exactly what to build, at every screen size, in every state.",
          },
          {
            title: "Sections as Composable Units",
            description:
              "Above the component layer, the system includes full section templates — hero variants, feature grids, testimonial layouts, CTAs — each assembled from the component library and pre-validated for brand compliance. The client's designers can drop a section into any page, swap the copy and imagery, and publish without breaking the visual system or creating accessibility issues.",
          },
          {
            title: "Documentation via Storybook",
            description:
              "Every component is documented in Storybook with live code examples, usage guidelines, do/don't specifications, and accessibility annotations. This wasn't an afterthought — it was the handoff mechanism that made the system self-sufficient after my engagement ended.",
          },
        ],
        image: `${basePath}/propelus-case-closer-image.png`,
        imageAlt: "Figma variables panel and Tailwind CSS config side by side, demonstrating the 1-to-1 token mapping that eliminated design-to-code handoff friction",
        imageContained: true,
      },
      {
        heading: "What Made This Complex",
        body: "Four compounding challenges shaped every decision on this project.",
        subCards: [
          {
            title: "Designing for an audience that doesn't trust \"different.\"",
            description:
              "Healthcare technology buyers — hospital administrators, compliance officers, credentialing departments — are trained to be skeptical of anything that looks unconventional. The rebrand was bold by design, but bold in a regulated industry context carries risk. Every visual decision had to be calibrated: distinctive enough to differentiate Propelus, credible enough not to trigger doubt in the people making procurement decisions.",
          },
          {
            title: "Stakeholder alignment across seven people with different definitions of success.",
            description:
              "Marketing wanted brand expression. Development wanted implementation clarity. Leadership wanted something that would withstand scrutiny in a government audit. Aligning those perspectives around a single visual system — without designing by committee — required establishing the homepage as a shared reference point that everyone had approved before the system was built. That sequencing was as important as the design itself.",
          },
          {
            title: "Building a system for designers who weren't in the room.",
            description:
              "The end users of this design system weren't developers — they were the client's own design team, who would use it to build pages independently after handoff. That meant every component had to be self-explanatory, every constraint had to be enforced by the system rather than by documentation, and every edge case had to be handled before it became someone else's problem.",
          },
          {
            title: "A hard deadline with no flexibility.",
            description:
              "The US government compliance audit in April wasn't a soft target. The site needed to reflect the new brand — completely, consistently — before that date. Eight weeks, 20+ pages, a new design system, and a complex brand. The sequencing strategy — one approved page first, system second, pages third — was what made it possible.",
          },
        ],
      },
    ],
    businessImpact: [
      {
        headline: "20+",
        description:
          "Commercial pages unified under a single design system, delivered ahead of a US government compliance audit deadline.",
      },
      {
        headline: "2%",
        description:
          "Handoff friction rate at project close — down from 35% at project start. Developers went from interpreting design intent to implementing it directly.",
      },
      {
        headline: "40%",
        description:
          "Faster feature development for the client's internal team post-handoff, enabled by reusable section templates and a self-documenting component library.",
      },
      {
        headline: "6 Breakpoints",
        description:
          "Every component fully specified across mobile to large desktop — zero responsive ambiguity for the development team.",
      },
      {
        headline: "100%",
        description:
          "Client autonomy — the client's design team can build and publish new pages independently using the design system, with no external design support required.",
      },
    ],
    relatedCaseSlugs: ["civitas", "audivia", "continuing-education"],
  },
  {
    slug: "continuing-education",
    category: "UX/UI Design · Medical Education · CMS Architecture",
    subtitle: "UX/UI Design · Medical Education · CMS Architecture",
    title: "CME: Modernizing a Medical Education Platform Across Three Evolutionary Stages",
    detailTitle: "CME: Three Stages, Two Years, One Platform",
    description:
      "A two-year platform transformation of a medical education company — from an unmaintainable 15-year-old site to a fully documented, autonomously operated headless CMS with complete responsive design.",
    role: "Lead Designer — Solo Design (UX/UI, Design Systems, CMS Architecture, Content Migration, Team Training)",
    heroImage: `${basePath}/continuing-education-company-case-hero.png`,
    thumbnailImage: `${basePath}/card-b2b-cms-design-flexibility.png`,
    heroColor: "#2B3A72",
    tools: ["Figma", "React", "Agility CMS", "Headless CMS", "User Testing"],
    timeline: "2+ Years: Redesign → Migration & QA → Maintenance",
    metrics: "2+ Years | 70% Fewer Dev Tickets | 5× Faster Onboarding | 6 Docs",
    tags: [
      { label: "UX/UI Design", variant: "purple" },
      { label: "Medical Education", variant: "neutral" },
      { label: "CMS Architecture", variant: "neutral" },
      { label: "Design Systems", variant: "neutral" },
      { label: "Content Strategy", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: Fifteen Years of Standing Still",
        body: "CME — Continuing Medical Education Company — operates at the intersection of professional development and lifestyle. Their flagship offering is uniquely positioned: organized educational travel experiences that let medical professionals bring their families, explore destinations across the US, and receive accredited training in the mornings while experiencing the destination in the afternoons. Alongside this, they run a full virtual course platform for ongoing credential maintenance.\n\nThe product worked. The platform didn't.\n\nWhen I joined the engagement, CME's digital presence hadn't meaningfully evolved in over 15 years. The site reflected the personal aesthetic preferences of the owner rather than the needs and expectations of its actual users. More critically, it had been built entirely without mobile in mind — a significant problem for medical professionals who consume content on the go, between patients, from airports and hotel lobbies.\n\nThe challenge wasn't just visual. It was organizational: the owner had strong opinions about the existing design, the platform was running on aging technology with real functional limitations, and the team maintaining it lacked the technical confidence to manage it independently. This wasn't a redesign project. It was a platform transformation — and it would take two years and three distinct phases to complete.",
        image: `${basePath}/continuing-education-company-case-the-chalence-image.png`,
        imageAlt: "CME platform before the redesign showing the 15-year-old site with no mobile responsiveness, outdated visual design, and fragmented content structure",
      },
      {
        heading: "Phase 1 — The Redesign: Replacing Preference with Evidence",
        body: "The first challenge was convincing the client that change was necessary — and doing it with data, not opinion.\n\nRather than presenting a new design and asking for approval, I started by building the case. I compiled user data showing who CME's actual users were: their demographics, their devices, their behavior patterns on the existing site. I set this against the profile of who CME's users could be if the platform met modern expectations. The data made the business case that subjective conversation couldn't.\n\nWith that foundation established, I began the redesign process — knowing that the owner's aesthetic preferences were a real constraint that had to be respected, not overridden. The process required multiple iterations, each one balancing contemporary UX standards against the client's vision for their brand. This wasn't design by committee — it was stakeholder management as a design skill.\n\nThe single most impactful change was mobile. The previous site had no responsive behavior whatsoever. Building a fully mobile-responsive experience from the ground up opened the platform to the way medical professionals actually consume content — and the client's reception to this change was immediate and positive.\n\nKey design decisions:\n\n• Rebuilt information architecture around two distinct user journeys: professionals evaluating the travel programs and professionals managing their virtual course catalog\n\n• Created a visual system that balanced the warmth of the travel experience with the credibility required for accredited medical education\n\n• Established full responsive behavior across all device sizes for the first time in the platform's history",
      },
      {
        heading: "Phase 2 — Migration & QA: Moving Without Breaking",
        body: "With the redesign approved and live, the next challenge was the platform itself. CME was running on aging CMS technology that limited what was possible — content couldn't be automated, images weren't optimized, and editorial workflows required technical intervention for basic updates.\n\nThe solution was a migration to Agility CMS, a headless architecture that gave the team significantly more control over content operations. My role in this phase went beyond design.\n\nI learned the Agility CMS architecture alongside the development team, which gave me the ability to contribute meaningfully to decisions about how content should be structured — not just how it should look. As content migrated from the old system to the new one, I performed systematic design QA across every page, every component, and every device breakpoint — verifying that the UX and UI standards established in the redesign were preserved through the technical transition.\n\nThe phase concluded with something that doesn't appear on most design portfolios but matters enormously to a client: I led the training for CME's internal team. The employees who would maintain the platform going forward weren't developers — they were content editors and administrators. I designed and delivered training that gave them a non-technical mental model of how Agility worked, so they could operate the platform confidently without needing developer support for routine tasks.",
        image: `${basePath}/continuing-education-company-case-closer-image.png`,
        imageAlt: "Agility CMS content management interface showing the new headless architecture used after migration — component configuration panels and editorial workflow for CME content editors",
        imageContained: true,
      },
      {
        heading: "Phase 3 — Maintenance: Designing the System From the Inside",
        body: "The third phase was where the work became most nuanced — and most directly relevant to the platform's long-term success.\n\nMaintenance, in this context, didn't mean fixing bugs. It meant continuously improving how the platform worked for the people operating it. I had two very different user types to design for simultaneously:\n\n• Medical professionals — the external users browsing courses and travel programs. Generally non-technical, time-constrained, accessing the platform between clinical responsibilities. Every friction point in their experience was a potential dropout.\n\n• Content editors within Agility CMS — internal CME employees managing the platform day-to-day. Technically literate enough to use a CMS, but not developers. Their frustrations were different: components that were confusing to configure, workflows that required more steps than necessary, edge cases that produced broken layouts.\n\nWorking closely with the development team, I analyzed usage patterns and collected feedback from the editorial team. I used this to redesign the internal component logic within Agility — making configuration interfaces more intuitive, reducing the cognitive load of routine publishing tasks, and building new components that were designed simultaneously for how they appeared to end users and how they behaved for the editors creating them.\n\nThis dual-perspective design thinking — external UX and internal tooling UX as a unified problem — became the defining characteristic of the maintenance phase.",
      },
      {
        heading: "Documentation: Building Institutional Memory",
        body: "Across all three phases, I produced a documentation suite that gave CME something more durable than a well-designed platform — it gave them the knowledge to own it.\n\n• Design System — component library, token architecture, usage guidelines\n\n• CME Digital Brand Guide — visual standards, typography, color system for digital contexts\n\n• Agility CMS Architecture Document — how the content model was structured and why\n\n• Editorial Tutorials — step-by-step guides for content editors, written for non-technical audiences\n\n• Content Standards & Brand Voice Document — tone, style, and content guidelines for editors maintaining the platform\n\n• Basic Code Tutorials — foundational references for editors who needed to make minor technical adjustments\n\nThis documentation wasn't a project deliverable — it was a deliberate investment in the client's independence. A platform that requires its original designer to function is a liability. A platform with complete institutional documentation is an asset.",
      },
      {
        heading: "What Made This Complex",
        body: "Three compounding factors defined the complexity of this engagement.",
        subCards: [
          {
            title: "Designing for a client who knew what they liked — and had been right for 15 years.",
            description:
              "The owner's aesthetic preferences weren't irrational — they had built a successful business with them. The challenge was introducing evidence-based design thinking without dismissing the judgment that had gotten CME to where it was. Using data to reframe the conversation from \"your design vs. my design\" to \"what your users need\" was the key that made the redesign possible.",
          },
          {
            title: "Two years means the project never stops changing.",
            description:
              "A single-sprint project has a clear end state. A two-year engagement means the product evolves, the team changes, the technology shifts, and the design decisions you made in month three get recontextualized by what you learn in month eighteen. Maintaining design coherence across that timeline — without a large team or formal governance structure — required documentation as a continuous practice, not a closing deliverable.",
          },
          {
            title: "The internal user is a user too.",
            description:
              "Most design work focuses on the end consumer. The maintenance phase of this project required equal attention to the people operating the platform — content editors whose daily friction with confusing CMS components had real downstream effects on publishing quality and speed. Treating the editorial interface as a UX problem, not a technical one, was what made the platform genuinely sustainable after handoff.",
          },
        ],
      },
    ],
    businessImpact: [
      {
        headline: "2+ Years",
        description:
          "Continuous engagement across three distinct phases — redesign, migration, and maintenance — making CME one of the most comprehensive platform transformations in this portfolio.",
      },
      {
        headline: "Mobile",
        description:
          "The platform launched with full responsive design for the first time in its history, opening the platform to medical professionals accessing content from mobile devices.",
      },
      {
        headline: "100%",
        description:
          "Client autonomy — CME's internal team can now create, publish, and maintain all platform content independently, without design or development support for routine operations.",
      },
      {
        headline: "70%",
        description:
          "Reduction in developer support tickets. Internal editors handle content operations that previously required developer involvement, enabled by redesigned component logic and editorial documentation.",
      },
      {
        headline: "5×",
        description:
          "Faster client onboarding. New content editors reach operational proficiency significantly faster through the training program and documentation suite developed during the engagement.",
      },
      {
        headline: "6 Docs",
        description:
          "A complete institutional knowledge base — design system, brand guide, CMS architecture, tutorials, content standards, and code references — ensuring the platform remains manageable long after the engagement closed.",
      },
    ],
    relatedCaseSlugs: ["civitas", "audivia", "propelus"],
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
    thumbnailImage: `${basePath}/audivia-show-case-card.png`,
    heroColor: "#0A1F3D",
    tools: ["Google Analytics", "Gemini Deep Research", "Figma", "Claude Design", "Cursor", "Figma Make"],
    timeline: "1 Month — Brand Creation to Digital Launch",
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
        image: `${basePath}/Audivia-progress-wireframes.png`,
        imageAlt:
          "Audivia design progression showing wireframes alongside the mid-fidelity and final high-fidelity website screens — illustrating the evolution from structure to the finished Clinical Warmth visual system",
      },
      {
        heading: "Design Strategy & Concept: \"Clinical Warmth\"",
        body: "Healthcare design lives in a tension: it must signal clinical authority while remaining emotionally approachable for patients who are often anxious or vulnerable. I built the entire visual and verbal system around what I called the \"Clinical Warmth\" framework.\n\n• Visual language: A palette rooted in calm, trust-signaling tones — soft neutrals anchored by a confident primary color that communicates expertise without coldness.\n\n• Typography: Clean, legible hierarchy that reads as professional on first glance but never intimidating — designed for patients of all ages, including older adults who are a core demographic for audiology.\n\n• Tone of voice: Copy written to be warm, clear, and jargon-free. Patients don't speak in audiological terms — the site shouldn't either.",
        image: `${basePath}/audivia-show-case-1.png`,
        imageAlt:
          "Multiple screens of the Audivia website showing the complete digital presence built for the audiology clinic, from hero to services, process, FAQ, and footer sections",
        imageAlmostFull: true,
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
        image: `${basePath}/audivia-show-case-2.png`,
        imageAlt:
          "Detailed views of the Audivia website showing the services section and patient process steps, illustrating the patient-first information architecture and trust-building design decisions",
        imageContained: true,
      },
      {
        heading: "The Design System",
        body: "Elegance in the details.\n\n• Typography: A dual-type system — a trustworthy serif for headings that signals clinical authority, paired with a highly legible sans-serif for body copy optimized for readability across age groups.\n\n• Iconography & Visual Assets: Custom-directed visual language that avoids generic stock photography. Imagery was curated to show real human connection — not clinical coldness — consistent with the \"Clinical Warmth\" framework.",
        image: `${basePath}/audivia-show-case-3.png`,
        imageAlt:
          "Audivia FAQ section on a laptop mockup showing the design system in action — clean typographic hierarchy, accessible color usage, and structured content layout",
        imageContained: true,
      },
      {
        heading: "What Made This Complex",
        body: "Designing for healthcare isn't just a visual challenge. It requires understanding regulatory sensitivities around medical claims, the emotional state of the end user, and the trust signals specific to clinical environments. Every copy decision, color choice, and interaction pattern was evaluated through that lens — the same rigor required when designing digital experiences for pharmaceutical and life sciences clients.\n\nOne of the most critical discoveries came directly from user testing. Our primary audience — older adults — revealed an accessibility gap that wasn't visible in design review. The original brand palette included an orange that failed WCAG AA contrast standards when tested with actual users in that demographic. Participants consistently struggled to read text and CTAs rendered in that color, and engagement with key touchpoints dropped as a result.\n\nRather than overriding the brand color entirely, I made a targeted recommendation: introduce a darkened variant of the orange exclusively for web — dark enough to pass AA contrast thresholds, while preserving the brand's warmth and visual identity across other touchpoints like print and social.",
        image: `${basePath}/audivia-WCAG.png`,
        imageAlt:
          "WCAG AA contrast comparison showing the original #F46931 orange (FAIL, 2.79:1) versus the adjusted #E75C24 (AA, 3.23:1) — illustrating the targeted accessibility fix that preserved brand warmth while passing contrast standards",
        imageContained: true,
      },
      {
        body: "We re-tested with the same user group. The adjusted palette produced a 30% improvement in task completion and positive reception — a direct, measurable result of letting real users, not assumptions, drive design decisions.\n\nAccessibility as a clinical imperative, not a checkbox. For a healthcare audience, WCAG compliance isn't a technical formality — it's the difference between a patient finding the help they need or abandoning the site entirely. This project reinforced that inclusive design and effective healthcare design are the same thing.",
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
    relatedCaseSlugs: ["propelus", "civitas", "arkose-labs"],
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
  {
    slug: "niebla",
    category: "UX Research & Design · AI Implementation · Design Engineering",
    subtitle: "UX Research & Design · AI Implementation · Design Engineering",
    title:
      "Niebla: Designing and Building a Full-Stack Wellness App From Research to Working Code",
    detailTitle: "Niebla: From User Research to Functional App",
    description:
      "Designing and building a full-stack wellness app from research to working code, featuring a WCAG-verified glass design system, AI-generated prompts, Figma shaders, and a structured Claude Code workflow.",
    role: "Lead Designer, Researcher & AI Orchestrator",
    heroImage: `${basePath}/hero-niebla.png`,
    thumbnailImage: `${basePath}/thumnail-niebla.png`,
    heroColor: "#0B0F1A",
    tools: ["Figma", "Figma Shaders", "Next.js", "Claude Code", "Anthropic API", "Design Systems"],
    timeline: "3 Weeks: Research to Working App",
    metrics: "3 Weeks Research to App | 9 Structured Prompts | 100% WCAG AA | 0 Production Bugs",
    tags: [
      { label: "UX Research", variant: "purple" },
      { label: "AI Implementation", variant: "neutral" },
      { label: "Design Systems", variant: "neutral" },
      { label: "Claude Code", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: A Tool I Actually Needed",
        body: "Niebla didn't start as a portfolio piece. It started as a personal need: a way to build breathing pauses into a busy day and process thoughts through writing before sleep. The design challenge was real. Most wellness apps feel either too clinical or too spiritual, too gamified or too empty. None of them felt like mine.\n\nThe engineering challenge was equally real. Could I take a full UX process (research, persona, user journey, design system) and turn it into a working, deployed web app using AI as my development partner? Not a prototype. Not a Figma mock. An actual app with a database, authentication, push notifications, and AI-generated content.\n\nThe answer became Niebla.",
      },
      {
        heading: "What Niebla Does",
        body: "Niebla is a web app with two coexisting modes that serve different moments of the day.\n\nBreathing pauses arrive as gentle push notifications 2–3 times daily. The user opens the app, and the orb (the app's signature visual element) guides them through a 4-7-8 breathing cycle for 2 minutes. No setup, no decisions, no friction.\n\nA nighttime ritual closes the day. The app sends a notification at a user-defined time. If the user chose the writing mode, the Anthropic API generates a personalized reflection prompt based on their recent journal entries. They write for 10 minutes in a distraction-free space. If they chose meditation, the orb guides them for 10 minutes instead.\n\nEverything gets tracked: breathing sessions, writing entries, meditation sessions. It all surfaces as a streak and history that become the emotional hook keeping users engaged.",
        image: `${basePath}/niebla-internal-image.png`,
        imageAlt:
          "Four Niebla screens: the home view with a 3-day streak and last sessions, a weekly planning reference screen, the breathing player with an ambient sound library, and the dashboard showing daily goal progress",
        imageContained: true,
      },
      {
        heading: "The Research Foundation",
        body: "Before designing a single screen, I built the research layer that would inform every decision. Camila is 31, a project coordinator in Bogotá with diagnosed generalized anxiety. Her psychologist recommended self-regulation techniques to complement therapy. She's tried Calm and Headspace. Both felt too spiritual or too gamified. She identifies with \"wellness,\" not \"meditation.\" She abandons apps that don't show visible progress in the first week.\n\nCamila's core insight shaped the entire product: she doesn't want to cure her anxiety. She wants to not let it accumulate until it becomes unmanageable. That's a fundamentally different design brief than most wellness apps are written for.\n\nI mapped the full journey from discovery to reactivation after abandonment, including the stage most products ignore: what happens when a user breaks their streak after 14 days and has to decide whether to come back or delete the app. The design answer is no judgment, no fanfare, no guilt. \"Welcome back\" and a streak that resets to Day 1 quietly. The consistency of the tone across every touchpoint is what makes users return rather than delete.",
        subCards: [
          {
            title: "Notifications Go Silent",
            description:
              "Camila has notifications muted on Android, so the ones that do reach her need to feel worth opening, not generic.",
          },
          {
            title: "A Blank Page Is a Barrier",
            description:
              "Journaling intimidates her. An open-ended blank page isn't an invitation to write. It's a reason to close the app.",
          },
          {
            title: "Wins Need to Be Fast",
            description:
              "She needs small, visible progress within the first week, or she abandons the app like she has with every other wellness tool.",
          },
        ],
        image: `${basePath}/user-persona-niebla.png`,
        imageAlt:
          "User persona document for Camila R., 31, project coordinator in Bogotá with diagnosed anxiety. It documents her motivations, frustrations, behaviors, key usage scenarios, and the three usage modes: breathing breaks, nighttime writing ritual, and traditional meditation",
        imageAlmostFull: true,
        imageLightbox: true,
        imageLightboxZoom: 1.5,
      },
      {
        heading: "The Design System: Glass with Constraints",
        body: "The visual direction came from reference screens I studied: dark backgrounds, lavender and salmon accents, Playfair Display for editorial moments, a navigation system that felt native to mobile. The aesthetic was clear. The execution challenge was technical.\n\nThe orbe, the breathing element at the center of the app, needed to feel alive even before the animation started. I used Figma shaders to build the radial gradient effect inside the orbe: a layered composition with a white highlight at 38% horizontal, a lavender mid-zone, and a deep teal base, creating the illusion of depth and translucency that CSS radial-gradient then reproduced in code. That same shader work informed the glass card surfaces too, including the subtle bloom effect on hover states that makes the glass feel responsive rather than decorative.\n\nThe system was documented as a PRD-style markdown file Claude Code could read directly, not a Figma annotation layer, but a technical specification with:\n\n• CSS custom properties with semicolons, after catching that missing semicolons silently break CSS variables\n\n• @supports (backdrop-filter: blur(1px)) fallback patterns for browsers that don't support glass\n\n• @media (prefers-reduced-motion: no-preference) wrapping every animation, not the inverse pattern\n\n• Explicit HTML structure for the orbe halos using named classes instead of :nth-child, because DOM order changes break nth-child selectors silently\n\n• A separate --color-border-focus-solid token from the rgba focus ring, because rgba fails contrast in contexts of unknown luminance like modals",
      },
      {
        heading: "WCAG AA: Mathematically Verified",
        body: "Glassmorphism has a known accessibility problem: semi-transparent surfaces over dark backgrounds can fail contrast ratios without anyone noticing. I calculated every token mathematically using the WCAG 2.1 relative luminance formula, with no eyeballing and no browser plugins.\n\nThe two brand colors from the reference screens failed immediately as button backgrounds, so I derived corrected variants that pass AA while preserving the palette's visual identity. The muted text token needed the same scrutiny, since its rgba surface made the true contrast easy to miscalculate. Every token below is checked against the background it actually renders on.",
        colorSwatches: [
          {
            hex: "#869CF4",
            name: "Lavender (original)",
            ratio: "2.60:1",
            passes: false,
          },
          {
            hex: "#FF9F92",
            name: "Salmon (original)",
            ratio: "1.98:1",
            passes: false,
          },
          {
            hex: "#5468D4",
            name: "Lavender (corrected)",
            ratio: "4.87:1",
            passes: true,
          },
          {
            hex: "#B8483C",
            name: "Salmon (corrected)",
            ratio: "5.20:1",
            passes: true,
          },
          {
            hex: "#9BA3B8",
            name: "Muted text (darkest glass surface)",
            ratio: "5.76:1",
            passes: true,
            kind: "text",
          },
        ],
        colorSwatchesCaption: "12 color tokens verified. 0 estimated. 100% WCAG AA.",
      },
      {
        heading: "The AI Workflow: Structured Prompts for Claude Code",
        body: "The app was built using Claude Code as the development partner, with a 9-prompt structured workflow I designed as its own artifact. The key insight: Claude Code performs dramatically better when given a single, well-scoped task with explicit references to specific document sections than when given an open-ended brief. Each prompt referenced exact section numbers in the PRD, specified the HTML structure required, named the CSS classes to use, and defined the edge case behavior explicitly.\n\nWriting the PRD rigorously surfaced problems that would have caused production bugs:\n\n• The cron job for push notifications was initially a stub with comments. Writing it completely meant handling 410 Gone responses (invalid push subscriptions) and cleaning them from the database automatically.\n\n• The streak calculation used new Date() without timezone context, which would have broken for users in any timezone other than the server's. The function was rewritten to accept a timezone string and use toLocaleDateString for all comparisons.\n\n• The /api/generate-prompt endpoint had no auth, so any unauthenticated request could consume the Anthropic API key. Adding JWT verification before the Anthropic call was a one-line fix that the document review caught.\n\nThe writing ritual's core feature is that the prompt doesn't repeat. The API call passes the user's name and the last 3 journal entries as context, asking Claude to generate a single open question in under 25 words: soft, not prescriptive, inviting release rather than problem-solving. 10 fallback prompts handle API failures, selected at random with no repetition and tracked by a module-level variable that remembers the last index used.",
        subCards: [
          {
            title: "niebla-prd.md",
            description:
              "The complete Supabase schema, Row Level Security policies, every API endpoint (including auth verification on each route), the push notification cron job, the timezone-aware streak function, and a \"do not build in v1\" list.",
          },
          {
            title: "niebla-design-system.md",
            description:
              "All CSS tokens, component CSS with every interactive state, the orbe's exact HTML structure, and the full WCAG verification table.",
          },
          {
            title: "niebla-user-journey.md",
            description:
              "The 8-stage journey from discovery to reactivation, with the emotional state at each stage and the design decisions that support each transition.",
          },
        ],
      },
      {
        heading: "The Result: A Working App",
        body: "Niebla shipped with:\n\n• 8 screens fully implemented in Next.js 14 with App Router\n\n• Supabase for auth and PostgreSQL with RLS on all 5 tables\n\n• Framer Motion for the orbe breathing animation and page transitions\n\n• Radix UI primitives for the exit confirmation dialog and settings toggles, used for behavior only, with no styles\n\n• Web Push + Vercel Cron for scheduled notifications with timezone-aware delivery\n\n• Anthropic API generating personalized nightly reflection prompts\n\n• Lucide React icons imported individually, never as a wildcard",
      },
      {
        heading: "What This Showcase Demonstrates",
        body: "End-to-end ownership, technical design thinking, and AI used as a multiplier rather than a replacement: the four qualities this project was built to prove.",
        subCards: [
          {
            title: "End-to-End Ownership",
            description:
              "Research → persona → user journey → design system → PRD → prompts → working app. No handoff to a developer. No gap between design intent and implementation.",
          },
          {
            title: "Technical Design Thinking",
            description:
              "The decisions that matter most here are invisible to the user: the WCAG math, the @supports fallback, the timezone-aware streak, the auth on every API route. Catching these before they become production bugs is a different kind of collaborator.",
          },
          {
            title: "AI as a Multiplier, Not a Replacement",
            description:
              "Claude Code built the app. I designed the system that told it exactly what to build, caught the gaps in every document review, and made the aesthetic decisions a language model can't. The 9-prompt architecture is the artifact, not just the app it produced.",
          },
          {
            title: "Figma as a Technical Tool",
            description:
              "Using shaders in Figma to prototype the glass and orbe effects before implementing them in CSS meant the code was a translation, not an experiment. The design system document was the handoff, and it was written for a machine.",
          },
        ],
      },
    ],
    businessImpact: [
      {
        headline: "3 Weeks",
        description:
          "From user research to a fully working, deployed app: research, persona, design system, PRD, prompts, and code, with no handoff to a developer.",
      },
      {
        headline: "100% WCAG AA",
        description:
          "Every one of the 12 color tokens in the glass design system mathematically verified against the WCAG 2.1 relative luminance formula, with zero estimated.",
      },
      {
        headline: "9 Prompts",
        description:
          "A structured, 9-prompt Claude Code workflow, each scoped to a single phase and referencing exact PRD section numbers, replaced an open-ended AI brief.",
      },
      {
        headline: "0 Production Bugs",
        description:
          "Rigorous PRD review caught the incomplete notification cron job, the timezone-unaware streak calculation, and an unauthenticated API route before any of them reached production.",
      },
      {
        headline: "8 Screens",
        description:
          "Login, onboarding, home, breathe, ritual, journal, history, and settings: a complete, deployed app, not a prototype.",
      },
    ],
    relatedCaseSlugs: ["civitas", "cleaning-app", "audivia"],
  },
];

// Controls display order across all pages
export const displayOrder = [
  "civitas",
  "niebla",
  "propelus",
  "cleaning-app",
  "continuing-education",
  "arkose-labs",
  "audivia",
  "fine-raw",
  "urban-bites",
];

export function getOrderedShowCases(limit?: number): ShowCase[] {
  const ordered = displayOrder
    .map((slug) => showCases.find((cs) => cs.slug === slug))
    .filter((cs): cs is ShowCase => cs !== undefined);
  return limit ? ordered.slice(0, limit) : ordered;
}

export function getShowCaseBySlug(slug: string): ShowCase | undefined {
  return showCases.find((cs) => cs.slug === slug);
}

export function getRelatedShowCases(slugs: string[]): ShowCase[] {
  return slugs
    .map((slug) => getShowCaseBySlug(slug))
    .filter((cs): cs is ShowCase => cs !== undefined);
}
