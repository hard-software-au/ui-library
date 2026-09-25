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
  ignorePatterns: [".meteor/", "node_modules/", "storybook-static/", "output/", "dist/", "dist-demo/"],
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
          ["^react$", "^react-dom$", "^react/"], // Forces React core packages first
          ["^@?\\w"], // Third-party packages next
          ["^\\."], // Internal/relative imports last
        ],
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
