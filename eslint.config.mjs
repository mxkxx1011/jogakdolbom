import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

import globals from 'globals';

import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginImport from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const { rules } = reactPlugin;

const eslintConfig = [
  globalIgnores(['dist']),

  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.extends('plugin:react/jsx-runtime'),
  ...compat.extends('prettier'),

  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: eslintPluginImport,
      'unused-imports': unusedImports,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
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
      'no-unused-vars': 'off',
      'space-before-blocks': ['error', 'always'],
      camelcase: ['warn', { properties: 'always' }],
      'no-undef': 'error',
      'no-use-before-define': ['error', { functions: false }],

      //공백
      'space-infix-ops': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-before-function-paren': [
        'error',
        {
          asyncArrow: 'always', // async 화살표 함수에서 공백 허용
          named: 'never', // 이름 있는 화살표 함수는 공백을 두지 않음
          anonymous: 'never', // 익명 화살표 함수는 공백을 두지 않음
        },
      ], // 함수명과 괄호 사이 공백 금지 (function foo() ← ok)
      'func-call-spacing': ['error', 'never'],

      // 🧱 표현식/문자열/객체 스타일
      quotes: ['error', 'single', { avoidEscape: true }], // 작은 따옴표 사용, 단 이스케이프 필요 시 허용
      'object-curly-spacing': ['error', 'always'], // 객체 중괄호 내부에 공백 허용 { key: value }
      'array-bracket-spacing': ['error', 'never'], // 배열 대괄호 내부 공백 금지 [1, 2, 3]
      'comma-dangle': ['error', 'always-multiline'], // 여러 줄일 경우 마지막 요소에 쉼표 필요
      'comma-spacing': ['error', { before: false, after: true }], // 쉼표 뒤 공백 필수, 앞은 금지
      'arrow-spacing': ['error', { before: true, after: true }], // 화살표 함수 `=>` 양쪽 공백 필수

      // 👍 기타 좋은 스타일 습관
      'dot-notation': 'error', // 가능하면 점 표기법 사용 (obj['key'] → obj.key)
      curly: ['error', 'all'], // if/else 등에 중괄호 항상 사용
      'no-console': ['error', { allow: ['warn', 'error'] }], // console.log 금지, console.warn/error만 허용

      // ⚛️ React 관련 스타일
      'react/react-in-jsx-scope': 'off', // React 17+에서는 import React 생략 가능
      'react/jsx-uses-react': 'off', // React 17+에서는 JSX 자동 변환되므로 사용 안 함
      'react/function-component-definition': [
        2,
        { namedComponents: 'function-declaration' }, // 컴포넌트는 반드시 function 선언식으로 작성
      ],
      'react/self-closing-comp': [
        'error',
        {
          component: true, // 빈 리액트 컴포넌트는 self-closing으로 작성
          html: true, // HTML 태그도 self-closing
        },
      ],

      'react/no-multi-comp': 'error', // 하나의 파일에 여러 개 컴포넌트 정의 금지
      'react/no-array-index-key': 'error', // key로 index 사용 금지 (re-render 시 문제 유발 가능)
      'react/jsx-no-useless-fragment': 'error', // 불필요한 fragment(<></>) 사용 금지

      'no-debugger': 'warn', // debugger 사용 시 경고
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
          ], // import 그룹 정렬
          'newlines-between': 'always', // 그룹 간 빈 줄 추가
          alphabetize: {
            order: 'asc',
            caseInsensitive: true, // 알파벳 순 정렬, 대소문자 구분 없음
          },
        },
      ],
      'import/no-unresolved': 'error', // 존재하지 않는 모듈 import 금지
      'import/no-extraneous-dependencies': 'error', // package.json에 없는 의존성 import 금지

      'unused-imports/no-unused-imports': 'error', // 사용하지 않는 import 제거
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_', // _로 시작하는 변수는 무시
          argsIgnorePattern: '^_',
        },
      ],

      // 🧠 TypeScript용 중복 검사 방지 및 고급 처리
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/array-type': 'error',
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
