"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiments } from "@/data/experiments";
import SectionBadge from "./ui/SectionBadge";
import TagPill from "./ui/TagPill";

const statusStyles: Record<string, string> = {
  Completed: "text-green-700 bg-green-100",
  "In Progress": "text-amber-700 bg-amber-100",
  Planned: "text-gray-600 bg-gray-100",
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ExperimentsSection() {
  return (
    <section className="bg-card-bg py-20 md:py-28" id="lab">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
        >
          <div>
            <SectionBadge label="The Experimental Lab" />
            <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
              Technical Experimentation &<br />
              Continuous Innovation
            </h2>
            <p className="mt-4 max-w-2xl text-base text-text-secondary md:text-lg">
              Deep dives into technology, experiments with AI-first tooling to
              push creative and technical boundaries forward.
            </p>
          </div>

          <a
            href="#contact"
            className="self-start rounded-full border-2 border-gray-300 px-6 py-2.5 text-sm font-semibold text-text-primary transition-all hover:border-primary hover:text-primary"
          >
            Book a Call
          </a>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((exp, i) => (
            <motion.article
              key={exp.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              className="card-hover group overflow-hidden rounded-2xl border border-gray-100 bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base font-bold text-text-primary">
                  {exp.title}
                </h3>
                <span
                  className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[exp.status]}`}
                >
                  {exp.status}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
