import type { CaseStudy } from "@/data/case-studies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudyGrid({
  caseStudies,
}: {
  caseStudies: CaseStudy[];
}) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-container px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
