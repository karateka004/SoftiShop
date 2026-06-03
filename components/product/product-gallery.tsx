"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ProductImage } from "@/lib/products";
import { cn } from "@/lib/utils";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Плавно пролистать к фото i
  function goTo(i: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
    setActive(i);
  }

  // Синхронизация активного индекса при свайпе/скролле
  function onScroll() {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Карусель: snap-скролл + свайп, главное фото с hover-зумом */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex aspect-[4/5] snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth border border-line bg-paper [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className="group relative h-full w-full shrink-0 snap-start overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => goTo(i)}
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
