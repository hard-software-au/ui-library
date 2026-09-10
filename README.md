# UI Library
This repo contains common components to be used across HARD software products. 
Components are build on top of [Material UI](https://mui.com/material-ui/).

The styling a strip-down version of [Dashboard template](https://mui.com/material-ui/getting-started/templates/dashboard) from Material UI.

## Components:
Current components 
- Calendar
  - Date Picker
- Cards
  - Highlighted
  - Summary
- Charts
  - Bar
  - Line
  - Pie
  - Donut
  - Sparkline
- Labels
  - Region Label
  - Traffic Dot
- Select
  - Basic Select
  - Combobox
- Tabs

## How to install:
1. Install and use the right `node` version

Make sure you use the right version of node (see `.nvmrc`).
It is recommended to use [nvm](https://www.nvmnode.com/) to manage your node versions.

This should also install `npm` automatically

Check your `node` and `npm` versions
```aiignore
node -v
npm -v
```

2. Install packages

```aiignore
npm install
```

3. Run Storybook
```aiignore
npm run storybook
```
then go to http://localhost:6006/

4. Or run the Dashboard Display
```aiignore
npm run dev
```
then go to http://localhost:5173/
This should show `MainGrid.tsx`.

## Storybook
[Storybook](https://hard-software-au.github.io/ui-library/)
Storybook will be updated upon merge via github action.
note: there might be a couple of minutes delay from merge to updated.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

