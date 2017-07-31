'use strict';

const chai = require('chai');
const isPlainObj = require('is-plain-obj');
const eslintConfig = require('../index.js');
const lint = require('./helper/testHelper.js');

const should = chai.should();

describe('eslint config tests', () => {
  context('eslint object', () => {
    it('should be an object', () => {
      isPlainObj(eslintConfig).should.be.true;
    });
  });

  context('parserOptions', () => {
    it('should be an object', () => {
      isPlainObj(eslintConfig.parserOptions).should.be.true;
    });
  });

  context('env', () => {
    it('should be an array', () => {
      isPlainObj(eslintConfig.env).should.be.true;
    });
  });

  context('rules', () => {
    it('should be an object', () => {
      isPlainObj(eslintConfig.rules).should.be.true;
    });
  });

  context('run eslint and make sure it runs', () => {
    it('eslint should run without failing', () => {
      const code = '\'use strict\';\n\nconsole.log("doh, I used the wrong quotes");\n';
      const expectedErrorLineNum = 3;
      const expectedErrorColumnNum = 1;
      const errors = lint(code, eslintConfig);
      const error = errors[0];

      error.ruleId.should.equal('no-console');
      error.line.should.equal(expectedErrorLineNum);
      error.column.should.equal(expectedErrorColumnNum);
      error.source.should.equal('console.log("doh, I used the wrong quotes");');
    });
  });
});
