"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

export default function EventsClient() {
  const events = [
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
  ];

  return (
    <section id="event" className="relative border-y border-white/5 bg-white py-24 text-black md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Event Mendatang</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Ikuti jadwal kegiatan terbaru HGC Church. Jangan lewatkan momen kebersamaan.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, index) => (
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
                <button type="button" className="group/btn flex items-center gap-2 font-semibold transition-all hover:gap-3">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


