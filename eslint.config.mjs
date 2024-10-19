import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Enforce single quotes
      'quotes': ['error', 'single'],
      // Require trailing commas in objects and arrays
      'comma-dangle': ['error', 'always-multiline'],
      // Other Airbnb base rules can be added here
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
  pluginJs.configs.recommended,
];