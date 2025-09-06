// eslint.config.js (Flat Config)
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

import tanstackQueryPlugin from '@tanstack/eslint-plugin-query';
import eslintPluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import { globalIgnores } from 'eslint/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const { rules } = reactPlugin;

const eslintConfig = [
  globalIgnores([
    'dist',
    '.next',
    'node_modules',
    '.vercel',
    '.vscode',
    '**/*.d.ts',
  ]),

  // Next.js + TypeScript + Prettier 기본 권장세트
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),

  // React / Hooks / JSX runtime / TanStack Query 권장세트
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ),

  // 실제 규칙 (TS/TSX 대상)
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      // 플러그인 등록
      '@typescript-eslint': tseslint,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: eslintPluginImport,
      'unused-imports': unusedImports,
      '@tanstack/eslint-plugin-query': tanstackQueryPlugin,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      ...eslintPluginImport.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,

      'jsx-quotes': ['error', 'prefer-single'],

      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'brace-style': ['error', '1tbs'],
      'no-var': 'error',
      'no-unused-vars': 'off', // → TS 규칙으로 대체
      'space-before-blocks': ['error', 'always'],
      camelcase: ['warn', { properties: 'always' }],
      'no-undef': 'off', // TypeScript가 처리
      'no-use-before-define': ['error', { functions: false }],

      // 표현식/문자열/객체 스타일
      quotes: ['error', 'single', { avoidEscape: true }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', { before: false, after: true }],
      'arrow-spacing': ['error', { before: true, after: true }],

      // 공백 관련
      'space-infix-ops': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-before-function-paren': [
        'error',
        { asyncArrow: 'always', named: 'never', anonymous: 'never' },
      ],
      'func-call-spacing': ['error', 'never'],

      curly: ['error', 'all'],
      'no-console': ['error', { allow: ['warn', 'error'] }],

      // React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/function-component-definition': [
        'error',
        { namedComponents: 'function-declaration' },
      ],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/no-array-index-key': 'error',
      'react/jsx-no-useless-fragment': 'error',

      // import
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'off', // TypeScript resolver가 처리
      'import/no-extraneous-dependencies': 'error',
      'import/no-anonymous-default-export': 'off',

      // unused-imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],

      // TypeScript 전용
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unsafe-function-type': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.js', '.ts', '.tsx', '.css', '.css.ts'],
        },
      },
    },
  },
];

export default eslintConfig;
