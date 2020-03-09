function setTypeScriptRule(rule, options) {
  return {
    [rule]: 'off',
    [`@typescript-eslint/${rule}`]: options
  }
}

const rules = {
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/array-type.md
  '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/await-thenable.md
  '@typescript-eslint/await-thenable': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
  // '@typescript-eslint/ban-ts-comment': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
  // '@typescript-eslint/ban-ts-ignore': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/ban-types.md
  // '@typescript-eslint/ban-types': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/brace-style.md
  // '@typescript-eslint/brace-style': 'off', // Prettier
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/camelcase.md
  // '@typescript-eslint/camelcase': 'off',
  ...setTypeScriptRule('camelcase', 'error'),
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/class-name-casing.md
  '@typescript-eslint/class-name-casing': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/comma-spacing.md
  // '@typescript-eslint/comma-spacing': 'off', // Prettier
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never'
    }
  ],
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/default-param-last.md
  // '@typescript-eslint/default-param-last': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
  '@typescript-eslint/explicit-function-return-type': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
  '@typescript-eslint/explicit-member-accessibility': 'off', // TODO:
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
  // '@typescript-eslint/explicit-module-boundary-types': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
  // '@typescript-eslint/func-call-spacing': 'off', // Prettier
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
  // '@typescript-eslint/generic-type-naming': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/indent.md
  // '@typescript-eslint/indent': 'off', // Prettier
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
  '@typescript-eslint/interface-name-prefix': [
    'error',
    {
      prefixWithI: 'never'
    }
  ],
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
  // '@typescript-eslint/member-delimiter-style': 'off', // Prettier
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/member-naming.md
  '@typescript-eslint/member-naming': [
    'warn',
    {
      private: '^_'
    }
  ],
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/member-ordering.md
  '@typescript-eslint/member-ordering': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/naming-convention.md
  // '@typescript-eslint/naming-convention': 'off', // TODO: Determine preferences
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
  // '@typescript-eslint/no-array-constructor': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
  '@typescript-eslint/no-base-to-string': 'warn',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
  // '@typescript-eslint/no-dupe-class-members': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
  // '@typescript-eslint/no-dynamic-delete': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-empty-function.md
  // '@typescript-eslint/no-empty-function': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
  '@typescript-eslint/no-empty-interface': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
  // '@typescript-eslint/no-explicit-any': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
  // '@typescript-eslint/no-extra-parens': 'off', // Prettier
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
  // '@typescript-eslint/no-extra-semi': 'off', // Prettier
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
  '@typescript-eslint/no-extraneous-class': 'warn',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
  '@typescript-eslint/no-floating-promises': 'warn',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
  '@typescript-eslint/no-for-in-array': 'warn',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
  // '@typescript-eslint/no-implied-eval': 'off',
  ...setTypeScriptRule('no-implied-eval', 'error'),
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
  '@typescript-eslint/no-inferrable-types': 'warn',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
  // '@typescript-eslint/no-magic-numbers': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-misused-new.md
  '@typescript-eslint/no-misused-new': 'warn',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
  '@typescript-eslint/no-misused-promises': [
    'warn',
    {
      checksConditionals: true,
      checksVoidReturn: true
    }
  ],
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-namespace.md
  '@typescript-eslint/no-namespace': 'off', // TODO:
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
  // '@typescript-eslint/no-non-null-assertion': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
  // '@typescript-eslint/no-parameter-properties': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-require-imports.md
  // '@typescript-eslint/no-require-imports': 'off', // eslint-plugin-import
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-this-alias.md
  '@typescript-eslint/no-this-alias': [
    'error',
    {
      allowDestructuring: true
    }
  ],
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
  // '@typescript-eslint/no-throw-literal': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-type-alias.md
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
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
  '@typescript-eslint/no-unnecessary-condition': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
  // '@typescript-eslint/no-unnecessary-qualifier': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
  // '@typescript-eslint/no-unsafe-call': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
  // '@typescript-eslint/no-unsafe-member-access': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
  // '@typescript-eslint/no-unsafe-return': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-untyped-public-signature.md
  // '@typescript-eslint/no-untyped-public-signature': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
  // '@typescript-eslint/no-unused-expressions': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
  // '@typescript-eslint/no-unused-vars': 'off',
  ...setTypeScriptRule('no-unused-vars', 'error'),
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
  '@typescript-eslint/no-unused-vars-experimental': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
  // '@typescript-eslint/no-use-before-define': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
  // '@typescript-eslint/no-useless-constructor': 'off',
  ...setTypeScriptRule('no-useless-constructor', 'error'),
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/no-var-requires.md
  // '@typescript-eslint/no-var-requires': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
  '@typescript-eslint/prefer-as-const': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
  '@typescript-eslint/prefer-for-of': 'warn',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
  '@typescript-eslint/prefer-function-type': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/prefer-includes.md
  '@typescript-eslint/prefer-includes': 'warn',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
  '@typescript-eslint/prefer-namespace-keyword': 'off', // TODO:
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
  '@typescript-eslint/prefer-nullish-coalescing': 'warn',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
  '@typescript-eslint/prefer-optional-chain': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
  // '@typescript-eslint/prefer-readonly': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
  // '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
  // '@typescript-eslint/prefer-regexp-exec': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/promise-function-async.md
  '@typescript-eslint/promise-function-async': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/quotes.md
  // '@typescript-eslint/quotes': 'off', // Prettier w/ config
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
  '@typescript-eslint/require-array-sort-compare': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/require-await.md
  // '@typescript-eslint/require-await': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
  '@typescript-eslint/restrict-plus-operands': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allowNumber: true,
      allowBoolean: true
    }
  ],
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/return-await.md
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/semi.md
  // '@typescript-eslint/semi': 'off', // Prettier
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
  // '@typescript-eslint/space-before-function-paren': 'off', // Prettier
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
  '@typescript-eslint/strict-boolean-expressions': [
    'warn',
    {
      allowNullable: true
    }
  ],
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
  '@typescript-eslint/switch-exhaustiveness-check': 'warn',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
  '@typescript-eslint/triple-slash-reference': 'error',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
  // '@typescript-eslint/type-annotation-spacing': 'off', // Prettier
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/typedef.md
  '@typescript-eslint/typedef': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/unbound-method.md
  '@typescript-eslint/unbound-method': 'off',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/unified-signatures.md
  '@typescript-eslint/unified-signatures': 'warn'
}

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules
}
