import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/download",
    "/features",
    "/how-it-works",
    "/pricing",
    "/blog",
    "/docs",
  ];

  return pages.map((page) => ({
    url: `${siteConfig.url}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : page === "/download" ? 0.9 : 0.8,
  }));
}
