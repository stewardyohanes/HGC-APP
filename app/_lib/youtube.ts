export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  published: string;
  link: string;
};

export async function fetchLatestYouTubeVideos(): Promise<YouTubeVideo[]> {
  const defaultChannelId =
    process.env.YOUTUBE_CHANNEL_ID || "UC27T-m64XnJ-FAEnMJ1XlWw";
  const handleOrUsername = process.env.YOUTUBE_USERNAME || "@HisGraceChurch";

  const legacyUsername = handleOrUsername.replace(/^@/, "");
  const rssCandidates: string[] = [
    `https://www.youtube.com/feeds/videos.xml?channel_id=${defaultChannelId}`,
    `https://www.youtube.com/feeds/videos.xml?user=${legacyUsername}`,
  ];

  let xmlText: string | null = null;
  for (const rssUrl of rssCandidates) {
    try {
      const response = await fetch(rssUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          Accept:
            "application/atom+xml,application/xml;q=0.9,text/xml;q=0.8,*/*;q=0.7",
          "Accept-Language": "en-US,en;q=0.9",
          Referer: "https://www.youtube.com/",
        },
        // cache via Next fetch
        next: { revalidate: 300 },
      });
      if (!response.ok) continue;
      const text = await response.text();
      if (/<entry>[\s\S]*?<\/entry>/.test(text)) {
        xmlText = text;
        break;
      }
    } catch {
      // try next
    }
  }

  if (!xmlText) return [];

  const videos: YouTubeVideo[] = [];
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  const entries = xmlText.match(entryRegex) || [];

  entries.slice(0, 9).forEach((entry) => {
    const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
    const titleMatch = entry.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch =
      entry.match(
        /<link[^>]+rel=["']alternate["'][^>]*href=["']([^"']+)["']/
      ) || entry.match(/<link\s+href=["']([^"']+)["']/);
    const publishedMatch = entry.match(/<published>(.*?)<\/published>/);
    const mediaDescriptionMatch = entry.match(
      /<media:description>([\s\S]*?)<\/media:description>/
    );
    const mediaThumbMatch = entry.match(
      /<media:thumbnail[^>]+url=["']([^"']+)["'][^>]*\/>/
    );

    if (videoIdMatch && titleMatch) {
      const videoId = videoIdMatch[1].trim();
      const rawTitle = titleMatch[1]
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/, "$1")
        .trim();
      const description = mediaDescriptionMatch
        ? mediaDescriptionMatch[1]
            .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/, "$1")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 150) +
          (mediaDescriptionMatch[1].length > 150 ? "..." : "")
        : "";

      const thumbnail = mediaThumbMatch
        ? mediaThumbMatch[1].trim()
        : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

      const link = (
        linkMatch ? linkMatch[1] : `https://www.youtube.com/watch?v=${videoId}`
      ).trim();

      videos.push({
        id: videoId,
        title: rawTitle,
        description,
        thumbnail,
        published: publishedMatch ? publishedMatch[1].trim() : "",
        link,
      });
    }
  });

  return videos;
}
