"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Clock,
  MapPin,
  Calendar,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceSession = {
  session: string;
  time: string;
  timezone: string;
};

type Location = {
  city: string;
  specificLocation?: string;
  mapUrl?: string; // URL untuk link ke Google Maps
  mapEmbedUrl?: string; // URL untuk iframe embed Google Maps
  sessions: ServiceSession[];
};

type WorshipCategory = {
  name: string;
  locations: Location[];
};

const worshipCategories: WorshipCategory[] = [
  {
    name: "Ibadah Minggu Raya",
    locations: [
      {
        city: "Graha HGC Manado",
        specificLocation: "Ruko Marina Plaza Blok D12",
        mapUrl: "https://maps.app.goo.gl/XnUCAyXVgPn9WmaR9",
        mapEmbedUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.467962674602!2d124.83478607581614!3d1.490725661105084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287759043810d43%3A0xaaaaf2b6bbb8b2f4!2sGraha%20HGC%20Manado%20-%20JKI%20HIS%20GRACE%20CHURCH!5e0!3m2!1sen!2sid!4v1762756990448!5m2!1sen!2sid",
        sessions: [
          { session: "Sesi 1", time: "08.00", timezone: "WITA" },
          { session: "Sesi 2", time: "11.00", timezone: "WITA" },
        ],
      },
      {
        city: "Graha HGC Tomohon",
        specificLocation: "Jl. Stadion Dalam, Walian",
        mapUrl: "https://maps.app.goo.gl/zXj9CWibh2bNiQQx6",
        mapEmbedUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7763995454216!2d124.8399216050318!3d1.309446850066734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32876dd66f30b8c5%3A0x21acc89f84686a70!2sGraha%20HGC%20Tomohon!5e0!3m2!1sen!2sid!4v1762757158261!5m2!1sen!2sid",
        sessions: [{ session: "Sesi 1", time: "08.00", timezone: "WITA" }],
      },
      {
        city: "Graha HGC Bitung",
        specificLocation: "Jl. JW Tumundo, Girian Indah",
        mapUrl: "https://maps.app.goo.gl/MkG3in74uGC8DGb57",
        mapEmbedUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5387588700582!2d125.12810428456727!3d1.4511197574823367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870100066d897f%3A0xfeea97036c9ec4d1!2sHis%20Grace%20Church%20Bitung!5e0!3m2!1sen!2sid!4v1762757644070!5m2!1sen!2sid",
        sessions: [{ session: "Sesi 1", time: "09.00", timezone: "WITA" }],
      },
      {
        city: "Graha HGC Sonder",
        specificLocation: "Samping Bank BRI Sonder",
        mapUrl: "https://maps.app.goo.gl/kK4D3XnRkQo4AjKn9",
        mapEmbedUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8556382628462!2d124.77392427581663!3d1.2586681618603859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32876a1d1c9d4fa5%3A0xd20f58e8d090d1e1!2sJKI%20HIS%20GRACE%20CHURCH%20-%20Sonder!5e0!3m2!1sen!2sid!4v1762757694787!5m2!1sen!2sid",
        sessions: [{ session: "Sesi 1", time: "09.00", timezone: "WITA" }],
      },
      {
        city: "POP! Hotel Tebet Jakarta",
        specificLocation: "Jl. Prof. Soepomo No. 29, Tebet Barat",
        mapUrl: "https://maps.app.goo.gl/wQzMYm4sPsoiNXbRA",
        mapEmbedUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.232610449438!2d106.84014748476207!3d-6.233037244920949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f39467ad06a1%3A0xd058dd3b57f592a9!2sPOP*21%20Hotel%20Tebet!5e0!3m2!1sen!2sid!4v1762757828485!5m2!1sen!2sid",
        sessions: [{ session: "Sesi 1", time: "14.00", timezone: "WIB" }],
      },
    ],
  },
  {
    name: "Doa & Puasa",
    locations: [],
  },
  {
    name: "Ibadah Pemuda",
    locations: [
      {
        city: "Graha HGC Manado",
        specificLocation: "Ruko Marina Plaza Blok D12",
        mapUrl: "https://maps.app.goo.gl/XnUCAyXVgPn9WmaR9",
        mapEmbedUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.467962674602!2d124.83478607581614!3d1.490725661105084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287759043810d43%3A0xaaaaf2b6bbb8b2f4!2sGraha%20HGC%20Manado%20-%20JKI%20HIS%20GRACE%20CHURCH!5e0!3m2!1sen!2sid!4v1762756990448!5m2!1sen!2sid",
        sessions: [{ session: "ENGAGE", time: "14.00", timezone: "WITA" }],
      },
    ],
  },
  {
    name: "Ibadah Anak",
    locations: [
      {
        city: "Graha HGC Manado",
        specificLocation: "Ruko Marina Plaza Blok D12",
        mapUrl: "https://maps.app.goo.gl/XnUCAyXVgPn9WmaR9",
        mapEmbedUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.467962674602!2d124.83478607581614!3d1.490725661105084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287759043810d43%3A0xaaaaf2b6bbb8b2f4!2sGraha%20HGC%20Manado%20-%20JKI%20HIS%20GRACE%20CHURCH!5e0!3m2!1sen!2sid!4v1762756990448!5m2!1sen!2sid",
        sessions: [
          { session: "Sesi 1", time: "08.00", timezone: "WITA" },
          { session: "Sesi 2", time: "11.00", timezone: "WITA" },
        ],
      },
    ],
  },
];

