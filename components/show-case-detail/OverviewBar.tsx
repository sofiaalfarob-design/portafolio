import type { ShowCase } from "@/data/show-cases";

export default function OverviewBar({ study }: { study: ShowCase }) {
  return (
    <div className="flex items-start gap-0 border-b border-gray-200 px-8 py-8 md:px-16">
      <div className="flex-1 pr-10 md:pr-16">
        <h4 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">Tools</h4>
        <p className="mt-2 text-sm text-text-secondary">
          {study.tools.join(", ")}
        </p>
      </div>
      <div className="w-px self-stretch bg-gray-300 shrink-0" />
      <div className="flex-1 pl-10 md:pl-16">
        <h4 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">Timeline</h4>
        <p className="mt-2 text-sm text-text-secondary">{study.timeline}</p>
      </div>
    </div>
  );
}
