export interface Experiment {
  title: string;
  status: "Completed" | "In Progress" | "Planned";
  description: string;
  image: string;
  tags: string[];
}

export const experiments: Experiment[] = [
  {
    title: "Figma AI Automation with Cursor Scripts Composer",
    status: "Completed",
    description:
      "Automated design workflows using custom Cursor AI scripts integrated with Figma plugins. Reduced repetitive tasks by 60% and established a reusable automation template for design teams.",
    image: "/cleaning-app-case.png",
    tags: ["Figma", "Cursor AI", "Automation"],
  },
  {
    title: "Interactive Prototyping for Mobile Apps in Figma",
    status: "In Progress",
    description:
      "Advanced prototyping techniques combining Figma's interactive components with complex micro-interactions and conditional logic for realistic mobile app simulations.",
    image: "/propelus-case.png",
    tags: ["Prototyping", "Mobile", "Figma"],
  },
  {
    title: "Accessibility Audit and Instrumentation",
    status: "Planned",
    description:
      "Comprehensive accessibility audit combining automated testing tools with manual expert review. Building an A11y scoring framework aligned with WCAG 2.1 AA standards.",
    image: "/arkose-labs-case.png",
    tags: ["A11y", "WCAG", "Audit"],
  },
];