export default function WorshipPage() {
  // Initialize state based on hash if available
  const getInitialState = () => {
    if (typeof window === "undefined") {
      return {
        "Ibadah Minggu Raya": true,
        "Doa & Puasa": true,
        "Ibadah Pemuda": true,
        "Ibadah Anak": true,
      };
    }
    const hash = window.location.hash.slice(1);
    return {
      "Ibadah Minggu Raya": true,
      "Doa & Puasa": true,
      "Ibadah Pemuda": hash === "pemuda" ? true : true,
      "Ibadah Anak": hash === "anak" ? true : true,
    };
  };

  const [expandedCategories, setExpandedCategories] =
    useState<Record<string, boolean>>(getInitialState);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  // Scroll to element when accessed via anchor link
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === "pemuda" || hash === "anak") {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[400px] md:h-[500px] w-full max-w-7xl mx-auto">
          <Image
            src="/worship/bg-ibadah.jpg"
            alt="Jadwal Ibadah - Worship Schedule"
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
                  Jadwal Ibadah
                </h1>
                <p className="mt-3 text-gray-200 md:text-lg max-w-2xl mx-auto">
                  Bergabunglah bersama kami dalam berbagai ibadah di berbagai
                  lokasi. Mari kita memuji dan menyembah Tuhan bersama-sama.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <section className="pt-12 pb-24 md:pt-16 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Parent Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-xl md:p-8"
          >
            <div className="space-y-8">
              {worshipCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  id={
                    category.name === "Ibadah Pemuda"
                      ? "pemuda"
                      : category.name === "Ibadah Anak"
                      ? "anak"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: categoryIndex * 0.1,
                  }}
                  className="rounded-xl border border-white/5 bg-zinc-950 p-6"
                >
                  {/* Category Header */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-6 w-6 text-emerald-400" />
                      <h2 className="text-2xl font-bold text-white md:text-3xl">
                        {category.name}
                      </h2>
                    </div>
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10"
                      aria-label={
                        expandedCategories[category.name]
                          ? "Collapse"
                          : "Expand"
                      }
                    >
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                          expandedCategories[category.name] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Locations List */}
                  <AnimatePresence initial={false}>
                    {expandedCategories[category.name] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {category.locations.length > 0 ? (
                          <div className="space-y-6">
                            {category.locations.map((location) => (
                              <div
                                key={location.city}
                                className="flex flex-col gap-6 rounded-lg border border-white/5 bg-zinc-900 p-6 transition-all hover:border-white/10 md:flex-row"
                              >
                                {/* Left: Location Info */}
                                <div className="flex-1">
                                  <div className="mb-4">
                                    <div className="mb-2 flex items-center gap-2">
                                      <MapPin className="h-5 w-5 text-emerald-400" />
                                      <h3 className="text-xl font-bold text-white md:text-2xl">
                                        {location.city}
                                      </h3>
                                    </div>
                                    {location.specificLocation && (
                                      <p className="ml-7 text-sm text-gray-400 md:text-base">
                                        ({location.specificLocation})
                                      </p>
                                    )}
                                    {location.mapUrl &&
                                      location.mapUrl.trim() !== "" && (
                                        <a
                                          href={location.mapUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="ml-7 mt-2 inline-flex items-center gap-1 text-xs text-emerald-400 transition-colors hover:text-emerald-300 md:text-sm"
                                        >
                                          <MapPin className="h-3 w-3" />
                                          <span>Lihat di Google Maps</span>
                                          <ExternalLink className="h-3 w-3" />
                                        </a>
                                      )}
                                  </div>

                                  <div className="space-y-2">
                                    {location.sessions.map(
                                      (service, sessionIndex) => (
                                        <div
                                          key={sessionIndex}
                                          className="flex items-center justify-between rounded-md border border-white/5 bg-zinc-950 px-4 py-3"
                                        >
                                          <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                              <Clock className="h-4 w-4 text-gray-400" />
                                              <span className="text-sm font-semibold text-gray-300 md:text-base">
                                                {service.session}
                                              </span>
                                            </div>
                                            <p className="ml-6 text-xs text-gray-500">
                                              (Setiap hari minggu)
                                            </p>
                                          </div>
                                          <div className="text-right">
                                            <div className="text-lg font-bold text-white md:text-xl">
                                              {service.time}
                                            </div>
                                            <div className="text-xs text-gray-400">
                                              {service.timezone}
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>

                                {/* Right: Maps */}
                                <div className="w-full md:w-96 md:shrink-0">
                                  {location.mapEmbedUrl &&
                                  location.mapEmbedUrl.trim() !== "" ? (
                                    <div className="h-64 w-full overflow-hidden rounded-lg border border-white/5 md:h-full md:min-h-[300px]">
                                      <iframe
                                        src={location.mapEmbedUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="h-full w-full"
                                      />
                                    </div>
                                  ) : location.mapUrl &&
                                    location.mapUrl.trim() !== "" ? (
                                    <div className="h-64 w-full overflow-hidden rounded-lg border border-white/5 md:h-full md:min-h-[300px]">
                                      <div className="flex h-full w-full items-center justify-center bg-zinc-950">
                                        <div className="text-center">
                                          <MapPin className="mx-auto h-8 w-8 text-gray-500" />
                                          <p className="mt-2 text-sm text-gray-400">
                                            Maps akan ditambahkan di sini
                                          </p>
                                          <a
                                            href={location.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-400 transition-colors hover:text-emerald-300"
                                          >
                                            Buka di Google Maps
                                            <ExternalLink className="h-3 w-3" />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="flex h-64 w-full items-center justify-center rounded-lg border border-white/5 bg-zinc-950 md:h-full md:min-h-[300px]">
                                      <div className="text-center">
                                        <MapPin className="mx-auto h-8 w-8 text-gray-600" />
                                        <p className="mt-2 text-sm text-gray-500">
                                          Maps belum tersedia
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="rounded-lg border border-white/5 bg-zinc-900 p-6 text-center">
                            <p className="text-gray-400">
                              Informasi jadwal akan segera diumumkan
                            </p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
