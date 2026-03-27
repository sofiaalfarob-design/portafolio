import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import Navbar from "@/components/Navbar";
import HeroCaseDetail from "@/components/case-study-detail/HeroCaseDetail";
import OverviewBar from "@/components/case-study-detail/OverviewBar";
import ContentSection from "@/components/case-study-detail/ContentSection";
import BusinessImpact from "@/components/case-study-detail/BusinessImpact";
import RelatedCases from "@/components/case-study-detail/RelatedCases";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} — Sofia Alfaro`,
    description: study.description,
  };
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCaseDetail study={study} />
      <div className="mx-auto max-w-container px-6 my-10">
        <div className="rounded-3xl bg-gray-50 overflow-hidden">
          <OverviewBar study={study} />
          <div className="px-8 py-12 md:px-16 md:py-14 space-y-16">
            {study.contentSections.map((section) => (
              <ContentSection key={section.heading} section={section} />
            ))}
          </div>
        </div>
      </div>
      <BusinessImpact metrics={study.businessImpact} />
      <RelatedCases relatedSlugs={study.relatedCaseSlugs} />
      <CTASection />
      <Footer />
    </main>
  );
}
