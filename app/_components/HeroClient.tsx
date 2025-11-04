"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroClient() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/home/bg-hero-section.webp"
          alt="Latar ibadah jemaat HGC"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/logo-main.webp"
            alt="HGC Church Logo"
            width={768}
            height={384}
            priority
            className="mx-auto h-32 w-auto md:h-40 lg:h-48"
          />
        </motion.div>
        <motion.h1
          className="text-8xl font-bold leading-[1.2] md:text-9xl lg:text-[12rem]"
          style={{ fontFamily: "var(--font-dancing)" }}
        >
          {"Welcome Home".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.5 + index * 0.08, ease: "easeOut" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
}


