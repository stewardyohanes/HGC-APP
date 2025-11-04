import LatestSermonsClient, { type YouTubeVideo } from "./LatestSermonsClient";
import { fetchLatestYouTubeVideos } from "../_lib/youtube";

async function getVideos(): Promise<YouTubeVideo[]> {
  try {
    const videos = await fetchLatestYouTubeVideos();
    return videos;
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


