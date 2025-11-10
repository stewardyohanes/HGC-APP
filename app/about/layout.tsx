import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - HGC Church",
  description:
    "Pelajari lebih lanjut tentang JKI His Grace Church - visi, misi, sejarah, nilai-nilai, dan tim leadership kami.",
  alternates: {
    canonical: "https://www.hgcchurch.id/about",
  },
  openGraph: {
    title: "Tentang Kami - HGC Church",
    description:
      "Pelajari lebih lanjut tentang JKI His Grace Church - visi, misi, sejarah, nilai-nilai, dan tim leadership kami.",
    url: "https://www.hgcchurch.id/about",
    images: ["/logo-main-text.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

