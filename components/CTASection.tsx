"use client";

import { motion } from "framer-motion";
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
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
          <a
            href="mailto:sofia.alfablan@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send Email
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border-2 border-text-primary px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:bg-text-primary hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book a Call
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-text-secondary">
          <a href="#" className="underline transition-colors hover:text-text-primary">
            Download Resume (PDF)
          </a>
          <a href="#" className="underline transition-colors hover:text-text-primary">
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
