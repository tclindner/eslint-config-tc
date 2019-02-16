const eslint = require('eslint');
const isPlainObj = require('is-plain-obj');
const eslintConfig = require('../index.js');

describe('eslint config tests', () => {
  describe('eslint object', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig)).toBeTruthy();
    });
  });

  describe('parserOptions', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig.parserOptions)).toBeTruthy();
    });
  });

  describe('env', () => {
    test('should be an array', () => {
      expect(isPlainObj(eslintConfig.env)).toBeTruthy();
    });
  });

  describe('rules', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig.rules)).toBeTruthy();
    });
  });

  describe('run eslint and make sure it runs', () => {
    test('eslint should run without failing', () => {
      const code = 'console.log("doh, I used the wrong quotes");\n';
      const expectedErrorLineNum = 1;
      const expectedErrorColumnNum = 1;
      const linter = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: eslintConfig
      });

      const errors = linter.executeOnText(code).results[0].messages;
      const error = errors[0];

      expect(error.ruleId).toStrictEqual('no-console');
      expect(error.line).toStrictEqual(expectedErrorLineNum);
      expect(error.column).toStrictEqual(expectedErrorColumnNum);
      expect(error.message).toStrictEqual('Unexpected console statement.');
    });
  });
});
