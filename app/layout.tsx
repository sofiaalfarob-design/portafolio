import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollHashHandler from "@/components/ScrollHashHandler";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        width: 1200,
        height: 630,
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    <html lang="en" className={inter.variable}>
      <body className="font-body antialiased">
        <ScrollHashHandler />
        {children}
      </body>
    </html>
  );
}
