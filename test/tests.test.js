import {describe, test, expect} from '@jest/globals';
import {ESLint} from 'eslint';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import eslintConfig from '../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('eslint config tests', () => {
  describe('eslint config', () => {
    test('should be an array', () => {
      expect(Array.isArray(eslintConfig)).toBe(true);
    });

    test('array elements should be objects', () => {
      const configObjects = eslintConfig.filter((item) => typeof item === 'object' && item !== null);

      expect(configObjects.length).toBeGreaterThan(0);
      expect(configObjects.every((config) => typeof config === 'object')).toBe(true);
    });
  });

  describe('run eslint and make sure it runs', () => {
    test('eslint should run without failing', async () => {
      const code = 'console.log("doh, I used the wrong quotes");\n';
      const expectedErrorLineNumber = 1;
      const expectedErrorColumnNumber = 1;
      const linter = new ESLint({
        overrideConfigFile: path.resolve(__dirname, '..', 'eslint.config.js'),
      });

      const results = await linter.lintText(code, {filePath: 'test-file.js'});
      const errorMessages = results[0].messages;
      const error = errorMessages[0];

      expect(error.ruleId).toStrictEqual('no-console');
      expect(error.line).toStrictEqual(expectedErrorLineNumber);
      expect(error.column).toStrictEqual(expectedErrorColumnNumber);
      expect(error.message).toStrictEqual('Unexpected console statement.');
    });
  });
});
