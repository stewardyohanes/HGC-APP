"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Play, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
            Konten Minggu ini
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Temukan konten terbaru minggu ini: khotbah, pujian, dan highlight
            pelayanan untuk membangun iman dan menginspirasi langkah Anda.
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
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        id="beranda"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background Image - Worship & Praise */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/home/bg-hero-section.webp')",
          }}
        />

        {/* Dark overlay untuk readability */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient overlay */}
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
                <button
                  type="button"
                  className="flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3"
                >
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-blue-900/50 to-blue-950" />
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
                  Ibadah Pemuda
                </p>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white">
                  Youth and Teens Engage
                </h3>
                <p className="mb-6 flex-1 text-gray-300">
                  Mengembangkan pemuda yang mempengaruhi budaya dan bertumbuh
                  dalam Kristus.
                </p>
                <button
                  type="button"
                  className="flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3"
                >
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 bg-linear-to-l from-zinc-800/30 to-transparent" />
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
                  Ibadah Anak
                </p>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white">
                  Kids
                </h3>
                <p className="mb-6 flex-1 text-cyan-50">
                  Bermitra dengan orang tua untuk mengembangkan iman anak sejak
                  dini.
                </p>
                <button
                  type="button"
                  className="flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3"
                >
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-cyan-600/50 to-cyan-700" />
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
                <button
                  type="button"
                  className="flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3"
                >
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-orange-600/50 to-orange-700" />
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
                <button
                  type="button"
                  className="flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3"
                >
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-green-700/50 to-green-800" />
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
                  <button
                    type="button"
                    className="group/btn flex items-center gap-2 font-semibold transition-all hover:gap-3"
                  >
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
          style={{ backgroundImage: "url('/home/bg-join-ministry.webp')" }}
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
              <Link
                href="/serve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
              >
                Gabung Pelayanan
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer moved to global chrome */}
    </div>
  );
}
