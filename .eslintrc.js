module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'next/typescript'
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  plugins: ['react-hooks'],
  rules: {
    'react/function-component-definition': ['off'],
    'import/prefer-default-export': ['off'],
    'no-unused-vars': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-await-in-loop': ['off'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'jsx-a11y/anchor-is-valid': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'jsx-a11y/href-no-hash': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/control-has-associated-label': ['off'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 2,
        comments: 100,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true
      }
    ],
    'react/jsx-props-no-spreading': 0,
    'react/no-unknown-property': [
      2,
      {
        ignore: ['jsx', 'global']
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue'],
        paths: ['.']
      }
    }
  },
  parser: '@typescript-eslint/parser'
}
