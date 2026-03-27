"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/case-studies";


export default function HeroCaseDetail({ study }: { study: CaseStudy }) {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-0"
      style={{ backgroundColor: study.heroColor }}
    >
      <div className="mx-auto max-w-container px-6 text-center">
        {/* Tool pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-wrap justify-center gap-2"
        >
          {study.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full px-4 py-1.5 text-xs font-semibold bg-violet-500 text-white"
            >
              {tool}
            </span>
          ))}
        </motion.div>

        {/* Text stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-sm font-medium text-white/60 uppercase tracking-widest">
            {study.subtitle}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
            {study.detailTitle || study.title}
          </h1>
          <p className="mt-4 text-sm text-white/50">{study.role}</p>
        </motion.div>

        {/* Hero image — floats up from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-16 mx-auto max-w-5xl"
        >
          <Image
            src={study.heroImage}
            alt={`${study.detailTitle || study.title} — product design showcase`}
            width={1200}
            height={800}
            className="w-full object-contain drop-shadow-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            quality={90}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
