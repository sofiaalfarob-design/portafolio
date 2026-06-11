"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ContentSection as ContentSectionType } from "@/data/show-cases";
import LightboxImage from "@/components/ui/LightboxImage";

const bodyClass = "w-full font-['Inter'] text-[16px] not-italic font-normal leading-[24px] text-[#171717]";

function renderBody(body: string) {
  const chunks = body.split(/\n\n/).filter(Boolean);
  const elements: React.ReactNode[] = [];
  let bullets: string[] = [];

  const flushBullets = (key: string) => {
    if (bullets.length === 0) return;
    elements.push(
      <ul key={key} className="mt-4 space-y-2 list-none pl-0">
        {bullets.map((b, i) => (
          <li key={i} className={`flex gap-2 ${bodyClass}`}>
            <span className="shrink-0 mt-px">•</span>
            <span>{b.replace(/^•\s*/, "")}</span>
          </li>
        ))}
      </ul>
    );
    bullets = [];
  };

  chunks.forEach((chunk, i) => {
    const text = chunk.trim();
    if (text.startsWith("•")) {
      bullets.push(text);
    } else {
      flushBullets(`ul-${i}`);
      elements.push(
        <p key={i} className={`mt-4 ${bodyClass}`}>
          {text}
        </p>
      );
    }
  });

  flushBullets("ul-end");
  return <>{elements}</>;
}

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
      {section.heading && (
        <h2 className="font-body text-[28px] leading-[36px] md:text-[48px] not-italic font-normal md:leading-[57.6px] text-[#171717]">
          {section.heading}
        </h2>
      )}
      {renderBody(section.body)}

      {section.subCards && section.subCards.length > 0 && (
        <div className={`mt-8 grid ${
          section.subCards.length === 4
            ? "gap-6 sm:grid-cols-2"
            : "gap-4 sm:grid-cols-2 md:grid-cols-3"
        }`}>
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

      {section.topImage && (
        <div
          className={`mt-8 overflow-hidden rounded-2xl ${
            section.topImageContained
              ? "mx-auto max-w-2xl"
              : section.topImageContainedLg
              ? "mx-auto max-w-3xl"
              : section.topImageAlmostFull
              ? "mx-auto w-[85%]"
              : "-mx-8 md:-mx-16 rounded-none"
          }`}
        >
          <Image
            src={section.topImage}
            alt={section.topImageAlt || section.heading || ""}
            width={1200}
            height={750}
            className="w-full object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            quality={90}
          />
        </div>
      )}

      {section.image && (
        <div
          className={`mt-8 overflow-hidden rounded-2xl ${
            section.imageContained
              ? "mx-auto max-w-2xl"
              : section.imageContainedLg
              ? "mx-auto max-w-3xl"
              : section.imageAlmostFull
              ? "mx-auto w-[85%]"
              : "-mx-8 md:-mx-16 rounded-none"
          }`}
        >
          {section.imageLightbox ? (
            <LightboxImage
              src={section.image}
              alt={section.imageAlt || section.heading || ""}
              className="w-full object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              quality={90}
              zoom={section.imageLightboxZoom}
            />
          ) : (
            <Image
              src={section.image}
              alt={section.imageAlt || section.heading || ""}
              width={1200}
              height={750}
              className="w-full object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              quality={90}
            />
          )}
        </div>
      )}
    </motion.div>
  );
}
