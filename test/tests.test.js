const {describe, test, expect} = require('@jest/globals');
const {ESLint} = require('eslint');
const isPlainObj = require('is-plain-obj');
const eslintConfig = require('../index');

describe('eslint config tests', () => {
  describe('eslint object', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig)).toBe(true);
    });
  });

  describe('parserOptions', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig.parserOptions)).toBe(true);
    });
  });

  describe('env', () => {
    test('should be an array', () => {
      expect(isPlainObj(eslintConfig.env)).toBe(true);
    });
  });

  describe('rules', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig.rules)).toBe(true);
    });
  });

  describe('run eslint and make sure it runs', () => {
    test('eslint should run without failing', async () => {
      const code = 'console.log("doh, I used the wrong quotes");\n';
      const expectedErrorLineNumber = 1;
      const expectedErrorColumnNumber = 1;
      const linter = new ESLint();

      const results = await linter.lintText(code);
      const errorMessages = results[0].messages;
      const error = errorMessages[0];

      expect(error.ruleId).toStrictEqual('no-console');
      expect(error.line).toStrictEqual(expectedErrorLineNumber);
      expect(error.column).toStrictEqual(expectedErrorColumnNumber);
      expect(error.message).toStrictEqual('Unexpected console statement.');
    });
  });
});
