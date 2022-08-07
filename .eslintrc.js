module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': [
      'error', 2, {
        ignoredNodes: ['TSTypeParameterInstantiation']
      }
    ],

    // Require a specific member delimiter style for interfaces and type
    // literals. Modified to support a non-semicolon environment
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'comma' },
      singleline: { delimiter: 'comma' }
    }],

    // Disallow usage of the any type. Disabled as part of the TS
    // transition.
    // TODO: enable this on both frontend and server
    '@typescript-eslint/no-explicit-any': 'off',

    // Forbids usage of Promise-like values in statements without handling
    // errors. Enabled to find those nasty unhandled promise bugs.
    // Can be prevented by using void operator
    '@typescript-eslint/no-floating-promises': ['error', {
      'ignoreVoid': true
    }],

    // Disallow the use of eval()-like methods.
    '@typescript-eslint/no-implied-eval': 'off',

    '@typescript-eslint/no-misused-promises': [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    
    // Overrides eslint's no-loop-func for typescript
    "@typescript-eslint/no-loop-func": ["error"],

    // Disallows using a type assertion that does not change the type of an expression.
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',

    '@typescript-eslint/no-unsafe-argument': 'off',
    
    // Disallows assigning any to a variable, and assigning any[] to an array destructuring.
    '@typescript-eslint/no-unsafe-assignment': 'off',

    // Disallows calling any variable that is typed as any.
    '@typescript-eslint/no-unsafe-call': 'off',

    // Disallows member access on any variable that is typed as any.
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // Disallows returning any or any[] from a function.
    '@typescript-eslint/no-unsafe-return': 'off',

    // Disallow unused expressions which have no effect on the state of the program.
    // (note you must disable the base rule as it can report incorrect errors)
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],

    // Disallow unused variables. Allow if prefixed by underscore.
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],

    // Disallow the use of variables before they are defined.
    '@typescript-eslint/no-use-before-define': 'off',

    // Disallows the use of require statements except in import statements.
    // TODO: enable this on the server
    '@typescript-eslint/no-var-requires': 'off',

    // Prefer usage of const assertion when type primitive value is equal to type.
    '@typescript-eslint/prefer-as-const': 'off',

    // Requires any function or method that returns a Promise to be marked
    // async.
    '@typescript-eslint/promise-function-async': 'error',

    // Enforce the consistent use of either back-ticks, double, or single
    // quotes. Enforcing single quotes always.
    '@typescript-eslint/quotes': ['error', 'single'],

    // Disallow async functions which have no await expression.
    // TODO: consider enabling, but without requiring unnecessary `return await`
    '@typescript-eslint/require-await': 'off',

    // When adding two variables, operands must both be of type number or of type string.
    '@typescript-eslint/restrict-plus-operands': 'off',

    // Enforce template literal expressions to be of string type.
    '@typescript-eslint/restrict-template-expressions': 'off',

    // Require or disallow semicolons instead of ASI. No semi.
    '@typescript-eslint/semi': ['error', 'never'],

    // Enforces unbound methods are called with their expected scope.
    // TODO: enable this; might be challenging with static class members
    '@typescript-eslint/unbound-method': 'off',


    // # ESLint Rules

    // Disallow or enforce spaces inside of brackets.
    'array-bracket-spacing': 'error',

    // Disallow or enforce spaces inside of blocks after opening block and
    // before closing block
    'block-spacing': 'error',

    'camelcase': 'off',

    // Require or disallow trailing commas. Requiring consistent trailing
    // commas.
    'comma-dangle': ['error', 'always-multiline'],

    // Enforces spacing around commas.
    'comma-spacing': 'error',

    // Limit cyclomatic complexity.
    'complexity': 'error',

    // Disallow or enforce spaces inside of computed properties.
    'computed-property-spacing': 'error',

    // Require following curly brace conventions.
    'curly': 'error',

    // Require or disallow spacing between function identifiers and their
    // invocations.
    'func-call-spacing': 'error',

    // Enforce consistent spacing between keys and values in object literal
    // properties.
    'key-spacing': 'error',

    // Enforce consistent spacing before and after keywords.
    'keyword-spacing': 'error',

    // Enforce consistent line break style. Unix it is.
    'linebreak-style': ['error', 'unix'],

    // Enforce a maximum line length.
    // TODO: consider lowering to 100 or 80
    'max-len': ['error', {
      code: 120,
      ignoreStrings: true
    }],

    // Disallow the use of console.
    'no-console': 'error',

    // This is overridden by typescript-eslint's no-loop-func
    'no-loop-func': 'off',

    // Disallow mixed spaces and tabs for indentation.
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow trailing whitespace at the end of lines. Configure your IDE.
    'no-trailing-spaces': 'error',

    // Disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // Enforce consistent spacing inside braces.
    'object-curly-spacing': ['error', 'always'],

    // Enforce variables to be declared either together or separately in
    // functions.
    'one-var': ['error', 'never'],

    // Suggest using const.
    'prefer-const': 'error',

    // Import Sorting.
    'sort-imports': ['error', { ignoreDeclarationSort: true }],

    // Require or disallow space before blocks.
    'space-before-blocks': 'error',

    // Require or disallow a space before function parenthesis.
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      asyncArrow: 'always',
      named: 'never',
    }],

    // Disallow or enforce spaces inside of parentheses.
    'space-in-parens': 'error',

    // Require spacing around infix operators.
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators.
    'space-unary-ops': 'error',

    // Requires or disallows a whitespace (space or tab) beginning a comment.
    'spaced-comment': 'error',

    // Enforce spacing around colons of switch statements.
    'switch-colon-spacing': 'error',

    // Require or disallow spacing between template tags and their literals.
    'template-tag-spacing': 'error',

    /* AirBnB overrides (permanent) */
    'func-names': ['error', 'as-needed'],
    'global-require': 'off',
    'guard-for-in': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': [
        '**/*spec.ts',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/__test__/**',
        '**/__mocks__/**',
        '**/setupTests.ts',
        '**/setupTests.tsx',
      ],
    }],
    'import/order': ['error', {
      alphabetize: { order: 'asc' },
      groups: [['builtin', 'external', 'internal']],
      'newlines-between': 'always',
      pathGroupsExcludedImportTypes: [],
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'indent': ['error', 2],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-restricted-syntax': 'off',
    'no-return-await': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-return': 'off',
    'no-void': 'off',
    'padded-blocks': 'off',
    'prefer-destructuring': ['error', {
      'VariableDeclarator': {
        'array': false,
        'object': true
      }
    }],
    'semi': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.mjs',
          '.ts',
          '.tsx',
        ]
      }
    },
  },
};
