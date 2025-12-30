import Database from "better-sqlite3";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = join(__dirname, 'sim.db');

export const db: InstanceType<typeof Database> = new Database(
    dbPath,
    { verbose: console.log }
);
db.pragma("foreign_keys = ON;");

console.log("SQLite DB created.");