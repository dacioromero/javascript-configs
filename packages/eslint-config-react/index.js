const rules = {
  'react/boolean-prop-naming': 'warn',
  'react/destructuring-assignment': ['warn', 'always'],
  'react/function-component-definition': [
    'error',
    { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }
  ],
  'react/jsx-boolean-value': ['error', 'never'],
  'react/jsx-curly-brace-presence': 'warn',
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-handler-names': 'warn',
  'react/jsx-key': ['error', { checkFragmentShorthand: true }],
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
  'react/jsx-no-script-url': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-pascal-case': 'error',
  'react/jsx-sort-default-props': 'warn',
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
  'react/no-access-state-in-setstate': 'error',
  'react/no-array-index-key': 'warn',
  'react/no-danger': 'warn',
  'react/no-did-mount-set-state': 'error',
  'react/no-did-update-set-state': 'error',
  'react/no-multi-comp': 'error',
  'react/no-redundant-should-component-update': 'error',
  'react/no-this-in-sfc': 'error',
  'react/no-typos': 'error',
  'react/no-unused-prop-types': 'warn',
  'react/no-unused-state': 'warn',
  'react/no-will-update-set-state': 'error',
  'react/prefer-es6-class': ['error', 'always'],
  'react/prefer-stateless-function': 'warn',
  'react/prop-types': 'off',
  'react/self-closing-comp': ['error', { component: true, html: true }],
  'react/sort-comp': 'warn',
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
  'react/state-in-constructor': ['error', 'never'],
  'react/static-property-placement': ['warn', 'property assignment'],
  'react/style-prop-object': 'warn',
  'react/void-dom-elements-no-children': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn'
}

module.exports = {
  extends: [
    'plugin:react/recommended',
    'prettier/react',
    'plugin:import/react'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react-hooks'],
  rules
}
