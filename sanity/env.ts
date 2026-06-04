// Конфиг подключения к Sanity (читается на сервере и клиенте — только NEXT_PUBLIC_*).
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

// Включаем Sanity как источник данных, только если задан projectId.
// Иначе UI остаётся на mock (lib/products.ts) — сайт не ломается.
export const sanityEnabled = projectId.length > 0;
