import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Доставка і оплата, повернення, розмірна сітка та відповіді на часті питання Softi.",
};

type QA = { q: string; a: string };

const GENERAL: QA[] = [
  {
    q: "Чи кожна річ справді унікальна?",
    a: "Так. Softi — це маленькі дропи й кастом ручної роботи, тому багато речей виходять у єдиному екземплярі (1 of 1). Якщо бачиш бейдж «1 of 1» — модель точно одна.",
  },
  {
    q: "Як зробити замовлення?",
    a: "Натисни «Замовити в Direct» на сторінці товару або в кошику — і напиши нам в Instagram. Там підтвердимо наявність, розмір і деталі доставки.",
  },
  {
    q: "Чи є онлайн-оплата на сайті?",
    a: "Ні. Це демо-вітрина: онлайн-оплати та чекауту немає. Усі замовлення оформлюємо через Instagram Direct.",
  },
  {
    q: "Скільки чекати відповідь?",
    a: "Зазвичай відповідаємо протягом дня. У пік дропів — трохи довше, дякуємо за терпіння ❤️",
  },
];

const SIZES = [
  { size: "M", chest: "56", length: "71" },
  { size: "L", chest: "58", length: "73" },
  { size: "OS", chest: "60", length: "74" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line pt-10">
      <h2 className="font-head text-2xl uppercase tracking-tight text-ink md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 max-w-2xl space-y-3 font-sans text-sm leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
      <header className="pb-8">
        <p className="font-head text-xs uppercase tracking-[0.3em] text-ink-soft">
          Допомога
        </p>
        <h1 className="mt-2 font-head text-4xl uppercase tracking-tight text-ink md:text-6xl">
          FAQ
        </h1>
      </header>

      <div className="flex flex-col gap-12">
        <Section id="dostavka" title="Доставка і оплата">
          <p>
            Відправляємо <strong className="text-ink">Новою Поштою</strong> по
            всій Україні. Відправлення — протягом 1–2 днів після підтвердження
            замовлення.
          </p>
          <p>
            Оплата — накладений платіж або переказ на картку; зручний варіант
            узгоджуємо в Direct. На сайті оплати немає — це демо-вітрина.
          </p>
          <p>
            Усе оформлення йде через Instagram{" "}
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-pink"
            >
              {SITE.instagramHandle}
            </a>
            .
          </p>
        </Section>

        <Section id="povernennia" title="Повернення">
          <p>
            Обмін або повернення — протягом{" "}
            <strong className="text-ink">14 днів</strong>, якщо річ не була у
            носінні, збережено вигляд і бирки.
          </p>
          <p>
            Оскільки більшість моделей — маленькі дропи й 1 of 1, краще напиши
            нам у Direct заздалегідь: підкажемо з розміром, щоб обмін не
            знадобився.
          </p>
        </Section>

        <Section id="rozmiry" title="Розмірна сітка">
          <p>
            Усі футболки — <strong className="text-ink">oversize</strong>. Бери
            свій звичний розмір для вільної посадки або на один менше — для більш
            прилеглої.
          </p>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full max-w-md border-collapse text-left">
              <thead>
                <tr className="border-b border-line font-head text-xs uppercase tracking-[0.12em] text-ink">
                  <th className="py-2 pr-4 font-medium">Розмір</th>
                  <th className="py-2 pr-4 font-medium">Ширина, см</th>
                  <th className="py-2 font-medium">Довжина, см</th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm text-ink">
                {SIZES.map((s) => (
                  <tr key={s.size} className="border-b border-line/60">
                    <td className="py-2 pr-4 font-medium">{s.size}</td>
                    <td className="py-2 pr-4 tabular-nums">{s.chest}</td>
                    <td className="py-2 tabular-nums">{s.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs">
            Значення приблизні (±2 см), заміри по пласкій речі. Сумніваєшся —
            напиши в Direct, допоможемо обрати.
          </p>
        </Section>

        <Section id="zagalni" title="Часті питання">
          <div className="mt-1 border-t border-line">
            {GENERAL.map((item) => (
              <details
                key={item.q}
                className="group border-b border-line"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-head text-sm uppercase tracking-wide text-ink transition-colors hover:text-pink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus
                    className="size-4 shrink-0 transition-transform duration-200 group-open:rotate-45"
                    strokeWidth={1.5}
                  />
                </summary>
                <p className="max-w-2xl pb-5 font-sans text-sm leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
}
