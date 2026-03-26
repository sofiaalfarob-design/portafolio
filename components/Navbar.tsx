"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Portfolio", href: "/#projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "The Lab", href: "/#lab" },
  { label: "About Me", href: "/#about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  function resolveHref(href: string) {
    if (isHome && href.startsWith("/#")) {
      return href.replace("/", "");
    }
    return href;
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex h-10 items-center justify-center rounded-xl bg-dark px-3 text-sm font-bold text-white font-heading"
        >
          S.
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={resolveHref(link.href)}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={resolveHref("/#contact")}
            className="rounded-full bg-dark px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-800"
          >
            Get in touch
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-dark"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-dark"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-dark"
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gray-100 bg-white md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={resolveHref(link.href)}
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={resolveHref("/#contact")}
                className="inline-block rounded-full bg-dark px-6 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
