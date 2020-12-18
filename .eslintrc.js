/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'amex',
    'airbnb-typescript',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/unicorn',
    'prettier/@typescript-eslint',
  ],

  plugins: ['prettier'],

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
  },s
};
