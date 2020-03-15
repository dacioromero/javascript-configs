const reactRules = {
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
  'react/boolean-prop-naming': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
  // 'react/button-has-type': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
  // 'react/default-props-match-prop-types': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
  'react/destructuring-assignment': ['warn', 'always'],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
  // 'react/display-name': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
  // 'react/forbid-component-props': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
  // 'react/forbid-dom-props': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
  // 'react/forbid-elements': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
  // 'react/forbid-foreign-prop-types': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
  // 'react/forbid-prop-types': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
  'react/function-component-definition': [
    'error',
    { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }
  ],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  'react/jsx-boolean-value': ['error', 'never'],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
  // 'react/jsx-child-element-spacing': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  // 'react/jsx-closing-bracket-location': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
  // 'react/jsx-closing-tag-location': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  'react/jsx-curly-brace-presence': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
  // 'react/jsx-curly-newline': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  // 'react/jsx-curly-spacing': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  // 'react/jsx-equals-spacing': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  // 'react/jsx-filename-extension': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
  // 'react/jsx-first-prop-new-line': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
  'react/jsx-fragments': ['error', 'syntax'],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  'react/jsx-handler-names': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  // 'react/jsx-indent': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
  // 'react/jsx-indent-props': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
  'react/jsx-key': ['error', { checkFragmentShorthand: true }],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
  // 'react/jsx-max-deom/yannickcr/eslinpth': 'off',
  // https://github.ct-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  'react/jsx-max-props-per-line': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
  'react/jsx-no-bind': [
    'warn',
    {
      ignoreDOMComponents: true,
      ignoreRefs: true,
      allowArrowFunctions: false,
      allowFunctions: false,
      allowBind: false
    }
  ],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
  'react/jsx-no-comment-textnodes': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
  'react/jsx-no-duplicate-props': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
  // 'react/jsx-no-literals': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
  'react/jsx-no-script-url': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
  'react/jsx-no-target-blank': [
    'warn',
    { allowReferrer: false, enforceDynamicLinks: 'always' }
  ],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
  'react/jsx-no-undef': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
  'react/jsx-no-useless-fragment': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
  // 'react/jsx-one-expression-per-line': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
  'react/jsx-pascal-case': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
  // 'react/jsx-props-no-multi-spaces': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  // 'react/jsx-props-no-spreading': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
  'react/jsx-sort-default-props': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  'react/jsx-sort-props': [
    'error',
    {
      ignoreCase: false,
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false,
      reservedFirst: true
    }
  ],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
  // 'react/jsx-space-before-closing': 'off', // Prettier, deprecated
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
  // 'react/jsx-tag-spacing': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
  'react/jsx-uses-react': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  'react/jsx-uses-vars': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
  // 'react/jsx-wrap-multilines': 'off', // Prettier
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
  'react/no-access-state-in-setstate': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
  // 'react/no-adjacent-inline-elements': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
  'react/no-array-index-key': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
  'react/no-children-prop': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
  'react/no-danger': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
  'react/no-danger-with-children': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
  'react/no-deprecated': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
  'react/no-did-mount-set-state': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
  'react/no-did-update-set-state': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
  'react/no-direct-mutation-state': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
  'react/no-find-dom-node': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
  'react/no-is-mounted': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
  'react/no-multi-comp': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
  'react/no-redundant-should-component-update': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
  'react/no-render-return-value': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
  // 'react/no-set-state': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
  'react/no-string-refs': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
  'react/no-this-in-sfc': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
  'react/no-typos': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
  // 'react/no-unescaped-entities': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
  'react/no-unknown-property': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
  'react/no-unsafe': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
  'react/no-unused-prop-types': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
  'react/no-unused-state': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
  'react/no-will-update-set-state': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
  'react/prefer-es6-class': ['error', 'always'],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
  // 'react/prefer-read-only-props': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  'react/prefer-stateless-function': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  // 'react/prop-types': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  'react/react-in-jsx-scope': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
  // 'react/require-default-props': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
  // 'react/require-optimization': 'off',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
  'react/require-render-return': 'error',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
  'react/self-closing-comp': ['error', { component: true, html: true }],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
  'react/sort-comp': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
  'react/sort-prop-types': [
    'error',
    {
      ignoreCase: false,
      callbacksLast: true,
      requiredFirst: true,
      sortShapeProp: true,
      noSortAlphabetically: false
    }
  ],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
  'react/state-in-constructor': ['error', 'never'],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
  'react/static-property-placement': ['warn', 'property assignment'],
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
  'react/style-prop-object': 'warn',
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
  'react/void-dom-elements-no-children': 'error'
}

const reactHooksRules = {
  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/rules-of-hooks': 'error'
}

const rules = {
  ...reactRules,
  ...reactHooksRules
}

module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react-hooks', 'react'],
  rules
}
