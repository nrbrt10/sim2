const simsTable = `
CREATE TABLE IF NOT EXISTS sims (
id TEXT PRIMARY KEY,
name TEXT UNIQUE,
created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`

const playersTable = `
CREATE TABLE IF NOT EXISTS players (
id TEXT PRIMARY KEY,
sim_id TEXT,
name TEXT,
active INTEGER,
created_at TEXT DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (sim_id) REFERENCES sims(id)
);
`

const settlementsTable = `
CREATE TABLE IF NOT EXISTS settlements (
id TEXT PRIMARY KEY,
player_id TEXT,
name TEXT,
behaviors BLOB,
production_queue BLOB,
stats BLOB,
x TEXT,
y TEXT,
created_at TEXT DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (player_id) REFERENCES players(id)
);
`

const mobsTable = `
CREATE TABLE IF NOT EXISTS mobs (
id TEXT PRIMARY KEY,
player_id TEXT,
settlement_id TEXT,
name TEXT,
behaviors BLOB,
stats BLOB,
x TEXT,
y TEXT,
created_at TEXT DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (player_id) REFERENCES players(id)
);
`

const worldStateTable = `
CREATE TABLE IF NOT EXISTS world_state (
id TEXT PRIMARY KEY,
sim_id TEXT
map_id TEXT
data BLOB
created_at TEXT DEFAULT CURRENT_TIMESTAMP
FOREIGN KEY (sim_id) REFERENCES sims(id)
FOREIGN KEY (map_id) REFERENCES maps(id)
);
`

const mapsTable=`
CREATE TABLE IF NOT EXISTS maps (
id TEXT PRIMARY KEY,
data BLOB,
created_at TEXT DEFAULT CURRENT_TIMESTAMP
)
`

export const schema = [
    simsTable,
    playersTable,
    settlementsTable,
    mobsTable
]