import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/commerce";

// ISR: пересборка из Sanity не реже раза в минуту.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "Lookbook Softi — кастомні oversize-футболки в образах. Washed black, vintage, арт-принти.",
};

export default async function LookbookPage() {
  const products = await getProducts();

  const tile = (img: { src: string; alt: string }, p: { handle: string; title: string }, k: string) => ({
    key: k,
    src: img.src,
    alt: img.alt,
    handle: p.handle,
    title: p.title,
  });

  // Пэкшоти (front, білий фон) — у центральну колонку; образи з моделлю — по боках.
  const packshots = products
    .filter((p) => p.images[0])
    .map((p) => tile(p.images[0], p, `${p.handle}-front`));
  const models = products.flatMap((p) =>
    p.images.slice(1).map((img, i) => tile(img, p, `${p.handle}-${i + 1}`)),
  );

  // Розкладка по рядах [образ · пэкшот · образ] для md:grid-cols-3.
  const shots: ReturnType<typeof tile>[] = [];
  let pi = 0;
  let mi = 0;
  while (pi < packshots.length || mi < models.length) {
    if (mi < models.length) shots.push(models[mi++]); // ліва
    if (pi < packshots.length) shots.push(packshots[pi++]); // центр
    else if (mi < models.length) shots.push(models[mi++]);
    if (mi < models.length) shots.push(models[mi++]); // права
  }

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
      <header className="pb-8">
        <p className="font-head text-xs uppercase tracking-[0.3em] text-ink-soft">
          Образи
        </p>
        <h1 className="mt-2 font-head text-4xl uppercase tracking-tight text-ink md:text-6xl">
          Lookbook
        </h1>
      </header>

      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:grid-cols-3">
        {shots.map((shot, i) => (
          <Link
            key={shot.key}
            href={`/products/${shot.handle}`}
            className="group relative aspect-[4/5] overflow-hidden bg-bone"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(min-width:768px) 33vw, 50vw"
              priority={i < 2}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/55 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-head text-sm uppercase tracking-wide text-bone">
                {shot.title}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-10 font-sans text-sm text-ink-soft">
        Сподобався образ? Тисни на фото — і обери свою річ.
      </p>
    </section>
  );
}
