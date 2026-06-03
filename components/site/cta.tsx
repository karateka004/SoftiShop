import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "light";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 font-head text-sm uppercase tracking-[0.14em] transition-all";

const variants: Record<Variant, string> = {
  // розовый акцент на светлом
  primary: "bg-pink text-on-pink hover:opacity-90",
  // контур на светлом → инверсия на ховере
  outline: "border border-ink text-ink hover:bg-ink hover:text-bone",
  // контур на тёмном фоне
  light: "border border-bone/30 text-bone hover:bg-bone hover:text-ink",
};

export function Cta({
  href,
  external = false,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  external?: boolean;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  const cls = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
