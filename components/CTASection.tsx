"use client";

import Image from "next/image";
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
            <Image src="/linkedin.png" alt="" width={16} height={16} />
            Connect on LinkedIn
          </a>
          <a
            href="mailto:sofia.alfablan@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary-light px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:opacity-90"
          >
            <Image src="/email.png" alt="" width={16} height={16} />
            Send Email
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border-2 border-text-primary px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:bg-text-primary hover:text-white"
          >
            <Image src="/schedule-a-call.png" alt="" width={16} height={16} />
            Book a Call
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-text-secondary">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 underline transition-colors hover:text-text-primary"
          >
            <Image src="/download-pdf.png" alt="" width={14} height={14} />
            Download Resume (PDF)
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 underline transition-colors hover:text-text-primary"
          >
            <Image src="/github.png" alt="" width={14} height={14} />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
