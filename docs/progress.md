# progress.md — живой лог

## Сейчас: Фаза 2 завершена ✅ · дальше Фаза 3

### Сделано в Фазе 2
- Главная `app/page.tsx` = Hero + ValueProps + Manifesto + OrderCta (компоненты в `components/home/`).
- Hero: вотермарк-лого, заголовок «Oversize washed black» (акцент pink), 2 CTA (Direct + Переглянути товари).
- ValueProps: 3 колонки (1 of 1 / Oversize fit / Доставка 1–2 дні) с hairline-разделителями.
- Manifesto: редакторское заявление + ссылка «Дізнатися більше» (→ /about, Фаза 6).
- OrderCta: тёмный бэнд «Direct» (Pirata One) + CTA «Написати в Direct».
- Переиспользуемый `components/site/cta.tsx` (variants: primary / outline / light).
- Проверка: `tsc` → 0, `next build` → success (4 стр. static), главная отдаёт 200 со всеми секциями.

### Дальше (Фаза 3)
- Страница коллекции `/products` (сетка) + переиспользуемая карточка товара (ProductCard).
- Скопировать фото `…\сайт соня\Вещи для магазина\1..5` → `public/products/<handle>/`
  (папки: 1→washed-black-tee, 2→art-print-tee, 3→butterfly-tee, 4→oversize-washed-black, 5→softi-05).

### Известные вопросы / TODO
- ⚙️ Node v20.18.1 < 20.19 (warning). Обновить до Фазы 7.
- 🔎 Search/корзина в header — заглушки (Фазы 3/5). /products, /faq, /about — 404 до Фаз 3/6.
- ⛳ Цены/валюта (UAH), точные названия, описание товара №5 — плейсхолдеры, подтвердить.
- ⛳ Логотип Softi (вектор/PNG) — получить или оставить текстовый (Pirata One).
- 🛠 Tech-debt: footer/mobile-nav имеют inline-CTA — можно перевести на `<Cta>` (необязательно).
