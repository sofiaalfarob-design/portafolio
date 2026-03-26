export default function SectionBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full bg-primary-light/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
      {label}
    </span>
  );
}
