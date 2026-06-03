import Link from "next/link";

export function Manifesto() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-[1100px] px-4 py-24 text-center md:px-6 md:py-32">
        <p className="font-head text-xs uppercase tracking-[0.3em] text-ink-soft">
          Про Softi
        </p>
        <p className="mt-8 font-head text-3xl leading-snug text-ink md:text-5xl">
          Мінімалізм, що говорить голосніше за тренди.{" "}
          <span className="text-ink-soft">
            Washed black, vintage-ефект і характерні принти —
          </span>{" "}
          для образів, що не потребують зайвих слів.
        </p>
        <Link
          href="/about"
          className="mt-10 inline-block border-b border-ink pb-1 font-head text-sm uppercase tracking-[0.14em] text-ink transition-colors hover:border-pink hover:text-pink"
        >
          Дізнатися більше
        </Link>
      </div>
    </section>
  );
}
