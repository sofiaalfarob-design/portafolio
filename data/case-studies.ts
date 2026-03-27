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
    relatedCaseSlugs: ["propelus", "continuing-education", "arkose-labs"],
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
    relatedCaseSlugs: ["cleaning-app", "continuing-education", "arkose-labs"],
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
    relatedCaseSlugs: ["cleaning-app", "propelus", "arkose-labs"],
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
    relatedCaseSlugs: ["cleaning-app", "propelus", "continuing-education"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getRelatedCaseStudies(slugs: string[]): CaseStudy[] {
  return slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((cs): cs is CaseStudy => cs !== undefined);
}
