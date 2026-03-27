"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudies } from "@/data/case-studies";
import SectionBadge from "./ui/SectionBadge";
import TagPill from "./ui/TagPill";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ProjectsSection() {
  return (
    <section className="bg-white pt-10 pb-20 md:pt-12 md:pb-28" id="projects">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge label="Case Studies" />
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            High-Impact Projects
          </h2>
          <p className="mt-4 max-w-2xl text-base text-text-secondary md:text-lg">
            Led strategic initiatives combining product design, technical
            implementation, and business metrics in scalable SaaS environments.
          </p>
          <Link
            href="/case-studies"
            className="mt-6 inline-block rounded-full bg-dark px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-dark-hover"
          >
            View more projects
          </Link>
        </motion.div>

        <div className="mt-10 rounded-3xl bg-gray-50 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((project, i) => (
              <motion.article
                key={project.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={cardVariants}
                className="card-hover group overflow-hidden rounded-2xl border border-gray-100 bg-white"
              >
                <Link href={`/case-studies/${project.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.thumbnailImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                  </div>

                  <div className="p-6">
                    <p className="mb-2 text-sm font-medium text-primary">
                      {project.category}
                    </p>
                    <h3 className="font-heading text-lg font-bold text-text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {project.description}
                    </p>
                    <p className="mt-3 text-xs text-text-secondary">
                      {project.metrics}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <TagPill
                          key={tag.label}
                          label={tag.label}
                          variant={tag.variant}
                        />
                      ))}
                    </div>
                    <div className="mt-4 border-t border-gray-100 pt-4">
                      <span className="block w-full rounded-full border border-gray-300 py-2.5 text-center text-sm font-semibold text-text-primary transition-all group-hover:border-primary-hover group-hover:text-primary-hover">
                        View the Project
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
