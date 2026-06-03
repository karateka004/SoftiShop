// lib/commerce.ts
//
// COMMERCE-АБСТРАКЦИЯ (демо).
// Сейчас читает из локального mock (lib/products.ts).
// Позже внутренности этого модуля можно заменить на Shopify Storefront API
// (или другой бэкенд) — БЕЗ изменений в UI: сигнатуры функций остаются те же.
//
// Функции async намеренно — чтобы имитировать будущие сетевые вызовы и
// чтобы страницы/компоненты уже сейчас писались под асинхронный доступ.
//
// Правило: UI импортирует ТОЛЬКО отсюда (getProducts/getProduct/...),
// а не из lib/products.ts напрямую.

import { PRODUCTS } from "@/lib/products";
import type { Product } from "@/lib/products";

export type { Product, Money, ProductImage, CurrencyCode } from "@/lib/products";

/** Все товары (для страницы коллекции). */
export async function getProducts(): Promise<Product[]> {
  return PRODUCTS;
}

/** Один товар по handle (для страницы товара). undefined → 404. */
export async function getProduct(handle: string): Promise<Product | undefined> {
  return PRODUCTS.find((p) => p.handle === handle);
}

/** Подборка для главной (featured). */
export async function getFeaturedProducts(): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.featured);
}

/** Все handle (для generateStaticParams в Фазе 4). */
export async function getAllProductHandles(): Promise<string[]> {
  return PRODUCTS.map((p) => p.handle);
}
