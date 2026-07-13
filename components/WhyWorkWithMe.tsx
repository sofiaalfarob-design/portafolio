"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";

const items = [
  {
    number: "01",
    title: "Startup & Enterprise Experience",
    description:
      "Navigated from 5-person early-stage teams to 500+ employee organizations, adapting methodologies based on context and required velocity.",
  },
  {
    number: "02",
    title: "Cross-Functional Leadership",
    description:
      "Works fluidly across design, engineering, product, and data. Ensures alignment from ideation through launch with clear communication and shared ownership.",
  },
  {
    number: "03",
    title: "Continuous Learning Mindset",
    description:
      "Stays on the cutting edge of design and AI tools, constantly experimenting with new technologies and integrating them into practical workflows.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="bg-card-bg py-20 md:py-28" id="about">
      <div className="mx-auto max-w-container px-6">

        {/* Asymmetric header: title left, prose right */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <SectionBadge label="About Me" />
            <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
              Why Work<br className="hidden md:block" /> With Me?
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base leading-relaxed text-text-secondary md:col-span-7 md:text-lg md:pb-1"
          >
            I don&apos;t just design screens — I architect digital ecosystems.
            Pairing deep product design expertise with hands-on AI
            implementation skills, delivering end-to-end solutions that move
            fast without sacrificing craft.
          </motion.p>
        </div>

        {/* Editorial numbered list */}
        <div className="mt-16 md:mt-20">
          {items.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group -mx-4 grid grid-cols-1 gap-3 rounded-xl border-t border-gray-200 px-4 py-8 transition-colors duration-300 hover:bg-primary-light/5 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <span className="font-heading text-5xl font-bold text-primary md:col-span-1">
                {item.number}
              </span>
              <h3 className="font-heading text-xl font-bold text-text-primary transition-colors duration-300 group-hover:text-primary md:col-span-4">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-text-secondary md:col-span-7">
                {item.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-gray-200" />
        </div>

      </div>
    </section>
  );
}
