// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://yanuarwanda.github.io",
  base: "/",
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "en",
  },
});
