module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    'arrow-parens': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'function-paren-newline': 'off',
  },
  ignorePatterns: ['webpack/**/*.js', 'build/**/*.js', 'dist/**/*.js'],
};
