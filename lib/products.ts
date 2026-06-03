// lib/products.ts
//
// ТИПИЗИРОВАННЫЕ MOCK-ДАННЫЕ ТОВАРОВ (демо-витрина Softi).
// Источник описаний — txt-файлы из «Вещи для магазина» (украинский «легенда»-копирайтинг).
//
// ВАЖНО (плейсхолдеры — подтвердить у владельца бренда):
//   • price.amount, sizes и часть title — ПЛЕЙСХОЛДЕРЫ.
//   • Реальные фото копируются в public/products/<handle>/ в Фазе 3.
//   • Доступ к данным идёт ТОЛЬКО через lib/commerce.ts (не импортируй этот файл в UI напрямую).

export type CurrencyCode = "UAH" | "EUR" | "USD";

export interface Money {
  amount: number; // в основных единицах валюты (напр. 950 = 950 ₴)
  currency: CurrencyCode;
}

export interface ProductImage {
  src: string; // путь в /public, напр. "/products/washed-black-tee/01.jpg"
  alt: string; // осмысленный alt для a11y (украинский)
}

export interface Product {
  id: string;
  handle: string; // slug для URL: /products/[handle]
  title: string;
  price: Money;
  sizes: string[]; // только визуальный выбор (без логики склада в демо)
  images: ProductImage[]; // [0] — обложка
  legend: string; // описание-«легенда»
  available: boolean; // false → бейдж "продано"
  badge?: string; // напр. "новинка", "1 of 1"
  featured?: boolean; // показывать на главной
}

const CURRENCY: CurrencyCode = "UAH"; // TODO: подтвердить валюту (бренд украинский)

export const PRODUCTS: Product[] = [
  {
    id: "1",
    handle: "washed-black-tee",
    title: "Футболка «Washed Black»",
    price: { amount: 950, currency: CURRENCY }, // TODO: ціна
    sizes: ["S", "M", "L", "XL"], // TODO: реальні розміри
    images: [
      { src: "/products/washed-black-tee/01.jpg", alt: "Oversize футболка washed black — вид спереду" },
      { src: "/products/washed-black-tee/02.jpg", alt: "Oversize футболка washed black — деталь тканини" },
    ],
    legend:
      "Футболка, яка виглядає так, ніби ти носиш її вже роками — і саме в цьому її вайб. Вільний oversize крій, ефект washed black і той самий effortless street style на кожен день.",
    available: true,
    badge: "новинка",
    featured: true,
  },
  {
    id: "2",
    handle: "art-print-tee",
    title: "Футболка «Art Print»",
    price: { amount: 990, currency: CURRENCY }, // TODO: ціна
    sizes: ["S", "M", "L", "XL"],
    images: [
      { src: "/products/art-print-tee/01.jpg", alt: "Чорна oversize футболка з контрастним арт-принтом — вид ззаду" },
      { src: "/products/art-print-tee/02.jpg", alt: "Чорна oversize футболка з арт-принтом — образ" },
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
    price: { amount: 990, currency: CURRENCY }, // TODO: ціна
    sizes: ["S", "M", "L", "XL"],
    images: [
      { src: "/products/butterfly-tee/01.jpg", alt: "Vintage black oversize футболка з принтом butterfly — вид ззаду" },
      { src: "/products/butterfly-tee/02.jpg", alt: "Vintage black футболка butterfly — образ на вулиці" },
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
    price: { amount: 950, currency: CURRENCY }, // TODO: ціна
    sizes: ["S", "M", "L", "XL"],
    images: [
      { src: "/products/oversize-washed-black/01.jpg", alt: "Графітова oversize футболка washed black — вид спереду" },
      { src: "/products/oversize-washed-black/02.jpg", alt: "Графітова oversize футболка — деталь" },
    ],
    legend:
      "Мінімалізм, що говорить голосніше за тренди. Графітовий washed-ефект, вільний oversize крій та м'яка фактура створюють той самий effortless look, який завжди виглядає дорого. Для образів, що не потребують зайвих слів.",
    available: true,
  },
  {
    id: "5",
    handle: "softi-05",
    title: "Футболка №5", // TODO: назва
    price: { amount: 950, currency: CURRENCY }, // TODO: ціна
    sizes: ["S", "M", "L", "XL"],
    images: [
      { src: "/products/softi-05/01.jpg", alt: "Кастомна oversize футболка Softi" },
    ],
    legend: "", // TODO: опис відсутній у вихідному txt — додати
    available: true,
  },
];
