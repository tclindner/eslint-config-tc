module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/test/*.ts'],
        peerDependencies: false,
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
