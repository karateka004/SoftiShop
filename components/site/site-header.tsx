import Link from "next/link";
import { Search } from "lucide-react";
import { NAV } from "@/lib/site";
import { MobileNav } from "@/components/site/mobile-nav";
import { CartButton } from "@/components/cart/cart-button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bone/85 backdrop-blur-sm">
      <div className="mx-auto grid h-16 max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 md:h-20 md:px-6">
        {/* Слева: десктоп-навигация / мобильный гамбургер */}
        <div className="flex items-center">
          <nav
            className="hidden md:flex md:items-center md:gap-8"
            aria-label="Головна навігація"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative whitespace-nowrap font-head text-sm uppercase tracking-[0.14em] text-ink"
              >
                {item.label}
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 h-px w-0 bg-pink transition-[width] duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </nav>
          <MobileNav />
        </div>

        {/* Центр: логотип */}
        <Link
          href="/"
          aria-label="Softi — на головну"
          className="justify-self-center font-display text-[2rem] leading-none text-ink md:text-4xl"
        >
          Softi
        </Link>

        {/* Справа: иконки (поиск/корзина — заглушки до Фаз 3/5) */}
        <div className="flex items-center justify-end gap-0.5">
          <button
            type="button"
            aria-label="Пошук"
            className="grid size-10 place-items-center text-ink transition-colors hover:text-pink"
          >
            <Search className="size-5" strokeWidth={1.5} />
          </button>
          <CartButton />
        </div>
      </div>
    </header>
  );
}
