'use strict';

module.exports = {
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'env': {
    'node': true,
    'es6': true,
    'mocha': true,
    'jquery': true
  },
  'rules': {
    'comma-dangle': ['error', 'never'],
    'no-cond-assign': ['error', 'always'],
    'no-constant-condition': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'all', {
      'conditionalAssign': false
    }],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-invalid-regexp': ['error', {
      'allowConstructorFlags': ['u', 'y']
    }],
    'no-irregular-whitespace': 'error',
    'no-unsafe-negation': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unreachable': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'error',
    'no-unexpected-multiline': 'error',
    'valid-typeof': 'error',
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'complexity': 'error',
    'consistent-return': 'error',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {
      'ignoreArrayIndexes': true
    }],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-global-assign': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    'radix': 'error',
    'wrap-iife': ['error', 'inside'],
    'yoda': 'error',
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-use-before-define': 'error',
    'callback-return': 'error',
    'handle-callback-err': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': 'error',
    'func-style': ['error', 'expression'],
    'id-length': ['error', {
      'min': 1,
      'max': 25
    }],
    'indent': ['error', 2],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'max-depth': ['error', 4],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 4],
    'max-statements': ['error', 12],
    'max-statements-per-line': ['error', {
      'max': 1
    }],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': 'error',
    'newline-before-return': 'error',
    'newline-per-chained-call': ['error', {
      'ignoreChainWithDepth': 3
    }],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {
      'max': 2
    }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'never'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'padded-blocks': ['error', {
      'classes': 'always'
    }],
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single'],
    'require-jsdoc': ['error', {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': true,
        'ClassDeclaration': false
      }
    }],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      'before': false,
      'after': false
    }],
    'sort-imports': 'error',
    'sort-vars': 'error',
    'space-before-blocks': ['error', {
      'functions': 'always',
      'keywords': 'always',
      'classes': 'always'
    }],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': ['error', 'always'],
    'wrap-regex': 'error',
    'lines-around-comment': ['error', {
      'allowArrayStart': false,
      'allowArrayEnd': false,
      'allowBlockStart': true,
      'allowBlockEnd': false,
      'allowObjectStart': false,
      'allowObjectEnd': false,
      'afterBlockComment': false,
      'afterLineComment': false,
      'beforeBlockComment': true,
      'beforeLineComment': true
    }],
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', {
      'before': true,
      'after': true
    }],
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {
      'allowParens': true
    }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'object-property-newline': 'error',
    'no-useless-rename': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'max-lines': ['error', {
      'max': 300,
      'skipComments': true,
      'skipBlankLines': true
    }],
    'object-curly-newline': ['error', {
      'minProperties': 1
    }],
    'no-mixed-operators': ['error', {
      'groups': [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      'allowSamePrecedence': true
    }],
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'symbol-description': 'error',
    'line-comment-position': ['error', {
      'position': 'above'
    }],
    'lines-around-directive': ['error', {
      'before': 'never',
      'after': 'always'
    }],
    'no-useless-return': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
    'no-await-in-loop': 'error',
    'prefer-promise-reject-errors': 'error',
    'no-multi-assign': 'error'
  }
};
