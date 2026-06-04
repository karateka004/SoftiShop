// Разовый перенос mock-товаров (lib/products.ts) в Sanity.
// Запуск: node --env-file=.env.local scripts/seed.mjs
// Нужен SANITY_API_WRITE_TOKEN (Editor). Идемпотентно по _id (createOrReplace),
// но КАЖДЫЙ запуск заливает новые копии картинок — гонять разово.

import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { join, basename } from "node:path";

const {
  NEXT_PUBLIC_SANITY_PROJECT_ID: projectId,
  NEXT_PUBLIC_SANITY_DATASET: dataset = "production",
  NEXT_PUBLIC_SANITY_API_VERSION: apiVersion = "2024-10-01",
  SANITY_API_WRITE_TOKEN: token,
} = process.env;

if (!projectId) {
  console.error("Нет NEXT_PUBLIC_SANITY_PROJECT_ID");
  process.exit(1);
}
if (!token) {
  console.error("Нет SANITY_API_WRITE_TOKEN (создай Editor-токен в Sanity)");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const PRODUCTS = [
  {
    handle: "washed-black-tee",
    title: "Футболка «Washed Black»",
    price: 1200,
    sizes: ["M"],
    images: [
      { src: "/products/washed-black-tee/front.jpg", alt: "Oversize футболка washed black — вид спереду" },
      { src: "/products/washed-black-tee/g1.jpg", alt: "Oversize футболка washed black — деталь тканини" },
      { src: "/products/washed-black-tee/g2.jpg", alt: "Oversize футболка washed black — образ" },
      { src: "/products/washed-black-tee/g3.jpg", alt: "Oversize футболка washed black — вид ззаду" },
    ],
    legend: `Футболка, яка виглядає так, ніби ти носиш її вже роками — і саме в цьому її вайб. Вільний oversize крій, ефект washed black і той самий effortless street style на кожен день.`,
    available: true,
    featured: true,
  },
  {
    handle: "art-print-tee",
    title: "Футболка «Art Print»",
    price: 1200,
    sizes: ["M"],
    images: [
      { src: "/products/art-print-tee/front.jpg", alt: "Чорна oversize футболка з контрастним арт-принтом — вид спереду" },
      { src: "/products/art-print-tee/g1.jpg", alt: "Чорна oversize футболка з арт-принтом — деталь" },
      { src: "/products/art-print-tee/g2.jpg", alt: "Чорна oversize футболка з арт-принтом — образ" },
    ],
    legend: `Футболка для тих, хто говорить стилем без слів. Контрастний арт-принт, oversize fit і clean black aesthetic — той самий streetwear, який притягує погляди.`,
    available: true,
    featured: true,
  },
  {
    handle: "butterfly-tee",
    title: "Футболка «Butterfly»",
    price: 1200,
    sizes: ["M"],
    images: [
      { src: "/products/butterfly-tee/front.png", alt: "Vintage black oversize футболка з принтом butterfly — вид спереду" },
      { src: "/products/butterfly-tee/g1.jpg", alt: "Футболка butterfly — принт ззаду" },
      { src: "/products/butterfly-tee/g2.jpg", alt: "Футболка butterfly — образ на вулиці" },
    ],
    legend: `Футболка, що ловить вайб свободи з першого погляду. Vintage black, oversize fit і акцентний принт butterfly — для образів, які запам'ятовуються без зайвих слів.`,
    available: true,
    badge: "1 of 1",
    featured: true,
  },
  {
    handle: "oversize-washed-black",
    title: "Футболка Oversize Washed Black",
    price: 1100,
    sizes: ["L"],
    images: [
      { src: "/products/oversize-washed-black/front.jpg", alt: "Графітова oversize футболка washed black — вид спереду" },
      { src: "/products/oversize-washed-black/g1.jpg", alt: "Графітова oversize футболка — деталь" },
      { src: "/products/oversize-washed-black/g2.jpg", alt: "Графітова oversize футболка — образ" },
      { src: "/products/oversize-washed-black/g3.jpg", alt: "Графітова oversize футболка — вид ззаду" },
    ],
    legend: `Мінімалізм, що говорить голосніше за тренди. Графітовий washed-ефект, вільний oversize крій та м'яка фактура створюють той самий effortless look, який завжди виглядає дорого. Для образів, що не потребують зайвих слів.`,
    available: true,
  },
  {
    handle: "softi-05",
    title: "Футболка «Pink Graffiti»",
    price: 1170,
    sizes: ["OS"],
    images: [
      { src: "/products/softi-05/front.jpg", alt: "Біла oversize футболка з рожевим графіті-принтом — вид спереду" },
      { src: "/products/softi-05/g1.jpg", alt: "Біла футболка з рожевим графіті-принтом — деталь" },
      { src: "/products/softi-05/g2.jpg", alt: "Біла футболка з рожевим графіті-принтом — образ" },
    ],
    legend: `Не просто базова футболка — це акцент, який задає настрій образу. Контрастний рожевий графіті-принт на білому полотні додає характеру, а вільний oversize крій дарує максимум комфорту та свободи рухів. Для тих, хто любить виділятися без зайвих зусиль.`,
    available: true,
    badge: "новинка",
    featured: true,
  },
];

let order = 0;
for (const p of PRODUCTS) {
  console.log(`\n→ ${p.handle}`);
  const images = [];
  let k = 0;
  for (const img of p.images) {
    const filePath = join(process.cwd(), "public", img.src);
    const asset = await client.assets.upload("image", readFileSync(filePath), {
      filename: basename(img.src),
    });
    images.push({
      _type: "image",
      _key: `img${k++}`,
      alt: img.alt,
      asset: { _type: "reference", _ref: asset._id },
    });
    console.log(`   ↑ ${img.src}`);
  }

  const doc = {
    _id: `product.${p.handle}`,
    _type: "product",
    title: p.title,
    slug: { _type: "slug", current: p.handle },
    price: p.price,
    currency: "UAH",
    sizes: p.sizes,
    legend: p.legend,
    available: p.available,
    featured: !!p.featured,
    orderRank: String(order++).padStart(4, "0"),
    images,
  };
  if (p.badge) doc.badge = p.badge;

  await client.createOrReplace(doc);
  console.log(`   ✓ збережено`);
}

console.log(`\nГотово: ${PRODUCTS.length} товарів у Sanity.`);
