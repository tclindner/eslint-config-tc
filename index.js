const bestPractices = require.resolve('./rules/best-practices');
const errors = require.resolve('./rules/errors');
const es6 = require.resolve('./rules/es6');
const node = require.resolve('./rules/node');
const style = require.resolve('./rules/style');
const variables = require.resolve('./rules/variables');
const prettier = require.resolve('./rules/prettier');
const testFileOverrides = require('./overrides/testFiles');

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:eslint-comments/recommended',
    bestPractices,
    errors,
    es6,
    node,
    style,
    variables,
    prettier,
  ],
  plugins: ['jest', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
  rules: {
    strict: 'error',
  },
  overrides: [testFileOverrides],
};
