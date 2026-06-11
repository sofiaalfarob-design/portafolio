import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import ScrollHashHandler from "@/components/ScrollHashHandler";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sofiaalfarodesign.com"),
  title: {
    default:
      "Sofia Alfaro — Senior Product Designer & AI Implementation Specialist",
    template: "%s | Sofia Alfaro",
  },
  description:
    "Senior Product Designer with 8+ years specializing in scalable design systems, AI-accelerated workflows, and cross-functional leadership. Available for remote projects.",
  keywords: [
    "Product Designer",
    "Senior Product Designer",
    "AI Implementation",
    "Design Systems",
    "UX Design",
    "UI Design",
    "Figma",
    "B2B SaaS Design",
    "AI-Accelerated Workflows",
    "Scalable Design Systems",
    "Cross-Functional Leadership",
    "Remote Product Designer",
  ],
  authors: [
    {
      name: "Sofia Alfaro",
      url: "https://www.linkedin.com/in/sofia-alfaro-designer",
    },
  ],
  creator: "Sofia Alfaro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sofiaalfarodesign.com",
    siteName: "Sofia Alfaro — Portfolio",
    title:
      "Sofia Alfaro — Senior Product Designer & AI Implementation Specialist",
    description:
      "Senior Product Designer with 8+ years specializing in scalable design systems, AI-accelerated workflows, and cross-functional leadership.",
    images: [
      {
        url: "/og-image.png",
        alt: "Sofia Alfaro — Senior Product Designer & AI Implementation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sofia Alfaro — Senior Product Designer & AI Implementation Specialist",
    description:
      "Senior Product Designer with 8+ years specializing in scalable design systems, AI-accelerated workflows, and cross-functional leadership.",
    images: ["/og-image.png"],
    creator: "@sofiaalfarob",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  alternates: {
    canonical: "https://sofiaalfarodesign.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none"
        >
          Skip to content
        </a>
        <ScrollHashHandler />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sofia Alfaro",
              jobTitle: "Senior Product Designer & AI Implementation Specialist",
              url: "https://sofiaalfarodesign.com",
              email: "sofia.alfablan@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/sofia-alfaro-designer",
                "https://www.behance.net/sofiaalfaro9",
                "https://github.com/sofiaalfarob-design",
              ],
              knowsAbout: [
                "UX Design",
                "Product Design",
                "Design Systems",
                "AI Implementation",
                "B2B SaaS",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sofia Alfaro — Portfolio",
              url: "https://sofiaalfarodesign.com",
              author: { "@type": "Person", name: "Sofia Alfaro" },
            }),
          }}
        />
      </body>
    </html>
  );
}
