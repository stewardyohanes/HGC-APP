import { NextResponse } from "next/server";

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  published: string;
  link: string;
}

export async function GET() {
  try {
    // YouTube RSS feed options:
    // 1. Channel ID: https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID
    // 2. Username: https://www.youtube.com/feeds/videos.xml?user=USERNAME
    
    // Untuk channel @HisGraceChurch, coba dengan username dulu
    // Jika tidak work, perlu cari Channel ID dari YouTube
    const username = process.env.YOUTUBE_USERNAME || "@HisGraceChurch";
    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    
    // Coba pakai channel ID jika ada, kalau tidak pakai username
    let rssUrl: string;
    if (channelId) {
      rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    } else {
      rssUrl = `https://www.youtube.com/feeds/videos.xml?user=${username}`;
    }

    const response = await fetch(rssUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      next: { revalidate: 3600 }, // Cache 1 jam
    });

    if (!response.ok) {
      console.error(`RSS fetch failed: ${response.status} ${response.statusText}`);
      return NextResponse.json({ videos: [] });
    }

    const xmlText = await response.text();
    
    // Parse XML manually (simple regex-based parser)
    const videos: YouTubeVideo[] = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    const entries = xmlText.match(entryRegex) || [];

    entries.slice(0, 9).forEach((entry) => {
      const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
      const titleMatch = entry.match(/<title>(.*?)<\/title>/);
      const linkMatch = entry.match(/<link\s+href="([^"]+)"/);
      const publishedMatch = entry.match(/<published>(.*?)<\/published>/);
      const mediaDescriptionMatch = entry.match(/<media:description>([\s\S]*?)<\/media:description>/);

      if (videoIdMatch && titleMatch && linkMatch) {
        const videoId = videoIdMatch[1].trim();
        const title = titleMatch[1]
          .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/, "$1")
          .trim();
        const description = mediaDescriptionMatch
          ? mediaDescriptionMatch[1]
              .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/, "$1")
              .replace(/\s+/g, " ")
              .trim()
              .slice(0, 150) + "..."
          : "";
        
        videos.push({
          id: videoId,
          title,
          description,
          thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          published: publishedMatch ? publishedMatch[1].trim() : "",
          link: linkMatch[1].trim(),
        });
      }
    });

    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return NextResponse.json({ videos: [] }, { status: 500 });
  }
}

