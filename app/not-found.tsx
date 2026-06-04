import type { Metadata } from "next";
import { Cta } from "@/components/site/cta";

export const metadata: Metadata = {
  title: "Сторінку не знайдено",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1400px] flex-col items-center justify-center px-4 py-20 text-center md:px-6">
      <p className="font-display text-7xl leading-none text-ink md:text-8xl">
        404
      </p>
      <h1 className="mt-6 font-head text-2xl uppercase tracking-tight text-ink md:text-3xl">
        Такої сторінки немає
      </h1>
      <p className="mt-3 max-w-md font-sans text-sm text-ink-soft md:text-base">
        Можливо, річ уже розібрали — кожна з них унікальна. Повертайся до
        колекції або напиши нам у Direct.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Cta href="/products">Переглянути товари</Cta>
        <Cta href="/" variant="outline">
          На головну
        </Cta>
      </div>
    </section>
  );
}
