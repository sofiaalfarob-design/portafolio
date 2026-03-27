export interface Experiment {
  title: string;
  status: "Completed" | "In Progress" | "Planned";
  description: string;
  image: string;
  tags: string[];
}

import basePath from "@/lib/basePath";

export const experiments: Experiment[] = [
  {
    title: "Figma Automation with Custom Scripts",
    status: "Completed",
    description:
      "Developed plugins and scripts using the Figma API that automatically generate component documentation, export design tokens to code, and sync changes with development repositories. 70% reduction in manual handoff work.",
    image: `${basePath}/card-figma-automation-with-custom-scripts.png`,
    tags: ["AI Implementation", "SaaS UX", "Design Systems", "Behavioral Analytics"],
  },
  {
    title: "Interactive Prototyping for Mobile Apps",
    status: "In Progress",
    description:
      "Creating high-fidelity prototypes with advanced interactions and animations to simulate real user experiences on mobile devices, enabling faster feedback and iteration cycles.",
    image: `${basePath}/card-interactive-orototyping-for-mobile-apps.png`,
    tags: ["Prototyping", "Mobile", "Figma"],
  },
  {
    title: "Accessibility Audit and Improvements",
    status: "Planned",
    description:
      "Comprehensive review of existing design assets to identify accessibility barriers, followed by actionable recommendations and implementation to ensure compliance with WCAG standards.",
    image: `${basePath}/images/the-experimental-lab/card-accessibility-audit-and-improvements.png`,
    tags: ["UX Design", "Mobile Apps", "Prototyping", "User Engagement"],
  },
];
