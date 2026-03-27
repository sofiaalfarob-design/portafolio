import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="font-heading text-4xl font-bold text-text-primary">
        Case Study Not Found
      </h1>
      <p className="mt-4 text-text-secondary">
        The case study you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/case-studies"
        className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover"
      >
        View All Case Studies
      </Link>
    </div>
  );
}
