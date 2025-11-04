import { NextResponse } from "next/server";

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  published: string;
  link: string;
}

async function resolveChannelIdFromHandleOrUsername(
  input: string
): Promise<string | null> {
  const trimmed = input.trim();
  if (!trimmed) return null;
  // If already a channel id
  if (/^UC[0-9A-Za-z_-]{22}$/.test(trimmed)) return trimmed;

  const userOrHandle = trimmed.startsWith("@") ? trimmed : `@${trimmed}`;

  const candidates = [
    `https://www.youtube.com/${userOrHandle}`,
    `https://m.youtube.com/${userOrHandle}`,
  ];

  for (const url of candidates) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
        // Don't cache the HTML aggressively; channel id is stable but handles may redirect
        next: { revalidate: 86400 },
      });
      if (!res.ok) continue;
      const html = await res.text();

      // Try JSON key pattern
      const jsonIdMatch = html.match(
        /"channelId"\s*:\s*"(UC[0-9A-Za-z_-]{22})"/
      );
      if (jsonIdMatch) return jsonIdMatch[1];

      // Try channel link pattern
      const linkMatch = html.match(
        /\/["']?channel\/(UC[0-9A-Za-z_-]{22})["'\/]/
      );
      if (linkMatch) return linkMatch[1];
    } catch {
      // ignore and try next
    }
  }

  // Legacy username path: attempt redirect to channel and parse
  const legacyUsername = trimmed.replace(/^@/, "");
  try {
    const res = await fetch(`https://www.youtube.com/user/${legacyUsername}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      redirect: "follow",
      next: { revalidate: 86400 },
    });
    if (res.ok) {
      const html = await res.text();
      const jsonIdMatch = html.match(
        /"channelId"\s*:\s*"(UC[0-9A-Za-z_-]{22})"/
      );
      if (jsonIdMatch) return jsonIdMatch[1];
      const linkMatch = html.match(
        /\/["']?channel\/(UC[0-9A-Za-z_-]{22})["'\/]/
      );
      if (linkMatch) return linkMatch[1];
    }
  } catch {
    // ignore
  }

  return null;
}

export async function GET() {
  try {
    // YouTube RSS feed options:
    // 1. Channel ID: https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID
    // 2. Username: https://www.youtube.com/feeds/videos.xml?user=USERNAME

    // Prefer explicit channel id via env; otherwise resolve from handle/username reliably
    const envUsernameOrHandle =
      process.env.YOUTUBE_USERNAME || "@HisGraceChurch";
    const envChannelId = process.env.YOUTUBE_CHANNEL_ID;

    const resolvedChannelId =
      envChannelId ||
      (await resolveChannelIdFromHandleOrUsername(envUsernameOrHandle));

    // Build candidate RSS URLs: channel_id first, fallback to legacy user feed
    const legacyUsername = envUsernameOrHandle.replace(/^@/, "");
    const rssCandidates: string[] = [];
    if (resolvedChannelId) {
      rssCandidates.push(
        `https://www.youtube.com/feeds/videos.xml?channel_id=${resolvedChannelId}`
      );
    }
    if (legacyUsername) {
      rssCandidates.push(
        `https://www.youtube.com/feeds/videos.xml?user=${legacyUsername}`
      );
    }

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
          // Reduce cache during troubleshooting; increase later if needed
          next: { revalidate: 300 },
        });
        if (!response.ok) {
          continue;
        }
        const text = await response.text();
        if (/<entry>[\s\S]*?<\/entry>/.test(text)) {
          xmlText = text;
          break;
        }
      } catch {
        // try next candidate
      }
    }

    if (!xmlText) {
      console.error("All RSS candidates failed or contained no entries.");
      return NextResponse.json({ videos: [] }, { status: 200 });
    }

    // Parse XML manually (robust regex-based extraction)
    const videos: YouTubeVideo[] = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    const entries = xmlText.match(entryRegex) || [];

    entries.slice(0, 9).forEach((entry) => {
      const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
      const titleMatch = entry.match(/<title>([\s\S]*?)<\/title>/);
      // Some entries may include multiple link tags; match the alternate/watch one if present
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

        // Prefer media:thumbnail if present, fallback to ytimg
        const thumbnail = mediaThumbMatch
          ? mediaThumbMatch[1].trim()
          : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

        // Fallback link if missing: construct standard watch URL
        const link = (
          linkMatch
            ? linkMatch[1]
            : `https://www.youtube.com/watch?v=${videoId}`
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

    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return NextResponse.json({ videos: [] }, { status: 500 });
  }
}
