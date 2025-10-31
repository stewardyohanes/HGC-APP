"use client";

import { motion } from "framer-motion";
import {
  Play,
  MapPin,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
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
            <img
              src="/logo-main-text.webp"
              alt="HGC Church"
              className="h-12 w-auto md:h-14"
            />
          </motion.div>

          <div className="hidden space-x-10 md:flex">
            {["Beranda", "Tentang", "Ibadah", "Event", "Kontak"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium tracking-wide text-gray-400 transition-colors hover:text-white"
                >
                  {item}
                </motion.a>
              )
            )}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden rounded-none border border-white bg-white px-6 py-2.5 text-sm font-semibold tracking-wide text-black transition-all hover:bg-black hover:text-white md:block"
          >
            HUBUNGI KAMI
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="beranda"
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Image - Worship & Praise */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        {/* Dark overlay untuk readability */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src="/logo-main.webp"
              alt="HGC Church Logo"
              className="mx-auto h-32 w-auto md:h-40 lg:h-48"
            />
          </motion.div>

          <motion.h1
            className="text-8xl font-bold leading-[1.2] md:text-9xl lg:text-[12rem]"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {"Welcome Home".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: 0.5 + index * 0.08,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </section>

      {/* Latest Sermon Section */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
              Khotbah Terbaru
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Firman Tuhan Minggu Ini
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-5xl"
          >
            <div className="relative overflow-hidden border border-white/10 bg-zinc-950">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/tRAXfgylpqM"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="border-t border-white/10 p-8">
                <h3 className="mb-3 text-2xl font-bold">
                  Judul Khotbah - Tema Minggu Ini
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    31 Oktober 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Pdt. John Doe
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section
        id="event"
        className="relative border-y border-white/5 bg-white py-24 text-black md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
              Event Mendatang
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Jangan Lewatkan
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ibadah Raya Natal 2025",
                date: "25 Desember 2025",
                time: "09:00 & 18:00 WIB",
                location: "Gedung Gereja Utama",
                description:
                  "Perayaan Natal bersama dengan pujian, firman Tuhan, dan persekutuan.",
                tag: "Special Event",
              },
              {
                title: "Retreat Pemuda 2026",
                date: "10-12 Januari 2026",
                time: "Full Day",
                location: "Puncak, Bogor",
                description:
                  "3 hari 2 malam retreat khusus untuk pemuda dengan tema 'Rise Up'.",
                tag: "Youth Event",
              },
              {
                title: "Konser Rohani",
                date: "15 Februari 2026",
                time: "19:00 WIB",
                location: "Auditorium Gereja",
                description:
                  "Malam pujian dan penyembahan bersama worship team & special guest.",
                tag: "Worship Night",
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative overflow-hidden border border-black/10 bg-white transition-all hover:border-black hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="mb-4 inline-block border border-black px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {event.tag}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold leading-tight">
                    {event.title}
                  </h3>
                  <div className="mb-6 space-y-2 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </p>
                  </div>
                  <p className="mb-6 leading-relaxed text-gray-700">
                    {event.description}
                  </p>
                  <button className="group/btn flex items-center gap-2 font-semibold transition-all hover:gap-3">
                    Selengkapnya
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section id="tentang" className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            {/* VISI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                VISI
              </h2>
              <p className="text-2xl font-bold leading-relaxed text-gray-300 md:text-3xl">
                Menjadi Keluarga Kerajaan Allah Yang Dikuduskan Hidup Dalam
                Kasih dan Berbuah.
              </p>
            </motion.div>

            {/* MISI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                MISI
              </h2>
              <ol className="space-y-4 text-lg font-semibold text-gray-300 md:text-xl">
                <li className="flex gap-3">
                  <span className="font-bold">1.</span>
                  <span>
                    Memperlengkapi Jemaat Dengan Kebenaran Firman Tuhan
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">2.</span>
                  <span>
                    Membimbing Jemaat Untuk Bertumbuh Dewasa Menjadi Serupa dan
                    Segambar Kristus
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">3.</span>
                  <span>
                    Membangun Jemaat Sesuai Nilai-nilai Gereja – REBORN
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">4.</span>
                  <span>
                    Memberdayakan Jemaat Bagi Pekerjaan Pelayanan Untuk
                    Pembangunan Tubuh Kristus
                  </span>
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <a
                    href="#beranda"
                    className="transition-colors hover:text-white"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#tentang"
                    className="transition-colors hover:text-white"
                  >
                    Tentang
                  </a>
                </li>
                <li>
                  <a
                    href="#ibadah"
                    className="transition-colors hover:text-white"
                  >
                    Ibadah
                  </a>
                </li>
                <li>
                  <a
                    href="#event"
                    className="transition-colors hover:text-white"
                  >
                    Event
                  </a>
                </li>
                <li>
                  <a
                    href="#kontak"
                    className="transition-colors hover:text-white"
                  >
                    Kontak
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
