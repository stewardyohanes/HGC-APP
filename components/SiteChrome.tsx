"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ArrowRight, Calendar } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

export default function SiteChrome({ children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a href="/">
              <img
                src="/logo-main-text.webp"
                alt="HGC Church"
                className="h-12 w-auto md:h-14"
              />
            </a>
          </motion.div>

          <div className="hidden space-x-12 lg:flex lg:items-center">
            {[
              { label: "Memberi", href: "/give" },
              { label: "Pelayanan", href: "/#pelayanan" },
              { label: "Komunitas", href: "/#tentang" },
              { label: "Ibadah", href: "/#ibadah" },
              { label: "Event", href: "/#event" },
              { label: "About", href: "/#tentang" },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                href={item.href}
                className="text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-gray-400"
              >
                {item.label}
              </motion.a>
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

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/60 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-y-0 right-0 z-[70] w-full overflow-y-auto bg-[#1D1C1C] px-4 py-6 sm:max-w-sm tablet:px-6 desktop:px-8 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="mb-6 flex items-center justify-between">
              <a href="/">
                <img
                  id="mobile-menu-title"
                  src="/logo-main-text.webp"
                  alt="HGC Church"
                  className="h-8 w-auto"
                />
              </a>
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
                { label: "Give", href: "/give" },
                { label: "Pelayanan", href: "/#pelayanan" },
                { label: "Komunitas", href: "/#tentang" },
                { label: "Ibadah", href: "/#ibadah" },
                { label: "Event", href: "/#event" },
                { label: "About", href: "/#tentang" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-1 py-2 text-base font-bold uppercase tracking-wider text-white/90 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.aside>
        </>
      )}

      <main className="pt-20">{children}</main>

      <footer className="border-t border-white/5 bg-black py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <img
                src="/logo-main-text.webp"
                alt="HGC Church"
                className="mb-4 h-14 w-auto md:h-16"
              />
              <p className="mb-6 max-w-md leading-relaxed text-gray-400">
                Menjadi Keluarga Kerajaan Allah Yang Dikuduskan Hidup Dalam
                Kasih dan Berbuah
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Graha HGC Marina (Ruko Marina Plaza Blok D8-9) Manado 95111
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
                  <a href="/" className="transition-colors hover:text-white">
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="/#tentang"
                    className="transition-colors hover:text-white"
                  >
                    Tentang
                  </a>
                </li>
                <li>
                  <a
                    href="/#ibadah"
                    className="transition-colors hover:text-white"
                  >
                    Ibadah
                  </a>
                </li>
                <li>
                  <a
                    href="/#event"
                    className="transition-colors hover:text-white"
                  >
                    Event
                  </a>
                </li>
                <li>
                  <a
                    href="/give"
                    className="transition-colors hover:text-white"
                  >
                    Give
                  </a>
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
