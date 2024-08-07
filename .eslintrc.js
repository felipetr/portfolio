module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2021,
  },
  globals: {
    grecaptcha: true,
  },
  rules: {
    'no-plusplus': 'off',
    'brace-style': 'off',
    'no-console': 'off',
    'arrow-parens': 'off',
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': 'off',
    'quotes': 'off',
    'no-unused-vars': 'off',
    'func-names': 'off',
    'no-mixed-operators': 'off',
    'comma-dangle': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
  },
};
