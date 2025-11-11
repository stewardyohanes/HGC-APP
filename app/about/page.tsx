"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Mail,
  MapPin,
  Phone,
  Target,
  Users,
  Heart,
  BookOpen,
  HandHeart,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const rebornValues = [
  {
    letter: "R",
    word: "Righteousness",
    meaning: "Kebenaran",
    description: "Hidup dalam kebenaran sesuai dengan Firman Tuhan dan standar-Nya yang kudus.",
  },
  {
    letter: "E",
    word: "Enthusiasm",
    meaning: "Antusias",
    description: "Melayani Tuhan dan sesama dengan semangat, gairah, dan sukacita yang meluap.",
  },
  {
    letter: "B",
    word: "Be Humble",
    meaning: "Kerendahan Hati",
    description: "Memiliki hati yang rendah hati, mengakui ketergantungan pada Tuhan dan menghormati sesama.",
  },
  {
    letter: "O",
    word: "Obey",
    meaning: "Ketaatan",
    description: "Taat kepada Firman Tuhan dan pimpinan Roh Kudus dalam setiap aspek kehidupan.",
  },
  {
    letter: "R",
    word: "Respect",
    meaning: "Menghargai",
    description: "Menghormati dan menghargai Tuhan, sesama, dan setiap pribadi yang diciptakan-Nya.",
  },
  {
    letter: "N",
    word: "Nations",
    meaning: "Misi Bangsa Bangsa",
    description: "Terlibat aktif dalam misi global untuk menjangkau semua bangsa dengan kabar baik.",
  },
];

const historyTimeline = [
  {
    year: "21 Oktober 2017",
    title: "Pendirian Gereja",
    description: "JKI His Grace Church didirikan oleh Pdt. Daniel Julian Laoh (+) yang saat itu ditahbiskan oleh ketua Sinode JKI, Pdt. Dr. Adi Sutanto. Gereja ini ada untuk menjadi berkat bagi Sulawesi Utara dengan semangat pembaharuan untuk bergerak maju menggenapi visi yang Tuhan sudah berikan.",
  },
  {
    year: "Juni 2020",
    title: "Perpindahan Kepemimpinan & Ekspansi",
    description: "Tuhan memanggil pulang gembala sidang Pdt. Daniel Julian Laoh dan digantikan oleh Pdt. Lucky Laoh. Penyertaan Tuhan terus dinyatakan dalam gereja ini. Cabang Bitung memiliki Gedung gereja permanen dan diselesaikan pembangunannya hanya dalam waktu 6 bulan pada saat pandemi covid. Cabang Tomohon juga dihibahkan tanah oleh seorang jemaat dan sedang dalam tahap Pembangunan sampai saat ini.",
  },
  {
    year: "Maret 2024",
    title: "Ekspansi Cabang Sonder",
    description: "Karena anugerah Tuhan, gereja menyelesaikan pembelian tanah dan bangunan gereja cabang Sonder.",
  },
  {
    year: "September 2024",
    title: "Pusat Manado",
    description: "Pusat Manado dipercayakan juga tanah pada September 2024.",
  },
  {
    year: "Januari 2025",
    title: "Pembangunan Pusat Manado",
    description: "Pembangunan pusat Manado sudah dimulai pada Januari 2025 hingga saat ini.",
  },
];

