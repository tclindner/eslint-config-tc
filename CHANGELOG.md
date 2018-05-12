# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added

### Changed

### Fixed

### Removed

## [3.0.0] - 2018-05-12
### Added
* Disabled `id-length`, `newline-after-var`, and `no-process-env` for tests.
* Added `**/tests-*.js` as a test override pattern.

### Changed
*

### Removed
* Dropped Node 4 and 5 support

## [2.4.0] - 2018-05-05
### Changed
* `no-magic-numbers` - disabled for tests

## [2.3.0] - 2017-10-29
### Changed
* `padding-line-between-statements` - multiple exports don't need new lines.
* `array-element-newline` - disabled for tests
* `array-bracket-newline` - disabled for tests

## [2.2.0] - 2017-10-29
### Added

Added one new rule from ESLint v4.9.0.
* [lines-between-class-members](http://eslint.org/docs/rules/lines-between-class-members)

Added one new rule from ESLint v4.6.0.
* [function-paren-newline](http://eslint.org/docs/rules/function-paren-newline)

Added one new rule from ESLint v4.2.0.
* [getter-return](http://eslint.org/docs/rules/getter-return)

Added four new rules from ESLint v4.0.0-beta.0
* [semi-style](https://eslint.org/docs/4.0.0/rules/semi-style)
* [padding-line-between-statements](https://eslint.org/docs/4.0.0/rules/padding-line-between-statements)
* [for-direction](https://eslint.org/docs/4.0.0/rules/for-direction)
* [switch-colon-spacing](https://eslint.org/docs/4.0.0/rules/switch-colon-spacing)

Added one new rule from ESLint v4.0.0-alpha.0
* [no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor)

Added one new rule from ESLint v3.17.0
* [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)

### Removed
* [lines-around-directive](https://eslint.org/docs/rules/lines-around-directive)
* [newline-after-var](https://eslint.org/docs/rules/newline-after-var)
* [newline-before-return](https://eslint.org/docs/rules/newline-before-return)

## [2.1.0] - 2017-07-30
### Added
* `object-curly-newline` to test file override

## [2.0.0] - 2017-07-30
### Added
* [class-methods-use-this](http://eslint.org/docs/rules/class-methods-use-this)
* [func-call-spacing](http://eslint.org/docs/rules/func-call-spacing)
* [jsx-quotes](http://eslint.org/docs/rules/jsx-quotes)
* [no-console](http://eslint.org/docs/rules/no-console)
* [no-debugger](http://eslint.org/docs/rules/no-debugger)
* [no-else-return](http://eslint.org/docs/rules/no-else-return)
* [no-new](http://eslint.org/docs/rules/no-new)
* [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally)
* [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)
* Add override support for test files

### Changed
* `arrow-body-style` to `as-needed`
* `dot-notation` to allow keywords.
* `max-nested-callbacks` to 4
* `newline-per-chained-call` to 4
* `no-extra-parens` to allow exceptions for nested binary expressions and returns
* `no-multiple-empty-lines` with EOF settings for 1 line
* `object-curly-newline` to account for destructuring and add multiline support
* `object-property-newline` with multiline support
* `quote-props` to be consistent only when needed
* `quote` to avoid escaping
* `valid-typeof` so it requires string literals

### Removed
* [sort-imports](http://eslint.org/docs/rules/sort-imports)

## [1.5.0] - 2017-02-18
### Added
Added two new rules from ESLint v3.14.0.

* [no-multi-assign](http://eslint.org/docs/rules/no-multi-assign)
* [prefer-promise-reject-errors](http://eslint.org/docs/rules/prefer-promise-reject-errors)

## [1.4.0] - 2017-01-08
### Added
Added one new rule from ESLint v3.12.0.

* [no-await-in-loop](http://eslint.org/docs/rules/no-await-in-loop)

Added one new rule from ESLint v3.11.0.

* [require-await](http://eslint.org/docs/rules/require-await)

## [1.3.0] - 2016-11-20
### Added
Added one new rule from ESLint v3.10.0.

* [no-return-await](http://eslint.org/docs/rules/no-return-await)

Added one new rule from ESLint v3.9.0.

* [no-useless-return](http://eslint.org/docs/rules/no-useless-return)

## [1.2.0] - 2016-09-25
### Added
Added two new rules from ESLint v3.5.0.

* [line-comment-position](http://eslint.org/docs/rules/line-comment-position)
* [lines-around-directive](http://eslint.org/docs/rules/lines-around-directive)

Added one new rule from ESLint v3.4.0.

* [symbol-description](http://eslint.org/docs/rules/symbol-description)

Added one new rule from ESLint v3.3.0.

* [no-template-curly-in-string](http://eslint.org/docs/rules/no-template-curly-in-string)

Added one new rule from ESLint v3.2.0.

* [no-tabs](http://eslint.org/docs/rules/no-tabs) - Adds `disallowTabs` compatibility from JSCS.

### Changed
* Updated `no-native-reassign` => `no-global-assign` and `no-negated-in-lhs` => `no-unsafe-negation` because of [deprecation notice](http://eslint.org/blog/2016/08/eslint-v3.3.0-released)

## [1.1.0] - 2016-07-25
### Added
Added four new rules from ESLint v2.12.0.

* [max-lines](http://eslint.org/docs/rules/max-lines) - Adds `maximumNumberOfLines` compatibility from JSCS.
* [no-mixed-operators](http://eslint.org/docs/rules/no-mixed-operators) - Also required a change to `no-extra-parens`. Please see change section.
* [object-curly-newline](http://eslint.org/docs/rules/object-curly-newline) - Adds `requirePaddingNewLinesInObjects` and `disallowPaddingNewLinesInObjects` compatibility from JSCS.
* [rest-spread-spacing](http://eslint.org/docs/rules/rest-spread-spacing)

### Changed
* [no-extra-parens](http://eslint.org/docs/rules/no-extra-parens) - Turned the `conditionalAssign` option off.

## [1.0.0] - 2016-07-17
- First release
