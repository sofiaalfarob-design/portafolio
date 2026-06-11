"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import basePath from "@/lib/basePath";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { label: "Portfolio", href: "/#projects", sectionId: "projects" },
  { label: "Showcases", href: "/showcases", sectionId: "" },
  { label: "The Lab", href: "/#lab", sectionId: "lab" },
  { label: "Tech Stack", href: "/#tech-stack", sectionId: "tech-stack" },
  { label: "About Me", href: "/#about", sectionId: "about" },
];

const sectionIds = ["projects", "lab", "tech-stack", "about", "contact"];

export default function Navbar({ darkHero = false }: { darkHero?: boolean }) {
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

  // Use white text when hero is dark and user hasn't scrolled yet
  const useLightText = darkHero && !scrolled;

  function resolveHref(href: string) {
    if (isHome && href.startsWith("/#")) {
      return href.slice(1); // "/#projects" → "#projects"
    }
    return href;
  }

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMobile = false
  ) {
    const resolved = resolveHref(href);
    if (resolved.startsWith("#")) {
      e.preventDefault();
      const id = resolved.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", resolved);
      }
    }
    if (closeMobile) setMobileOpen(false);
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
      <div
        className={`mx-auto flex max-w-container items-center justify-between rounded-full px-2 py-2 transition-all duration-300 ${
          scrolled
            ? "bg-[#C8CBD0]/60 backdrop-blur-md hover:bg-[#F3F3F3]/60"
            : "hover:bg-[#F3F3F3]/60 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={`${basePath}/link-home.svg`}
            alt="Sofia Alfaro — return to homepage"
            width={120}
            height={44}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex pr-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={resolveHref(link.href)}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors ${
                useLightText
                  ? isActive(link)
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                  : isActive(link)
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={resolveHref("/#contact")}
            onClick={(e) => handleNavClick(e, "/#contact")}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
              useLightText
                ? "bg-white text-gray-900 hover:bg-white/80"
                : "bg-[#1a1a1a] text-white hover:bg-dark-hover"
            }`}
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden mr-4"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={`block h-0.5 w-6 ${useLightText ? "bg-white" : "bg-gray-800"}`}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block h-0.5 w-6 ${useLightText ? "bg-white" : "bg-gray-800"}`}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={`block h-0.5 w-6 ${useLightText ? "bg-white" : "bg-gray-800"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
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
                  onClick={(e) => handleNavClick(e, link.href, true)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={resolveHref("/#contact")}
                className="inline-block rounded-full bg-[#1a1a1a] px-6 py-2.5 text-center text-sm font-semibold text-white"
                onClick={(e) => handleNavClick(e, "/#contact", true)}
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
