"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/lib/products";
import { cn } from "@/lib/utils";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [active, setActive] = useState(0);
  const main = images[active] ?? images[0];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/5] overflow-hidden border border-line bg-paper">
        {main && (
          <Image
            src={main.src}
            alt={main.alt}
            fill
            priority
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-cover"
          />
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Показати фото ${i + 1}`}
              aria-pressed={i === active}
              className={cn(
                "relative aspect-square overflow-hidden border bg-paper transition-colors",
                i === active ? "border-ink" : "border-line hover:border-ink/50",
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
