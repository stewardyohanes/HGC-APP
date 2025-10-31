import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HGC Church - Welcome Home",
  description: "A vibrant community of believers dedicated to spreading God's love and serving our community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
