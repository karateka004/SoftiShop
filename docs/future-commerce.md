# future-commerce.md — подключение реальной коммерции (ПОЗЖЕ, не сейчас)

Сейчас НЕ реализуем. Документ фиксирует, как перейти от mock к реальному магазину
**без переписывания UI**.

## Принцип
UI зависит только от `lib/commerce.ts` (`getProducts`, `getProduct`, `getFeaturedProducts`,
`getAllProductHandles`) и от типа `Product`. Меняем только внутренности этого модуля.

## Вариант A — Shopify Storefront API (рекомендуемый)
1. Магазин Shopify + Storefront API token (env: `SHOPIFY_STORE_DOMAIN`, `SHOPIFY_STOREFRONT_TOKEN`).
2. В `commerce.ts` заменить чтение `PRODUCTS` на GraphQL-запросы к Storefront API.
3. Маппинг Shopify-товара → наш `Product` (id, handle, title, price, images, sizes=варианты, available).
4. Чекаут — через Shopify `cart` (`checkoutUrl`): заменить CTA «Direct» на переход в Shopify Checkout.
5. Корзину переключить с локального состояния на Shopify Cart API (id корзины в cookie).

## Вариант B — иной бэкенд / headless CMS
Тот же контракт: реализовать функции `commerce.ts` поверх своего API. Тип `Product` —
единый контракт между данными и UI.

## Что НЕ трогаем при миграции
Компоненты карточки/страницы товара/сетки/корзины-дровера — они работают с типом `Product`
и async-функциями, а не с источником данных.

## Чек-лист перехода
- [ ] env-переменные (не коммитить секреты)
- [ ] реализовать функции `commerce.ts` поверх API
- [ ] маппер в тип `Product`
- [ ] заменить CTA на реальный checkout
- [ ] корзина → серверная/Shopify
- [ ] обработка ошибок/пустых состояний/загрузки
