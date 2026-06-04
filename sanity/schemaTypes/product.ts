import { defineField, defineType } from "sanity";

// Схема «Товар» — поля совпадают с тем, что читает lib/commerce.ts.
export const product = defineType({
  name: "product",
  title: "Товар",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Назва",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL (slug)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "price",
      title: "Ціна",
      type: "number",
      validation: (r) => r.required().min(0),
    }),
    defineField({
      name: "currency",
      title: "Валюта",
      type: "string",
      initialValue: "UAH",
      options: {
        list: [
          { title: "₴ UAH", value: "UAH" },
          { title: "€ EUR", value: "EUR" },
          { title: "$ USD", value: "USD" },
        ],
      },
    }),
    defineField({
      name: "sizes",
      title: "Розміри",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "images",
      title: "Фото",
      description: "Перше фото — обкладинка. Решта — галерея.",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Опис фото (alt)",
              type: "string",
            },
          ],
        },
      ],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "legend",
      title: "Опис",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "available",
      title: "В наявності",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "badge",
      title: "Бейдж",
      description: "Напр. «новинка» або «1 of 1». Лишити порожнім — без бейджа.",
      type: "string",
    }),
    defineField({
      name: "featured",
      title: "На головній",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "orderRank",
      title: "Порядок",
      description: "Сортування у списку (менше = вище).",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "price", media: "images.0" },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle ? `${subtitle} ₴` : "", media };
    },
  },
});
