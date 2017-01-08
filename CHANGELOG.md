# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added

### Changed

### Fixed

### Removed

## [1.4.0] - 2017-01-08
### Added
Added one new rules from ESLint v3.12.0.

* [no-await-in-loop](http://eslint.org/docs/rules/no-await-in-loop)

Added one new rules from ESLint v3.11.0.

* [require-await](http://eslint.org/docs/rules/require-await)

## [1.3.0] - 2016-11-20
### Added
Added one new rules from ESLint v3.10.0.

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
