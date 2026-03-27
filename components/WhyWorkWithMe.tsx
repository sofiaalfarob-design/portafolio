"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/stard-up.svg",
    title: "Startup & Enterprise Experience",
    description:
      "Navigated from 5-person early-stage teams to 500+ employee organizations, adapting methodologies based on context and required velocity.",
  },
  {
    icon: "/cross-functional-leadership.svg",
    title: "Cross-Functional Leadership",
    description:
      "Works fluidly across design, engineering, product, and data. Ensures alignment from ideation through launch with clear communication and shared ownership.",
  },
  {
    icon: "/continuous-learning-mindset.svg",
    title: "Continuous Learning Mindset",
    description:
      "Stays on the cutting edge of design and AI tools, constantly experimenting with new technologies and integrating them into practical workflows.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function WhyWorkWithMe() {
  return (
    <section className="bg-card-bg py-20 md:py-28" id="about">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            Why Work With Me?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary md:text-lg">
            I don&apos;t just design screens — I architect digital ecosystems. Pairing
            deep product design expertise with hands-on AI implementation skills,
            delivering end-to-end solutions that move fast without sacrificing craft.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light/20">
                <Image
                  src={feature.icon}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
