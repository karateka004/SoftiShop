import type { Money } from "@/lib/products";

// Цена в украинском формате: 950 → "950 ₴" (без копеек).
export function formatPrice(money: Money): string {
  return new Intl.NumberFormat("uk-UA", {
    style: "currency",
    currency: money.currency,
    maximumFractionDigits: 0,
  }).format(money.amount);
}
