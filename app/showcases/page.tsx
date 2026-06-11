import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroShowCases from "@/components/show-cases/HeroShowCases";
import ShowCaseGrid from "@/components/show-cases/ShowCaseGrid";
import StrategicFramework from "@/components/show-cases/StrategicFramework";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { getOrderedShowCases } from "@/data/show-cases";

export const metadata: Metadata = {
  title: "Showcases",
  description:
    "Explore Sofia Alfaro's showcases: AI-driven MVPs, scalable design systems, B2B CMS redesigns, and UX audits that drive measurable business results.",
  keywords: [
    "UX Showcases",
    "Product Design Showcases",
    "AI Implementation Showcase",
    "Design Systems Showcase",
    "B2B UX Design",
    "CRO Design",
    "SaaS Product Design",
    "UX Audit",
  ],
  alternates: {
    canonical: "https://sofiaalfarodesign.com/showcases",
  },
  openGraph: {
    title: "Showcases — Sofia Alfaro",
    description:
      "Explore AI-driven MVPs, scalable design systems, B2B CMS redesigns, and UX audits that drive measurable business results.",
    url: "https://sofiaalfarodesign.com/showcases",
    images: [
      {
        url: "/og-image.png",
        alt: "Sofia Alfaro Showcases",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Showcases — Sofia Alfaro",
    description:
      "Explore AI-driven MVPs, scalable design systems, B2B CMS redesigns, and UX audits that drive measurable business results.",
    images: ["/og-image.png"],
  },
};

export default function CaseStudiesPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <HeroShowCases />
      <ShowCaseGrid showCases={getOrderedShowCases()} />
      <StrategicFramework />
      <CTASection />
      <Footer />
    </main>
  );
}
