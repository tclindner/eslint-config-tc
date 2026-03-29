# eslint-config-tc

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for JavaScript projects

[![license](https://img.shields.io/github/license/tclindner/eslint-config-tc.svg?maxAge=2592000&style=flat-square)](https://github.com/tclindner/eslint-config-tc/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/eslint-config-tc.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/eslint-config-tc)
![ci](https://github.com/tclindner/eslint-config-tc/workflows/ci/badge.svg?branch=master)

## What is eslint-config-tc?

Shared configuration for ESLint. Follow the instructions below to easily include this configuration in another project without having to duplicate the file.

## How do I install it?

First thing first, let's make sure you have the necessary pre-requisites.

### System Dependencies

#### Node

* [Node.js](https://nodejs.org/) - v20.0.0+
* [npm](http://npmjs.com) - v10.0.0+

### Command

```bash
npx install-peerdeps --dev eslint-config-tc
```

> @eslint/js, eslint, eslint-plugin-import-x, eslint-plugin-jest, eslint-plugin-prettier, eslint-plugin-unicorn, and prettier are peer dependencies and must be installed.

## Usage

This package exports a flat config array for use with ESLint 10+. Create an `eslint.config.mjs` file in your project root:

```js
import tcConfig from 'eslint-config-tc';

export default [
  ...tcConfig,
];
```

If you need to override a rule, add a config object after spreading:

```js
import tcConfig from 'eslint-config-tc';

export default [
  ...tcConfig,
  {
    rules: {
      eqeqeq: 'off',
    },
  },
];
```

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md).

## Release History

Please see [CHANGELOG.md](CHANGELOG.md).

## License

Copyright (c) 2016-2026 Thomas Lindner. Licensed under the MIT license.
