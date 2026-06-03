import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProductHandles, getProduct } from "@/lib/commerce";
import { formatPrice } from "@/lib/format";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductPurchase } from "@/components/product/product-purchase";

export async function generateStaticParams() {
  const handles = await getAllProductHandles();
  return handles.map((handle) => ({ handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) return { title: "Товар не знайдено" };
  return { title: product.title, description: product.legend || product.title };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) notFound();

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-10 md:px-6 md:py-14">
      <nav
        className="mb-8 font-head text-xs uppercase tracking-[0.2em] text-ink-soft"
        aria-label="Навігація"
      >
        <Link href="/products" className="transition-colors hover:text-pink">
          Товари
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.title}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <ProductGallery images={product.images} />

        <div className="md:py-2">
          {product.badge && (
            <span className="inline-block rounded-full bg-pink px-3 py-1 font-head text-[0.65rem] uppercase tracking-[0.12em] text-on-pink">
              {product.badge}
            </span>
          )}
          <h1 className="mt-4 font-head text-3xl uppercase tracking-tight text-ink md:text-5xl">
            {product.title}
          </h1>
          <p className="mt-3 font-sans text-xl text-ink">
            {formatPrice(product.price)}
          </p>

          <ProductPurchase product={product} />

          {product.legend && (
            <div className="mt-10 border-t border-line pt-8">
              <p className="font-head text-xs uppercase tracking-[0.2em] text-ink-soft">
                Опис
              </p>
              <p className="mt-3 max-w-prose font-sans text-base leading-relaxed text-ink/90">
                {product.legend}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
