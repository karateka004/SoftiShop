"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/cart/cart-context";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProductPurchase({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes[0] ?? "");
  const [added, setAdded] = useState(false);

  function handleAdd() {
    if (!size) return;
    addItem(product, size);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div>
      <div className="mt-8">
        <p className="font-head text-xs uppercase tracking-[0.2em] text-ink-soft">
          Розмір
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              aria-pressed={s === size}
              className={cn(
                "min-w-12 border px-4 py-2.5 font-head text-sm uppercase tracking-wider transition-colors",
                s === size
                  ? "border-ink bg-ink text-bone"
                  : "border-line text-ink hover:border-ink",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center justify-center gap-2 bg-ink px-6 py-4 font-head text-sm uppercase tracking-[0.14em] text-bone transition-opacity hover:opacity-90"
        >
          {added ? "Додано ✓" : "Додати в кошик"}
        </button>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-ink px-6 py-4 font-head text-sm uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-bone"
        >
          Замовити в Direct
        </a>
      </div>

      <p className="mt-4 font-sans text-xs text-ink-soft">
        Демо-вітрина: онлайн-оплата відсутня — замовлення оформлюється в Direct.
      </p>
    </div>
  );
}
