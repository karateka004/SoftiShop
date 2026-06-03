# progress.md — живой лог

## Сейчас: Фаза 0 (на ревью токенов)

### Сделано
- Шаг 0: установлены плагины (frontend-design, typescript-lsp, vercel, github, security-guidance)
  через маркетплейс `anthropics/claude-plugins-official`. `typescript-language-server` — глобально.
- Каркас: `create-next-app` → **Next 16.2.7 + React 19 + Tailwind v4 + TS + ESLint + Turbopack**,
  git инициализирован. Проект в подпапке `softi/`.
- shadcn/ui (CLI v4): `components.json`, `lib/utils.ts` (cn), `components/ui/button.tsx`.
- Папки: `docs/`, `references/`, `public/products/`, `public/brand/`.
- Документация: `CLAUDE.md` (+ `AGENTS.md` про Next 16) и все `/docs/*`.
- Данные: `lib/products.ts` (5 товаров, mock) + абстракция `lib/commerce.ts`.
- Предложены дизайн-токены (см. `brand.md`).

### Дальше (Фаза 1, после «ОК»)
- Применить токены в `globals.css` (`@theme`): палитра bone+pink, радиус 0.
- Подключить шрифты Metal Mania / Oswald / Inter через `next/font`; **починить circular-font**.
- Базовый layout: header (лого + нав HOME/PRODUCTS/FAQ), footer (IG, политика), мобильное меню.

### Известные вопросы / TODO
- ⚠️ `globals.css`: `--font-sans: var(--font-sans)` — circular (баг shadcn+TW4). Чиним в Фазе 1.
- ⚠️ Node v20.18.1 < 20.19 (warning). Обновить до Фазы 7.
- ⛳ Цены/валюта (UAH), точные названия, описание товара №5 — плейсхолдеры, подтвердить.
- ⛳ Фото товаров ещё не скопированы в `public/products/` (Фаза 3).
- ⛳ Логотип Softi (вектор/PNG) — получить у владельца или воссоздать шрифтом.

### Vercel
Проект Vercel-ready (Next.js). Реальный деплой + публичный URL — Фаза 7
(плагин `vercel` установлен; нужен будет логин/линк проекта).
