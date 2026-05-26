"use client";

import ScrollReveal from "./ScrollReveal";

interface VideoEmbedProps {
  videos?: string[];
  title?: string;
}

function getPlatform(videoUrl: string): "youtube" | "vimeo" | "unknown" {
  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) return "youtube";
  if (videoUrl.includes("vimeo.com")) return "vimeo";
  return "unknown";
}

export default function VideoEmbed({ videos, title }: VideoEmbedProps) {
  if (!videos || videos.length === 0) return null;

  // Extract the embed URL for each platform
  const embedUrls = videos.map((url) => {
    const platform = getPlatform(url);

    if (platform === "youtube") {
      // Accept both /embed/ and /watch?v= formats
      if (url.includes("/embed/")) return url;
      const match = url.match(/(?:v=|youtu\.be\/)([\w-]+)/);
      if (match) return `https://www.youtube.com/embed/${match[1]}`;
      return url;
    }

    if (platform === "vimeo") {
      // Accept both player.vimeo.com and vimeo.com formats
      if (url.includes("player.vimeo.com")) return url;
      const match = url.match(/vimeo\.com\/(\d+)/);
      if (match) return `https://player.vimeo.com/video/${match[1]}`;
      return url;
    }

    return url;
  });

  return (
    <ScrollReveal>
      <div className="mx-auto mb-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-[#1b4332]">
          {title || "Video"}
        </h2>
        <div
          className={
            embedUrls.length > 1
              ? "grid grid-cols-1 gap-6 md:grid-cols-2"
              : "mx-auto max-w-3xl"
          }
        >
          {embedUrls.map((url, i) => (
            <div
              key={url}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-video">
                <iframe
                  src={url}
                  title={`Video ${i + 1}`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
