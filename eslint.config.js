import config from './index.js';

export default [
  ...config,
  {
    files: ['**/*.js', '**/*.ts'],
    rules: {
      // ESM requires .js extensions for this repo
      'import-x/extensions': 'off',
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
];
