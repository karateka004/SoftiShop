import { ANNOUNCEMENTS } from "@/lib/site";

export function AnnouncementBar() {
  return (
    <div className="bg-ink text-bone">
      <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-center gap-2.5 px-4 font-head text-[0.68rem] uppercase tracking-[0.18em] sm:gap-3 sm:text-xs">
        {ANNOUNCEMENTS.map((text, i) => (
          <span key={text} className="flex items-center gap-2.5 sm:gap-3">
            {i > 0 && (
              <span aria-hidden className="text-pink">
                •
              </span>
            )}
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
