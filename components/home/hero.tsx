import { Cta } from "@/components/site/cta";
import { SITE } from "@/lib/site";

// Вращающаяся печать-логотип: круговая надпись бренда крутится 360°
// вокруг статичного готического «Softi». Уважает prefers-reduced-motion.
function SpinningSeal() {
  // Фраза повторяется дважды и заполняет круг естественной длиной + лёгким
  // letter-spacing. НЕ используем textLength: Safari/iOS не применяет его к
  // textPath (текст оставался полукругом).
  const ring = "КОЖНА РІЧ УНІКАЛЬНА • 1 OF 1 • STREETWEAR • ".repeat(2);
  return (
    <div className="relative grid size-60 place-items-center md:size-72">
      <svg
        viewBox="0 0 200 200"
        className="seal-spin absolute inset-0 size-full"
        aria-hidden
      >
        <defs>
          <path
            id="softi-seal"
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
            fill="none"
          />
        </defs>
        <text className="fill-ink font-head" fontSize="12.5" letterSpacing="0.45">
          <textPath href="#softi-seal" startOffset="0">
            {ring}
          </textPath>
        </text>
      </svg>
      <span className="font-display text-5xl leading-none text-ink md:text-6xl">
        Softi
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bone">
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-4 py-20 text-center md:px-6 md:py-28">
        <p className="rise-in font-head text-xs uppercase tracking-[0.3em] text-ink-soft">
          UA · Streetwear · 1 of 1
        </p>
        {/* h1 для SEO/скрин-ридеров (визуальный акцент — печать) */}
        <h1 className="sr-only">Softi — кастомні oversize-футболки</h1>

        <div className="rise-in my-10 md:my-12" style={{ animationDelay: "0.1s" }}>
          <SpinningSeal />
        </div>

        <p
          className="rise-in mx-auto max-w-xl font-sans text-base text-ink-soft md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          {SITE.tagline}. Кастомні футболки ручної роботи — vintage-ефект,
          акцентні принти й характер у кожній деталі.
        </p>
        <div
          className="rise-in mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.3s" }}
        >
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
