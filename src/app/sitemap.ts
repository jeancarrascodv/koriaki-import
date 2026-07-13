import type { MetadataRoute } from "next";
import { allProducts } from "@/data/site";

const BASE = "https://koriakiimport.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages = allProducts.map((p) => ({
    url: `${BASE}/tienda/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/tienda`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...productPages,
  ];
}
