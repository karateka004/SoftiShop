const PROPS = [
  {
    kicker: "01",
    title: "1 of 1",
    text: "Кожна річ унікальна — жодного повтору, лише твій екземпляр.",
  },
  {
    kicker: "02",
    title: "Oversize fit",
    text: "Вільний крій і м'яка фактура — той самий effortless look щодня.",
  },
  {
    kicker: "03",
    title: "Доставка 1–2 дні",
    text: "Швидко по Україні. Оформлення замовлення — у Direct.",
  },
];

export function ValueProps() {
  return (
    <section className="border-b border-line bg-bone">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {PROPS.map((p) => (
          <div key={p.kicker} className="px-6 py-10 md:px-10 md:py-16">
            <p className="font-head text-xs uppercase tracking-[0.25em] text-pink">
              {p.kicker}
            </p>
            <h3 className="mt-3 font-head text-2xl uppercase tracking-tight text-ink">
              {p.title}
            </h3>
            <p className="mt-2 max-w-xs font-sans text-sm text-ink-soft">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
