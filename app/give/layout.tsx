import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memberi sebagai Ibadah",
  description:
    "Memberi dengan sukacita sebagai wujud penyembahan kepada Yesus di HGC Church.",
  alternates: {
    canonical: "https://www.hgcchurch.id/give",
  },
  openGraph: {
    title: "Memberi sebagai Ibadah - HGC Church",
    description:
      "Memberi dengan sukacita sebagai wujud penyembahan kepada Yesus di HGC Church.",
    url: "https://www.hgcchurch.id/give",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}


