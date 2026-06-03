# decisions.md — журнал решений (ADR-lite)

## ADR-001 — Next.js 16 (App Router) + TypeScript
Современный SSR/SSG, Server Components, лёгкий деплой на Vercel, типобезопасность.
⚠️ Next 16 имеет breaking changes — перед Next-кодом смотреть `node_modules/next/dist/docs/`.

## ADR-002 — Демо-режим без оплаты/Shopify
Этап показа: рабочая кликабельная витрина, mock-данные, CTA «Замовити в Direct» вместо
чекаута. Реальную коммерцию подключаем позже через абстракцию (см. `future-commerce.md`).

## ADR-003 — Tailwind CSS v4 (CSS-first)
`@import "tailwindcss"` + `@theme` в `globals.css`, без `tailwind.config.js`. Токены — в CSS.

## ADR-004 — shadcn/ui (CLI v4, Base UI, style base-nova)
create-next-app/shadcn по умолчанию поставили Base UI (`@base-ui/react`), style `base-nova`,
baseColor neutral. Нам подходит (AI Elements не используем → Radix не обязателен). Компоненты —
исходники в `components/ui`, кастомизируем под токены.

## ADR-005 — Проект по ASCII-пути `C:\Users\User\Desktop\softi`
Изначально проект лежал в `…\Desktop\сайт соня\softi`. Кириллица + пробел в родительском пути
ломают Tailwind v4 (`@tailwindcss/node` спавнит Worker → `Error: EINVAL at new Worker`),
из-за чего падали и `next dev`, и `next build`. Решение — перенести проект в чистый ASCII-путь
без пробелов: **`C:\Users\User\Desktop\softi`** (git-репозиторий переехал вместе с папкой).
Исходники фото остались в `…\сайт соня\Вещи для магазина` как источник (в Фазе 3 копируем в `public/products/`).

## ADR-006 — Палитра «монохром + розовый»
Совпадает с реальными товарами (washed black + розовый принт) и референсом byedemox (ч/б + редкий
акцент). Светлый «галерейный» режим — основной; тёмный — alt. (Подтверждено владельцем.)

## ADR-007 — Шрифты: Pirata One (display) + Oswald (заголовки) + Golos Text (текст)
Готик-метал-подача (выбор владельца): дисплей/лого — Pirata One (готический blackletter, латиница,
ТОЛЬКО лого/акценты). Украинский текст требует кириллицы → Oswald (заголовки) + Golos Text (body).
Golos Text вместо Inter — нативная кириллица и менее «генерик»-вид (рекомендация frontend-design).

## ADR-008 — Валюта UAH (плейсхолдер)
Бренд украинский, доставка 1–2 дня (внутренняя). Валюта и цены — плейсхолдеры до подтверждения.

## Замечание по окружению
Node **v20.18.1**; часть dev-пакетов хочет ≥20.19 (warning EBADENGINE). Сборка работает;
рекомендуется обновить Node до 20.19+/22 перед Фазой 7 (деплой).
