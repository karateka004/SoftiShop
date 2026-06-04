# progress.md — живой лог

## Сейчас: Фаза 7 завершена ✅ · сайт задеплоен 🚀 · демо готово

### Деплой
- **Live:** https://softishopdemobild.vercel.app
- GitHub: `karateka004/SoftiShop` (ветка `main`), Vercel авто-деплоит при `git push`.
- `SITE_URL` (lib/site.ts) сам берёт `VERCEL_PROJECT_PRODUCTION_URL` → OG/sitemap с правильным доменом.

### Сделано в Фазе 7
- SEO: `metadataBase`, Twitter-карточка, `app/opengraph-image.tsx` (next/og, латиниця),
  `app/sitemap.ts` (10 URL), `app/robots.ts`.
- Перформанс: `priority` на LCP-фото (галерея + первый ряд `/products`, lookbook).
- a11y: skip-link «До основного вмісту», `id="main"`, фокус-стейты.
- Брендовая укр. 404 (`app/not-found.tsx`).
- Адаптив: навигация `whitespace-nowrap` (5 пунктов в строку).
- 🛠️ Фикс: круговая печать на главной рисовалась полукругом в Safari/iOS — `textLength`
  не применяется к `textPath`. Решение: фраза ×2 + `letter-spacing`, без `textLength`.

### Дальше (по желанию)
- Реальные данные товара №2 (Art Print) — цена/размер плейсхолдер.
- Кастомный домен на Vercel, OG-картинка с фирменным шрифтом (сейчас латиница/дефолт).

### Сделано в Фазе 6
- Страницы (статические, укр., метаданные): `/faq`, `/about`, `/lookbook`.
- `/faq` — секции с якорями `#dostavka / #povernennia / #rozmiry` (футер «Інфо» теперь
  ведёт на них), розмірна сітка (таблиця M/L/OS), JS-free аккордеон на `<details>`.
- `/about` — історія бренду, цінності (3 блоки), CTA Direct.
- `/lookbook` — эдиториал-сетка з фото товарів (кожне веде на товар); пэкшоти (front,
  білий фон) у центральній колонці, образи з моделлю — по боках.
- Навігація: `NAV` доповнено `Lookbook` + `Про нас` (header, mobile-nav, футер).
- Главная: печать-лого вращается всегда (18s, фирменный элемент — НЕ глушится
  reduced-motion); hero появляется со сдвигом (`.rise-in`, под reduced-motion выключено).
- ⚠️ Turbopack кэширует CSS в `.next` — при правках globals.css, если не подхватывается,
  удалить `.next` и перезапустить dev.

### Сделано в Фазе 5
- `CartProvider` расширен состоянием открытия: `isOpen / setOpen / openCart / closeCart`.
- `CartDrawer` (client, на базе `ui/sheet.tsx` = Base UI Dialog): список позиций (мини-фото,
  название, размер), qty `−/+` (`updateQty`), удаление (`removeItem`), subtotal «Разом»,
  CTA «Замовити в Direct» (→ Instagram), пустое состояние «Кошик порожній» + ссылка на товары.
- `CartButton` теперь открывает дровер; `ProductPurchase` открывает его при «Додати в кошик».
- `CartDrawer` смонтирован в `layout.tsx` внутри `CartProvider`.
- Починен lint в `cart-context.tsx` (гидрация из localStorage — точечный eslint-disable
  с обоснованием SSR-паттерна). `npm run lint` чистый, `npm run build` OK (10 стр.).
- Проверка флоу через DOM: add → дровер открывается, qty ±, удаление → пустое состояние,
  subtotal, ссылки. ⚠️ Скриншот-инструмент превью виснет на открытом модале Base UI
  (focus-trap) — это ограничение инструмента, не баг; eval/клики/сборка работают.

### Известные вопросы / TODO
- Дефолтная 404 (англ.) — сделать брендовую укр. (Фаза 7).
- ⛳ Товар №2 (Art Print) — цена/размер плейсхолдер (в txt не было).
- Node 20.18.1 < 20.19 — обновить до Фазы 7. Кэш картинок: при замене фото — новое имя/хард-рефреш.
- Идея «вотермарк-лого на карточках» отклонена (мешает) — карточки остались в исходном виде.
- Создан `.claude/launch.json` (конфиг превью-сервера, dev-only).
