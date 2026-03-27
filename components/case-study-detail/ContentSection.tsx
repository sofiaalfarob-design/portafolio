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
    >
      <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
        {section.heading}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
        {section.body}
      </p>

      {section.image && (
        <div className="mt-8 overflow-hidden rounded-2xl">
          <Image
            src={section.image}
            alt={section.heading}
            width={1200}
            height={750}
            className="w-full object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      )}

      {section.subCards && section.subCards.length > 0 && (
        <ul className="mt-6 space-y-3">
          {section.subCards.map((card) => (
            <li key={card.title} className="text-base leading-relaxed text-text-secondary">
              <span className="font-semibold text-text-primary">{card.title}:</span>{" "}
              {card.description}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
