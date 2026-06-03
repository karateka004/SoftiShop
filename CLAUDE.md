@AGENTS.md

# Softi — демо-витрина (CLAUDE.md)

> Короткий, всегда-в-контексте файл. Детали — в `/docs` (читай конкретный файл по нужде).

## Что это
Демо-витрина нишевого бренда **Softi** — кастомные oversize-футболки (washed/vintage black),
streetwear, тексты на сайте **на украинском**. Сейчас это **рабочее ДЕМО для показа**:
без оплаты, без чекаута, без Shopify. Кнопка заказа = CTA «Замовити в Direct» → Instagram
**@softi.brand** (`https://instagram.com/softi.brand`).

## Стек
- **Next.js 16** (App Router) + **TypeScript** + React 19
- **Tailwind CSS v4** (CSS-first: `@import "tailwindcss"` + `@theme`, без `tailwind.config.js`)
- **shadcn/ui** (CLI v4, style `base-nova`, Base UI) + `lucide-react`
- Данные товаров — типизированный **mock** `lib/products.ts` через абстракцию `lib/commerce.ts`
- Деплой — **Vercel** (публичный URL = Фаза 7)

## Команды (выполнять в папке `softi/`)
- `npm run dev` — дев-сервер
- `npm run build` — прод-сборка
- `npm run lint` — ESLint

## Железные правила
- Работаем **итерациями**: одна фаза → **СТОП** → ждём «ОК». Маленькие диффы, одна область за раз.
- Только **токены из `@theme`** (цвета/типографика/отступы) — без хардкода значений.
- **Mobile-first**, доступность (фокус, alt, контраст, семантика).
- **НЕ писать код оплаты/чекаута** — вне области этапа.
- Перед новыми зависимостями / реструктуризацией папок — **спросить**.
- ⚠️ **Next.js 16 имеет breaking changes** — перед написанием Next-кода смотреть
  `node_modules/next/dist/docs/` (см. `AGENTS.md` выше).

## Где что лежит (подробности — в /docs)
- `docs/brand.md` — айдентика, палитра, типографика, дизайн-токены, где ассеты
- `docs/architecture.md` — структура, связь mock ↔ commerce ↔ страницы
- `docs/conventions.md` — именование, паттерны компонентов, токены, a11y, язык
- `docs/roadmap.md` — фазы с чекбоксами
- `docs/decisions.md` — журнал решений (ADR)
- `docs/future-commerce.md` — план подключения Shopify позже (сейчас НЕ делаем)
- `docs/progress.md` — живой лог: сделано / дальше / баги
- `lib/products.ts` — mock-товары; `lib/commerce.ts` — абстракция доступа (UI берёт данные ТОЛЬКО отсюда)
- `public/products/` — фото товаров; `public/brand/` — лого/favicon/og; `references/` — инспирация (не в прод)

## Новая сессия / после /clear
Прочитать: `CLAUDE.md` → `docs/roadmap.md` → `docs/progress.md`. Этого хватит, чтобы продолжить.
