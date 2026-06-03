# architecture.md — структура проекта

## Дерево (значимое)
```
softi/
  app/                  # Next.js App Router
    layout.tsx          # root layout (шрифты, метаданные) — правим в Фазе 1
    page.tsx            # главная (default scaffold → Фаза 2)
    globals.css         # Tailwind v4 + @theme токены (правим в Фазе 1)
    (роуты Фаз 3–6: /products, /products/[handle], /about, /faq, /lookbook)
  components/
    ui/                 # shadcn/ui (button.tsx и др.)
    (собственные компоненты: header, footer, product-card… — Фазы 1–5)
  lib/
    products.ts         # типизированный MOCK товаров (5 шт.)
    commerce.ts         # АБСТРАКЦИЯ доступа к данным (единственная точка для UI)
    utils.ts            # cn() от shadcn
  docs/                 # эта документация
  references/           # инспирация (НЕ в прод-сборке)
  public/
    products/           # фото товаров (Фаза 3)
    brand/              # лого/favicon/og
  CLAUDE.md / AGENTS.md # краткий контекст + предупреждение про Next 16
  components.json       # конфиг shadcn (style base-nova, baseColor neutral)
```

## Поток данных
```
lib/products.ts  ──(импорт)──►  lib/commerce.ts  ──(async API)──►  Server Components / страницы
   (MOCK)                         (getProducts / getProduct / …)        (рендер UI)
```
- UI **никогда** не импортирует `products.ts` напрямую — только `commerce.ts`.
- `commerce.ts` асинхронный, чтобы потом без боли заменить mock на Shopify (см. `future-commerce.md`).

## Корзина и «чекаут» (Фаза 5)
- Корзина — **клиентское состояние** (React Context, без бэкенда/БД).
- Вместо чекаута — **CTA «Замовити в Direct»** (ссылка на Instagram). Кода оплаты НЕТ.

## Планируемые роуты
| Роут | Что | Фаза |
|---|---|---|
| `/` | главная: hero + featured | 2 |
| `/products` | сетка коллекции | 3 |
| `/products/[handle]` | страница товара (галерея, размеры, легенда, в корзину) | 4 |
| `/about`, `/faq`, `/lookbook` | контент-страницы | 6 |
