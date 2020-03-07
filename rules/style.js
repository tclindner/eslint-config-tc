module.exports = {
  rules: {
    camelcase: 'error',
    'func-names': 'off',
    'func-style': ['error', 'expression'],
    'id-length': [
      'error',
      {
        min: 1,
        max: 40
      }
    ],
    'line-comment-position': ['error', {position: 'above'}],
    'max-depth': ['error', 4],
    'max-lines-per-function': 'error',
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 6],
    'max-statements': ['error', 25],
    'max-statements-per-line': ['error', {max: 1}],
    'new-cap': 'error',
    'no-inline-comments': 'error',
    'no-negated-condition': 'error',
    'no-underscore-dangle': 'off',
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
    'prefer-exponentiation-operator': 'error',
    'sort-vars': 'error',
    'spaced-comment': ['error', 'always']
  }
};
