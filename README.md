# sim2

A small TypeScript-based simulation backend. The project provides basic simulation orchestration code (SimController, SimBuilder, repository/DB wiring) and uses SQLite (better-sqlite3) for persistence.

## Features
- TypeScript codebase
- Simple simulation controller with a tick loop
- DB-backed world data (uses better-sqlite3)
- Utilities for DB migration/seed (referenced in `src/index.ts`)

## Requirements
- Node 18+ (or recent Node that supports ES modules and performance.now)
- npm
- SQLite (database file used by better-sqlite3 — ensure you have access or run the migrations/seed scripts)

## Install
1. Clone the repo
2. Install dependencies
   ```bash
   npm install
   ```

## Development
Run the source directly with `tsx` (fast TypeScript runner used by this project):
```bash
npm run dev
```
This will run `tsx src/index.ts` as configured in `package.json`.

## Build & Run
Compile TypeScript to `dist/`:
```bash
npm run build
```
Start the compiled application:
```bash
npm start
# runs: node dist/index.js
```

## How it works (brief)
- Entry: `src/index.ts`
  - Contains commented calls to `migrateDB()` and `seedDB()` and an example start of `SimController`.
- `SimController` (`src/sim-backend/application/SimController.ts`)
  - Uses `SimRepository` to load world data, builds and initializes a `Sim`, then runs a tick loop.
  - The loop calls `sim.tick(dt)` and periodically logs a snapshot.
- Database
  - The project depends on `better-sqlite3`. Database migration/seed helpers are referenced in the codebase — run them before starting if you need initial data.

## Project structure (high level)
- src/
  - index.ts — entry point
  - sim-backend/
    - application/ — SimController, builders
    - domain/ — domain models (Sim, entities, behaviors)
    - infra/ — DB repo, migrations, seeds
  - sim-types/ & shared/ — types and shared utilities

## Notes & TODOs
- There are migration and seed helpers referenced in `src/index.ts`. Uncomment and run them if you need to setup the DB automatically.
- Add CLI/args or config file to avoid editing `src/index.ts` for different simulations.
- Add tests and CI.

## Dependencies
- runtime: better-sqlite3
- dev: typescript, tsx, @types/better-sqlite3

## License
This repository declares the `ISC` license in `package.json`.

Feel free to open an issue or a PR if you'd like the README expanded with setup instructions for the DB, examples of the simulation snapshot, or a CLI to start sims.
