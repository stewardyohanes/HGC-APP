import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteChrome from "../components/SiteChrome";
import { Montserrat, Dancing_Script } from "next/font/google";
import { WebVitals } from "./_components/WebVitals";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hgcchurch.id"),
  title: {
    default: "HGC Church - Welcome Home",
    template: "%s | HGC Church",
  },
  description:
    "Gereja JKI His Grace Church Manado. Ibadah, komunitas, dan pelayanan. Welcome Home.",
  keywords: [
    "gereja manado",
    "HGC Church",
    "JKI",
    "ibadah",
    "komunitas gereja",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.hgcchurch.id/",
    siteName: "HGC Church",
    title: "HGC Church - Welcome Home",
    description:
      "Gereja JKI His Grace Church Manado. Ibadah, komunitas, dan pelayanan.",
    images: [
      { url: "/logo-main.webp", width: 1200, height: 630, alt: "HGC Church" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HGC Church - Welcome Home",
    description:
      "Gereja JKI His Grace Church Manado. Ibadah, komunitas, dan pelayanan.",
    images: ["/logo-main.webp"],
  },
  alternates: {
    canonical: "https://www.hgcchurch.id/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/hgc-icon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              name: "JKI His Grace Church",
              url: "https://www.hgcchurch.id",
              logo: "https://www.hgcchurch.id/logo-main.webp",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Graha HGC Marina (Ruko Marina Plaza Blok D8-9)",
                addressLocality: "Manado",
                postalCode: "95111",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-812-9596-0003",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.instagram.com/hgcmanado/",
                "http://facebook.com/Hisgrace.id",
                "https://www.youtube.com/@HisGraceChurch",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`font-sans antialiased ${montserrat.variable} ${dancingScript.variable}`}
      >
        <SiteChrome>
          <WebVitals />
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
