'use strict';

module.exports = {
  rules: {
    'no-constant-condition': 'error',
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false
    }],
    'no-prototype-builtins': 'off',
    'require-atomic-updates': 'error',
    'valid-jsdoc': 'error'
  }
};
