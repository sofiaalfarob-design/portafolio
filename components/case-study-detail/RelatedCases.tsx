"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/case-studies";
import { getRelatedCaseStudies } from "@/data/case-studies";
import SectionBadge from "@/components/ui/SectionBadge";
import CompactCaseCard from "./CompactCaseCard";

export default function RelatedCases({
  relatedSlugs,
}: {
  relatedSlugs: string[];
}) {
  const related = getRelatedCaseStudies(relatedSlugs);

  if (related.length === 0) return null;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start justify-between"
        >
          <div>
            <SectionBadge label="Other projects" />
            <h2 className="mt-4 font-heading text-2xl font-bold text-text-primary md:text-3xl">
              See our work
            </h2>
            <p className="mt-2 text-text-secondary">
              Explore more case studies and projects.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="rounded-full border-2 border-gray-300 px-5 py-2 text-sm font-semibold text-text-primary transition-all hover:border-primary hover:text-primary"
          >
            View all
          </Link>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((study, i) => (
            <CompactCaseCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
