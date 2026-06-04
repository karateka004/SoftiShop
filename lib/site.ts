// lib/site.ts — единый источник констант сайта (бренд, навигация, анонсы).

export const SITE = {
  name: "Softi",
  instagram: "https://instagram.com/softi.brand",
  instagramHandle: "@softi.brand",
  tagline: "Кожна річ унікальна",
  region: "Україна · UAH ₴ · Українська",
} as const;

// Базовый URL сайта: явный env → прод-домен Vercel → localhost.
// Используется для metadataBase, sitemap, robots (OG/canonical/ссылки).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export type NavItem = { href: string; label: string };

// Навигация.
export const NAV: readonly NavItem[] = [
  { href: "/", label: "Головна" },
  { href: "/products", label: "Товари" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "Про нас" },
  { href: "/faq", label: "FAQ" },
] as const;

// Бегущая строка-анонс (вверху).
export const ANNOUNCEMENTS: readonly string[] = [
  "Кожна річ унікальна",
  "Доставка 1–2 дні",
  "Замовлення в Direct",
] as const;
