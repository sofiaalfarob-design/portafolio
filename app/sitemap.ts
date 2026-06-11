import { MetadataRoute } from "next";
import { showCases } from "@/data/show-cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sofiaalfarodesign.com";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/showcases`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...showCases.map((sc) => ({
      url: `${base}/showcases/${sc.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
