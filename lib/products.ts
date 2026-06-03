// lib/products.ts
//
// ТИПИЗИРОВАННЫЕ MOCK-ДАННЫЕ ТОВАРОВ (демо-витрина Softi).
// Источник — txt-файлы и фото из «Вещи для магазина» (украинский копирайтинг).
// Цены/размеры из обновлённых txt (грн). Один доступный размер на товар (1-of-1 вайб).
// Фото: front.jpg = витрина (обложка), g1/g2/g3 = детали/образы.
//
// TODO у владельца: товар №2 (art-print) — в txt не было размера/цены → ПЛЕЙСХОЛДЕР.
// Доступ к данным идёт ТОЛЬКО через lib/commerce.ts (не импортируй этот файл в UI напрямую).

export type CurrencyCode = "UAH" | "EUR" | "USD";

export interface Money {
  amount: number; // в основных единицах валюты (напр. 1200 = 1200 ₴)
  currency: CurrencyCode;
}

export interface ProductImage {
  src: string; // путь в /public, напр. "/products/washed-black-tee/front.jpg"
  alt: string; // осмысленный alt для a11y (украинский)
}

export interface Product {
  id: string;
  handle: string; // slug для URL: /products/[handle]
  title: string;
  price: Money;
  sizes: string[]; // доступные размеры (визуальный выбор, без логики склада)
  images: ProductImage[]; // [0] — витрина (front)
  legend: string; // описание-«легенда»
  available: boolean; // false → бейдж "продано"
  badge?: string; // напр. "новинка", "1 of 1"
  featured?: boolean; // показывать на главной
}

const UAH: CurrencyCode = "UAH";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    handle: "washed-black-tee",
    title: "Футболка «Washed Black»",
    price: { amount: 1200, currency: UAH },
    sizes: ["M"], // M (oversized)
    images: [
      { src: "/products/washed-black-tee/front.jpg", alt: "Oversize футболка washed black — вид спереду" },
      { src: "/products/washed-black-tee/g1.jpg", alt: "Oversize футболка washed black — деталь тканини" },
      { src: "/products/washed-black-tee/g2.jpg", alt: "Oversize футболка washed black — образ" },
      { src: "/products/washed-black-tee/g3.jpg", alt: "Oversize футболка washed black — вид ззаду" },
    ],
    legend:
      "Футболка, яка виглядає так, ніби ти носиш її вже роками — і саме в цьому її вайб. Вільний oversize крій, ефект washed black і той самий effortless street style на кожен день.",
    available: true,
    featured: true,
  },
  {
    id: "2",
    handle: "art-print-tee",
    title: "Футболка «Art Print»",
    price: { amount: 1200, currency: UAH }, // TODO: ціна (txt №2 без даних) — плейсхолдер
    sizes: ["M"], // TODO: розмір (txt №2 без даних) — плейсхолдер
    images: [
      { src: "/products/art-print-tee/front.jpg", alt: "Чорна oversize футболка з контрастним арт-принтом — вид спереду" },
      { src: "/products/art-print-tee/g1.jpg", alt: "Чорна oversize футболка з арт-принтом — деталь" },
      { src: "/products/art-print-tee/g2.jpg", alt: "Чорна oversize футболка з арт-принтом — образ" },
    ],
    legend:
      "Футболка для тих, хто говорить стилем без слів. Контрастний арт-принт, oversize fit і clean black aesthetic — той самий streetwear, який притягує погляди.",
    available: true,
    featured: true,
  },
  {
    id: "3",
    handle: "butterfly-tee",
    title: "Футболка «Butterfly»",
    price: { amount: 1200, currency: UAH },
    sizes: ["M"], // M (oversized)
    images: [
      { src: "/products/butterfly-tee/front.png", alt: "Vintage black oversize футболка з принтом butterfly — вид спереду" },
      { src: "/products/butterfly-tee/g1.jpg", alt: "Футболка butterfly — принт ззаду" },
      { src: "/products/butterfly-tee/g2.jpg", alt: "Футболка butterfly — образ на вулиці" },
    ],
    legend:
      "Футболка, що ловить вайб свободи з першого погляду. Vintage black, oversize fit і акцентний принт butterfly — для образів, які запам'ятовуються без зайвих слів.",
    available: true,
    badge: "1 of 1",
    featured: true,
  },
  {
    id: "4",
    handle: "oversize-washed-black",
    title: "Футболка Oversize Washed Black",
    price: { amount: 1100, currency: UAH },
    sizes: ["L"],
    images: [
      { src: "/products/oversize-washed-black/front.jpg", alt: "Графітова oversize футболка washed black — вид спереду" },
      { src: "/products/oversize-washed-black/g1.jpg", alt: "Графітова oversize футболка — деталь" },
      { src: "/products/oversize-washed-black/g2.jpg", alt: "Графітова oversize футболка — образ" },
      { src: "/products/oversize-washed-black/g3.jpg", alt: "Графітова oversize футболка — вид ззаду" },
    ],
    legend:
      "Мінімалізм, що говорить голосніше за тренди. Графітовий washed-ефект, вільний oversize крій та м'яка фактура створюють той самий effortless look, який завжди виглядає дорого. Для образів, що не потребують зайвих слів.",
    available: true,
  },
  {
    id: "5",
    handle: "softi-05",
    title: "Футболка «Pink Graffiti»",
    price: { amount: 1170, currency: UAH },
    sizes: ["OS"], // oversized, один розмір
    images: [
      { src: "/products/softi-05/front.jpg", alt: "Біла oversize футболка з рожевим графіті-принтом — вид спереду" },
      { src: "/products/softi-05/g1.jpg", alt: "Біла футболка з рожевим графіті-принтом — деталь" },
      { src: "/products/softi-05/g2.jpg", alt: "Біла футболка з рожевим графіті-принтом — образ" },
    ],
    legend:
      "Не просто базова футболка — це акцент, який задає настрій образу. Контрастний рожевий графіті-принт на білому полотні додає характеру, а вільний oversize крій дарує максимум комфорту та свободи рухів. Для тих, хто любить виділятися без зайвих зусиль.",
    available: true,
    badge: "новинка",
    featured: true,
  },
];
