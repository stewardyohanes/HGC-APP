"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Search, Calendar, Clock } from "lucide-react";
import Image from "next/image";

type GroupType = "offline" | "online" | "hybrid";
type Frequency = "weekly" | "monthly";

type SmallGroup = {
  key: string;
  name: string;
  type: GroupType;
  frequency: Frequency;
  location: string;
  leader: string;
  day: string;
  time: string;
  category: string;
  language: string;
};

const smallGroups: SmallGroup[] = [
  {
    key: "logos",
    name: "Logos",
    type: "hybrid",
    frequency: "weekly",
    location: "Manado",
    leader: "Pnt Pieter Panelewen",
    day: "Jumat - Minggu",
    time: "18:00",
    category: "Dewasa",
    language: "Indonesia",
  },
  {
    key: "talitakum",
    name: "Talita Kum",
    type: "hybrid",
    frequency: "weekly",
    location: "Manado",
    leader: "Ibu Rini Saruan & Bpk Rolly Sendow",
    day: "Jumat - Minggu",
    time: "18:00",
    category: "Dewasa",
    language: "Indonesia",
  },
  {
    key: "damai",
    name: "Damai",
    type: "hybrid",
    frequency: "weekly",
    location: "Manado",
    leader: "Pnt Jeffry Sahambangun & Ibu Sisilia Lalenoh",
    day: "Jumat - Minggu",
    time: "18:00",
    category: "Dewasa",
    language: "Indonesia",
  },
  {
    key: "metanoia",
    name: "Metanoia",
    type: "hybrid",
    frequency: "weekly",
    location: "Manado",
    leader: "Pnt Hari Arifin",
    day: "Jumat - Minggu",
    time: "18:00",
    category: "Dewasa",
    language: "Indonesia",
  },
  {
    key: "kasih",
    name: "Kasih",
    type: "hybrid",
    frequency: "weekly",
    location: "Manado",
    leader: "Bpk Jansen Galwan",
    day: "Jumat - Minggu",
    time: "18:00",
    category: "Dewasa",
    language: "Indonesia",
  },
  {
    key: "sangkakala",
    name: "Sangkakala",
    type: "hybrid",
    frequency: "weekly",
    location: "Bitung",
    leader: "Pnt Wempi Mawirampakel",
    day: "Jumat - Minggu",
    time: "18:00",
    category: "Dewasa",
    language: "Indonesia",
  },
  {
    key: "imanuel",
    name: "Imanuel",
    type: "hybrid",
    frequency: "weekly",
    location: "Bitung",
    leader: "Pnt Hok Kundiman",
    day: "Jumat - Minggu",
    time: "18:00",
    category: "Dewasa",
    language: "Indonesia",
  },
  {
    key: "pniel",
    name: "Pniel",
    type: "hybrid",
    frequency: "weekly",
    location: "Sonder",
    leader: "Pnt Hartje Anis",
    day: "Jumat - Minggu",
    time: "18:00",
    category: "Dewasa",
    language: "Indonesia",
  },
  {
    key: "betlehem",
    name: "Betlehem",
    type: "hybrid",
    frequency: "weekly",
    location: "Sonder",
    leader: "Pnt Jeiny Karu",
    day: "Jumat - Minggu",
    time: "18:00",
    category: "Dewasa",
    language: "Indonesia",
  },
  {
    key: "miracle",
    name: "Miracle",
    type: "hybrid",
    frequency: "weekly",
    location: "Tomohon",
    leader: "Ibu Finy Hansang",
    day: "Jumat - Minggu",
    time: "18:00",
    category: "Dewasa",
    language: "Indonesia",
  },
  {
    key: "hope",
    name: "Hope",
    type: "hybrid",
    frequency: "weekly",
    location: "Tomohon",
    leader: "Pnt Andrew Hansang",
    day: "Jumat - Minggu",
    time: "18:00",
    category: "Dewasa",
    language: "Indonesia",
  },
  {
    key: "kasih-tomohon",
    name: "Kasih",
    type: "hybrid",
    frequency: "weekly",
    location: "Tomohon",
    leader: "Pnt Lodi Laluan",
    day: "Jumat - Minggu",
    time: "18:00",
    category: "Dewasa",
    language: "Indonesia",
  },
];

const getTypeLabel = (type: GroupType) => {
  switch (type) {
    case "offline":
      return "Offline";
    case "online":
      return "Online";
    case "hybrid":
      return "Hybrid";
  }
};

