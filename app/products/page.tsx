import type { Metadata } from "next";
import { getProducts } from "@/lib/commerce";
import { ProductCard } from "@/components/product/product-card";

export const metadata: Metadata = {
  title: "Товари",
  description: "Колекція Softi — кастомні oversize-футболки. Кожна річ унікальна.",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
      <header className="border-b border-line pb-8">
        <p className="font-head text-xs uppercase tracking-[0.3em] text-ink-soft">
          Колекція
        </p>
        <div className="mt-2 flex items-end justify-between gap-4">
          <h1 className="font-head text-4xl uppercase tracking-tight text-ink md:text-6xl">
            Товари
          </h1>
          <span className="pb-1 font-sans text-sm text-ink-soft">
            {products.length} моделей
          </span>
        </div>
      </header>

      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
