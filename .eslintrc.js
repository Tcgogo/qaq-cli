module.exports = {
  extends: ['@antfu/eslint-config-ts', 'prettier'],
  rules: {
    '@typescript-eslint/semi': ['error', 'always'],
    'antfu/if-newline': 0,
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'unicorn/prefer-node-protocol': 0,
  },
  plugins: ['prettier'],
  globals: {
    window: true,
  },
};
