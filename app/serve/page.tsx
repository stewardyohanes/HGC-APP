"use client";

import {
  IconUsher,
  IconMultimedia,
  IconKids,
  IconCreative,
  IconWorship,
  IconEvent,
} from "@/components/Icons";
import Image from "next/image";
import { motion } from "framer-motion";

type Ministry = {
  key: string;
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ministries: Ministry[] = [
  {
    key: "usher",
    title: "Usher",
    description:
      "Sebagai penerima tamu—menyambut setiap jemaat dengan hangat dan membantu mereka merasa di rumah.",
    Icon: IconUsher,
  },
  {
    key: "multimedia",
    title: "Multimedia",
    description:
      "Sebagai tim media—mengoperasikan sound, lighting, live streaming, dan peralatan teknis ibadah.",
    Icon: IconMultimedia,
  },
  {
    key: "kids",
    title: "Kids",
    description:
      "Sebagai guru sekolah minggu—menabur firman Tuhan kepada anak-anak dengan kreatif dan penuh kasih.",
    Icon: IconKids,
  },
  {
    key: "creative",
    title: "Creative",
    description:
      "Designer, fotografer, videografer—menciptakan konten visual yang memuliakan Tuhan dan memberitakan Injil.",
    Icon: IconCreative,
  },
  {
    key: "worship",
    title: "Worship",
    description:
      "Sebagai tim worship—memimpin jemaat masuk dalam penyembahan yang sejati melalui musik dan pujian.",
    Icon: IconWorship,
  },
  {
    key: "event",
    title: "Event Tim",
    description:
      "Sebagai pengatur acara/produser—merencanakan dan mengkoordinasikan berbagai acara gereja dengan rapi.",
    Icon: IconEvent,
  },
];

export default function MelayaniPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative w-full overflow-hidden bg-zinc-900">
        <div className="relative h-[400px] md:h-[500px] w-full max-w-7xl mx-auto">
          <Image
            src="/serve/bg-hero.webp"
            alt="Melayani - People serving"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 2000px"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                  Melayani Adalah Kehormatan
                </h1>
                <p className="mt-3 text-gray-200 md:text-lg max-w-2xl mx-auto">
                  Kita diselamatkan untuk melayani. Dengan karunia yang Tuhan
                  beri, kita membangun tubuh Kristus. &quot;Setiap orang telah
                  menerima karunia yang berbeda-beda, hendaklah ia
                  mempergunakannya untuk melayani&quot; (1Ptr 4:10).
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-zinc-900 text-white px-6 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map(({ key, title, description, Icon }) => (
              <div
                key={key}
                className="group overflow-hidden rounded-lg border border-white/10 bg-zinc-950 p-6 transition hover:border-white/20 hover:bg-zinc-900"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 text-emerald-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-emerald-300">
                  <span className="text-xs uppercase tracking-wider opacity-80">
                    Terbuka untuk pendaftar
                  </span>
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-emerald-600/20 to-emerald-400/10 p-6 text-center">
            <h2 className="text-xl md:text-2xl font-bold">Siap Melayani?</h2>
            <p className="mt-2 text-gray-300">
              Kirimkan minat dan area pelayananmu. Tim kami akan menghubungi
              untuk orientasi singkat dan penjadwalan.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                href="https://wa.me/6281295960003?text=Shalom%2C%20saya%20ingin%20melayani%20di%20HGC"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-emerald-400/40 bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/30"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
