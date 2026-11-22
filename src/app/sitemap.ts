import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vinjamuri.in";
  const routes = ["", "/services", "/remedies", "/about", "/contact"];

  return routes.map((route, index) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-11-21"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
