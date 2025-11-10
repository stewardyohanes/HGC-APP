"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WorshipScheduleClient() {
  const mainSchedules = [
    {
      location: "Graha HGC Manado",
      address: "Ruko Marina Plaza Blok D12",
      sessions: [
        { time: "08.00", timezone: "WITA" },
        { time: "11.00", timezone: "WITA" },
      ],
    },
    {
      location: "Ibadah Pemuda",
      address: "Graha HGC Manado - Ruko Marina Plaza Blok D12",
      sessions: [{ time: "14.00", timezone: "WITA", label: "ENGAGE" }],
    },
    {
      location: "Ibadah Anak",
      address: "Graha HGC Manado - Ruko Marina Plaza Blok D12",
      sessions: [
        { time: "08.00", timezone: "WITA" },
        { time: "11.00", timezone: "WITA" },
      ],
    },
  ];

  return (
    <section id="worship-schedule" className="relative border-y border-white/5 bg-white py-24 text-black md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Jadwal Ibadah</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Bergabunglah bersama kami dalam ibadah setiap hari Minggu di berbagai lokasi. Mari kita memuji dan menyembah Tuhan bersama-sama.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {mainSchedules.map((schedule, index) => (
            <motion.div
              key={schedule.location}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden border border-black/10 bg-white transition-all hover:border-black hover:shadow-xl"
            >
              <div className="p-8">
                <div className="mb-4 inline-block border border-black px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  <Calendar className="mr-2 inline h-3 w-3" />
                  Setiap Minggu
                </div>
                <h3 className="mb-2 text-2xl font-bold leading-tight">{schedule.location}</h3>
                <p className="mb-6 text-sm text-gray-600">{schedule.address}</p>
                <div className="mb-6 space-y-3">
                  {schedule.sessions.map((session, sessionIndex) => (
                    <div
                      key={sessionIndex}
                      className="flex items-center justify-between rounded-md border border-black/5 bg-gray-50 px-4 py-3"
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-700">
                          {session.label || (schedule.sessions.length > 1 ? `Sesi ${sessionIndex + 1}` : "Ibadah")}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-black">{session.time}</div>
                        <div className="text-xs text-gray-500">{session.timezone}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/worship"
                  className="group/btn flex items-center gap-2 font-semibold transition-all hover:gap-3"
                >
                  Lihat Detail
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/worship"
            className="inline-flex items-center justify-center rounded-md border-2 border-black bg-black px-8 py-4 font-semibold text-white transition-colors hover:bg-gray-900"
          >
            Lihat Jadwal Lengkap & Lokasi
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

