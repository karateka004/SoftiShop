import { defineCliConfig } from "sanity/cli";

// Конфиг Sanity CLI (sanity dev / sanity deploy). projectId/dataset публичные.
export default defineCliConfig({
  api: { projectId: "0vlkp0vf", dataset: "production" },
  // studioHost задаст поддомен при первом `sanity deploy` (напр. softi → softi.sanity.studio).
});
