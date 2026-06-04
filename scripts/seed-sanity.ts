// Перенос mock-товаров (lib/products.ts) в Sanity: загружает фото как ассеты
// и создаёт документы product. Идемпотентно (createOrReplace по _id).
//
// Запуск:  npx tsx scripts/seed-sanity.ts
// Требует в .env.local: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
//                       NEXT_PUBLIC_SANITY_API_VERSION, SANITY_API_WRITE_TOKEN

import { readFile } from "node:fs/promises";
import path from "node:path";
import { createClient } from "@sanity/client";
import { PRODUCTS } from "../lib/products";

process.loadEnvFile(".env.local");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("✗ Нет NEXT_PUBLIC_SANITY_PROJECT_ID или SANITY_API_WRITE_TOKEN в .env.local");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

async function uploadImage(src: string) {
  const filePath = path.join(process.cwd(), "public", src);
  const buffer = await readFile(filePath);
  const asset = await client.assets.upload("image", buffer, {
    filename: path.basename(src),
  });
  return asset._id;
}

async function run() {
  console.log(`→ Перенос ${PRODUCTS.length} товаров в Sanity (${projectId}/${dataset})…`);
  for (const p of PRODUCTS) {
    const images = [];
    for (let i = 0; i < p.images.length; i++) {
      const img = p.images[i];
      const assetId = await uploadImage(img.src);
      images.push({
        _type: "image",
        _key: `${p.handle}-${i}`,
        alt: img.alt,
        asset: { _type: "reference", _ref: assetId },
      });
      console.log(`   ✓ фото ${img.src}`);
    }

    await client.createOrReplace({
      _id: `product-${p.handle}`,
      _type: "product",
      title: p.title,
      slug: { _type: "slug", current: p.handle },
      price: p.price.amount,
      currency: p.price.currency,
      sizes: p.sizes,
      legend: p.legend,
      available: p.available,
      ...(p.badge ? { badge: p.badge } : {}),
      featured: !!p.featured,
      images,
    });
    console.log(`✓ Товар «${p.title}» (${p.handle})`);
  }
  console.log("✅ Готово. Товары и фото в Sanity.");
}

run().catch((e) => {
  console.error("✗ Ошибка переноса:", e.message ?? e);
  process.exit(1);
});
