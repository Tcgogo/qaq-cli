module.exports = {
  extends: ['@antfu/eslint-config-ts', 'prettier'],
  rules: {
    '@typescript-eslint/semi': ['error', 'always'],
    'antfu/if-newline': 0,
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
  },
  plugins: ['prettier'],
  globals: {
    window: true,
  },
};
