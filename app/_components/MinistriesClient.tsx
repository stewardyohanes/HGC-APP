"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MinistriesClient() {
  return (
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
            Bergabung dalam kelompok kecil, terlibat dalam pelayanan, dan temukan cara bagi seluruh keluarga Anda untuk bertumbuh dalam iman.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Small Group */}
          <Link href="/group" className="block no-underline">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative flex flex-col overflow-hidden bg-blue-900 p-8 transition-all hover:scale-105 cursor-pointer h-full"
            >
              <div className="relative z-10 flex flex-1 flex-col">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-300">
                  Komunitas
                </p>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white">
                  Small Group
                </h3>
                <p className="mb-6 flex-1 text-gray-200">
                  Menghubungkan orang. Mengaktifkan iman melalui hubungan yang bermakna.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-blue-900/50 to-blue-950" />
            </motion.div>
          </Link>

          {/* Ibadah Pemuda */}
          <Link href="/worship#pemuda" className="block no-underline">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative flex flex-col overflow-hidden bg-zinc-950 p-8 transition-all hover:scale-105 cursor-pointer h-full"
            >
              <div className="relative z-10 flex flex-1 flex-col">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Ibadah Pemuda
                </p>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white">Youth and Teens Engage</h3>
                <p className="mb-6 flex-1 text-gray-300">Mengembangkan pemuda yang mempengaruhi budaya dan bertumbuh dalam Kristus.</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 bg-linear-to-l from-zinc-800/30 to-transparent" />
            </motion.div>
          </Link>

          {/* Ibadah Anak */}
          <Link href="/worship#anak" className="block no-underline">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative flex flex-col overflow-hidden bg-cyan-600 p-8 transition-all hover:scale-105 cursor-pointer h-full"
            >
              <div className="relative z-10 flex flex-1 flex-col">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-200">Ibadah Anak</p>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white">Kids</h3>
                <p className="mb-6 flex-1 text-cyan-50">Bermitra dengan orang tua untuk mengembangkan iman anak sejak dini.</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-cyan-600/50 to-cyan-700" />
            </motion.div>
          </Link>

          {/* Baptisan */}
          <a 
            href="https://wa.me/6281295960003?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Baptisan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block no-underline"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative flex flex-col overflow-hidden bg-orange-600 p-8 transition-all hover:scale-105 cursor-pointer h-full"
            >
              <div className="relative z-10 flex flex-1 flex-col">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-200">Pelayanan Sakramen</p>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white">Baptisan</h3>
                <p className="mb-6 flex-1 text-orange-50">Mengambil langkah berikutnya dalam perjalanan iman Anda melalui baptisan air.</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-orange-600/50 to-orange-700" />
            </motion.div>
          </a>

          {/* Pelayanan Doa */}
          <a 
            href="https://wa.me/6281295960003?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Pelayanan%20Doa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block no-underline md:col-span-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative flex flex-col overflow-hidden bg-green-700 p-8 transition-all hover:scale-105 cursor-pointer h-full"
            >
              <div className="relative z-10 flex flex-1 flex-col">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-200">Pelayanan Doa</p>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white">Pastoral (Pelayanan Doa)</h3>
                <p className="mb-6 flex-1 text-green-50">Menginspirasi iman Anda dan menciptakan suasana doa serta penggembalaan rohani.</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-green-700/50 to-green-800" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}


