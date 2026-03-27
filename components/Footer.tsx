import Link from "next/link";
import Image from "next/image";
import basePath from "@/lib/basePath";

const quickLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "The Lab", href: "/#lab" },
  { label: "Tech Stack", href: "/#tech-stack" },
  { label: "About Me", href: "/#tech-stack" },
];

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sofia-alfaro-designer" },
  { label: "Email", href: "mailto:sofia.alfablan@gmail.com" },
  { label: "Behance", href: "https://www.behance.net/sofiaalfaro9" },
  { label: "Resume (PDF)", href: "/Curriculum-Sofia-Alfaro.pdf" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-16">
      <div className="mx-auto max-w-container">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src={`${basePath}/link-home.svg`}
                alt="Sofia Alfaro — Senior Product Designer logo"
                width={120}
                height={44}
              />
            </Link>
            <p className="mt-4 font-semibold text-text-primary">
              Ready to accelerate your product?
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              Senior Product Designer specializing in scalable design systems,
              AI-accelerated workflows, and cross-functional leadership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Contact
            </h4>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") || link.href.endsWith(".pdf")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-xs text-text-secondary md:flex-row">
          <p>&copy; 2026 Sofia Alfaro. All rights reserved.</p>
          <p>Pixel-perfect, coffee-powered, and 99% user-friendly.</p>
        </div>
      </div>
    </footer>
  );
}
