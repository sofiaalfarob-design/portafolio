"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  quality?: number;
  zoom?: number;
}

export default function LightboxImage({ src, alt, className, sizes, quality, zoom = 1 }: LightboxImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [naturalWidth, setNaturalWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const zoomedWidth = naturalWidth ? Math.round(naturalWidth * zoom) : undefined;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in"
        aria-label="Ver imagen completa"
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={750}
          className={className}
          sizes={sizes}
          quality={quality}
        />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 md:p-8"
                onClick={() => setOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.93, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.93, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="relative max-h-[90vh] max-w-[92vw]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-gray-800 shadow-lg transition-colors hover:bg-white"
                    aria-label="Cerrar"
                  >
                    ✕
                  </button>
                  <img
                    src={src}
                    alt={alt}
                    className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
