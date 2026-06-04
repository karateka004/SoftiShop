// lib/commerce.ts
//
// COMMERCE-АБСТРАКЦИЯ.
// Источник данных: Sanity CMS (если задан NEXT_PUBLIC_SANITY_PROJECT_ID),
// иначе — локальный mock (lib/products.ts). Сигнатуры функций неизменны,
// поэтому UI не зависит от источника. При ошибке запроса к Sanity —
// безопасный фолбэк на mock (сайт не падает).
//
// Правило: UI импортирует ТОЛЬКО отсюда.

import { PRODUCTS } from "@/lib/products";
import type { Product, CurrencyCode } from "@/lib/products";
import { sanityClient } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { sanityEnabled } from "@/sanity/env";

export type { Product, Money, ProductImage, CurrencyCode } from "@/lib/products";

// --- Sanity ---

interface SanityProduct {
  _id: string;
  title: string;
  handle: string;
  price: number;
  currency?: string;
  sizes?: string[];
  legend?: string;
  available?: boolean;
  badge?: string;
  featured?: boolean;
  images?: { alt?: string; asset?: unknown }[];
}

const PRODUCT_PROJECTION = `{
  _id, title, "handle": slug.current, price, currency, sizes,
  legend, available, badge, featured,
  images[]{ alt, asset }
}`;

function mapProduct(p: SanityProduct): Product {
  return {
    id: p._id,
    handle: p.handle,
    title: p.title,
    price: {
      amount: p.price ?? 0,
      currency: (p.currency as CurrencyCode) ?? "UAH",
    },
    sizes: p.sizes ?? [],
    images: (p.images ?? [])
      .filter((img) => img.asset)
      .map((img) => ({
        // urlForImage принимает объект изображения Sanity (asset-ref).
        src: urlForImage(img as never),
        alt: img.alt ?? p.title,
      })),
    legend: p.legend ?? "",
    available: p.available ?? true,
    badge: p.badge,
    featured: p.featured,
  };
}

async function sanityFetch<T>(query: string, params?: Record<string, unknown>) {
  return sanityClient.fetch<T>(query, params ?? {});
}

/** Все товары (для страницы коллекции). */
export async function getProducts(): Promise<Product[]> {
  if (sanityEnabled) {
    try {
      const docs = await sanityFetch<SanityProduct[]>(
        `*[_type == "product"] | order(coalesce(orderRank, "") asc, _createdAt asc) ${PRODUCT_PROJECTION}`,
      );
      if (docs.length) return docs.map(mapProduct);
    } catch (e) {
      console.error("[commerce] Sanity getProducts failed, fallback to mock:", e);
    }
  }
  return PRODUCTS;
}

/** Один товар по handle (для страницы товара). undefined → 404. */
export async function getProduct(handle: string): Promise<Product | undefined> {
  if (sanityEnabled) {
    try {
      const doc = await sanityFetch<SanityProduct | null>(
        `*[_type == "product" && slug.current == $handle][0] ${PRODUCT_PROJECTION}`,
        { handle },
      );
      if (doc) return mapProduct(doc);
    } catch (e) {
      console.error("[commerce] Sanity getProduct failed, fallback to mock:", e);
    }
  }
  return PRODUCTS.find((p) => p.handle === handle);
}

/** Подборка для главной (featured). */
export async function getFeaturedProducts(): Promise<Product[]> {
  const all = await getProducts();
  return all.filter((p) => p.featured);
}

/** Все handle (для generateStaticParams). */
export async function getAllProductHandles(): Promise<string[]> {
  const all = await getProducts();
  return all.map((p) => p.handle);
}
