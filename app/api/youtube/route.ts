import { NextResponse } from "next/server";
import { fetchLatestYouTubeVideos } from "@/app/_lib/youtube";

export const dynamic = "force-static";
export const revalidate = 300;

// interface removed; using shared util types

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

    // Prefer explicit channel id via env; otherwise use known stable default for HGC
    const envUsernameOrHandle =
      process.env.YOUTUBE_USERNAME || "@HisGraceChurch";
    const defaultChannelId =
      process.env.YOUTUBE_CHANNEL_ID || "UC27T-m64XnJ-FAEnMJ1XlWw";

    // Try to resolve from handle, but always include default channel first
    const maybeResolved = await resolveChannelIdFromHandleOrUsername(
      envUsernameOrHandle
    );

    // Build candidate RSS URLs: default channel first, then resolved, then legacy user
    const legacyUsername = envUsernameOrHandle.replace(/^@/, "");
    const rssCandidates: string[] = [];
    rssCandidates.push(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${defaultChannelId}`
    );
    if (maybeResolved && maybeResolved !== defaultChannelId) {
      rssCandidates.push(
        `https://www.youtube.com/feeds/videos.xml?channel_id=${maybeResolved}`
      );
    }
    if (legacyUsername) {
      rssCandidates.push(
        `https://www.youtube.com/feeds/videos.xml?user=${legacyUsername}`
      );
    }

    const videos = await fetchLatestYouTubeVideos();
    if (!videos.length) {
      console.error("All RSS candidates failed or contained no entries.");
    }
    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return NextResponse.json({ videos: [] }, { status: 500 });
  }
}