const leadershipTeam = [
  {
    name: "Pdt. [Nama]",
    position: "Senior Pastor",
    description: "Memimpin gereja dengan visi yang jelas dan hati yang mengasihi jemaat.",
    image: "/logo-main.webp", // TODO: Ganti dengan foto leadership
  },
  {
    name: "Pdt. [Nama]",
    position: "Associate Pastor",
    description: "Membantu dalam pelayanan dan pembinaan jemaat.",
    image: "/logo-main.webp", // TODO: Ganti dengan foto leadership
  },
  {
    name: "Pnt. [Nama]",
    position: "Elder",
    description: "Melayani sebagai penatua yang membimbing dan mengawasi pelayanan.",
    image: "/logo-main.webp", // TODO: Ganti dengan foto leadership
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Tentang Kami
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl">
              JKI His Grace Church - Menjadi Keluarga Kerajaan Allah Yang
              Dikuduskan Hidup Dalam Kasih dan Berbuah
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="relative border-y border-white/5 bg-zinc-900 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            {/* VISI */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <Target className="h-8 w-8 text-emerald-400" />
                <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                  VISI
                </h2>
              </div>
              <p className="text-xl font-bold leading-relaxed text-gray-300 md:text-2xl">
                Menjadi Keluarga Kerajaan Allah Yang Dikuduskan Hidup Dalam
                Kasih dan Berbuah.
              </p>
            </motion.div>

            {/* MISI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <Users className="h-8 w-8 text-emerald-400" />
                <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                  MISI
                </h2>
              </div>
              <ol className="space-y-4 text-base font-semibold text-gray-300 md:text-lg">
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-400">1.</span>
                  <span>
                    Memperlengkapi Jemaat Dengan Kebenaran Firman Tuhan
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-400">2.</span>
                  <span>
                    Membimbing Jemaat Untuk Bertumbuh Dewasa Menjadi Serupa dan
                    Segambar Kristus
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-400">3.</span>
                  <span>
                    Membangun Jemaat Sesuai Nilai-nilai Gereja – REBORN
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-400">4.</span>
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

      {/* Nilai-nilai REBORN Section */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Nilai-nilai Gereja
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-400">
              REBORN - Fondasi yang membentuk karakter dan identitas keluarga
              HGC
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rebornValues.map((value, index) => (
              <motion.div
                key={value.word}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 p-6 transition-all hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-400/10"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-3xl font-bold text-emerald-400">
                    {value.letter}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {value.word}
                    </h3>
                    <p className="text-sm text-emerald-400">{value.meaning}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sejarah Gereja Section */}
      <section className="relative border-y border-white/5 bg-zinc-900 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <Calendar className="h-8 w-8 text-emerald-400" />
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Sejarah Gereja
              </h2>
            </div>
            <p className="mx-auto max-w-3xl text-lg text-gray-400">
              Perjalanan iman dan pelayanan JKI His Grace Church dari masa ke
              masa
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-400 md:left-1/2 md:-translate-x-0.5" />

            <div className="space-y-12">
              {historyTimeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex items-center gap-8 md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex shrink-0 items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="h-4 w-4 rounded-full border-4 border-emerald-400 bg-black" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 rounded-xl border border-white/10 bg-zinc-950 p-6 md:w-5/12 ${
                      index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                    }`}
                  >
                    <div className="mb-2 text-2xl font-bold text-emerald-400">
                      {item.year}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tim Leadership Section */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-emerald-400" />
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Tim Leadership
              </h2>
            </div>
            <p className="mx-auto max-w-3xl text-lg text-gray-400">
              Para pemimpin yang dipanggil Tuhan untuk menggembalakan dan
              membimbing keluarga HGC
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={leader.position}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group text-center"
              >
                <div className="mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={300}
                    height={300}
                    className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {leader.name}
                </h3>
                <p className="mb-3 text-sm font-semibold text-emerald-400">
                  {leader.position}
                </p>
                <p className="text-sm text-gray-400">{leader.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi & Kontak Section */}
      <section className="relative border-y border-white/5 bg-zinc-900 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <MapPin className="h-8 w-8 text-emerald-400" />
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Lokasi & Kontak
              </h2>
            </div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-xl border border-white/10 bg-zinc-950 p-6">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Informasi Kontak
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <p className="font-semibold text-white">Alamat</p>
                      <p className="text-sm text-gray-400">
                        Graha HGC Marina (Ruko Marina Plaza Blok D12) Manado
                        95111
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <p className="font-semibold text-white">Telepon</p>
                      <a
                        href="tel:081295960003"
                        className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                      >
                        0812-9596-0003
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <a
                        href="mailto:jki.hisgrace@gmail.com"
                        className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                      >
                        jki.hisgrace@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <p className="font-semibold text-white">Jam Operasional</p>
                      <p className="text-sm text-gray-400">Open Every Day</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="https://wa.me/6281295960003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/50 bg-emerald-400/10 px-6 py-4 font-semibold text-white transition-all hover:bg-emerald-400/20"
              >
                Hubungi Kami via WhatsApp
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl border border-white/10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.467962674602!2d124.83478607581614!3d1.490725661105084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287759043810d43%3A0xaaaaf2b6bbb8b2f4!2sGraha%20HGC%20Manado%20-%20JKI%20HIS%20GRACE%20CHURCH!5e0!3m2!1sen!2sid!4v1762756990448!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Bergabunglah dengan Keluarga HGC
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-400">
              Mari bersama-sama menjadi keluarga kerajaan Allah yang dikuduskan,
              hidup dalam kasih, dan berbuah bagi kemuliaan Tuhan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/worship"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
              >
                Lihat Jadwal Ibadah
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/group"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Temukan Komunitas
                <Users className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

