module.exports = {
  rules: {
    'block-spacing': 'off',
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-dangle': ['error', 'never'],
    'func-names': 'off',
    'func-style': ['error', 'expression'],
    'function-paren-newline': ['error', 'never'],
    'id-length': ['error', {
      min: 1,
      max: 25
    }],
    'keyword-spacing': 'error',
    'line-comment-position': ['error', {position: 'above'}],
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
    'max-depth': ['error', 4],
    'max-len': 'off',
    'max-lines-per-function': 'error',
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 6],
    'max-statements': ['error', 12],
    'max-statements-per-line': ['error', {max: 1}],
    'new-cap': 'error',
    'no-inline-comments': 'error',
    'no-negated-condition': 'error',
    'no-underscore-dangle': 'off',
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
    'quote-props': ['error', 'consistent-as-needed', {keywords: true}],
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: false
      }
    }],
    'semi-spacing': ['error', {
      before: false,
      after: false
    }],
    'sort-vars': 'error',
    'space-before-function-paren': ['error', 'never'],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    'wrap-regex': 'error'
  }
};
