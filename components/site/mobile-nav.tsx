"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV, SITE } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Відкрити меню"
        className="grid size-10 place-items-center text-ink md:hidden"
      >
        <Menu className="size-6" strokeWidth={1.5} />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="flex w-[86%] max-w-sm flex-col gap-0 border-line bg-bone p-0"
      >
        <SheetHeader className="border-b border-line px-6 py-5">
          <SheetTitle className="font-display text-3xl font-normal text-ink">
            Softi
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col" aria-label="Мобільна навігація">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line px-6 py-5 font-head text-2xl uppercase tracking-[0.08em] text-ink transition-colors hover:text-pink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto px-6 py-7">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-pink px-5 py-3 font-head text-sm uppercase tracking-[0.14em] text-on-pink transition-opacity hover:opacity-90"
          >
            Замовити в Direct
          </a>
          <p className="mt-6 font-sans text-xs text-ink-soft">{SITE.region}</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
