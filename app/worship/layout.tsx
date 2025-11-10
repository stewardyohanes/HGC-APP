import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ibadah Minggu Raya",
  description:
    "Jadwal ibadah minggu raya HGC Church di berbagai lokasi: Manado, Tomohon, Bitung, Sonder, dan Jakarta.",
  alternates: {
    canonical: "https://www.hgcchurch.id/worship",
  },
  openGraph: {
    title: "Ibadah Minggu Raya - HGC Church",
    description:
      "Jadwal ibadah minggu raya HGC Church di berbagai lokasi: Manado, Tomohon, Bitung, Sonder, dan Jakarta.",
    url: "https://www.hgcchurch.id/worship",
    images: ["/logo-main-text.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

