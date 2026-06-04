"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/cart-context";

// Иконка корзины со счётчиком — открывает дровер корзины.
export function CartButton() {
  const { count, openCart } = useCart();
  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Кошик: ${count} товар(ів)`}
      className="relative grid size-10 place-items-center text-ink transition-colors hover:text-pink"
    >
      <ShoppingBag className="size-5" strokeWidth={1.5} />
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 grid min-w-[18px] place-items-center rounded-full bg-pink px-1 text-[0.6rem] font-semibold leading-[18px] text-on-pink">
          {count}
        </span>
      )}
    </button>
  );
}
