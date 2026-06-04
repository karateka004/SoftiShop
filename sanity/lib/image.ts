import imageUrlBuilder from "@sanity/image-url";
import type { Image as SanityImage } from "@sanity/types";
import { projectId, dataset } from "@/sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });

// URL картинки Sanity с трансформациями (ширина/качество подставит next/image).
export function urlForImage(source: SanityImage): string {
  return builder.image(source).auto("format").fit("max").url();
}
