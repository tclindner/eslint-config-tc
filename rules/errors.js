/* eslint id-length: 'off' */

module.exports = {
  rules: {
    'no-constant-condition': 'error',
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,

      // delegate to eslint-plugin-react
      ignoreJSX: 'all',
      enforceForArrowConditionals: false
    }],
    'no-prototype-builtins': 'off',
    'require-atomic-updates': 'error',
    'valid-jsdoc': 'error'
  }
};
