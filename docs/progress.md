# progress.md — живой лог

## Сейчас: Фаза 1 (на визуальном ревью)

### Сделано в Фазе 1
- Дизайн-токены в `app/globals.css` (`@theme`): палитра bone+pink, радиус 0, семантика shadcn → бренд.
- Шрифты через `next/font`: **Pirata One** (дисплей/лого), **Oswald** (заголовки/нав),
  **Golos Text** (текст; заменил Inter — нативная кириллица, менее «генерик»).
- Починен circular-font баг (`--font-sans: var(--font-sans)` → `--ff-*` из next/font).
- Базовый layout (`app/layout.tsx`, `lang="uk"`, метаданные UA + OG): анонс-бар + header + main + footer.
- Компоненты `components/site/`: `announcement-bar`, `site-header` (центр-лого, нав, иконки),
  `mobile-nav` (shadcn Sheet, Base UI), `site-footer` (тёмный, IG-CTA), `icons` (inline Instagram).
- `lib/site.ts` — константы (бренд, NAV, анонсы). Заглушка главной `app/page.tsx` (hero — Фаза 2).
- `next.config.ts`: `turbopack.root` = softi (был лишний lockfile в домашней папке → неверный корень).

### Проверка
- `tsc --noEmit` → 0 ошибок. `next build` → **Compiled successfully** (TS-worker падает — см. ниже).
- Live preview/скриншот в текущей песочнице недоступен: Next dev/build падает на спавне воркеров
  (ОС `error 1450` / `0xC0000409`, ресурсный лимит окружения). Код валиден; смотреть локально `npm run dev`.

### Дальше (Фаза 2, после «ОК»)
- Главная: hero + промо-секции (featured из `lib/commerce.ts`).

### Известные вопросы / TODO
- ⚙️ Окружение: `next build`/`next dev` нестабильны тут (ресурсы). На машине владельца / Vercel — ок.
- ⚙️ Node v20.18.1 < 20.19 (warning). Обновить до Фазы 7.
- 🔎 Search/корзина в header — пока заглушки (Фазы 3/5). Роуты /products, /faq — 404 до Фаз 3/6.
- ⛳ Цены/валюта (UAH), точные названия, описание товара №5 — плейсхолдеры, подтвердить.
- ⛳ Фото товаров не скопированы в `public/products/` (Фаза 3). Логотип Softi (вектор) — TODO.
