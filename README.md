# eslint-config-tc

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for JavaScript projects


[![license](https://img.shields.io/github/license/tclindner/eslint-config-tc.svg?maxAge=2592000&style=flat-square)](https://github.com/tclindner/eslint-config-tc/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/eslint-config-tc.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/eslint-config-tc)
[![Travis](https://img.shields.io/travis/tclindner/eslint-config-tc.svg?maxAge=2592000?style=flat-square)](https://travis-ci.org/tclindner/eslint-config-tc)
[![Dependency Status](https://david-dm.org/tclindner/eslint-config-tc.svg?style=flat-square)](https://david-dm.org/tclindner/eslint-config-tc)
[![devDependency Status](https://david-dm.org/tclindner/eslint-config-tc/dev-status.svg?style=flat-square)](https://david-dm.org/tclindner/eslint-config-tc#info=devDependencies)


## What is eslint-config-tc?

Shared configuration for ESLint. Follow the instructions below to easily include this configuration in another project without having to duplicate the file.

## How do I install it?

First thing first, let's make sure you have the necessary pre-requisites.

### System Dependencies

#### Node

* [Node.js](https://nodejs.org/) - v6.0.0+
* [npm](http://npmjs.com) - v3.0.0+

### Command

```bash
npm install eslint-config-tc --save-dev
```

## Usage

Add the following to your `.eslintrc.json` file:

```json
{
  "extends": "eslint-config-tc"
}
```

If you need to override a rule, your `.eslintrc.json` file should look like the example below. All shared rules will be used, but `eqeqeq` will be turned off.

```json
{
  "extends": "eslint-config-tc",
  "rules": {
    "eqeqeq": "off"
  }
}
```

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md).

## Release History

Please see [CHANGELOG.md](CHANGELOG.md).

## License

Copyright (c) 2016-2018 Thomas Lindner. Licensed under the MIT license.
