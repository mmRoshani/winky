const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,
  modules: {
    auto: true,
    graphql: false,
    typescript: { resolverProject: './tsconfig.json', parserProject: './tsconfig.eslint.json' },
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-extraneous-class': 'off',
    'max-params': ['warn', 8],
    'fp/no-mutating-assign': 'off',
    'fp/no-let': 'off',
    '@typescript-eslint/naming-convention': 'off',
  },
  overrides: [
    {
      files: ['./libs/**/*.ts'],
      rules: {
        'import/no-cycle': 'off',
      },
    },
    {
      files: ['./libs/**/*.config.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
});
