import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    plugins: {
      typescriptPlugin
    },
    languageOptions: {
        parser: typescriptParser
    }
  }
];