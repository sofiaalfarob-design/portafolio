interface Props {
  label: string;
  variant?: "default" | "muted";
}

export default function SectionBadge({ label, variant = "default" }: Props) {
  const styles =
    variant === "muted"
      ? "bg-gray-100 text-text-secondary"
      : "bg-primary-light/20 text-primary";

  return (
    <span
      className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider ${styles}`}
    >
      {label}
    </span>
  );
}
