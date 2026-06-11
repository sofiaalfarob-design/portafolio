import type { ShowCase } from "@/data/show-cases";
import ShowCaseCard from "./ShowCaseCard";

export default function ShowCaseGrid({
  showCases,
}: {
  showCases: ShowCase[];
}) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-container px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {showCases.map((study, i) => (
            <ShowCaseCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
