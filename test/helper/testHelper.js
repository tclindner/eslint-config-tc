const eslint = require('eslint');
const tempWrite = require('temp-write');

module.exports = function lint(code, config) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(config))
  });

  return linter.executeOnText(code).results[0].messages;
};
