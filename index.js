'use strict';

/* eslint id-length: 'off', array-bracket-newline: 'off', array-element-newline: 'off' */

const bestPractices = require('./rules/best-practices');
const errors = require('./rules/errors');
const es6 = require('./rules/es6');
const node = require('./rules/node');
const style = require('./rules/style');
const variables = require('./rules/variables');

module.exports = {
  extend: [
    'eslint-config-airbnb-base',
    bestPractices,
    errors,
    es6,
    node,
    style,
    variables
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    node: true
  },
  rules: {
    strict: 'error'
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.test.js',
        '**/tests-*.js'
      ],
      env: {
        jest: true,
        mocha: true
      },
      rules: {
        'array-bracket-newline': 'off',
        'array-element-newline': 'off',
        'id-length': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'off',
        'max-statements': 'off',
        'newline-after-var': 'off',
        'no-process-env': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'object-curly-newline': 'off',
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
          {blankLine: 'any', prev: 'cjs-import', next: 'cjs-import'}
        ]
      }
    }
  ]
};
