import "server-only";
import { createClient } from "@sanity/client";
import { projectId, dataset, apiVersion } from "@/sanity/env";

// Клиент чтения каталога. Серверный read-токен (новые проекты Sanity требуют
// токен даже для «public»-датасета). Только для сервера — токен в клиент не уходит.
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
  token: process.env.SANITY_API_READ_TOKEN,
});
