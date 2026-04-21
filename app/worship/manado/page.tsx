import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin, Phone } from "lucide-react";

const manadoSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Church"],
  name: "HGC Church Manado",
  url: "https://www.hgcchurch.id/worship/manado",
  image: "https://www.hgcchurch.id/logo-main-text.webp",
  telephone: "+62-812-9596-0003",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Graha HGC Marina (Ruko Marina Plaza Blok D12)",
    addressLocality: "Manado",
    postalCode: "95111",
    addressCountry: "ID",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00:00",
      closes: "12:30:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/hgcmanado/",
    "https://facebook.com/Hisgrace.id",
    "https://www.youtube.com/@HisGraceChurch",
  ],
};

export const metadata: Metadata = {
  title: "Jadwal Ibadah Manado",
  description:
    "Jadwal ibadah HGC Church Manado setiap Minggu di Graha HGC Marina. Cek jam ibadah dan lokasi lengkap.",
  alternates: {
    canonical: "https://www.hgcchurch.id/worship/manado",
  },
  openGraph: {
    title: "Jadwal Ibadah Manado | HGC Church",
    description:
      "Jadwal ibadah HGC Church Manado setiap Minggu di Graha HGC Marina. Cek jam ibadah dan lokasi lengkap.",
    url: "https://www.hgcchurch.id/worship/manado",
    images: ["/logo-main-text.webp"],
  },
};

export default function WorshipManadoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manadoSchema) }}
      />

      <section className="border-b border-white/10 bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Jadwal Ibadah HGC Manado
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Bergabunglah dalam ibadah Minggu di Graha HGC Manado. Halaman ini
            khusus untuk jemaat dan pengunjung baru yang mencari jadwal ibadah
            gereja di Manado.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <div className="mb-4 flex items-center gap-3">
              <Calendar className="h-5 w-5 text-emerald-400" />
              <h2 className="text-2xl font-bold">Ibadah Minggu Raya</h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-950 px-4 py-3">
                <span className="text-sm text-gray-300">Sesi 1</span>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="font-semibold">08.00 WITA</span>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-950 px-4 py-3">
                <span className="text-sm text-gray-300">Sesi 2</span>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="font-semibold">11.00 WITA</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/6281295960003?text=Shalom%2C%20saya%20ingin%20konfirmasi%20jadwal%20ibadah%20Manado%20di%20HGC"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-emerald-400/40 bg-emerald-500/20 px-4 py-3 font-semibold text-emerald-200 transition hover:bg-emerald-500/30"
            >
              Konfirmasi via WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="h-5 w-5 text-emerald-400" />
              <h2 className="text-2xl font-bold">Lokasi Ibadah</h2>
            </div>

            <p className="text-gray-300">
              Graha HGC Manado, Ruko Marina Plaza Blok D12, Wenang, Manado
              95111.
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="https://maps.app.goo.gl/XnUCAyXVgPn9WmaR9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
              >
                Buka di Google Maps
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:081295960003"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                0812-9596-0003
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-3xl font-bold">Langkah Berikutnya di HGC</h2>
          <p className="mb-8 max-w-3xl text-gray-300">
            Setelah hadir ibadah, Anda bisa lanjut bertumbuh lewat komunitas,
            pelayanan, dan langkah iman praktis lainnya.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/group"
              className="rounded-xl border border-white/10 bg-zinc-900 p-5 transition hover:border-white/30"
            >
              <h3 className="text-lg font-semibold">Komunitas Kelompok Kecil</h3>
              <p className="mt-2 text-sm text-gray-400">
                Temukan kelompok kecil terdekat untuk bertumbuh dalam iman.
              </p>
            </Link>
            <Link
              href="/serve"
              className="rounded-xl border border-white/10 bg-zinc-900 p-5 transition hover:border-white/30"
            >
              <h3 className="text-lg font-semibold">Melayani di HGC</h3>
              <p className="mt-2 text-sm text-gray-400">
                Gunakan karunia Anda untuk melayani dan membangun tubuh Kristus.
              </p>
            </Link>
            <Link
              href="/give"
              className="rounded-xl border border-white/10 bg-zinc-900 p-5 transition hover:border-white/30"
            >
              <h3 className="text-lg font-semibold">Memberi sebagai Ibadah</h3>
              <p className="mt-2 text-sm text-gray-400">
                Dukung pelayanan HGC melalui persembahan dengan sukacita.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
