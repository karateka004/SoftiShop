import type { MetadataRoute } from "next";
import { getAllProductHandles } from "@/lib/commerce";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/products", "/lookbook", "/about", "/faq"];
  const handles = await getAllProductHandles();

  const pages = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const products = handles.map((handle) => ({
    url: `${SITE_URL}/products/${handle}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...pages, ...products];
}
