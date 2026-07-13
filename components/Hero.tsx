"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionBadge from "./ui/SectionBadge";

const credentials = [
  { value: "8+", label: "years of experience" },
  { value: "30+", label: "projects" },
  { value: "15+", label: "design systems" },
  { value: "40%", label: "efficiency improved" },
];

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const handle = window.requestIdleCallback(() => setVideoReady(true), { timeout: 2000 });
      return () => window.cancelIdleCallback(handle);
    }
    const t = setTimeout(() => setVideoReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="overflow-hidden bg-white pb-16 pt-28 md:pt-36">
      <div className="mx-auto max-w-container px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <SectionBadge label="Available for remote projects" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl text-center font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
        >
          Senior Product Designer &<br />
          <span className="text-gradient-purple">
            AI Implementation Specialist
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-text-secondary md:text-lg"
        >
          I bridge the gap between human creativity and AI innovation —
          building scalable design systems and AI-accelerated workflows that
          deliver real business value.
        </motion.p>

        {/* Credential strip — numbers as supporting context, not the feature */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-y-1.5"
          aria-label="Career highlights"
        >
          {credentials.flatMap((item, i) => {
            const el = (
              <span key={item.label} className="px-2.5 text-sm text-text-secondary">
                <span className="font-heading font-semibold text-text-primary tabular-nums">
                  {item.value}
                </span>
                {" "}{item.label}
              </span>
            );
            if (i < credentials.length - 1) {
              return [
                el,
                <span
                  key={`sep-${i}`}
                  className="select-none text-gray-300"
                  aria-hidden="true"
                >
                  ·
                </span>,
              ];
            }
            return [el];
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="rounded-full bg-dark px-8 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-dark-hover active:scale-[0.97]"
          >
            View Showcases
          </Link>
          <Link
            href="#contact"
            className="rounded-full border-2 border-gray-300 px-8 py-3 text-sm font-semibold text-text-primary transition-all hover:-translate-y-0.5 hover:border-primary-hover hover:text-primary-hover active:scale-[0.97]"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>

        {/* Deferred autoplay showreel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            {videoReady ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dVZVx_XOFrM?autoplay=1&mute=1&rel=0&loop=1&playlist=dVZVx_XOFrM"
                title="Portfolio Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 bg-card-bg" />
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
