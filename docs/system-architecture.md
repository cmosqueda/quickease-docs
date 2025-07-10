---
sidebar_label: System Architecture
sidebar_position: 2
---

# System Architecture

The system architecture of QuickEase 2.0 follows a logical three-tier model consisting of the presentation, application, and data layers. While the codebase is organized in a client-server structure, this layout maps directly to the three-tier architecture in terms of functionality and separation of concerns.

## Client-Server Code Structure

The project is organized as follows:

```bash
root-directory/
  client/   → Presentation Layer (Web & Mobile Frontends)
  server/   → Application & Data Layers (Backend & Database Access)
```

> This client-server structure supports the three-tier model by maintaining clear logical separation between layers.

## Three-tier Model Layers

### Presentation Layer

The presentation layer provides user interfaces for registration, PDF uploads, AI-powered content generation, and quizzes. It includes:

- **Web App:** Built with React (Vite), deployed via Vercel or Netlify.
- **Mobile App:** Developed using Expo React Native, distributed via EAS Build or Gradle.

### Application Layer

The application layer is built with Node.js and Fastify. It manages server-side routing, logic, and integrations:

- **AI Services:** Integrates with Google’s Gemini LLM API to generate summaries, quizzes, and flashcards.
- **File Handling:** Manages uploads and stores files using Google Cloud Storage.
- **Authentication:** Implemented internally using JSON Web Tokens (JWT).

### Data Layer

The data layer is responsible for persistent storage and file management:

Database: Uses PostgreSQL for structured data such as user profiles, quiz results, and AI-generated outputs.

- **ORM:** Prisma is used for type-safe and efficient database interaction.
- **File Storage:** Google Cloud Storage is used for storing uploaded documents and AI outputs.

## Technology Stack

QuickEase 2.0 uses a unified TypeScript/Node.js stack across web, mobile, and backend, enabling code reusability and performance consistency. The backend is hosted on DigitalOcean, and core services are integrated within the Google Cloud ecosystem for scalability and reliability.

### Frontend Stacks (Web)

#### Production Dependencies

| Package               | Description                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| react                 | The core library used for building the app’s user interfaces with a component-based architecture. |
| react-dom             | The package that renders React components to the Document Object Model (DOM) browser environment. |
| react-router          | The routing library used for React apps.                                                          |
| @tanstack/react-query | Data fetching and caching library for React, ideal for managing server-state.                     |
| axios                 | A promise-based HTTP client for making API requests in the browser or Node.js.                    |
| clsx                  | Utility for conditionally joining class names, useful for dynamic styling of components.          |
| dayjs                 | A lightweight JavaScript library for parsing, validating, manipulating, and formatting dates.     |
| daisyui               | A plugin for Tailwind that provides pre-built accessible components.                              |
| lucide-react          | Beautiful, consistent icon set for React based on Feather icons.                                  |
| next-themes           | Plugin for managing dark/light theme toggling in Next.js and other React frameworks.              |
| zustand               | A small, fast, scalable state-management solution for React apps.                                 |
| immer                 | Helps in writing immutable state logic in a more intuitive (mutable-like) way.                    |
| sonner                | Lightweight toast notification library for React.                                                 |
| @tiptap/react         | React bindings for the Tiptap rich text editor.                                                   |
| @tiptap/pm            | Tiptap’s underlying ProseMirror toolkit – manages document state.                                 |
| @tiptap/starter-kit   | Pre-configured set of extensions for common rich text editing features in Tiptap.                 |
| tailwindcss           | A utility-first CSS framework for rapid UI development.                                           |
| @tailwindcss/vite     | Vite plugin to integrate TailwindCSS smoothly with the Vite build process.                        |
| tailwind-merge        | Merges Tailwind classes intelligently to avoid conflicts.                                         |
| zod                   | Used for runtime schema validation, ensuring that data meets expected types and shapes.           |

#### Development Dependencies

| Package                        | Description                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| vite                           | A fast modern frontend build tool that serves the code via native ESM and bundles it with Rollup. |
| @vitejs/plugin-react           | Vite plugin for React that includes Fast Refresh and other optimizations.                         |
| eslint                         | A widely-used linter for identifying and fixing problems in JavaScript/TypeScript code.           |
| @eslint/js                     | Provides ESLint’s core rules as an independent package (used with modern ESLint setups).          |
| eslint-plugin-react-hooks      | ESLint rules specific to React hooks usage.                                                       |
| eslint-plugin-react-refresh    | ESLint plugin that prevents incorrect usage of React Fast Refresh.                                |
| typescript                     | Adds static typing to JavaScript, enabling type checking and development tooling.                 |
| @types/node                    | TypeScript type definitions for Node.js global objects and modules.                               |
| @types/react, @types/react-dom | Type definitions for React and ReactDOM, used in TypeScript.                                      |
| typescript-eslint              | Integrates TypeScript with ESLint for better linting support on TypeScript codes.                 |
| globals                        | Provides a list of global variables as used in different JS environments (Node, browser, etc.).   |

### Backend Stacks

#### Production Dependencies

| Package                                                                                           | Description                                                                                                            |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| fastify                                                                                           | High-performance web framework for Node.js.                                                                            |
| @fastify/cookie, @fastify/cors, @fastify/env, @fastify/jwt, @fastify/multipart, @fastify/postgres | Fastify plugins for handling cookies, CORS, environment variables, JWT auth, file uploads, and PostgreSQL integration. |
| @google/genai                                                                                     | Google Generative AI SDK for accessing models like Gemini.                                                             |
| @modelcontextprotocol/sdk                                                                         | Used for interacting with Model Context Protocol APIs.                                                                 |
| @prisma/client                                                                                    | Runtime client for interacting with Prisma-managed database.                                                           |
| bcrypt                                                                                            | Library for hashing passwords.                                                                                         |
| pg                                                                                                | PostgreSQL client for Node.js (used by Prisma or @fastify/postgres).                                                   |
| dayjs                                                                                             | Lightweight date/time library.                                                                                         |
| zod                                                                                               | Runtime validation and parsing library.                                                                                |
| zod-to-json-schema                                                                                | Converts Zod schemas to JSON Schema (used for API validation or OpenAPI specs).                                        |

#### Development Dependencies

| Package                                 | Description                                                                                               |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| typescript                              | Adds static typing to JavaScript, enabling type checking and development tooling.                         |
| ts-node-dev                             | A command-line tool optimized for TypeScript that automatically restarts Node.js when file changes occur. |
| jest                                    | A JavaScript testing framework.                                                                           |
| ts-jest                                 | Jest transformer for TypeScript support.                                                                  |
| @types/node, @types/bcrypt, @types/jest | Type definitions for Node.js, bcrypt, and Jest (for TypeScript).                                          |
