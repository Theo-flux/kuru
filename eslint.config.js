import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      globals: globals.browser,
      extends: ["plugin:react/jsx-runtime"],
    },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
