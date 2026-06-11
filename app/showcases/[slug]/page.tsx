import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { showCases, getShowCaseBySlug } from "@/data/show-cases";
import Navbar from "@/components/Navbar";
import HeroCaseDetail from "@/components/show-case-detail/HeroCaseDetail";
import OverviewBar from "@/components/show-case-detail/OverviewBar";
import ContentSection from "@/components/show-case-detail/ContentSection";
import BusinessImpact from "@/components/show-case-detail/BusinessImpact";
import RelatedCases from "@/components/show-case-detail/RelatedCases";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return showCases.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getShowCaseBySlug(slug);
  if (!study) return { title: "Showcase Not Found" };

  const url = `https://sofiaalfarodesign.com/showcases/${study.slug}`;
  const ogImage = study.thumbnailImage;

  return {
    title: `${study.detailTitle || study.title}`,
    description: study.description,
    keywords: [
      study.category,
      ...study.tools,
      ...study.tags.map((t) => t.label),
      "Product Design",
      "UX Showcase",
      "Sofia Alfaro",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${study.detailTitle || study.title}`,
      description: study.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: study.detailTitle || study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.detailTitle || study.title}`,
      description: study.description,
      images: [ogImage],
    },
  };
}

export default async function ShowCaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getShowCaseBySlug(slug);

  if (!study) {
    notFound();
  }

  const base = "https://sofiaalfarodesign.com";

  return (
    <main id="main-content" className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: study.detailTitle || study.title,
            description: study.description,
            url: `${base}/showcases/${study.slug}`,
            image: study.thumbnailImage,
            author: { "@type": "Person", name: "Sofia Alfaro", url: base },
            publisher: { "@type": "Person", name: "Sofia Alfaro", url: base },
            keywords: study.tags.map((t) => t.label).join(", "),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: base },
              { "@type": "ListItem", position: 2, name: "Showcases", item: `${base}/showcases` },
              { "@type": "ListItem", position: 3, name: study.detailTitle || study.title, item: `${base}/showcases/${study.slug}` },
            ],
          }),
        }}
      />
      <Navbar darkHero />
      <HeroCaseDetail study={study} />
      <div className="mx-auto max-w-container px-6 mt-10 mb-4">
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
