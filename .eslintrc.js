/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['amex/prettier'],
  env: {
    node: true,
  },
  globals: {
    chai: 'readonly',
  },

  rules: {
    'global-require': 'off',

    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-underscore-dangle': 'off',
  },
};
