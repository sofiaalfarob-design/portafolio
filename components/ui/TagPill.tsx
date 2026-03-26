export default function TagPill({
  label,
  variant = "neutral",
}: {
  label: string;
  variant?: "purple" | "neutral";
}) {
  const base = "inline-block rounded-full px-3 py-1 text-xs font-medium";
  const styles =
    variant === "purple"
      ? "bg-primary-light/20 text-primary"
      : "bg-bg-muted text-text-secondary border border-gray-200";

  return <span className={`${base} ${styles}`}>{label}</span>;
}
