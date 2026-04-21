import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hgcchurch.id";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/worship`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${base}/worship/manado`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    { url: `${base}/group`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/serve`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/give`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}

