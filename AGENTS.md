# AGENT Guidelines for Snap-Sync Repository

This document outlines the essential commands, code style guidelines, and conventions for agentic coding within the Snap-Sync repository. Adhering to these guidelines ensures consistency, maintainability, and high quality across the codebase.

## 1. Build, Lint, and Test Commands

The Snap-Sync repository is a monorepo containing `web` (SvelteKit) and `server` (NestJS) applications, along with a `core` directory for shared SDK generation.

### Global Commands (from root `package.json`)

*   **Generate SDK**: `npm run generate:sdk`
    *   Generates a TypeScript Fetch SDK from `core/specs/openapi.json` into `core/sdk`.

### Web Application (`web/`)

*   **Development Server**: `npm run dev`
    *   Starts the SvelteKit development server.
*   **Build**: `npm run build`
    *   Creates a production build of the SvelteKit application using Vite.
*   **Type Check / Lint**: `npm run check`
    *   Performs SvelteKit synchronization and runs `svelte-check` for TypeScript type validation based on `web/tsconfig.json`.
*   **Type Check / Lint (Watch Mode)**: `npm run check:watch`
    *   Runs `svelte-check` in watch mode for continuous type validation during development.
*   **Running Tests**:
    *   The `web` project typically uses `vitest` for unit/component testing. While no explicit script is defined in `package.json`, `vitest` can usually be invoked directly.
    *   To run all tests: `npx vitest` (if `vitest` is installed)
    *   To run a single test file: `npx vitest <path/to/test/file.test.ts>`
    *   To run tests matching a specific pattern: `npx vitest -t "test name pattern"`

### Server Application (`server/`)

*   **Build**: `npm run build`
    *   Compiles the NestJS application.
*   **Format Code**: `npm run format`
    *   Formats TypeScript files in `src` and `test` directories using Prettier.
*   **Lint Code**: `npm run lint`
    *   Lints TypeScript files in `src`, `apps`, `libs`, and `test` directories using ESLint and attempts to fix issues.
*   **Start Development Server**: `npm run start:dev`
    *   Starts the NestJS application in watch mode.
*   **Run All Tests**: `npm run test`
    *   Executes all unit tests using Jest.
*   **Run a Single Test**: `npx jest <path/to/test/file.spec.ts>`
    *   Jest will run the tests in the specified file.
*   **Run Tests in Watch Mode**: `npm run test:watch`
    *   Runs Jest in watch mode, re-running tests on file changes.
*   **Run Test Coverage**: `npm run test:cov`
    *   Generates a test coverage report.
*   **Run End-to-End Tests**: `npm run test:e2e`
    *   Executes end-to-end tests using Jest with a specific configuration.

## 2. Code Style Guidelines

These guidelines are derived from project configurations (like `tsconfig.json`, `package.json` scripts for `prettier` and `eslint`) and common TypeScript/JavaScript best practices.

### General Principles

*   **Consistency**: Adhere to existing patterns and styles within the codebase.
*   **Readability**: Write clear, concise, and easy-to-understand code.
*   **Maintainability**: Design code that is easy to modify, extend, and debug.

### Formatting

*   **Prettier**: The `server` project uses Prettier (`npm run format`). Assume Prettier is the standard for both `web` and `server` for consistent code formatting.
    *   Ensure all code is formatted using Prettier.
    *   If Prettier configuration files (e.g., `.prettierrc`) are present, respect their rules.

### Imports

*   **Ordering**: Group imports by type:
    1.  Node.js built-in modules
    2.  Third-party libraries
    3.  Project-specific modules (absolute paths)
    4.  Relative imports (starting with `./` or `../`)
*   **Spacing**: Add a blank line between different import groups.
*   **Alias**: Utilize path aliases defined in `tsconfig.json` (if any) or build tools for project-specific modules to avoid long relative paths.
*   **Destructuring**: Prefer destructuring imports (e.g., `import { Foo, Bar } from './module';`) over importing the whole module and accessing properties (e.g., `import * as MyModule from './module'; MyModule.Foo;`).

### Naming Conventions

*   **Variables and Functions**: `camelCase` (e.g., `myVariable`, `calculateTotal`).
*   **Classes and Interfaces**: `PascalCase` (e.g., `UserService`, `IUserRepository`).
*   **Constants**: `SCREAMING_SNAKE_CASE` for global constants or immutable values (e.g., `API_BASE_URL`).
*   **File Names**: `kebab-case` for component/module files (e.g., `user-list.component.ts`, `auth-service.ts`).
*   **TypeScript Enums**: `PascalCase` for enum names, `PascalCase` for enum members.

### Types and Interfaces (TypeScript)

*   **Explicit Typing**: Explicitly type variables, function parameters, and return values. Avoid `any` unless absolutely necessary and justified.
*   **Strict Mode**: Both `web` and `server` projects enable strict type checking (`"strict": true` in `web/tsconfig.json`, `"strictNullChecks": true` in `server/tsconfig.json`). Adhere to these strictness levels.
*   **Interfaces vs. Types**:
    *   Use `interface` for defining object shapes and for declaration merging.
    *   Use `type` for aliases, unions, intersections, and mapped types.
*   **Type Guards**: Use type guards for narrowing types in conditional blocks.

### Error Handling

*   **Graceful Degradation**: Implement robust error handling to prevent application crashes and provide a good user experience.
*   **Centralized Handling**: For server-side applications (NestJS), leverage NestJS's exception filters for centralized error handling.
*   **Meaningful Errors**: Throw specific error types with clear, descriptive messages.
*   **Asynchronous Errors**: Handle promise rejections with `.catch()` or `try...catch` with `await`.
*   **Logging**: Log errors with sufficient context (e.g., request details, stack trace) for debugging.

### Comments

*   **Purpose**: Use comments to explain *why* a particular piece of code exists or is complex, rather than *what* it does (which should be clear from the code itself).
*   **JSDoc**: Use JSDoc for documenting public APIs (functions, classes, interfaces) to describe parameters, return values, and overall purpose.

## 3. Cursor/Copilot Rules

No specific `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md` files were found in this repository. Therefore, agents should adhere to the general guidelines provided above and focus on generating idiomatic and well-structured code.

If such configuration files are introduced in the future, agents must prioritize and strictly follow those rules.

## 4. Project Strategy: Immich Managed Stack

- **Immich-First Check:** Before coding, ALWAYS ask: "Can Immich already do this natively via config?"
- **Branching Discipline:** One branch per OpenSpec change. Merge ONLY after manual review and a successful `/opsx:verify`.
- **Testing Cadence:**
    - Per Task: Targeted smoke test.
    - Per Phase: Full regression drill.
- **Project True Status:** Edit and update `project.md` in-case there is any deviation from the specified tasks. It is to be used as the single source of truth and also as the project status.
- **Task-Prefixed Changes:** Always prefix the folder created during `/opsx-propose` with the task number (e.g., `t1-baseline-host-audit`).

## 5. Agent Execution Rules

- **Explicit Confirmation:** Do not start applying tasks or running modifying system/state commands associated with tasks until the user explicitly asks and confirms they are ready to proceed. Let the user control the pacing of task execution.
