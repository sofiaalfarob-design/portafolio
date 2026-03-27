"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { label: "Portfolio", href: "/#projects", sectionId: "projects" },
  { label: "Case Studies", href: "/case-studies", sectionId: "" },
  { label: "The Lab", href: "/#lab", sectionId: "lab" },
  { label: "About Me", href: "/#contact", sectionId: "contact" },
];

const sectionIds = ["projects", "lab", "tech-stack", "about", "contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useScrollSpy(sectionIds);

  function resolveHref(href: string) {
    if (isHome && href.startsWith("/#")) {
      return href.replace("/", "");
    }
    return href;
  }

  function isActive(link: { href: string; sectionId: string }) {
    if (!isHome) {
      return pathname === link.href;
    }
    return link.sectionId !== "" && activeSection === link.sectionId;
  }

  return (
    <nav className="fixed left-0 right-0 top-4 z-50 px-6">
      {/* Floating pill */}
      <div className={`mx-auto flex max-w-container items-center justify-between rounded-full px-2 py-2 transition-all duration-300 ${scrolled ? "bg-[#C8CBD0]/60 backdrop-blur-md hover:bg-[#F3F3F3]/60" : "hover:bg-[#F3F3F3]/60 backdrop-blur-md"}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/link-home.png"
            alt="Sofia Alfaro"
            width={70}
            height={70}
            className="rounded-full"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex pr-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={resolveHref(link.href)}
              className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                isActive(link) ? "text-gray-900" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={resolveHref("/#contact")}
            className="rounded-full bg-[#1a1a1a] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-dark-hover"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden mr-4"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-gray-800"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-gray-800"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-gray-800"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-2 max-w-container overflow-hidden rounded-2xl bg-[#C8CBD0]/90 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={resolveHref(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                    isActive(link) ? "text-gray-900" : "text-gray-600"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={resolveHref("/#contact")}
                className="inline-block rounded-full bg-[#1a1a1a] px-6 py-2.5 text-center text-sm font-semibold text-white"
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
