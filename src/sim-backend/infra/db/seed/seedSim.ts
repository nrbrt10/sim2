import { createUUID } from "../../../../utils/createUUID"

const simId = createUUID();

export const simSeed = `
INSERT INTO sims
(id, name)
VALUES
('${simId}', 'seed')
`;

const playerIdIven = createUUID();
const playerIdRohan = createUUID();
const playerIdMark = createUUID();

export const playersSeed = `
INSERT INTO players
(id, sim_id, name, active)
VALUES
('${playerIdIven}', '${simId}', 'Iven', 1),
('${playerIdRohan}', '${simId}', 'Rohan', 1),
('${playerIdMark}', '${simId}', 'Mark', 1)
`

const settlementIdAlecjo = createUUID();
const settlementIdAltaSolejo = createUUID();
const settlementIdEthelmere = createUUID();

export const settlementsSeed = `
INSERT INTO settlements
(id, player_id, name, x, y)
VALUES
('${settlementIdAlecjo}','${playerIdIven}', 'Alecjo', 100, 0),
('${settlementIdAltaSolejo}','${playerIdRohan}', 'AltaSolejo', 0, 100),
('${settlementIdEthelmere}','${playerIdMark}','Ethelmere', 250, 250)
`;

const neeraId = createUUID();
const tenguId = createUUID();
const luquinId = createUUID();

const behavior = {
    movement: { type: 'wander' },
    combat: {stance: 'offensive'}
};
const serialized = JSON.stringify(behavior);

export const mobsSeed = `
INSERT INTO mobs
(id, player_id, settlement_id, name, x, y, behaviors)
VALUES
('${neeraId}', '${playerIdIven}', '${settlementIdAlecjo}', 'Neera', 100, 0, '${serialized}'),
('${tenguId}', '${playerIdRohan}', '${settlementIdAltaSolejo}', 'Tengu', 100, 0, null),
('${luquinId}', '${playerIdMark}', '${settlementIdEthelmere}', 'Luquin', 250, 250, null)
`;

