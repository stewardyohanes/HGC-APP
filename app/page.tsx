"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  published: string;
  link: string;
}

function LatestSermonsSection() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/youtube");
        const data = await res.json();
        setVideos(data.videos || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []);

  return (
    <section id="ibadah" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Ibadah Minggu Ini
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Saksikan khotbah dan penyembahan penuh berkat dari HGC Church.
            Firman Tuhan untuk menguatkan iman dan membimbing langkah Anda.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse border border-white/10 bg-zinc-950"
              >
                <div className="aspect-video bg-zinc-800" />
                <div className="p-6">
                  <div className="mb-3 h-4 w-3/4 bg-zinc-800" />
                  <div className="h-3 w-full bg-zinc-800" />
                </div>
              </div>
            ))}
          </div>
        ) : videos.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <motion.a
                key={video.id}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden border border-white/10 bg-zinc-950 transition-all hover:border-white/20 hover:scale-105"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <Play className="h-16 w-16 fill-white text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-tight">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="line-clamp-3 text-sm leading-relaxed text-gray-400">
                      {video.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {new Date(video.published).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400">
            Tidak ada video tersedia saat ini.
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
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

          <div className="hidden space-x-12 lg:flex lg:items-center">
            {[
              "Memberi",
              "Pelayanan",
              "Komunitas",
              "Ibadah",
              "Event",
              "About",
            ].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-gray-400"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu toggle */}
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile & Tablet slide-over */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1D1C1C] px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 tablet:px-6 desktop:px-8 lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-lg font-bold">GMS</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded border border-white/10 px-3 py-1 text-sm uppercase tracking-wider text-white/90 hover:bg-white/5"
                >
                  closeMenu
                </button>
              </div>
              <nav className="grid gap-2">
                {[
                  { label: "BERANDA", href: "#beranda" },
                  { label: "GEREJA", href: "#tentang" },
                  { label: "IBADAH", href: "#ibadah" },
                  { label: "CG", href: "#komunitas" },
                  { label: "TERHUBUNG", href: "#kontak" },
                  { label: "MEDIA", href: "#ibadah" },
                  { label: "MEMBERI", href: "#memberi" },
                  { label: "MISI", href: "#tentang" },
                  { label: "PELAYANAN", href: "#pelayanan" },
                  { label: "MSJ", href: "#" },
                  { label: "TOKO", href: "#" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded border border-white/10 px-4 py-3 text-sm font-bold uppercase tracking-wider text-white/90 hover:bg-white/5"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
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
        	  backgroundImage: "url('/home/bg-hero-section.jpg')",
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

      {/* Ministry Section */}
      <section className="relative bg-zinc-900 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Tempat untuk Anda dan Keluarga
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-400">
              Bergabung dalam kelompok kecil, terlibat dalam pelayanan, dan
              temukan cara bagi seluruh keluarga Anda untuk bertumbuh dalam
              iman.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Small Group */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative flex flex-col overflow-hidden bg-blue-900 p-8 transition-all hover:scale-105"
            >
              <div className="relative z-10 flex flex-1 flex-col">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-300">
                  Komunitas
                </p>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white">
                  Small Group
                </h3>
                <p className="mb-6 flex-1 text-gray-200">
                  Menghubungkan orang. Mengaktifkan iman melalui hubungan yang
                  bermakna.
                </p>
                <button className="flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-950" />
            </motion.div>

            {/* Youth and Teens */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative flex flex-col overflow-hidden bg-zinc-950 p-8 transition-all hover:scale-105"
            >
              <div className="relative z-10 flex flex-1 flex-col">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Pelayanan Pemuda
                </p>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white">
                  Youth and Teens Engage
                </h3>
                <p className="mb-6 flex-1 text-gray-300">
                  Mengembangkan pemuda yang mempengaruhi budaya dan bertumbuh
                  dalam Kristus.
                </p>
                <button className="flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-zinc-800/30 to-transparent" />
            </motion.div>

            {/* Kids */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative flex flex-col overflow-hidden bg-cyan-600 p-8 transition-all hover:scale-105"
            >
              <div className="relative z-10 flex flex-1 flex-col">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-200">
                  Pelayanan Anak
                </p>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white">
                  Kids
                </h3>
                <p className="mb-6 flex-1 text-cyan-50">
                  Bermitra dengan orang tua untuk mengembangkan iman anak sejak
                  dini.
                </p>
                <button className="flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/50 to-cyan-700" />
            </motion.div>

            {/* Baptisan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative flex flex-col overflow-hidden bg-orange-600 p-8 transition-all hover:scale-105"
            >
              <div className="relative z-10 flex flex-1 flex-col">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-200">
                  Pelayanan Sakramen
                </p>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white">
                  Baptisan
                </h3>
                <p className="mb-6 flex-1 text-orange-50">
                  Mengambil langkah berikutnya dalam perjalanan iman Anda
                  melalui baptisan air.
                </p>
                <button className="flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/50 to-orange-700" />
            </motion.div>

            {/* Pastoral */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative flex flex-col overflow-hidden bg-green-700 p-8 transition-all hover:scale-105 md:col-span-2"
            >
              <div className="relative z-10 flex flex-1 flex-col">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-200">
                  Pelayanan Doa
                </p>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white">
                  Pastoral (Pelayanan Doa)
                </h3>
                <p className="mb-6 flex-1 text-green-50">
                  Menginspirasi iman Anda dan menciptakan suasana doa serta
                  penggembalaan rohani.
                </p>
                <button className="flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-700/50 to-green-800" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Sermon Section */}
      <LatestSermonsSection />

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
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Event Mendatang
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Ikuti jadwal kegiatan terbaru HGC Church. Jangan lewatkan momen
              kebersamaan, pertumbuhan iman, dan kesempatan untuk melayani.
            </p>
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

      {/* Join Ministry Call-to-Action Section */}
      <section id="pelayanan" className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center grayscale"
          style={{ backgroundImage: "url('/home/bg-join-ministry.jpg')" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-black/50" />
        <div className="noise-overlay" />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Bergabung Pelayanan Bersama Kami
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-200">
              Gunakan karunia yang Tuhan berikan untuk memberkati banyak orang.
              Mari melayani bersama keluarga HGC—bertumbuh, berdampak, dan
              memuliakan Tuhan.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://wa.me/6281295960003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
              >
                Gabung Pelayanan
              </a>
            </div>
          </motion.div>
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
