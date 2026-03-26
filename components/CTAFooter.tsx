"use client";

import { motion } from "framer-motion";

export default function CTAFooter() {
  return (
    <footer className="bg-dark" id="contact">
      {/* CTA Section */}
      <div className="py-20 md:py-28">
        <div className="mx-auto max-w-container px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light">
              Get in Touch
            </span>
            <h2 className="mt-6 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to Accelerate Your Product?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-400 md:text-lg">
              Let&apos;s discuss how I can help you ship better products faster. Whether
              it&apos;s a full product design, AI integration, or strategic consultation —
              I&apos;m here to help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="mailto:sofia.alfablan@gmail.com"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25"
            >
              Schedule a Call
            </a>
            <a
              href="#projects"
              className="rounded-full border-2 border-gray-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white"
            >
              See Portfolio
            </a>
            <a
              href="#"
              className="rounded-full border-2 border-gray-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Design Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* Twitter / X */}
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-500 transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-500 transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Dribbble */}
            <a
              href="#"
              aria-label="Dribbble"
              className="text-gray-500 transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.18 10.18 0 012.312 6.375c-.337-.068-3.713-.75-7.113-.325-.075-.175-.137-.362-.212-.55-.2-.487-.412-.987-.637-1.475 3.75-1.537 5.45-3.737 5.65-4.025zM12 1.75c2.675 0 5.113 1.05 6.913 2.75-.163.25-1.7 2.325-5.337 3.7A72.597 72.597 0 009.7 1.95c.75-.125 1.513-.2 2.3-.2zM7.812 2.625a67.168 67.168 0 013.863 6.175c-4.875 1.3-9.175 1.275-9.65 1.275.663-3.275 2.8-6.037 5.787-7.45zM1.763 12.013V11.7c.462.012 5.512.075 10.7-1.512.3.575.575 1.163.838 1.75-.137.037-.287.087-.425.137-5.45 1.763-8.35 6.563-8.563 6.913a10.215 10.215 0 01-2.55-6.975zM12 22.275a10.19 10.19 0 01-6.3-2.175c.163-.337 2.325-4.475 8.287-6.537l.075-.025a42.94 42.94 0 012.25 7.95A10.148 10.148 0 0112 22.275zm4.063-1.15a45.378 45.378 0 00-2.1-7.55c3.2-.513 6 .325 6.375.437a10.263 10.263 0 01-4.275 7.113z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
