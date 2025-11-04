import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kelompok Kecil",
  description:
    "Temukan kelompok kecil di berbagai lokasi untuk bertumbuh dalam iman dan komunitas.",
  alternates: {
    canonical: "https://www.hgcchurch.id/group",
  },
  openGraph: {
    title: "Kelompok Kecil - HGC Church",
    description:
      "Temukan kelompok kecil di berbagai lokasi untuk bertumbuh dalam iman dan komunitas.",
    url: "https://www.hgcchurch.id/group",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}


