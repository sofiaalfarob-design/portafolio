"use client";

import { motion } from "framer-motion";

export default function BentoGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="overflow-hidden rounded-2xl bg-card-bg shadow-lg"
    >
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://www.youtube.com/embed/dVZVx_XOFrM?rel=0"
          title="Portfolio Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}
