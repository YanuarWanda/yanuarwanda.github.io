import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginAstro from "eslint-plugin-astro";
import globals from "globals";

export default tseslint.config(
  {
    ignores: ["dist/", "node_modules/", ".astro/"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginAstro.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
);
