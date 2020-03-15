/* eslint-disable max-lines */
const baseRules = {
  // Possible Errors
  // https://eslint.org/docs/rules/for-direction
  'for-direction': 'error',
  // https://eslint.org/docs/rules/getter-return
  'getter-return': 'error',
  // https://eslint.org/docs/rules/no-async-promise-executor
  'no-async-promise-executor': 'error',
  // https://eslint.org/docs/rules/no-await-in-loop
  // 'no-await-in-loop': 'off',
  // https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'error',
  // https://eslint.org/docs/rules/no-cond-assign
  'no-cond-assign': 'error',
  // https://eslint.org/docs/rules/no-console
  // 'no-console': 'off',
  // https://eslint.org/docs/rules/no-constant-condition
  'no-constant-condition': 'error',
  // https://eslint.org/docs/rules/no-control-regex
  'no-control-regex': 'error',
  // https://eslint.org/docs/rules/no-debugger
  'no-debugger': 'error',
  // https://eslint.org/docs/rules/no-dupe-args
  'no-dupe-args': 'error',
  // https://eslint.org/docs/rules/no-dupe-else-if
  'no-dupe-else-if': 'error',
  // https://eslint.org/docs/rules/no-dupe-keys
  'no-dupe-keys': 'error',
  // https://eslint.org/docs/rules/no-duplicate-case
  'no-duplicate-case': 'error',
  // https://eslint.org/docs/rules/no-empty
  'no-empty': 'error',
  // https://eslint.org/docs/rules/no-empty-character-class
  'no-empty-character-class': 'error',
  // https://eslint.org/docs/rules/no-ex-assign
  'no-ex-assign': 'error',
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',
  // https://eslint.org/docs/rules/no-extra-parens
  // 'no-extra-parens': 'off', // Prettier
  // https://eslint.org/docs/rules/no-extra-semi
  // 'no-extra-semi': 'off', // Prettier
  // https://eslint.org/docs/rules/no-func-assign
  'no-func-assign': 'error',
  // https://eslint.org/docs/rules/no-import-assign
  'no-import-assign': 'error',
  // https://eslint.org/docs/rules/no-inner-declarations
  'no-inner-declarations': 'error',
  // https://eslint.org/docs/rules/no-invalid-regexp
  'no-invalid-regexp': 'error',
  // https://eslint.org/docs/rules/no-irregular-whitespace
  'no-irregular-whitespace': 'error',
  // https://eslint.org/docs/rules/no-misleading-character-class
  'no-misleading-character-class': 'error',
  // https://eslint.org/docs/rules/no-obj-calls
  'no-obj-calls': 'error',
  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'error',
  // https://eslint.org/docs/rules/no-regex-spaces
  'no-regex-spaces': 'error',
  // https://eslint.org/docs/rules/no-setter-return
  'no-setter-return': 'error',
  // https://eslint.org/docs/rules/no-sparse-arrays
  'no-sparse-arrays': 'error',
  // https://eslint.org/docs/rules/no-template-curly-in-string
  // 'no-template-curly-in-string': 'off',
  // https://eslint.org/docs/rules/no-unexpected-multiline
  'no-unexpected-multiline': 'error', // Prettier w/ config
  // https://eslint.org/docs/rules/no-unreachable
  'no-unreachable': 'error',
  // https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': 'error',
  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': 'warn',
  // https://eslint.org/docs/rules/no-useless-backreference
  // 'no-useless-backreference': 'off',
  // https://eslint.org/docs/rules/require-atomic-updates
  // 'require-atomic-updates': 'off',
  // https://eslint.org/docs/rules/use-isnan
  'use-isnan': 'error',
  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': 'error',

  // Best Practices
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': 'error',
  // https://eslint.org/docs/rules/array-callback-return
  'array-callback-return': 'error',
  // https://eslint.org/docs/rules/block-scoped-var
  // 'block-scoped-var': 'off',
  // https://eslint.org/docs/rules/class-methods-use-this
  // 'class-methods-use-this': 'off',
  // https://eslint.org/docs/rules/complexity
  complexity: 'off',
  // https://eslint.org/docs/rules/consistent-return
  // 'consistent-return': 'off',
  // https://eslint.org/docs/rules/curly
  curly: 'off', // Prettier w/ config
  // https://eslint.org/docs/rules/default-case
  'default-case': 'error',
  // https://eslint.org/docs/rules/default-case-last
  // // 'default-case-last': 'off', // Not found
  // https://eslint.org/docs/rules/default-param-last
  // 'default-param-last': 'off',
  // https://eslint.org/docs/rules/dot-location
  // 'dot-location': 'off', // Prettier
  // https://eslint.org/docs/rules/dot-notation
  'dot-notation': 'error',
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ['error', 'smart'],
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': 'error',
  // https://eslint.org/docs/rules/guard-for-in
  // 'guard-for-in': 'off',
  // https://eslint.org/docs/rules/max-classes-per-file
  // 'max-classes-per-file': 'off',
  // https://eslint.org/docs/rules/no-alert
  // 'no-alert': 'off',
  // https://eslint.org/docs/rules/no-caller
  'no-caller': 'error',
  // https://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': 'error',
  // https://eslint.org/docs/rules/no-constructor-return
  'no-constructor-return': 'error',
  // https://eslint.org/docs/rules/no-div-regex
  // 'no-div-regex': 'off',
  // https://eslint.org/docs/rules/no-else-return
  'no-else-return': 'error',
  // https://eslint.org/docs/rules/no-empty-function
  // 'no-empty-function': 'off',
  // https://eslint.org/docs/rules/no-empty-pattern
  'no-empty-pattern': 'error',
  // https://eslint.org/docs/rules/no-eq-null
  // 'no-eq-null': 'off',
  // https://eslint.org/docs/rules/no-eval
  'no-eval': 'error',
  // https://eslint.org/docs/rules/no-extend-native
  'no-extend-native': 'error',
  // https://eslint.org/docs/rules/no-extra-bind
  'no-extra-bind': 'error',
  // https://eslint.org/docs/rules/no-extra-label
  // 'no-extra-label': 'off',
  // https://eslint.org/docs/rules/no-fallthrough
  'no-fallthrough': 'error',
  // https://eslint.org/docs/rules/no-floating-decimal
  // 'no-floating-decimal': 'off', // Prettier
  // https://eslint.org/docs/rules/no-global-assign
  'no-global-assign': 'error',
  // https://eslint.org/docs/rules/no-implicit-coercion
  'no-implicit-coercion': 'error',
  // https://eslint.org/docs/rules/no-implicit-globals
  'no-implicit-globals': 'error',
  // https://eslint.org/docs/rules/no-implied-eval
  'no-implied-eval': 'error',
  // https://eslint.org/docs/rules/no-invalid-this
  // 'no-invalid-this': 'off',
  // https://eslint.org/docs/rules/no-iterator
  'no-iterator': 'error',
  // https://eslint.org/docs/rules/no-labels
  // 'no-labels': 'off',
  // https://eslint.org/docs/rules/no-lone-blocks
  // 'no-lone-blocks': 'off',
  // https://eslint.org/docs/rules/no-loop-func
  // 'no-loop-func': 'off',
  // https://eslint.org/docs/rules/no-magic-numbers
  // 'no-magic-numbers': 'off',
  // https://eslint.org/docs/rules/no-multi-spaces
  // 'no-multi-spaces': 'off', // Prettier
  // https://eslint.org/docs/rules/no-multi-str
  // 'no-multi-str': 'off',
  // https://eslint.org/docs/rules/no-new
  // 'no-new': 'off',
  // https://eslint.org/docs/rules/no-new-func
  'no-new-func': 'error',
  // https://eslint.org/docs/rules/no-new-wrappers
  'no-new-wrappers': 'error',
  // https://eslint.org/docs/rules/no-octal
  'no-octal': 'error',
  // https://eslint.org/docs/rules/no-octal-escape
  // 'no-octal-escape': 'off',
  // https://eslint.org/docs/rules/no-param-reassign
  // 'no-param-reassign': 'off',
  // https://eslint.org/docs/rules/no-proto
  'no-proto': 'error',
  // https://eslint.org/docs/rules/no-redeclare
  'no-redeclare': 'error',
  // https://eslint.org/docs/rules/no-restricted-properties
  // 'no-restricted-properties': 'off',
  // https://eslint.org/docs/rules/no-return-assign
  // 'no-return-assign': 'off',
  // https://eslint.org/docs/rules/no-return-await
  'no-return-await': 'error',
  // https://eslint.org/docs/rules/no-script-url
  'no-script-url': 'error',
  // https://eslint.org/docs/rules/no-self-assign
  'no-self-assign': 'error',
  // https://eslint.org/docs/rules/no-self-compare
  'no-self-compare': 'error',
  // https://eslint.org/docs/rules/no-sequences
  // 'no-sequences': 'off',
  // https://eslint.org/docs/rules/no-throw-literal
  // 'no-throw-literal': 'off',
  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  // 'no-unmodified-loop-condition': 'off',
  // https://eslint.org/docs/rules/no-unused-expressions
  // 'no-unused-expressions': 'off',
  // https://eslint.org/docs/rules/no-unused-labels
  'no-unused-labels': 'error',
  // https://eslint.org/docs/rules/no-useless-call
  'no-useless-call': 'error',
  // https://eslint.org/docs/rules/no-useless-catch
  'no-useless-catch': 'error',
  // https://eslint.org/docs/rules/no-useless-concat
  'no-useless-concat': 'error',
  // https://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': 'error',
  // https://eslint.org/docs/rules/no-useless-return
  // 'no-useless-return': 'off',
  // https://eslint.org/docs/rules/no-void
  // 'no-void': 'off',
  // https://eslint.org/docs/rules/no-warning-comments
  // 'no-warning-comments': 'off',
  // https://eslint.org/docs/rules/no-with
  'no-with': 'error',
  // https://eslint.org/docs/rules/prefer-named-capture-group
  // 'prefer-named-capture-group': 'off',
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  // 'prefer-promise-reject-errors': 'off',
  // https://eslint.org/docs/rules/prefer-regex-literals
  'prefer-regex-literals': 'error',
  // https://eslint.org/docs/rules/radix
  radix: 'error',
  // https://eslint.org/docs/rules/require-await
  // 'require-await': 'off',
  // https://eslint.org/docs/rules/require-unicode-regexp
  // 'require-unicode-regexp': 'off',
  // https://eslint.org/docs/rules/vars-on-top
  // 'vars-on-top': 'off',
  // https://eslint.org/docs/rules/wrap-iife
  // 'wrap-iife': 'off', // Prettier
  // https://eslint.org/docs/rules/yoda
  yoda: [
    'error',
    'never',
    {
      exceptRange: true
    }
  ],

  // Strict Mode
  // https://eslint.org/docs/rules/strict
  strict: 'off',

  // Variables
  // https://eslint.org/docs/rules/init-declarations
  // 'init-declarations': 'off',
  // https://eslint.org/docs/rules/no-delete-var
  'no-delete-var': 'error',
  // https://eslint.org/docs/rules/no-label-var
  // 'no-label-var': 'off',
  // https://eslint.org/docs/rules/no-restricted-globals
  // 'no-restricted-globals': 'off',
  // https://eslint.org/docs/rules/no-shadow
  // 'no-shadow': 'off',
  // https://eslint.org/docs/rules/no-shadow-restricted-names
  'no-shadow-restricted-names': 'error',
  // https://eslint.org/docs/rules/no-undef
  'no-undef': 'error',
  // https://eslint.org/docs/rules/no-undef-init
  // 'no-undef-init': 'off',
  // https://eslint.org/docs/rules/no-undefined
  'no-undefined': 'error',
  // https://eslint.org/docs/rules/no-unused-vars
  'no-unused-vars': 'error',
  // https://eslint.org/docs/rules/no-use-before-define
  // 'no-use-before-define': 'off',

  // Node.js and CommonJS
  // https://eslint.org/docs/rules/callback-return
  // 'callback-return': 'off',
  // https://eslint.org/docs/rules/global-require
  // 'global-require': 'off',
  // https://eslint.org/docs/rules/handle-callback-err
  // 'handle-callback-err': 'off',
  // https://eslint.org/docs/rules/no-buffer-constructor
  // 'no-buffer-constructor': 'off',
  // https://eslint.org/docs/rules/no-mixed-requires
  // 'no-mixed-requires': 'off',
  // https://eslint.org/docs/rules/no-new-require
  // 'no-new-require': 'off',
  // https://eslint.org/docs/rules/no-path-concat
  'no-path-concat': 'error',
  // https://eslint.org/docs/rules/no-process-env
  // 'no-process-env': 'off',
  // https://eslint.org/docs/rules/no-process-exit
  // 'no-process-exit': 'off',
  // https://eslint.org/docs/rules/no-restricted-modules
  // 'no-restricted-modules': 'off',
  // https://eslint.org/docs/rules/no-sync
  'no-sync': [
    'error',
    {
      allowAtRootLevel: true
    }
  ],

  // Stylistic Issues
  // https://eslint.org/docs/rules/array-bracket-newline
  // 'array-bracket-newline': 'off', // Prettier
  // https://eslint.org/docs/rules/array-bracket-spacing
  // 'array-bracket-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/array-element-newline
  // 'array-element-newline': 'off', // Prettier
  // https://eslint.org/docs/rules/block-spacing
  // 'block-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/brace-style
  // 'brace-style': 'off', // Prettier
  // https://eslint.org/docs/rules/camelcase
  camelcase: 'error',
  // https://eslint.org/docs/rules/capitalized-comments
  // 'capitalized-comments': 'off',
  // https://eslint.org/docs/rules/comma-dangle
  // 'comma-dangle': 'off', // Prettier
  // https://eslint.org/docs/rules/comma-spacing
  // 'comma-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/comma-style
  // 'comma-style': 'off', // Prettier
  // https://eslint.org/docs/rules/computed-property-spacing
  // 'computed-property-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/consistent-this
  // 'consistent-this': 'off',
  // https://eslint.org/docs/rules/eol-last
  // 'eol-last': 'off', // Prettier
  // https://eslint.org/docs/rules/func-call-spacing
  // 'func-call-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/func-name-matching
  // 'func-name-matching': 'off',
  // https://eslint.org/docs/rules/func-names
  // 'func-names': 'off',
  // https://eslint.org/docs/rules/func-style
  'func-style': ['error', 'declaration'],
  // https://eslint.org/docs/rules/function-call-argument-newline
  // 'function-call-argument-newline': 'off', // Prettier
  // https://eslint.org/docs/rules/function-paren-newline
  // 'function-paren-newline': 'off', // Prettier
  // https://eslint.org/docs/rules/id-blacklist
  // 'id-blacklist': 'off',
  // https://eslint.org/docs/rules/id-length
  // 'id-length': 'off',
  // https://eslint.org/docs/rules/id-match
  // 'id-match': 'off',
  // https://eslint.org/docs/rules/implicit-arrow-linebreak
  // 'implicit-arrow-linebreak': 'off', // Prettier
  // https://eslint.org/docs/rules/indent
  indent: 'off', // Prettier
  // https://eslint.org/docs/rules/jsx-quotes
  // 'jsx-quotes': 'off', // Prettier
  // https://eslint.org/docs/rules/key-spacing
  // 'key-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/keyword-spacing
  // 'keyword-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/line-comment-position
  // // 'line-comment-position': 'off',
  // https://eslint.org/docs/rules/linebreak-style
  // 'linebreak-style': 'off', // Prettier
  // https://eslint.org/docs/rules/lines-around-comment
  // 'lines-around-comment': 'off',
  // https://eslint.org/docs/rules/lines-between-class-members
  'lines-between-class-members': ['error', 'always'],
  // https://eslint.org/docs/rules/max-depth
  'max-depth': 'error',
  // https://eslint.org/docs/rules/max-len
  // 'max-len': 'off', // Prettier w/ config
  // https://eslint.org/docs/rules/max-lines
  'max-lines': 'warn',
  // https://eslint.org/docs/rules/max-lines-per-function
  // 'max-lines-per-function': 'off',
  // https://eslint.org/docs/rules/max-nested-callbacks
  // 'max-nested-callbacks': 'off',
  // https://eslint.org/docs/rules/max-params
  // 'max-params': 'off',
  // https://eslint.org/docs/rules/max-statements
  // 'max-statements': 'off',
  // https://eslint.org/docs/rules/max-statements-per-line
  'max-statements-per-line': ['error', { max: 1 }],
  // https://eslint.org/docs/rules/multiline-comment-style
  // 'multiline-comment-style': 'off',
  // https://eslint.org/docs/rules/multiline-ternary
  // 'multiline-ternary': 'off', // Prettier
  // https://eslint.org/docs/rules/new-cap
  // 'new-cap': 'off',
  // https://eslint.org/docs/rules/new-parens
  // 'new-parens': 'off', // Prettier
  // https://eslint.org/docs/rules/newline-per-chained-call
  // 'newline-per-chained-call': 'off', // Prettier
  // https://eslint.org/docs/rules/no-array-constructor
  'no-array-constructor': 'error',
  // https://eslint.org/docs/rules/no-bitwise
  // 'no-bitwise': 'off',
  // https://eslint.org/docs/rules/no-continue
  // 'no-continue': 'off',
  // https://eslint.org/docs/rules/no-inline-comments
  // 'no-inline-comments': 'off',
  // https://eslint.org/docs/rules/no-lonely-if
  'no-lonely-if': 'error',
  // https://eslint.org/docs/rules/no-mixed-operators
  'no-mixed-operators': 'error', // Prettier w/ config
  // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
  // 'no-mixed-spaces-and-tabs': 'off', // Prettier
  // https://eslint.org/docs/rules/no-multi-assign
  // 'no-multi-assign': 'off',
  // https://eslint.org/docs/rules/no-multiple-empty-lines
  // 'no-multiple-empty-lines': 'off', // Prettier
  // https://eslint.org/docs/rules/no-negated-condition
  'no-negated-condition': 'error',
  // https://eslint.org/docs/rules/no-nested-ternary
  'no-nested-ternary': 'error',
  // https://eslint.org/docs/rules/no-new-object
  'no-new-object': 'error',
  // https://eslint.org/docs/rules/no-plusplus
  // 'no-plusplus': 'off',
  // https://eslint.org/docs/rules/no-restricted-syntax
  // 'no-restricted-syntax': 'off',
  // https://eslint.org/docs/rules/no-tabs
  // 'no-tabs': 'off', // Prettier w/ config
  // https://eslint.org/docs/rules/no-ternary
  // 'no-ternary': 'off',
  // https://eslint.org/docs/rules/no-trailing-spaces
  // 'no-trailing-spaces': 'off',
  // https://eslint.org/docs/rules/no-underscore-dangle
  // 'no-underscore-dangle': 'off',
  // https://eslint.org/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': 'error',
  // https://eslint.org/docs/rules/no-whitespace-before-property
  // 'no-whitespace-before-property': 'off', // Prettier
  // https://eslint.org/docs/rules/nonblock-statement-body-position
  // 'nonblock-statement-body-position': 'off', // Prettier
  // https://eslint.org/docs/rules/object-curly-newline
  // 'object-curly-newline': 'off', // Prettier
  // https://eslint.org/docs/rules/object-curly-spacing
  // 'object-curly-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/object-property-newline
  // 'object-property-newline': 'off', // Prettier
  // https://eslint.org/docs/rules/one-var
  'one-var': ['error', 'never'],
  // https://eslint.org/docs/rules/one-var-declaration-per-line
  // 'one-var-declaration-per-line': 'off', // Prettier
  // https://eslint.org/docs/rules/operator-assignment
  'operator-assignment': ['error', 'always'],
  // https://eslint.org/docs/rules/operator-linebreak
  // 'operator-linebreak': 'off', // Prettier
  // https://eslint.org/docs/rules/padded-blocks
  // 'padded-blocks': 'off', // Prettier
  // https://eslint.org/docs/rules/padding-line-between-statements
  // 'padding-line-between-statements': 'off', // TODO: Determine preferences
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator': 'error',
  // https://eslint.org/docs/rules/prefer-object-spread
  // 'prefer-object-spread': 'off',
  // https://eslint.org/docs/rules/quote-props
  // 'quote-props': 'off', // Prettier
  // https://eslint.org/docs/rules/quotes
  quotes: 'off', // Prettier w/ config
  // https://eslint.org/docs/rules/semi
  semi: 'off', // Prettier
  // https://eslint.org/docs/rules/semi-spacing
  // 'semi-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/semi-style
  // 'semi-style': 'off', // Prettier
  // https://eslint.org/docs/rules/sort-keys
  // 'sort-keys': 'off',
  // https://eslint.org/docs/rules/sort-vars
  // 'sort-vars': 'off',
  // https://eslint.org/docs/rules/space-before-blocks
  // 'space-before-blocks': 'off', // Prettier
  // https://eslint.org/docs/rules/space-before-function-paren
  // 'space-before-function-paren': 'off', // Prettier
  // https://eslint.org/docs/rules/space-in-parens
  // 'space-in-parens': 'off', // Prettier
  // https://eslint.org/docs/rules/space-infix-ops
  // 'space-infix-ops': 'off', // Prettier
  // https://eslint.org/docs/rules/space-unary-ops
  // 'space-unary-ops': 'off', // Prettier
  // https://eslint.org/docs/rules/spaced-comment
  'spaced-comment': ['error', 'always'],
  // https://eslint.org/docs/rules/switch-colon-spacing
  // 'switch-colon-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/template-tag-spacing
  // 'template-tag-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/unicode-bom
  // 'unicode-bom': 'off', // Prettier
  // https://eslint.org/docs/rules/wrap-regex
  // 'wrap-regex': 'off', // Prettier

  // ECMAScript 6
  // https://eslint.org/docs/rules/arrow-body-style
  // 'arrow-body-style': 'off', // Prettier w/ config
  // https://eslint.org/docs/rules/arrow-parens
  // 'arrow-parens': 'off', // Prettier
  // https://eslint.org/docs/rules/arrow-spacing
  // 'arrow-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/constructor-super
  // 'constructor-super': 'off',
  // https://eslint.org/docs/rules/generator-star-spacing
  // 'generator-star-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/no-class-assign
  // 'no-class-assign': 'off',
  // https://eslint.org/docs/rules/no-confusing-arrow
  // 'no-confusing-arrow': 'off', // Prettier w/ config
  // https://eslint.org/docs/rules/no-const-assign
  // 'no-const-assign': 'off',
  // https://eslint.org/docs/rules/no-dupe-class-members
  // 'no-dupe-class-members': 'off',
  // https://eslint.org/docs/rules/no-duplicate-imports
  // 'no-duplicate-imports': 'off',
  // https://eslint.org/docs/rules/no-new-symbol
  // 'no-new-symbol': 'off',
  // https://eslint.org/docs/rules/no-restricted-exports
  // 'no-restricted-exports': 'off',
  // https://eslint.org/docs/rules/no-restricted-imports
  // 'no-restricted-imports': 'off',
  // https://eslint.org/docs/rules/no-this-before-super
  // 'no-this-before-super': 'off',
  // https://eslint.org/docs/rules/no-useless-computed-key
  // 'no-useless-computed-key': 'off',
  // https://eslint.org/docs/rules/no-useless-constructor
  'no-useless-constructor': 'error'
  // https://eslint.org/docs/rules/no-useless-rename
  // 'no-useless-rename': 'off',
  // https://eslint.org/docs/rules/no-var
  // 'no-var': 'off',
  // https://eslint.org/docs/rules/object-shorthand
  // 'object-shorthand': 'off',
  // https://eslint.org/docs/rules/prefer-arrow-callback
  // 'prefer-arrow-callback': 'off', // Prettier w/ config
  // https://eslint.org/docs/rules/prefer-const
  // 'prefer-const': 'off',
  // https://eslint.org/docs/rules/prefer-destructuring
  // 'prefer-destructuring': 'off',
  // https://eslint.org/docs/rules/prefer-numeric-literals
  // 'prefer-numeric-literals': 'off',
  // https://eslint.org/docs/rules/prefer-rest-params
  // 'prefer-rest-params': 'off',
  // https://eslint.org/docs/rules/prefer-spread
  // 'prefer-spread': 'off',
  // https://eslint.org/docs/rules/prefer-template
  // 'prefer-template': 'off',
  // https://eslint.org/docs/rules/require-yield
  // 'require-yield': 'off',
  // https://eslint.org/docs/rules/rest-spread-spacing
  // 'rest-spread-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/sort-imports
  // 'sort-imports': 'off',
  // https://eslint.org/docs/rules/symbol-description
  // 'symbol-description': 'off',
  // https://eslint.org/docs/rules/template-curly-spacing
  // 'template-curly-spacing': 'off', // Prettier
  // https://eslint.org/docs/rules/yield-star-spacing
  // 'yield-star-spacing': 'off' // Prettier
}

