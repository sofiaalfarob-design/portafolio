"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ContentSection as ContentSectionType } from "@/data/case-studies";

export default function ContentSection({
  section,
}: {
  section: ContentSectionType;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-bg-muted p-8 md:p-12 my-6"
    >
      <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
        {section.heading}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
        {section.body}
      </p>

      {section.image && (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={section.image}
            alt={section.heading}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      )}

      {section.subCards && section.subCards.length > 0 && (
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {section.subCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-gray-100 bg-bg-muted p-6"
            >
              <h3 className="font-heading text-base font-bold text-text-primary">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
