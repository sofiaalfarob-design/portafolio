import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroCaseStudies from "@/components/case-studies/HeroCaseStudies";
import CaseStudyGrid from "@/components/case-studies/CaseStudyGrid";
import StrategicFramework from "@/components/case-studies/StrategicFramework";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Sofia Alfaro",
  description:
    "Explore Sofia Alfaro's case studies: AI-driven MVPs, scalable design systems, B2B CMS redesigns, and UX audits that drive measurable business results.",
  keywords: [
    "UX Case Studies",
    "Product Design Case Studies",
    "AI Implementation Case Study",
    "Design Systems Case Study",
    "B2B UX Design",
    "CRO Design",
    "SaaS Product Design",
    "UX Audit",
  ],
  alternates: {
    canonical: "https://sofiaalfarodesign.com/case-studies",
  },
  openGraph: {
    title: "Case Studies — Sofia Alfaro",
    description:
      "Explore AI-driven MVPs, scalable design systems, B2B CMS redesigns, and UX audits that drive measurable business results.",
    url: "https://sofiaalfarodesign.com/case-studies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sofia Alfaro Case Studies",
      },
    ],
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCaseStudies />
      <CaseStudyGrid caseStudies={caseStudies} />
      <StrategicFramework />
      <CTASection />
      <Footer />
    </main>
  );
}
