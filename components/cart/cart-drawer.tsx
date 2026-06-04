"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCart } from "@/components/cart/cart-context";
import { formatPrice } from "@/lib/format";
import { SITE } from "@/lib/site";

export function CartDrawer() {
  const { items, count, subtotal, isOpen, setOpen, updateQty, removeItem } =
    useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-full gap-0 bg-bone sm:max-w-md"
      >
        <SheetHeader className="border-b border-line p-5">
          <SheetTitle className="font-head text-lg uppercase tracking-tight text-ink">
            Кошик {count > 0 && `(${count})`}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="font-head text-sm uppercase tracking-[0.14em] text-ink-soft">
              Кошик порожній
            </p>
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="border border-ink px-6 py-3 font-head text-sm uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              До товарів
            </Link>
          </div>
        ) : (
          <ul className="flex-1 divide-y divide-line overflow-y-auto">
            {items.map((it) => (
              <li key={it.id} className="flex gap-4 p-5">
                <Link
                  href={`/products/${it.handle}`}
                  onClick={() => setOpen(false)}
                  className="relative aspect-[4/5] w-20 shrink-0 overflow-hidden border border-line bg-paper"
                >
                  {it.image && (
                    <Image
                      src={it.image}
                      alt={it.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  )}
                </Link>

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <Link
                      href={`/products/${it.handle}`}
                      onClick={() => setOpen(false)}
                      className="font-head text-sm uppercase leading-tight tracking-tight text-ink transition-colors hover:text-pink"
                    >
                      {it.title}
                    </Link>
                    <button
                      type="button"
                      onClick={() => removeItem(it.id)}
                      aria-label={`Прибрати ${it.title}`}
                      className="shrink-0 text-ink-soft transition-colors hover:text-pink"
                    >
                      <Trash2 className="size-4" strokeWidth={1.5} />
                    </button>
                  </div>

                  <p className="mt-1 font-sans text-xs text-ink-soft">
                    Розмір: {it.size}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                    <div className="flex items-center border border-line">
                      <button
                        type="button"
                        onClick={() => updateQty(it.id, it.qty - 1)}
                        aria-label="Зменшити кількість"
                        className="grid size-8 place-items-center text-ink transition-colors hover:text-pink"
                      >
                        <Minus className="size-3.5" strokeWidth={1.5} />
                      </button>
                      <span className="min-w-8 text-center font-sans text-sm tabular-nums text-ink">
                        {it.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(it.id, it.qty + 1)}
                        aria-label="Збільшити кількість"
                        className="grid size-8 place-items-center text-ink transition-colors hover:text-pink"
                      >
                        <Plus className="size-3.5" strokeWidth={1.5} />
                      </button>
                    </div>
                    <span className="font-head text-sm text-ink">
                      {formatPrice({
                        amount: it.price.amount * it.qty,
                        currency: it.price.currency,
                      })}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <SheetFooter className="border-t border-line p-5">
            <div className="flex items-baseline justify-between">
              <span className="font-head text-sm uppercase tracking-[0.14em] text-ink-soft">
                Разом
              </span>
              <span className="font-head text-lg text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center bg-ink px-6 py-4 font-head text-sm uppercase tracking-[0.14em] text-bone transition-opacity hover:opacity-90"
            >
              Замовити в Direct
            </a>
            <p className="font-sans text-xs text-ink-soft">
              Демо-вітрина: оплата відсутня — замовлення оформлюється в Direct.
            </p>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
