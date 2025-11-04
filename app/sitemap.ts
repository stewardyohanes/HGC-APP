import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hgcchurch.id";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/group`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/serve`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/give`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}


