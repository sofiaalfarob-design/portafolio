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
      <h2 className="font-['Inter'] text-[48px] not-italic font-normal leading-[57.6px] text-[#171717]">
        {section.heading}
      </h2>
      <p className="mt-4 w-full font-['Inter'] text-[16px] not-italic font-normal leading-[24px] text-[#171717]">
        {section.body}
      </p>

      {section.subCards && section.subCards.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {section.subCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-200 bg-white p-6"
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

      {section.image && (
        <div
          className={`mt-8 overflow-hidden rounded-2xl ${
            section.imageContained ? "mx-auto max-w-2xl" : "-mx-8 md:-mx-16 rounded-none"
          }`}
        >
          <Image
            src={section.image}
            alt={section.heading}
            width={1200}
            height={750}
            className="w-full object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            quality={90}
          />
        </div>
      )}
    </motion.div>
  );
}
