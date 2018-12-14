module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': [2, 'only-multiline'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: [2, 'never'],
    'no-unused-vars': ['warn'],
    'no-console': 0,
    'no-debugger': 1,
    'no-undef': 2,
    'react/no-unused-prop-types': 0
  },
};
