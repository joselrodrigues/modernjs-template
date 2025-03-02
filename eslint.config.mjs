import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['node_modules/', 'dist/', 'build/'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { settings: { react: { version: 'detect' } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
];
