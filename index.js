import js from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import unicornPlugin from 'eslint-plugin-unicorn';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import-x';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

import style from './rules/style.js';
import strict from './rules/strict.js';
import bestPractices from './rules/best-practices.js';
import errors from './rules/errors.js';
import es6 from './rules/es6.js';
import variables from './rules/variables.js';
import prettierRules from './rules/prettier.js';
import jestRules from './rules/jest.js';
import unicornRules from './rules/unicorn.js';
import importRules from './rules/imports.js';

// Linter config
export default [
  // ESLint recommended
  js.configs.recommended,

  // Jest recommended flag config
  jestPlugin.configs['flat/recommended'],

  // Unicorn recommended config
  unicornPlugin.configs.recommended,

  // Prettier config - disables formatting rules that conflict with prettier
  prettierConfig,

  // Main config
  {
    plugins: {
      jest: jestPlugin,
      prettier: prettierPlugin,
      'import-x': importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    settings: {
      'import-x/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.json'],
        },
      },
      'import-x/extensions': ['.js', '.mjs', '.jsx'],
      'import-x/core-modules': [],
      'import-x/ignore': ['node_modules', String.raw`\.(coffee|scss|css|less|hbs|svg|json)$`],
    },
    rules: {
      ...style.rules,
      ...strict.rules,
      ...bestPractices.rules,
      ...errors.rules,
      ...es6.rules,
      ...variables.rules,
      ...prettierRules.rules,
      ...jestRules.rules,
      ...unicornRules.rules,
      ...importRules.rules,
      strict: 'error',
    },
  },

  // Test file overrides - relax certain rules for test files
  {
    files: [
      '**/*.spec.js',
      '**/*.test.js',
      '**/*.test.mjs',
      '**/tests-*.js',
      '**/*.spec.ts',
      '**/*.test.ts',
      '**/tests-*.ts',
    ],
    rules: {
      'id-length': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-nested-callbacks': 'off',
      'max-statements': 'off',
      'no-process-env': 'off',
      'no-undefined': 'off',
      'padding-line-between-statements': [
        'error',
        {blankLine: 'always', prev: '*', next: 'return'},
        {blankLine: 'any', prev: ['const', 'let', 'var'], next: '*'},
        {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
        {blankLine: 'always', prev: 'directive', next: '*'},
        {blankLine: 'any', prev: ['for', 'do', 'while'], next: '*'},
        {blankLine: 'any', prev: '*', next: 'for'},
        {blankLine: 'any', prev: 'import', next: '*'},
        {blankLine: 'any', prev: 'import', next: 'import'},
        {blankLine: 'any', prev: 'if', next: '*'},
        {blankLine: 'any', prev: 'function', next: '*'},
        {blankLine: 'any', prev: '*', next: 'function'},
        {blankLine: 'any', prev: '*', next: 'export'},
        {blankLine: 'any', prev: '*', next: 'cjs-export'},
        {blankLine: 'any', prev: 'cjs-import', next: '*'},
        {blankLine: 'any', prev: 'cjs-import', next: 'cjs-import'},
      ],
      'unicorn/prefer-prototype-methods': 'off',
    },
  },
];
