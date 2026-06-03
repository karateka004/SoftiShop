import { Cta } from "@/components/site/cta";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bone">
      {/* Огромный полупрозрачный вотермарк-логотип для глубины */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-[6%] select-none text-center font-display text-[30vw] leading-none text-ink/[0.045]"
      >
        Softi
      </span>

      <div className="relative mx-auto max-w-[1400px] px-4 py-24 text-center md:px-6 md:py-36">
        <p className="font-head text-xs uppercase tracking-[0.3em] text-ink-soft">
          UA · Streetwear · 1 of 1
        </p>
        <h1 className="mx-auto mt-6 max-w-4xl font-head text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-ink md:text-8xl">
          Oversize
          <br />
          washed <span className="text-pink">black</span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl font-sans text-base text-ink-soft md:text-lg">
          {SITE.tagline}. Кастомні футболки ручної роботи — vintage-ефект,
          акцентні принти й характер у кожній деталі.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Cta href={SITE.instagram} external>
            Замовити в Direct
          </Cta>
          <Cta href="/products" variant="outline">
            Переглянути товари
          </Cta>
        </div>
      </div>
    </section>
  );
}
