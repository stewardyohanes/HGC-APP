"use client";

import { motion } from "framer-motion";
import { Play, MapPin, Calendar, Clock, Users, ArrowRight } from "lucide-react";

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
            className="text-xl font-bold tracking-tight"
          >
            HGC CHURCH
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
        {/* Minimalistic Grid Background */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
          backgroundSize: "100px 100px"
        }} />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400"
            >
              Selamat Datang di HGC Church
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl"
            >
              Bertumbuh Bersama
              <br />
              <span className="text-white/40">Dalam Kasih Kristus</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl"
            >
              Komunitas yang mengasihi Tuhan dan melayani sesama dengan sukacita
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <button className="group flex items-center gap-3 border border-white bg-white px-8 py-4 text-base font-semibold tracking-wide text-black transition-all hover:bg-black hover:text-white">
                <Play className="h-5 w-5" fill="currentColor" />
                TONTON IBADAH
              </button>
              <button className="flex items-center gap-3 border border-white/20 bg-transparent px-8 py-4 text-base font-semibold tracking-wide text-white transition-all hover:border-white hover:bg-white hover:text-black">
                <MapPin className="h-5 w-5" />
                KUNJUNGI KAMI
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs uppercase tracking-widest text-gray-600">Scroll</span>
              <div className="h-10 w-px bg-gradient-to-b from-gray-600 to-transparent" />
            </motion.div>
          </motion.div>
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
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="border-t border-white/10 p-8">
                <h3 className="mb-3 text-2xl font-bold">Judul Khotbah - Tema Minggu Ini</h3>
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
      <section id="event" className="relative border-y border-white/5 bg-white py-24 text-black md:py-32">
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
                description: "Perayaan Natal bersama dengan pujian, firman Tuhan, dan persekutuan.",
                tag: "Special Event"
              },
              {
                title: "Retreat Pemuda 2026",
                date: "10-12 Januari 2026",
                time: "Full Day",
                location: "Puncak, Bogor",
                description: "3 hari 2 malam retreat khusus untuk pemuda dengan tema 'Rise Up'.",
                tag: "Youth Event"
              },
              {
                title: "Konser Rohani",
                date: "15 Februari 2026",
                time: "19:00 WIB",
                location: "Auditorium Gereja",
                description: "Malam pujian dan penyembahan bersama worship team & special guest.",
                tag: "Worship Night"
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
                  <h3 className="mb-4 text-2xl font-bold leading-tight">{event.title}</h3>
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
                  <p className="mb-6 leading-relaxed text-gray-700">{event.description}</p>
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

      {/* About Church Section */}
      <section id="tentang" className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                Tentang Kami
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Keluarga Besar
                <br />
                HGC Church
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-400">
                HGC Church adalah komunitas Kristen yang berdedikasi untuk mengasihi Tuhan dan melayani sesama. Kami percaya bahwa setiap orang berharga di mata Tuhan dan memiliki tujuan yang luar biasa.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-400">
                Visi kami adalah membangun gereja yang penuh dengan kasih, iman, dan pengharapan. Melalui ibadah, persekutuan, dan pelayanan, kami bertumbuh bersama dalam karakter Kristus.
              </p>
              <button className="flex items-center gap-3 border border-white bg-white px-8 py-4 font-semibold tracking-wide text-black transition-all hover:bg-black hover:text-white">
                PELAJARI LEBIH LANJUT
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Users, label: "Jemaat", value: "1500+" },
                { icon: Calendar, label: "Tahun Berdiri", value: "2000" },
                { icon: MapPin, label: "Lokasi", value: "Jakarta" },
                { icon: Clock, label: "Ibadah/Minggu", value: "3x" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <stat.icon className="mb-4 text-white" size={32} strokeWidth={1.5} />
                  <h3 className="mb-2 text-3xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="mb-4 text-2xl font-bold tracking-tight">
                HGC CHURCH
              </h3>
              <p className="mb-6 max-w-md leading-relaxed text-gray-400">
                Membangun komunitas yang mengasihi Tuhan dan melayani sesama dengan penuh sukacita dan kasih.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Jl. Gereja No. 123, Jakarta Selatan
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Minggu: 07:00, 09:00, 17:00 WIB
                </p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Menu</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#beranda" className="transition-colors hover:text-white">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#tentang" className="transition-colors hover:text-white">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="#ibadah" className="transition-colors hover:text-white">
                    Ibadah
                  </a>
                </li>
                <li>
                  <a href="#event" className="transition-colors hover:text-white">
                    Event
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="transition-colors hover:text-white">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Sosial Media</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Twitter
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
