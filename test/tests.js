'use strict';

const should = require('should');

const isPlainObj = require('is-plain-obj');
const eslintConfig = require('../index.js');
const lint = require('./helper/testHelper.js');

describe('eslint config tests', () => {
  context('eslint object', () => {
    it('should be an object', () => {
      isPlainObj(eslintConfig).should.equal(true);
    });
  });

  context('parserOptions', () => {
    it('should be an object', () => {
      isPlainObj(eslintConfig.parserOptions).should.equal(true);
    });
  });

  context('env', () => {
    it('should be an array', () => {
      isPlainObj(eslintConfig.env).should.equal(true);
    });
  });

  context('rules', () => {
    it('should be an object', () => {
      isPlainObj(eslintConfig.rules).should.equal(true);
    });
  });

  context('run eslint and make sure it runs', () => {
    it('eslint should run without failing', () => {
      const code = '\'use strict\';\nconsole.log("doh, I used the wrong quotes");\n';
      const expectedErrorLineNum = 2;
      const expectedErrorColumnNum = 13;
      const errors = lint(code, eslintConfig);
      const error = errors[0];

      error.ruleId.should.equal('quotes');
      error.line.should.equal(expectedErrorLineNum);
      error.column.should.equal(expectedErrorColumnNum);
      error.source.should.equal('console.log("doh, I used the wrong quotes");');
    });
  });
});
