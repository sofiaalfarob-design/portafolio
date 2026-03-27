"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionBadge from "./ui/SectionBadge";

const iconMap: Record<string, string> = {
  design: "/design.svg",
  tech: "/technologies.svg",
  systems: "/design-systems.svg",
  strategy: "/strategy.svg",
  research: "/research.svg",
  soft: "/soft-skills.svg",
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function SkillsSection() {
  return (
    <section className="bg-white py-20 md:py-28" id="tech-stack">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionBadge label="Tech Stack" />
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            Skills & Methodology
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary md:text-lg">
            A hybrid profile combining design tools, AI-ready technology stack,
            and a high-velocity R&D commitment to ensure every project has a
            foundation of rigor.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="card-hover rounded-2xl border border-primary-light/30 bg-primary-light/5 p-6"
            >
              <div className="mb-3">
                <Image
                  src={iconMap[category.icon]}
                  alt={category.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-heading text-base font-bold text-text-primary">
                {category.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "#5e5e5e" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
