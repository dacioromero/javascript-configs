/* eslint-disable max-lines */
const eslintRules = {
  'accessor-pairs': 'error',
  'array-callback-return': 'error',
  complexity: 'off',
  curly: 'off', // Prettier w/ config
  'default-case': 'error',
  'dot-notation': 'error',
  eqeqeq: ['error', 'smart'],
  'grouped-accessor-pairs': 'error',
  'no-caller': 'error',
  'no-constructor-return': 'error',
  'no-else-return': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-iterator': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-proto': 'error',
  'no-return-await': 'error',
  'no-script-url': 'error',
  'no-self-compare': 'error',
  'no-useless-call': 'error',
  'no-useless-concat': 'error',
  'prefer-regex-literals': 'error',
  radix: 'error',
  yoda: [
    'error',
    'never',
    {
      exceptRange: true
    }
  ],
  'no-undefined': 'error',
  'no-path-concat': 'error',
  'no-sync': [
    'error',
    {
      allowAtRootLevel: true
    }
  ],
  camelcase: 'error',
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  indent: 'off', // Prettier
  'lines-between-class-members': ['error', 'always'],
  'max-depth': 'error',
  'max-lines': 'warn',
  'max-statements-per-line': ['error', { max: 1 }],
  'no-array-constructor': 'error',
  'no-lonely-if': 'error',
  'no-mixed-operators': 'error', // Prettier w/ config
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new-object': 'error',
  'no-unneeded-ternary': 'error',
  'one-var': ['error', 'never'],
  'operator-assignment': ['error', 'always'],
  'prefer-exponentiation-operator': 'error',
  quotes: 'off', // Prettier w/ config
  semi: 'off', // Prettier
  'spaced-comment': ['error', 'always'],
  'no-useless-constructor': 'error'
}

const importRules = {
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-anonymous-default-export': 'error',
  'import/no-deprecated': 'warn',
  'import/no-extraneous-dependencies': 'warn',
  'import/no-mutable-exports': 'error',
  'import/no-named-default': 'error',
  'import/no-self-import': 'error',
  'import/no-unused-modules': [
    'warn',
    {
      missingExports: true,
      unusedExports: true
    }
  ],
  'import/no-useless-path-segments': 'error',
  'import/order': [
    'off',
    {
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc'
      }
    }
  ]
}

const rules = {
  ...eslintRules,
  ...importRules
}

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  rules
}
