function setTypescriptEslintRule(rule, options) {
  return {
    [rule]: 'off',
    [`@typescript-eslint/${rule}`]: options
  }
}

const rules = {
  '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/explicit-member-accessibility': 'off', // TODO:
  '@typescript-eslint/member-naming': [
    'warn',
    {
      private: '^_'
    }
  ],
  '@typescript-eslint/member-ordering': 'error',
  '@typescript-eslint/no-base-to-string': 'warn',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extraneous-class': 'warn',
  '@typescript-eslint/no-floating-promises': 'warn',
  '@typescript-eslint/no-for-in-array': 'warn',
  ...setTypescriptEslintRule('no-implied-eval', 'error'),
  '@typescript-eslint/no-misused-promises': [
    'warn',
    {
      checksConditionals: true,
      checksVoidReturn: true
    }
  ],
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
  '@typescript-eslint/no-type-alias': [
    'error',
    {
      allowAliases: 'always',
      allowCallbacks: 'always',
      allowConditionalTypes: 'always',
      allowConstructors: 'never',
      allowLiterals: 'in-unions-and-intersections',
      allowMappedTypes: 'always',
      allowTupleTypes: 'always'
    }
  ],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unused-vars-experimental': 'error',
  ...setTypescriptEslintRule('no-useless-constructor', 'error'),
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-for-of': 'warn',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'warn',
  '@typescript-eslint/prefer-nullish-coalescing': 'warn',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': 'error',
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allowNumber: true,
      allowBoolean: true
    }
  ],
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],
  '@typescript-eslint/strict-boolean-expressions': 'warn',
  '@typescript-eslint/switch-exhaustiveness-check': 'warn',
  '@typescript-eslint/unified-signatures': 'warn'
}

module.exports = {
  extends: [
    '@dacio/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint'
  ],
  rules
}
