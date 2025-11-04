"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Calendar } from "lucide-react";

export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  published: string;
  link: string;
};

export default function LatestSermonsClient({ videos }: { videos: YouTubeVideo[] }) {
  if (!videos || videos.length === 0) {
    return (
      <div className="text-center text-gray-400">Tidak ada video tersedia saat ini.</div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video, index) => (
        <motion.a
          key={video.id}
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative overflow-hidden border border-white/10 bg-zinc-950 transition-all hover:border-white/20 hover:scale-105"
        >
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : undefined}
              fetchPriority={index === 0 ? "high" : undefined}
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <Play className="h-16 w-16 fill-white text-white" />
            </div>
          </div>
          <div className="p-6">
            <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-tight">
              {video.title}
            </h3>
            {video.description && (
              <p className="line-clamp-3 text-sm leading-relaxed text-gray-400">
                {video.description}
              </p>
            )}
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <Calendar className="h-3 w-3" />
              {new Date(video.published).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}


