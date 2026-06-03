// lib/site.ts — единый источник констант сайта (бренд, навигация, анонсы).

export const SITE = {
  name: "Softi",
  instagram: "https://instagram.com/softi.brand",
  instagramHandle: "@softi.brand",
  tagline: "Кожна річ унікальна",
  region: "Україна · UAH ₴ · Українська",
} as const;

export type NavItem = { href: string; label: string };

// Навигация (роуты /products и /faq появятся в Фазах 3 и 6).
export const NAV: readonly NavItem[] = [
  { href: "/", label: "Головна" },
  { href: "/products", label: "Товари" },
  { href: "/faq", label: "FAQ" },
] as const;

// Бегущая строка-анонс (вверху).
export const ANNOUNCEMENTS: readonly string[] = [
  "Кожна річ унікальна",
  "Доставка 1–2 дні",
  "Замовлення в Direct",
] as const;
