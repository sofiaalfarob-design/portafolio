"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/case-studies";

export default function HeroCaseDetail({ study }: { study: CaseStudy }) {
  return (
    <section
      className="relative overflow-hidden pb-32 pt-28 md:pt-36"
      style={{ backgroundColor: study.heroColor }}
    >
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {study.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="text-sm font-medium text-primary-light">
            {study.subtitle}
          </p>
          <h1 className="mt-2 max-w-3xl font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {study.detailTitle || study.title}
          </h1>
          <p className="mt-4 text-sm text-white/70">{study.role}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mx-auto mt-12 max-w-container px-6"
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
