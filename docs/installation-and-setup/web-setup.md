---
sidebar_position: 2
sidebar_label: Web Version Setup
---

# Web Version Setup

This is the QuickEase 2.0's web version setup. Mobile app is yet to be developed.

## Forking the GitHub repository

To contribute or run the app locally, first fork the GitHub repo:

1. Go to https://github.com/dlord213/quickease-2.0

2. Click the Fork button in the top-right corner.

3. Choose your GitHub account as the destination.

4. Then, clone your forked repo on your local device.

   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name
   ```

   To keep your fork updated with the original:

   ```bash
   git remote add upstream https://github.com/dlord213/quickease-2.0.git
   git fetch upstream
   git merge upstream/main
   ```

   > Note: You can name `upstream` anything you want, but it's standard convention.

## Project Structure Overview

As described in the System Architecture section, QuickEase 2.0 follows a client-server structure that logically maps to a three-tier architecture. Here’s a look at the folder layout:

```bash
quickease-2.0/ (root directory)
│
├── client/      → Frontend (React + Vite)
│   ├── docs/        → QA-generated client-side documentation
│   ├── public/
│   │   └── assets/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── routes/
│   │   ├── types/
│   │   └── utils/
│   │   └── main.tsx
│   ├── global.css
│   ├── index.html
│   └── vite.config.ts
│
└── server/      → Backend (Fastify + Prisma + PostgreSQL)
    ├── docs/        → QA-generated server-side documentation
    ├── modules/     → APIs, services, controllers, and routes
    ├── prisma/      → Prisma schema and migrations
    ├── tests/       → Jest mock test cases
    ├── utils/
    ├── server.ts
    └── fastify.config.ts
```

## Client Setup

Now that you've installed all the prerequisites, it's time to set up the frontend side of the application.

1. Open a new terminal window and navigate to the `client/` directory:

   ```bash
   cd client
   ```

2. Install the required node modules:

   ```bash
   npm install
   ```

   If you encounter dependency version conflicts, try this alternative command instead:

   ```bash
   npm install --force-legacy-deps
   ```

Once the installation is complete, you're ready to run the client locally or continue with backend setup.

## Server Setup

Nice job getting the client set up! Now let’s get the backend running. This will activate the server-side functionalities such as authentication, AI services, and database access.

### Step-by-step Backend Setup

1.  Open a new terminal and navigate to the `server/` directory:

    ```bash
    cd server
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

    If you run into dependency conflicts:

    ```bash
    npm install --force-legacy-deps
    ```

3.  Install the Model Context Protocol (MCP) SDK:

        ```bash
        npm install @modelcontextprotocol/sdk
        ```

        > QuickEase uses Google's Gemini API for AI features. MCP helps standardize and stabilize this connection. This also prevents the error: `Error: Cannot find module '@modelcontextprotocol/sdk/types.js'`

### Initialize Environment Variables

Create a `.env` file inside the `server/` directory and define these variables:

- `JWT_SECRET_KEY` is for the secret key used in JWT.
- `COOKIE_SECRET_KEY` is for the secret key used in cookies.
- `DATABASE_URL` is for the database configuration mainly used in Prisma/PostgreSQL.
- `GOOGLE_GEN_AI_API_KEY` is for @google/gen-ai API key used to generate AI-generated contents.
- `CORS_FRONTEND_HOST` is for the cross-origin resource sharing which allows web pages to make requests to a different domain than the one they were loaded from.

> Note: Make sure to wrap the values inside a double quote.

Example:

```bash
JWT_SECRET_KEY="your_secret_here"
COOKIE_SECRET_KEY="your_cookie_secret_here"
DATABASE_URL="postgresql://postgres:dlord213@localhost:5432/postgres?schema=public"
GOOGLE_GEN_AI_API_KEY="your_gemini_api_key_here"
CORS_FRONTEND_HOST="http://localhost:5173"
```

> Need help with .env? You may run to AI agents like ChatGPT, Gemini, Claude, etc. and get explanations on what these environment variables are for, or find resources about this which are readily available on the internet. If you still don’t know how this works, contact the developer **Jhon Lloyd Viernes** or the system analyst **Christine Mosqueda** if the developer is busy.

### Database Setup (PostgreSQL + Prisma)

1. Make sure your database schema is empty — Prisma will create the tables for you.

2. Push the schema migrations to your database by running the `npx prisma db push` command on your terminal.

3. Generate the prisma client using the `npx prisma generate` command.

4. Use tools like pgAdmin to verify if the tables have been created.

## Running the App in Local

Now you're ready to run both frontend and backend!

- **On accessing frontend interface:** In the terminal where you're inside the client/ directory, run the `npm run dev` command. Then, access the URL in any browser that Vite will give you. By default, it's in `localhost:5173/`
- **On powering backend server:** In the terminal where you're inside the server/ directory, run the `npm run dev` command. Now your server is running locally and connected to your database and AI services.