const importRules = {
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/default.md
  'import/default': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/export.md
  'import/export': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/exports-last.md
  // 'import/exports-last': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/extensions.md
  // 'import/extensions': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/first.md
  'import/first': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/group-exports.md
  // 'import/group-exports': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/max-dependencies.md
  // 'import/max-dependencies': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/named.md
  'import/named': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/namespace.md
  'import/namespace': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/newline-after-import.md
  'import/newline-after-import': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-absolute-path.md
  'import/no-absolute-path': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-amd.md
  // 'import/no-amd': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-anonymous-default-export.md
  'import/no-anonymous-default-export': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-commonjs.md
  // 'import/no-commonjs': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-cycle.md
  // 'import/no-cycle': 'off', // Expensive
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-default-export.md
  // 'import/no-default-export': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-deprecated.md
  'import/no-deprecated': 'warn',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-duplicates.md
  'import/no-duplicates': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-dynamic-require.md
  // 'import/no-dynamic-require': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-extraneous-dependencies.md
  'import/no-extraneous-dependencies': 'warn',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-internal-modules.md
  // 'import/no-internal-modules': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-mutable-exports.md
  'import/no-mutable-exports': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-named-as-default-member.md
  'import/no-named-as-default-member': 'warn',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-named-as-default.md
  'import/no-named-as-default': 'warn',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-named-default.md
  'import/no-named-default': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-named-export.md
  // 'import/no-named-export': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-namespace.md
  // 'import/no-namespace': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-nodejs-modules.md
  // 'import/no-nodejs-modules': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-relative-parent-imports.md
  // 'import/no-relative-parent-imports': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-restricted-paths.md
  // 'import/no-restricted-paths': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-self-import.md
  'import/no-self-import': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-unassigned-import.md
  // 'import/no-unassigned-import': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-unresolved.md
  'import/no-unresolved': 'warn',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-unused-modules.md
  'import/no-unused-modules': [
    'warn',
    {
      missingExports: true,
      unusedExports: true
    }
  ],
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-useless-path-segments.md
  'import/no-useless-path-segments': 'error',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/no-webpack-loader-syntax.md
  // 'import/no-webpack-loader-syntax': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/order.md
  'import/order': [
    'off',
    {
      'newlines-between': 'alawys',
      alphabetize: {
        order: 'asc'
      }
    }
  ]
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/prefer-default-export.md
  // 'import/prefer-default-export': 'off',
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules/unambiguous.md
  // 'import/unambiguous': 'off'
}

const rules = {
  ...baseRules,
  ...importRules,
  'prettier/prettier': 'error'
}

module.exports = {
  plugins: ['import', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018
  },
  rules
}
