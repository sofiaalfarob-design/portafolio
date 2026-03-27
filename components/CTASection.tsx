"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import basePath from "@/lib/basePath";
import SectionBadge from "./ui/SectionBadge";

export default function CTASection() {
  return (
    <section id="contact" className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-container rounded-2xl bg-bg-muted px-8 py-16 text-center md:px-16"
      >
        <SectionBadge label="Get in touch" />
        <h2 className="mt-4 text-3xl font-bold text-text-primary md:text-4xl">
          Ready to Accelerate Your Product?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          Whether you need strategic design leadership, AI implementation
          expertise, or a scalable design system — let&apos;s build something
          remarkable together.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/sofia-alfaro-designer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
          <a
            href="mailto:sofia.alfablan@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary-light px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:bg-primary-light-hover"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Send Email
          </a>
          <a
            href="https://calendly.com/sofia-alfablan/let-s-talk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-text-primary px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:bg-dark-hover hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
            Book a Call
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-text-secondary">
          <a
            href="Curriculum-Sofia-Alfaro.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 underline transition-colors hover:text-text-primary"
          >
            <Image src={`${basePath}/download-pdf.png`} alt="" width={14} height={14} />
            Download Resume (PDF)
          </a>
          <a
            href="https://github.com/sofiaalfarob-design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 underline transition-colors hover:text-text-primary"
          >
            <Image src={`${basePath}/github.png`} alt="" width={14} height={14} />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
