import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.medraproworks.com";

  const routes = [
    { url: `${baseUrl}`, priority: 1.0 },
    { url: `${baseUrl}/gallery`, priority: 0.8 },
    { url: `${baseUrl}/materials`, priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
