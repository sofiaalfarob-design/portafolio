export interface Experiment {
  title: string;
  status: "Completed" | "In Progress" | "Planned";
  description: string;
  image: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
}

import basePath from "@/lib/basePath";

export const experiments: Experiment[] = [
  {
    title: "Designing a Full SaaS with Claude Design → Claude Code",
    status: "Completed",
    description:
      "End-to-end experiment designing a complex SaaS product using AI-native workflows. Started with full UX research — market analysis, user interviews, functionality mapping, and detailed user flows structured as AI context documents. Built a complete design system to feed Claude Design, then used it to generate a full, complex SaaS product. Final output exported to Claude Code for functional implementation. A fully AI-orchestrated design-to-code pipeline.",
    image: `${basePath}/card-saas-claude-design-code.png`,
    tags: ["Claude Design", "Claude Code", "Design Systems", "UX Research", "AI Workflow"],
  },
  {
    title: "Figma MCP + Claude Code — 35-Page Document Generation",
    status: "Completed",
    description:
      "Used Claude Code with the Figma MCP to generate a complete 35+ page Figma document from scratch. Provided full context: user flows, required pages with breakpoints and modes, and a detailed guide on how to use the existing design system tokens and atomic components. Claude Code built each page gradually using the correct tokens, components, and layout rules — producing a production-ready file without manual screen-by-screen design.",
    image: `${basePath}/card-figma-mcp-claude-code.png`,
    tags: ["MCP", "Claude Code", "Figma", "Atomic Design", "Design Tokens", "AI Automation"],
  },
  {
    title: "Accessibility Audit and Improvements",
    status: "Completed",
    description:
      "Conducted a full WCAG AA accessibility audit for a healthcare client, identifying critical contrast failures with older adult users. Iterated the brand color system to pass AA standards while preserving visual identity — resulting in a 30% improvement in task completion on re-test. See the Audivia showcase for full details.",
    image: `${basePath}/images/the-experimental-lab/card-accessibility-audit-and-improvements.png`,
    tags: ["Healthcare UX", "WCAG 2.1", "Accessibility", "User Testing"],
    link: "/showcases/audivia",
    linkLabel: "View Audivia showcase →",
  },
];
