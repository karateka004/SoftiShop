import { SITE } from "@/lib/site";

// Заглушка главной (Фаза 1). Полноценный hero + промо-секции — Фаза 2.
export default function Home() {
  return (
    <section className="mx-auto flex min-h-[62vh] max-w-[1400px] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-head text-xs uppercase tracking-[0.3em] text-ink-soft">
        UA · Streetwear · 1 of 1
      </p>
      <h1 className="mt-6 font-display text-6xl leading-none text-ink md:text-8xl">
        Softi
      </h1>
      <p className="mt-6 max-w-md font-sans text-base text-ink-soft">
        {SITE.tagline}. Кастомні oversize-футболки — washed black, vintage,
        арт-принти.
      </p>
      <a
        href={SITE.instagram}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex items-center gap-2 bg-pink px-7 py-4 font-head text-sm uppercase tracking-[0.14em] text-on-pink transition-opacity hover:opacity-90"
      >
        Замовити в Direct
      </a>
      <p className="mt-16 font-sans text-xs text-ink-soft">
        Вітрина в розробці · Фаза 1 (layout)
      </p>
    </section>
  );
}
