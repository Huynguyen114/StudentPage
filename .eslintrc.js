module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'linebreak-style': [2, 'unix'],
    quotes: [2, 'single'],
    semi: [2, 'always'],
    curly: [2, 'all'],
    camelcase: [
      2,
      {
        properties: 'always'
      }
    ],
    eqeqeq: [2, 'smart'],
    'prettier/prettier': [0],
    'one-var-declaration-per-line': [2, 'always'],
    'new-cap': 2,
    'no-case-declarations': 0,
    'no-shadow': 0,
    'react/jsx-filename-extension': 0,
    'react/sort-comp': 0,
    'import/order': 0,
    'react/prop-types': 0,
    'react/jsx-fragments': 0,
    'react/destructuring-assignment': 0,
    'linebreak-style': 0,
    'func-names': 0,
    'no-use-before-define': 0,
    'no-alert': 0,
    'no-useless-escape': 0
  }
};