const getFrequencyLabel = (freq: Frequency) => {
  switch (freq) {
    case "weekly":
      return "Weekly";
    case "monthly":
      return "Monthly";
  }
};

export default function GroupPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<GroupType | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const categories = useMemo(
    () => Array.from(new Set(smallGroups.map((g) => g.category))),
    []
  );

  const locations = useMemo(
    () => Array.from(new Set(smallGroups.map((g) => g.location))).sort(),
    []
  );

  const filteredGroups = useMemo(() => {
    return smallGroups.filter((group) => {
      const matchesSearch =
        searchQuery === "" ||
        group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.leader.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = selectedType === "all" || group.type === selectedType;

      const matchesCategory =
        selectedCategory === "all" || group.category === selectedCategory;

      const matchesLocation =
        selectedLocation === "all" || group.location === selectedLocation;

      return matchesSearch && matchesType && matchesCategory && matchesLocation;
    });
  }, [searchQuery, selectedType, selectedCategory, selectedLocation]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section with Background Image */}
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[400px] md:h-[500px] w-full max-w-7xl mx-auto">
          <Image
            src="/group/bg-hero.webp"
            alt="Kelompok Kecil - People connecting"
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
                  Kelompok Kecil
                </h1>
                <p className="mt-3 text-gray-200 md:text-lg max-w-2xl mx-auto">
                  Bergabunglah dalam kelompok kecil terdekat untuk bertumbuh
                  dalam iman, membangun persekutuan, dan saling melayani satu
                  sama lain.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        {/* Search and Filter Section */}
        <div className="sticky top-20 z-10 mb-6 block bg-zinc-900 py-4 md:static md:pb-0 md:pt-8">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari kelompok..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-300">
                  Filters:
                </span>
              </div>

              {/* Type Filter */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-400">Tipe:</label>
                <select
                  value={selectedType}
                  onChange={(e) =>
                    setSelectedType(e.target.value as GroupType | "all")
                  }
                  className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-sm text-white focus:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                >
                  <option value="all">Semua</option>
                  <option value="offline">Offline</option>
                  <option value="online">Online</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-400">Kategori:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-sm text-white focus:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                >
                  <option value="all">Semua</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-400">Lokasi:</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-sm text-white focus:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                >
                  <option value="all">Semua</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="ml-auto text-sm text-gray-400">
                Menampilkan {filteredGroups.length} hasil
              </div>
            </div>
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-20">
          {filteredGroups.map((group, index) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="w-full rounded-2xl border border-zinc-700 bg-zinc-800 shadow-lg flex flex-col self-stretch h-full gap-4 items-start p-6 pb-6 hover:border-zinc-600 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between w-full">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase text-emerald-400">
                      {getFrequencyLabel(group.frequency)}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs font-medium text-gray-300">
                      {getTypeLabel(group.type)}
                    </span>
                  </div>
                  {(group.type === "offline" || group.type === "hybrid") && (
                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                      <MapPin className="h-3 w-3" />
                      <span className="font-medium">{group.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Group Name */}
              <h3 className="text-xl font-bold text-white">{group.name}</h3>

              {/* Category and Type */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase text-gray-300">
                  {group.category}
                </span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-400">{group.language}</span>
              </div>

              {/* Leader */}
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">
                  <span className="text-gray-500">Leader:</span>{" "}
                  <span className="font-semibold text-white">
                    {group.leader}
                  </span>
                </span>
              </div>

              {/* Schedule */}
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">
                  <span className="font-medium">{group.day}</span>
                </span>
                <Clock className="h-4 w-4 text-gray-400 ml-2" />
                <span className="text-gray-300">{group.time}</span>
              </div>

              {/* Address for in-person groups */}
              {group.type === "offline" && group.location && (
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{group.location}</span>
                </div>
              )}

              {/* Action Button */}
              <div className="mt-auto pt-4 w-full">
                <a
                  href={`https://wa.me/6281295960003?text=Shalom%2C%20saya%20ingin%20bergabung%20dalam%20kelompok%20${encodeURIComponent(
                    group.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg border border-emerald-600/40 bg-emerald-600/20 px-4 py-2 text-center text-sm font-semibold text-emerald-200 transition-colors hover:bg-emerald-600/30"
                >
                  Hubungi via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400 text-lg">
              Tidak ada kelompok yang ditemukan
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedType("all");
                setSelectedCategory("all");
                setSelectedLocation("all");
              }}
              className="mt-4 text-emerald-400 hover:text-emerald-300 underline"
            >
              Reset filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
