module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.spec.js', '**/*.test.js', '**/tests-*.js', '**/*.spec.ts', '**/*.test.ts', '**/tests-*.ts'],
        peerDependencies: false,
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
