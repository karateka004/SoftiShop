import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const cover = product.images[0];
  const soldOut = !product.available;

  return (
    <Link href={`/products/${product.handle}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden border border-line bg-paper">
        {cover && (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority={priority}
            sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        )}

        {soldOut ? (
          <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 font-head text-[0.65rem] uppercase tracking-[0.12em] text-bone backdrop-blur-sm">
            Продано
          </span>
        ) : (
          product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-pink px-3 py-1 font-head text-[0.65rem] uppercase tracking-[0.12em] text-on-pink">
              {product.badge}
            </span>
          )
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="font-head text-base uppercase tracking-tight text-ink transition-colors group-hover:text-pink">
          {product.title}
        </h3>
        <span className="shrink-0 font-sans text-sm text-ink-soft">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
