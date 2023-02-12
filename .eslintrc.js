module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    indent: [2, 4],
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    // don't know if i should shut off this rule
    'import/no-unresolved': 'off',
    'react/function-component-definition': 'off',
    'no-unused-vars': 1,
    'react/require-default-props': 'off',
    // don't know if i should shut off this rule
    'import/no-extraneous-dependencies': 1,
    'max-len': [1, { ignoreComments: true, code: 100 }],
    'no-underscore-dangle': 'off',
    // used for ui kit
    'react/jsx-props-no-spreading': 1,
    // TODO: fix this rules
    'no-redeclare': 1,
    '@typescript-eslint/no-redeclare': 1,
    'i18next/no-literal-string': [1, { markupOnly: true }],
  },
  globals: {
    React: true,
    __IS_DEV__: true,
  },
};
