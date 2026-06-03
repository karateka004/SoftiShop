import { Cta } from "@/components/site/cta";
import { SITE } from "@/lib/site";

export function OrderCta() {
  return (
    <section className="bg-ink text-bone">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-4 py-20 text-center md:px-6 md:py-28">
        <p className="font-head text-xs uppercase tracking-[0.3em] text-bone/50">
          Як замовити
        </p>
        <h2 className="font-display text-5xl leading-none md:text-7xl">Direct</h2>
        <p className="max-w-md font-sans text-sm text-bone/70">
          Обери модель і напиши нам в Instagram Direct — підкажемо розмір та
          оформимо замовлення за 1–2 дні.
        </p>
        <Cta href={SITE.instagram} external className="mt-2">
          Написати в Direct
        </Cta>
      </div>
    </section>
  );
}
