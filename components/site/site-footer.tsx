import Link from "next/link";
import { NAV, SITE, type NavItem } from "@/lib/site";
import { InstagramIcon } from "@/components/site/icons";

const INFO: readonly NavItem[] = [
  { href: "/faq", label: "Доставка і оплата" },
  { href: "/faq", label: "Повернення" },
  { href: "/faq", label: "Розмірна сітка" },
];

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: readonly NavItem[];
}) {
  return (
    <div>
      <p className="font-head text-xs uppercase tracking-[0.2em] text-bone/50">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map((it) => (
          <li key={it.label}>
            <Link
              href={it.href}
              className="font-sans text-sm text-bone/80 transition-colors hover:text-pink"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Бренд */}
          <div>
            <p className="font-display text-5xl leading-none">Softi</p>
            <p className="mt-4 max-w-xs font-sans text-sm text-bone/70">
              {SITE.tagline}. Кастомні oversize-футболки — маленькі дропи, washed
              black.
            </p>
          </div>

          <FooterCol title="Магазин" items={NAV} />
          <FooterCol title="Інфо" items={INFO} />

          {/* CTA */}
          <div>
            <p className="font-head text-xs uppercase tracking-[0.2em] text-bone/50">
              Замовлення
            </p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-pink px-5 py-3 font-head text-sm uppercase tracking-[0.14em] text-on-pink transition-opacity hover:opacity-90"
            >
              <InstagramIcon className="size-4" />
              Замовити в Direct
            </a>
            <p className="mt-4 font-sans text-sm text-bone/70">
              {SITE.instagramHandle}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-bone/15 pt-6 font-sans text-xs text-bone/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Softi. Усі права захищені.</p>
          <p>{SITE.region}</p>
        </div>
      </div>
    </footer>
  );
}
