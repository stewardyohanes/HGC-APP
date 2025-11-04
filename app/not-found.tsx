"use client";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { IconAngel } from "../components/Icons";

export default function NotFound() {
  useEffect(() => {
    document.body.classList.add("hide-chrome");
    return () => {
      document.body.classList.remove("hide-chrome");
    };
  }, []);
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider text-white/80"
        >
          <IconAngel size={22} className="text-white/90" />
          <span>Halaman tidak ditemukan</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.35 }}
          className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl"
        >
          Tetapi Anugerah Tuhan Tetap Menuntun
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="max-w-2xl text-balance text-base leading-relaxed text-gray-400 md:text-lg"
        >
          Seperti malaikat yang menjaga langkah kita, kami akan bantu kamu
          menemukan jalan kembali. Coba kembali ke beranda atau jelajahi menu
          lainnya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white text-black px-5 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-white/90"
          >
            Kembali ke Beranda
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="pointer-events-none mt-6 text-white/15"
        >
          <IconAngel
            size={120}
            className="drop-shadow-[0_0_24px_rgba(255,255,255,0.2)]"
          />
        </motion.div>
      </div>

      {/* subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-240 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_60%)]" />
      </div>
    </section>
  );
}
