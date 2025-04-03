import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },

  // Configuración para Jest
  {
    files: ["**/*.test.js"],  // Solo afecta archivos de prueba
    languageOptions: {
      globals: globals.jest, // Habilita `test`, `expect` y `jest`
    },
  },
]);