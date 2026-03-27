import type { CaseStudy } from "@/data/case-studies";

export default function OverviewBar({ study }: { study: CaseStudy }) {
  return (
    <div className="flex items-start gap-0 border-b border-gray-200 px-8 py-8 md:px-16">
      <div className="pr-10 md:pr-16">
        <h4 className="text-base font-bold text-text-primary">Tools</h4>
        <p className="mt-1 text-sm text-text-secondary">
          {study.tools.join(", ")}
        </p>
      </div>
      <div className="w-px self-stretch bg-gray-300 shrink-0" />
      <div className="pl-10 md:pl-16">
        <h4 className="text-base font-bold text-text-primary">Timeline</h4>
        <p className="mt-1 text-sm text-text-secondary">{study.timeline}</p>
      </div>
    </div>
  );
}
