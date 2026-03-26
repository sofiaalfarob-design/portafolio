"use client";

import { motion } from "framer-motion";
import type { MetricCard } from "@/data/case-studies";

export default function BusinessImpact({
  metrics,
}: {
  metrics: MetricCard[];
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-bg-muted p-8 md:p-12"
        >
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-text-primary md:text-3xl">
            Business Impact
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.headline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-xl bg-metric-card p-6 text-center"
              >
                <div className="font-heading text-3xl font-bold text-text-primary md:text-4xl">
                  {metric.headline}
                </div>
                <p className="mt-2 text-sm text-text-primary/80">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
