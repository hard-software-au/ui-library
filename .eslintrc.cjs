module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "simple-import-sort",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: { version: "detect" },
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  ignorePatterns: [".meteor/", "node_modules/", "storybook-static/", "output/", "dist/", "dist-demo/", "src/lib/"],
  rules: {
    "indent": ["error", 2, { "FunctionExpression": { "parameters": 1 } }],
    "object-curly-spacing": ["warn", "always"],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          // Forces React core packages first
          ["^react$", "^react\\u0000", "^react-dom$", "^react-dom\\u0000", "^react/", "^react/.*\\u0000"],
          // Third-party packages next
          ["^@?\\w"],
          // Internal/relative imports last
          ["^\\."],
        ],
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
