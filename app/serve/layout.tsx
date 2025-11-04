import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melayani adalah Kehormatan",
  description:
    "Bergabung melayani di HGC Church: usher, multimedia, kids, creative, worship, event.",
  alternates: {
    canonical: "https://www.hgcchurch.id/serve",
  },
  openGraph: {
    title: "Melayani adalah Kehormatan - HGC Church",
    description:
      "Bergabung melayani di HGC Church: usher, multimedia, kids, creative, worship, event.",
    url: "https://www.hgcchurch.id/serve",
    images: ["/logo-main-text.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
