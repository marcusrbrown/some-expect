/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['amex/prettier', 'plugin:import/typescript'],

  plugins: ['@typescript-eslint'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },

  env: {
    node: true,
  },

  globals: {
    chai: 'readonly',
    expect: 'readonly',
  },

  ignorePatterns: ['lib', '.eslintrc.js'],

  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },

  rules: {
    'global-require': 'off',

    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': 'off',
  },

  overrides: [
    {
      files: ['src/chai.ts', './src/jest.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
