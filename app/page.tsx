import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ExperimentsSection from "@/components/ExperimentsSection";
import SkillsSection from "@/components/SkillsSection";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Sofia Alfaro — Senior Product Designer & AI Implementation Specialist",
  description:
    "Senior Product Designer with 8+ years bridging human creativity and AI innovation. Building scalable design systems and AI-accelerated workflows that deliver real business value.",
  keywords: [
    "Senior Product Designer",
    "AI Implementation Specialist",
    "Design Systems",
    "UX Portfolio",
    "Product Design Portfolio",
    "Figma Expert",
    "AI Workflows",
    "B2B SaaS",
    "Remote Designer",
  ],
  alternates: {
    canonical: "https://sofiaalfarodesign.com",
  },
  openGraph: {
    title:
      "Sofia Alfaro — Senior Product Designer & AI Implementation Specialist",
    description:
      "Senior Product Designer with 8+ years bridging human creativity and AI innovation. Building scalable design systems and AI-accelerated workflows.",
    url: "https://sofiaalfarodesign.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sofia Alfaro — Product Designer Portfolio",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ExperimentsSection />
      <SkillsSection />
      <WhyWorkWithMe />
      <CTASection />
      <Footer />
    </main>
  );
}
