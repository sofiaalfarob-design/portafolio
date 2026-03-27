"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/case-studies";
import TagPill from "@/components/ui/TagPill";

export default function CompactCaseCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card-hover group overflow-hidden rounded-2xl border border-gray-100 bg-white"
    >
      <Link href={`/case-studies/${study.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={study.thumbnailImage}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-5">
          <p className="mb-1 text-xs font-medium text-primary">
            {study.category}
          </p>
          <h3 className="font-heading text-sm font-bold text-text-primary">
            {study.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {study.tags.slice(0, 3).map((tag) => (
              <TagPill key={tag.label} label={tag.label} variant={tag.variant} />
            ))}
          </div>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors group-hover:text-primary-light">
            View project
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
