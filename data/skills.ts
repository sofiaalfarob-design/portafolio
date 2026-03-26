export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: "design",
    title: "Design & Prototyping Tools",
    skills: [
      "Figma (Advanced + API/Plugins)",
      "Adobe Creative Suite",
      "Framer",
      "Principle",
      "After Effects",
    ],
  },
  {
    icon: "tech",
    title: "Technologies & AI Implementation",
    skills: [
      "Prompt Engineering",
      "ChatGPT / Claude API",
      "HTML / CSS / JavaScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    icon: "systems",
    title: "Design Systems & Architecture",
    skills: [
      "Token Systems & Theming",
      "Component Libraries",
      "Atomic Design",
      "Accessibility (WCAG 2.1)",
      "Cross-platform Consistency",
    ],
  },
  {
    icon: "strategy",
    title: "Processes & Strategy",
    skills: [
      "Agile / Scrum / Kanban",
      "Design Thinking",
      "Jobs-to-be-Done (JTBD)",
      "User Story Mapping",
      "Stakeholder Management",
    ],
  },
  {
    icon: "research",
    title: "Research & Validation",
    skills: [
      "User Research & Interviews",
      "Usability Testing",
      "A/B Testing",
      "Analytics & Data",
      "Competitive Analysis",
    ],
  },
  {
    icon: "soft",
    title: "Soft Skills",
    skills: [
      "Cross-functional Collaboration",
      "Emotional Intelligence",
      "Project Management",
      "Mentoring & Coaching",
      "Continuous Learning",
    ],
  },
];
