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

export const caseStudies: CaseStudy[] = [
  {
    slug: "cleaning-app",
    category: "AI Implementation & Rapid Prototyping",
    subtitle: "AI Implementation & Rapid Prototyping",
    title: "From Concept to Functional MVP in 21 Days",
    description:
      "Orchestrating AI tools and design methodology to deliver a fully functional cleaning service app — from initial research to deployable prototype in record time.",
    role: "Lead Product Designer & AI Orchestrator",
    heroImage: "/cleaning-app-case.png",
    thumbnailImage: "/cleaning-app-case.png",
    heroColor: "#0F172A",
    tools: ["Claude", "Figma", "ChatGPT v4", "Prompt Engineering"],
    timeline: "3 Weeks: Concept & Functional App",
    metrics: "MVP in 3 weeks | 40% Workflow Efficiency | 100% Functional Logic",
    tags: [
      { label: "AI Strategy", variant: "purple" },
      { label: "Claude", variant: "neutral" },
      { label: "Figma", variant: "neutral" },
      { label: "Product Design", variant: "neutral" },
      { label: "Vibe Coding", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: Velocity vs. Viability",
        body: "The client needed a fully functional MVP for a cleaning service platform — not just wireframes or clickable prototypes, but a working application with real logic, booking flows, and service management. The timeline? Three weeks. Traditional development would have required months of backend development, QA cycles, and iterative design rounds. The challenge was to prove that AI-accelerated workflows could produce production-quality results without sacrificing user experience or business logic integrity.",
      },
      {
        heading: "Strategic Approach: The 60/40 Hybrid Workflow",
        body: "Rather than choosing between AI and traditional methods, I developed a hybrid workflow: 60% AI-generated foundations with 40% human refinement. Claude handled prompt-engineered UX copy, user flow logic, and component specifications. Figma was used for high-fidelity design with a systematic component architecture. ChatGPT v4 assisted with technical documentation and edge case analysis.",
      },
      {
        heading: "Technical Deep Dive",
        body: "The implementation strategy centered on three key pillars that enabled the compressed timeline without compromising quality.",
        subCards: [
          {
            title: "Prompt Engineering for UX",
            description:
              "Developed structured prompts that generated user flows, microcopy, and interaction patterns aligned with UX best practices.",
          },
          {
            title: "Correcting AI Hallucinations",
            description:
              "Implemented a verification layer where each AI output was validated against business requirements and usability heuristics.",
          },
          {
            title: "The 3-Week Sprint",
            description:
              "Week 1: Research & architecture. Week 2: Design system & core flows. Week 3: Integration, testing & refinement.",
          },
        ],
      },
    ],
    businessImpact: [
      {
        headline: "60%",
        description: "Reduction in traditional development costs",
      },
      {
        headline: "3 weeks",
        description: "Time-to-Market vs. 16 weeks traditional",
      },
      {
        headline: "100%",
        description: "Functional logic coverage at MVP launch",
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
      "Building a comprehensive design system that eliminated design debt and created a seamless bridge between design decisions and engineering implementation.",
    role: "Senior Product Designer & Design Systems Lead",
    heroImage: "/propelus-case.png",
    thumbnailImage: "/propelus-case.png",
    heroColor: "#0A2E1C",
    tools: ["Figma", "Tailwind CSS", "React", "Storybook"],
    timeline: "8 Weeks: System Architecture & Implementation",
    metrics: "20+ Pages Impacted | Figma Variables | 2% Handoff Friction",
    tags: [
      { label: "Design Systems", variant: "purple" },
      { label: "Tailwind", variant: "neutral" },
      { label: "React", variant: "neutral" },
      { label: "Design Engineering", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: Eliminating Design Debt",
        body: "Propelus had accumulated significant design debt across 20+ product pages. Inconsistent component usage, undefined spacing rules, and a disconnect between Figma designs and coded components created friction in every sprint. Engineers spent hours interpreting design intent, and designers were rebuilding components that already existed in slightly different forms.",
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
      "Designing a modular component system that gave non-technical users the power to customize their continuing education platform without developer intervention.",
    role: "Lead Product Designer",
    heroImage: "/continuing-education-company-case.png",
    thumbnailImage: "/continuing-education-company-case.png",
    heroColor: "#0F1729",
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
      "A comprehensive UX audit and strategic redesign that transformed Arkose Labs' web presence from a technical showcase to a conversion-focused narrative for enterprise decision-makers.",
    role: "Senior Product Designer & UX Strategist",
    heroImage: "/arkose-labs-case.png",
    thumbnailImage: "/arkose-labs-case.png",
    heroColor: "#1A0A2E",
    tools: ["Figma", "Hotjar", "Google Analytics", "UserTesting"],
    timeline: "6 Weeks: Audit, Strategy & Redesign",
    metrics: "Reduced Bounce Rate | Strategic Mega Menu | CRO-Focused Narratives",
    tags: [
      { label: "UX Audit", variant: "purple" },
      { label: "CRO", variant: "neutral" },
      { label: "B2B Strategy", variant: "neutral" },
    ],
    contentSections: [
      {
        heading: "The Challenge: High Traffic, Low Intent",
        body: "Arkose Labs had strong organic traffic but poor conversion metrics. Visitors were landing on technically dense pages that spoke to engineers rather than the C-suite decision-makers who controlled purchasing budgets. The website was winning the SEO game but losing the conversion game — a classic case of traffic without intent alignment.",
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
