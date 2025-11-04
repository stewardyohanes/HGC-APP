import Link from "next/link";
import Image from "next/image";
import HeroClient from "./_components/HeroClient";
import MinistriesClient from "./_components/MinistriesClient";
import EventsClient from "./_components/EventsClient";
import LatestSermonsServer from "./_components/LatestSermonsServer";

//

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section (Client) */}
      <HeroClient />

      {/* Visi & Misi Section */}
      <section id="tentang" className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            {/* VISI */}
            <div>
              <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                VISI
              </h2>
              <p className="text-2xl font-bold leading-relaxed text-gray-300 md:text-3xl">
                Menjadi Keluarga Kerajaan Allah Yang Dikuduskan Hidup Dalam
                Kasih dan Berbuah.
              </p>
            </div>

            {/* MISI */}
            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Section (Client) */}
      <MinistriesClient />

      {/* Latest Sermon Section (Server fetch + client render) */}
      <LatestSermonsServer />

      {/* Upcoming Events Section (Client) */}
      <EventsClient />

      {/* Join Ministry Call-to-Action Section */}
      <section id="pelayanan" className="relative py-24 md:py-32">
        <div className="absolute inset-0 grayscale">
          <Image
            src="/home/bg-join-ministry.webp"
            alt="Bergabung pelayanan bersama HGC"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-black/50" />
        <div className="noise-overlay" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
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
          </div>
        </div>
      </section>

      {/* Footer moved to global chrome */}
    </div>
  );
}
