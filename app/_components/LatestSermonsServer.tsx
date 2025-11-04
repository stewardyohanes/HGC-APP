import LatestSermonsClient, { type YouTubeVideo } from "./LatestSermonsClient";

async function getVideos(): Promise<YouTubeVideo[]> {
  try {
    const base =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://www.hgcchurch.id");
    const res = await fetch(`${base}/api/youtube`, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.videos ?? [];
  } catch {
    return [];
  }
}

export default async function LatestSermonsServer() {
  const videos = await getVideos();
  return (
    <section id="ibadah" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Konten Minggu ini
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Temukan konten terbaru minggu ini: khotbah, pujian, dan highlight pelayanan.
          </p>
        </div>
        <LatestSermonsClient videos={videos} />
      </div>
    </section>
  );
}


