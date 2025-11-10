"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function SiteChrome({ children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [bannerClosed, setBannerClosed] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    if (mobileOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Development/Beta banner visibility: always show on navigation/refresh (unless disabled by env)
  const allowBanner = process.env.NEXT_PUBLIC_SHOW_DEV_BANNER !== "false";
  useEffect(() => {
    // reset closed state after navigation asynchronously to satisfy lint rule
    const id = setTimeout(() => setBannerClosed(false), 0);
    return () => clearTimeout(id);
  }, [pathname]);
  const devBannerVisible = allowBanner && !bannerClosed;

  return (
    <div className="min-h-screen bg-black text-white">
      {devBannerVisible && (
        <div className="fixed top-0 z-50 w-full">
          <div className="w-full">
            <div className="flex w-full items-center justify-between gap-3 border-b border-yellow-600 bg-yellow-500 text-black">
              <div className="relative w-full overflow-hidden">
                <div className="marquee-line whitespace-nowrap will-change-transform py-2 text-2xl md:text-3xl font-extrabold tracking-wide">
                  <span className="mx-8">
                    Website ini sedang dalam pengembangan — Konten & fitur belum
                    final — Terima kasih atas pengertiannya 🙏
                  </span>
                  <span className="mx-8">
                    Website ini sedang dalam pengembangan — Konten & fitur belum
                    final — Terima kasih atas pengertiannya 🙏
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setBannerClosed(true);
                }}
                className="mr-2 hidden md:inline-flex shrink-0 items-center rounded bg-yellow-600/20 px-2 py-1 text-xs font-semibold text-black hover:bg-yellow-600/30"
                aria-label="Tutup pemberitahuan pengembangan"
              >
                Tutup
              </button>
            </div>
            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .marquee-line {
                display: inline-block;
                min-width: 200%;
                animation: marquee 20s linear infinite;
              }
            `}</style>
          </div>
        </div>
      )}

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={[
          "fixed z-40 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl",
          devBannerVisible ? "top-12 md:top-14" : "top-0",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/">
              <Image
                src="/logo-main-text.webp"
                alt="HGC Church"
                width={512}
                height={128}
                priority
                className="h-12 w-auto md:h-14"
              />
            </Link>
          </motion.div>

          <div className="hidden space-x-12 lg:flex lg:items-center">
            {[
              { label: "Memberi", href: "/give", prefetch: true },
              { label: "Melayani", href: "/serve", prefetch: true },
              { label: "Komunitas", href: "/group", prefetch: true },
              { label: "Ibadah", href: "/worship", prefetch: false },
              { label: "Event", href: "/event", prefetch: false },
              { label: "About", href: "/about", prefetch: false },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  prefetch={item.prefetch}
                  className={[
                    "relative text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-gray-400",
                    "after:pointer-events-none after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out",
                    "hover:after:scale-x-100",
                    pathname && pathname.startsWith(item.href)
                      ? "text-gray-300 after:scale-x-100"
                      : "",
                  ].join(" ")}
                  aria-current={
                    pathname && pathname.startsWith(item.href)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* banner dipindah ke paling atas */}

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-60 bg-black/60 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-y-0 right-0 z-70 w-full overflow-y-auto bg-[#1D1C1C] px-4 py-6 sm:max-w-sm tablet:px-6 desktop:px-8 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="mb-6 flex items-center justify-between">
              <Link href="/">
                <Image
                  id="mobile-menu-title"
                  src="/logo-main-text.webp"
                  alt="HGC Church"
                  width={384}
                  height={96}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded text-white/90 hover:text-white focus:outline-none"
                aria-label="Tutup menu"
                autoFocus
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="grid gap-1">
              {[
                { label: "Memberi", href: "/give", prefetch: true },
                { label: "Melayani", href: "/serve", prefetch: true },
                { label: "Komunitas", href: "/group", prefetch: true },
                { label: "Ibadah", href: "/worship", prefetch: false },
                { label: "Event", href: "/event", prefetch: false },
                { label: "About", href: "/about", prefetch: false },
              ].map(({ label, href, prefetch }) => (
                <Link
                  key={label}
                  href={href}
                  prefetch={prefetch}
                  onClick={() => setMobileOpen(false)}
                  className="inline-block px-1 py-2 text-base font-bold uppercase tracking-wider text-white/90 hover:text-white"
                  aria-current={
                    pathname && pathname.startsWith(href) ? "page" : undefined
                  }
                >
                  <span
                    className={[
                      "relative inline-block",
                      "after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-white",
                      pathname && pathname.startsWith(href)
                        ? "after:opacity-100"
                        : "after:opacity-0",
                    ].join(" ")}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.aside>
        </>
      )}

      <main className={devBannerVisible ? "pt-28" : "pt-20"}>{children}</main>

      <footer className="border-t border-white/5 bg-black py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <Image
                src="/logo-main-text.webp"
                alt="HGC Church"
                width={512}
                height={128}
                className="mb-4 h-14 w-auto md:h-16"
              />
              <p className="mb-6 max-w-md leading-relaxed text-gray-400">
                Menjadi Keluarga Kerajaan Allah Yang Dikuduskan Hidup Dalam
                Kasih dan Berbuah
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Graha HGC Marina (Ruko Marina Plaza Blok D12) Manado 95111
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Open Every Day
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  0812-9596-0003
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  jki.hisgrace@gmail.com
                </p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Menu
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-white"
                  >
                    Tentang
                  </Link>
                </li>
                <li>
                  <Link
                    href="/serve"
                    className="transition-colors hover:text-white"
                  >
                    Ibadah
                  </Link>
                </li>
                <li>
                  <Link
                    href="/give"
                    className="transition-colors hover:text-white"
                  >
                    Give
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Sosial Media
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a
                    href="https://www.instagram.com/hgcmanado/"
                    target="_blank"
                    className="transition-colors hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com/Hisgrace.id"
                    target="_blank"
                    className="transition-colors hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@HisGraceChurch"
                    target="_blank"
                    className="transition-colors hover:text-white"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 HGC Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
