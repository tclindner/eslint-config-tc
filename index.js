'use strict';

/* eslint id-length: 'off', max-lines: 'off', array-bracket-newline: 'off', array-element-newline: 'off' */

module.exports = {
  extend: 'eslint-config-airbnb-base',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    node: true
  },
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-newline': ['error', 'consistent'],
    'arrow-body-style': ['error', 'as-needed'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'always'],
    'brace-style': 'error',
    'callback-return': 'error',
    'camelcase': 'error',
    'class-methods-use-this': 'error',
    'comma-dangle': ['error', 'never'],
    'complexity': 'error',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', {allowKeywords: true}],
    'eol-last': 'error',
    'eqeqeq': 'error',
    'for-direction': 'error',
    'function-paren-newline': ['error', 'never'],
    'func-style': ['error', 'expression'],
    'getter-return': 'error',
    'handle-callback-err': 'error',
    'id-length': ['error', {
      min: 1,
      max: 25
    }],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2],
    'line-comment-position': ['error', {position: 'above'}],
    'lines-between-class-members': ['error', 'always'],
    'keyword-spacing': 'error',
    'lines-around-comment': ['error', {
      allowArrayStart: false,
      allowArrayEnd: false,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowObjectStart: false,
      allowObjectEnd: false,
      afterBlockComment: false,
      afterLineComment: false,
      beforeBlockComment: true,
      beforeLineComment: true
    }],
    'max-classes-per-file': 'error',
    'max-depth': ['error', 4],
    'max-lines': ['error', {
      max: 300,
      skipComments: true,
      skipBlankLines: true
    }],
    'max-lines-per-function': 'error',
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 4],
    'max-statements': ['error', 12],
    'max-statements-per-line': ['error', {max: 1}],
    'new-cap': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-buffer-constructor': 'error',
    'no-compare-neg-zero': 'error',
    'no-console': 'warn',
    'no-constant-condition': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-function': 'error',
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false
    }],
    'no-eq-null': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-inline-comments': 'error',
    'no-invalid-regexp': ['error', {allowConstructorFlags: ['u', 'y']}],
    'no-labels': 'error',
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true
    }],
    'no-mixed-requires': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-param-reassign': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-return-await': 'error',
    'no-template-curly-in-string': 'error',
    'no-undefined': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': ['error', {vars: 'local', args: 'after-used', ignoreRestSiblings: true}],
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-warning-comments': 'error',
    'object-curly-newline': ['error', {
      ObjectExpression: {consistent: true},
      ObjectPattern: 'never'
    }],
    'object-curly-spacing': ['error', 'never'],
    'padded-blocks': ['error', {classes: 'always'}],
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: '*', next: 'return'},
      {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
      {blankLine: 'always', prev: 'directive', next: '*'},
      {blankLine: 'always', prev: ['for', 'do', 'while'], next: '*'},
      {blankLine: 'always', prev: '*', next: 'for'},
      {blankLine: 'always', prev: 'import', next: '*'},
      {blankLine: 'any', prev: 'import', next: 'import'},
      {blankLine: 'always', prev: 'if', next: '*'},
      {blankLine: 'always', prev: 'function', next: '*'},
      {blankLine: 'always', prev: '*', next: 'function'},
      {blankLine: 'always', prev: '*', next: 'export'},
      {blankLine: 'always', prev: '*', next: 'cjs-export'},
      {blankLine: 'any', prev: 'cjs-export', next: 'cjs-export'},
      {blankLine: 'any', prev: 'cjs-import', next: '*'},
      {blankLine: 'any', prev: 'cjs-import', next: 'cjs-import'}
    ],
    'prefer-const': 'error',
    'prefer-promise-reject-errors': 'error',
    'quote-props': ['error', 'consistent-as-needed', {keywords: true}],
    'require-await': 'error',
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: false
      }
    }],
    'require-atomic-updates': 'error',
    'semi-spacing': ['error', {
      before: false,
      after: false
    }],
    'semi-style': ['error', 'last'],
    'sort-vars': 'error',
    'space-before-blocks': ['error', {
      functions: 'always',
      keywords: 'always',
      classes: 'always'
    }],
    'space-before-function-paren': ['error', 'never'],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    'valid-jsdoc': 'error',
    'valid-typeof': ['error', {requireStringLiterals: true}],
    'wrap-iife': ['error', 'inside'],
    'wrap-regex': 'error'
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
