import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.medraproworks.com";

  const routes = [
    { url: `${baseUrl}`, priority: 1.0 },
    { url: `${baseUrl}/services`, priority: 0.9 },
    { url: `${baseUrl}/gallery`, priority: 0.8 },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/materials`, priority: 0.7 },
    { url: `${baseUrl}/contact`, priority: 0.7 },
    { url: `${baseUrl}/terms`, priority: 0.3 },
    { url: `${baseUrl}/privacy`, priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route.priority,
  }));
}
