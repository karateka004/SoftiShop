import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

// Конфиг Sanity Studio (админка). Запуск: npm run studio. Деплой: npm run studio:deploy.
// projectId/dataset публичные → задаём явно (Studio/Vite не видит NEXT_PUBLIC_*).
export default defineConfig({
  name: "softi",
  title: "Softi — адмінка",
  projectId: "0vlkp0vf",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
