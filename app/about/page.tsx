import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Про нас",
  description:
    "Softi — український streetwear-бренд кастомних oversize-футболок. Маленькі дропи, washed black, кожна річ унікальна.",
};

const VALUES = [
  {
    title: "Ручна робота",
    text: "Кожен принт наносимо вручну — невеликими партіями, без конвеєра. Звідси й характер кожної речі.",
  },
  {
    title: "1 of 1",
    text: "Маленькі дропи, часто в єдиному екземплярі. Купуєш не «ще одну футболку», а свою — якої більше ні в кого.",
  },
  {
    title: "Washed-вайб",
    text: "Vintage та washed-ефекти, oversize-крій і той самий effortless street style, що виглядає дорого без зусиль.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
      <header className="pb-8">
        <p className="font-head text-xs uppercase tracking-[0.3em] text-ink-soft">
          Про бренд
        </p>
        <h1 className="mt-2 max-w-4xl font-head text-4xl uppercase leading-[1.05] tracking-tight text-ink md:text-6xl">
          Кожна річ унікальна
        </h1>
      </header>

      <div className="grid gap-12 border-t border-line pt-10 md:grid-cols-[1.4fr_1fr]">
        <div className="max-w-2xl space-y-5 font-sans text-base leading-relaxed text-ink-soft">
          <p>
            <strong className="text-ink">Softi</strong> — це український
            streetwear-бренд кастомних oversize-футболок. Ми робимо маленькі
            дропи у стилістиці washed та vintage black: дерзка графіка на м’якому
            полотні, вільний крій і нуль логоманії.
          </p>
          <p>
            Ідея проста: одяг, який виглядає так, ніби ти носиш його роками — і
            саме в цьому його вайб. Без масовості, без «як у всіх». Кожен принт
            наносимо вручну, тому навіть однакові на перший погляд речі трохи
            різні.
          </p>
          <p>
            Ми не граємо в швидку моду. Замість сотень однакових позицій —
            обмежені дропи, частина з яких виходить як 1 of 1. Тому найкращі речі
            зникають швидко.
          </p>
        </div>

        <aside className="space-y-6 border-l border-line pl-6 font-sans text-sm text-ink-soft md:pl-8">
          <div>
            <p className="font-head text-xs uppercase tracking-[0.2em] text-ink">
              Звідки ми
            </p>
            <p className="mt-2">Україна · кастом ручної роботи</p>
          </div>
          <div>
            <p className="font-head text-xs uppercase tracking-[0.2em] text-ink">
              Замовлення
            </p>
            <p className="mt-2">
              Через Instagram Direct — без онлайн-оплати на сайті.
            </p>
          </div>
          <div>
            <p className="font-head text-xs uppercase tracking-[0.2em] text-ink">
              Доставка
            </p>
            <p className="mt-2">Новою Поштою по Україні, 1–2 дні.</p>
          </div>
        </aside>
      </div>

      <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-3">
        {VALUES.map((v) => (
          <div key={v.title} className="bg-bone p-6 md:p-8">
            <h2 className="font-head text-lg uppercase tracking-tight text-ink">
              {v.title}
            </h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
              {v.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md font-head text-xl uppercase leading-tight tracking-tight text-ink md:text-2xl">
          Готовий обрати свою річ?
        </p>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center bg-ink px-7 py-4 font-head text-sm uppercase tracking-[0.14em] text-bone transition-opacity hover:opacity-90"
        >
          Замовити в Direct
        </a>
      </div>
    </section>
  );
}
