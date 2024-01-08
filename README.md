# Base Project

This project is a robust foundation for developing new applications using Vue.js with Vue 3. It's designed to minimize the time and effort required to initialize projects with standard configurations. By centralizing and standardizing the essential elements, this project enables quick starts for new projects while maintaining high consistency and code quality.

## Key Features

- **Vue.js with Vue 3**: A modern framework for building dynamic user interfaces.
- **TypeScript**: A typed superset of JavaScript, enhancing code reliability and maintainability.
- **Vitest**: A test framework for Vue.js, ensuring code robustness.
- **ESLint**: A tool for identifying and correcting code issues, ensuring high-quality code.
- **SCSS**: A CSS preprocessor for more efficient styling.
- **Remixicon**: A comprehensive icon library to enhance UI designs.
- **Istanbul Code Coverage**: A JavaScript code coverage tool, providing detailed statistics on test coverage to ensure comprehensive and reliable code coverage.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Istanbul Code Coverage with [Istanbul Code Coverage](https://istanbul.js.org/)

```sh
npm run coverage
```
