"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ShowCase } from "@/data/show-cases";
import TagPill from "@/components/ui/TagPill";

export default function ShowCaseCard({
  study,
  index,
}: {
  study: ShowCase;
  index: number;
}) {
  return (
    <motion.article
      custom={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="card-hover group overflow-hidden rounded-2xl border border-gray-100 bg-white"
    >
      <Link href={`/showcases/${study.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={study.thumbnailImage}
            alt={`${study.title} — ${study.category} showcase preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
          />
        </div>
        <div className="p-6">
          <p className="mb-2 text-sm font-medium text-primary">
            {study.category}
          </p>
          <h3 className="font-heading text-lg font-bold text-text-primary">
            {study.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {study.description}
          </p>
          <p className="mt-3 text-xs text-text-secondary">{study.metrics}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <TagPill key={tag.label} label={tag.label} variant={tag.variant} />
            ))}
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-primary-hover">
              View this Project
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
