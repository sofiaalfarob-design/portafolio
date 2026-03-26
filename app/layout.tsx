import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sofia Alfaro — Senior Product Designer & AI Implementation Specialist",
  description:
    "Senior Product Designer specializing in scalable design systems and AI-accelerated workflows. 8+ years bridging human creativity and AI innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
