import type { CaseStudy } from "@/data/case-studies";

export default function OverviewBar({ study }: { study: CaseStudy }) {
  return (
    <section className="border-b border-gray-100 bg-white py-8">
      <div className="mx-auto flex max-w-container flex-col gap-6 px-6 md:flex-row md:gap-16">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Tools
          </h4>
          <p className="mt-1 text-sm font-medium text-text-primary">
            {study.tools.join(", ")}
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Timeline
          </h4>
          <p className="mt-1 text-sm font-medium text-text-primary">
            {study.timeline}
          </p>
        </div>
      </div>
    </section>
  );
}
