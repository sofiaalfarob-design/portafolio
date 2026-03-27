"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionBadge from "./ui/SectionBadge";

const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "30+", label: "Projects" },
  { value: "40%", label: "Efficiency Improved", highlighted: true },
  { value: "15+", label: "Design Systems" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-center"
            >
              <div
                className={`font-heading text-3xl font-bold md:text-4xl ${
                  stat.highlighted ? "text-primary" : "text-text-primary"
                }`}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium text-text-secondary md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="rounded-full bg-dark px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-dark-hover"
          >
            View Case Studies
          </Link>
          <Link
            href="#contact"
            className="rounded-full border-2 border-gray-300 px-8 py-3 text-sm font-semibold text-text-primary transition-all hover:border-primary-hover hover:text-primary-hover"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>

        {/* Autoplay Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/dVZVx_XOFrM?autoplay=1&mute=1&rel=0&loop=1&playlist=dVZVx_XOFrM"
              title="Portfolio Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
