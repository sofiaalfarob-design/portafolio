import Navbar from "@/components/Navbar";
import HeroCaseStudies from "@/components/case-studies/HeroCaseStudies";
import CaseStudyGrid from "@/components/case-studies/CaseStudyGrid";
import StrategicFramework from "@/components/case-studies/StrategicFramework";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/case-studies";

export const metadata = {
  title: "Case Studies — Sofia Alfaro",
  description:
    "Selected case studies solving business challenges through strategic design, AI implementation, and systems thinking.",
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
