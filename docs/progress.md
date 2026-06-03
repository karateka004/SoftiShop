# progress.md — живой лог

## Сейчас: Фаза 4 завершена ✅ · дальше Фаза 5

### Сделано в Фазе 4
- Страница товара `/products/[handle]` — SSG (`generateStaticParams`, async `params` Next 16),
  `notFound()` для неизвестных handle.
- `ProductGallery` (client): главное фото + миниатюры (переключение клика).
- `ProductPurchase` (client): выбор размера, «Додати в кошик» (→ корзина), «Замовити в Direct».
- Корзина: `CartProvider` (client, localStorage-персист, add/remove/updateQty/clear, count, subtotal),
  обёрнута в `layout.tsx`. `CartButton` в шапке — счётчик (розовый бейдж).
- Крошки, бейдж, цена, блок «Опис».
- Проверка: `next build` OK (6 стр., `/products/[handle]` SSG ×5); товар → 200; неизвестный → 404.

### Дальше (Фаза 5)
- Корзина-дровер (shadcn Sheet справа): позиции, qty ±, удаление, subtotal; вместо чекаута —
  CTA «Замовити в Direct». Открытие по клику на `CartButton`.

### Известные вопросы / TODO
- `CartButton` пока не открывает дровер (Фаза 5).
- Дефолтная 404 (англ.) — сделать брендовую укр. (Фаза 7).
- ⛳ Товар №2 (Art Print) — цена/размер плейсхолдер (в txt не было).
- Node 20.18.1 < 20.19 — обновить до Фазы 7. Кэш картинок: при замене фото — новое имя/хард-рефреш.
