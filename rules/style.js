// Style rules that are NOT formatting (Prettier handles formatting).
export default {
  rules: {
    // require camel case names
    camelcase: 'error',

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],

    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // requires function names to match the name of the variable or property to which they are
    // assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],

    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    'func-names': 'warn',

    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': ['error', 'expression'],

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    'id-denylist': 'off',

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 'off',

    // require identifiers to match the provided regular expression
    'id-match': 'off',

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': ['error', {position: 'above'}],

    // enforces empty lines around comments
    'lines-around-comment': 'off',

    // Require or disallow logical assignment logical operator shorthand
    // https://eslint.org/docs/latest/rules/logical-assignment-operators
    'logical-assignment-operators': [
      'off',
      'always',
      {
        enforceForIfStatements: true,
      },
    ],

    // specify the maximum depth that blocks can be nested
    'max-depth': ['off', 4],

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': 'error',

    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': ['error', 4],

    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['error', 6],

    // specify the maximum number of statement allowed in a function
    'max-statements': ['error', 25],

    // require a capital letter for constructors
    'new-cap': 'error',

    // disallow use of the Array constructor
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // disallow comments inline after code
    'no-inline-comments': 'error',

    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // disallow un-paren'd mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [
      'error',
      {
        // the list of arithmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||'],
        ],
        allowSamePrecedence: false,
      },
    ],

    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ['error'],

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'error',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow calls to the Object constructor
    // https://eslint.org/docs/rules/no-object-constructor
    'no-object-constructor': 'error',

    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // disallow the use of ternary operators
    'no-ternary': 'off',

    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', {defaultAssignment: false}],

    // allow just one var statement per function
    'one-var': ['error', 'never'],

    // require assignment operator shorthand where possible or prohibit it entirely
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
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
      {blankLine: 'any', prev: 'cjs-import', next: 'cjs-import'},
    ],

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // requires object keys to be sorted
    'sort-keys': ['off', 'asc', {caseSensitive: false, natural: true}],

    // sort variables within the same declaration block
    'sort-vars': 'off',

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          // space here to support sprockets directives, slash for TS /// comments
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          // space here to support sprockets directives and flow comment types
          markers: ['=', '!', ':', '::'],
          balanced: true,
        },
      },
    ],

    // require or disallow the Unicode Byte Order Mark
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],
  },
};
