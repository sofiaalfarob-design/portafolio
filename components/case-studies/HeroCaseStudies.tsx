"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";

export default function HeroCaseStudies() {
  return (
    <section className="bg-white pb-16 pt-28 md:pt-36">
      <div className="mx-auto max-w-container px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge label="Case Studies" />
          <h1 className="mt-4 font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            Selected Case Studies: Solving Business
            <br />
            Challenges Through Design.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary md:text-lg">
            Explore how strategic design, AI implementation, and systems thinking
            drive measurable results across SaaS, B2B, and AI-driven products.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-dark px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-dark-hover"
            >
              Get in touch
            </a>
            <a
              href="https://calendly.com/sofia-alfablan/let-s-talk"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-gray-300 px-6 py-2.5 text-sm font-semibold text-text-primary transition-all hover:border-primary-hover hover:text-primary-hover"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
