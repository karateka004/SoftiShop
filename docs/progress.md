# progress.md — живой лог

## Сейчас: Фаза 3 завершена ✅ · дальше Фаза 4

### Сделано в Фазе 3
- Реальные фото → `public/products/<handle>/` (washed-black-tee 3, art-print 2, butterfly 2,
  oversize-washed 3, softi-05 2).
- `components/product/product-card.tsx` — карточка: next/image (object-cover, hover-zoom),
  pill-бейдж (новинка / 1 of 1 / Продано), назва (hover→pink), ціна.
- `app/products/page.tsx` — коллекция `/products` (async Server Component, `getProducts()`),
  редакторская сетка 2/3/4 кол., заголовок «Колекція / Товари / N моделей».
- `lib/format.ts` — `formatPrice` (uk-UA → «950 ₴»).
- (Доп.) Hero: заголовок заменён на **крутящуюся печать-логотип**; фирменный `::selection`.
- Проверка: `tsc` 0; `next build` success (5 стр. static: /, /products, /_not-found);
  /products отдаёт 200 со всеми товарами и фото.

### Дальше (Фаза 4)
- Страница товара `/products/[handle]`: галерея фото, «легенда», выбор размера (визуально),
  кнопка «в кошик» (состояние — Фаза 5). `generateStaticParams` из `getAllProductHandles()`.

### Известные вопросы / TODO
- Карточки ведут на `/products/[handle]` → 404 до Фазы 4. /faq, /about → 404 до Фазы 6.
- Дефолтная 404 (англ.) — сделать брендовую укр. (Фаза 7 или быстрый таск).
- ✅ Данные из txt: цены 1100–1200 ₴, размеры, витринные front-фото, товар №5 = «Pink Graffiti».
  Плейсхолдер остался ТОЛЬКО у товара №2 (art-print) — в его txt не было цены/размера.
- ⛳ Логотип Softi (вектор) — пока текстовый. Node 20.18.1 < 20.19 — обновить до Фазы 7.
- 🛠 Tech-debt: footer/mobile-nav inline-CTA → можно на `<Cta>`; лишние next.svg в `public/`.
