module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'no-implicit-dependencies': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'allowExpressions': 0,
    allowTypedFunctionExpressions: 0
  }
};
