import { iMob } from "../../../sim-types/SimData.types";
import { Behavior, iBehavior, iPosition, movementType } from "../../../sim-types/Types";
import { createUUID } from "../../../utils/createUUID";
import { getRandomInt } from "../../../utils/getRandomInt";
import { MobDTO } from "../../infra/models/MobDTO";
import { MobModel } from "../../infra/models/MobModel";
import { normalizeBehaviors } from "./BehaviorsIngest";

export function normalizeMobFromSim(args: {
    ownerId: string,
    position: iPosition
}): MobModel {
    const uuid = createUUID();
    const name = getRandomName();
    const behaviors: Behavior[] = [];
    behaviors.push({ system: 'movement', config: { type: 'wander' } })
    return { id: uuid, name: name, ownerId: args.ownerId, position: args.position, behaviors };
}

export function normalizeMobFromDB(args: {
    mobs: MobDTO[]
}): MobModel[] {
    const normalizedMobs: MobModel[] = [];
    args.mobs.forEach(mob => {
        const behaviors: Behavior[] = [];
        const b = mob.behaviors ? normalizeBehaviors(mob.behaviors) : behaviors.push({ system: 'movement', config: { type: 'wander' } });
        normalizedMobs.push({ id: mob.id, name: mob.name, ownerId: mob.player_id, position: { x: mob.x, y: mob.y }, behaviors })
    })
    return normalizedMobs;
}

function getRandomName(pool: readonly string[] = namePool): string {
    if (pool.length === 0) { throw new Error("Name pool is empty") };

    const name = pool[getRandomInt(pool.length)];
    if (name === undefined) { throw new Error("Random index out of bounds")}

    return name;
}

const namePool = [
    'Amirae',
    'Kalino',
    'Suryel',
    'Navira',
    'Talika',
    'Mirano',
    'Avenit',
    'Rishan',
    'Elora',
    'Sanika',
    'Valino',
    'Arjunel',
    'Kamira',
    'Devion',
    'Lirasa',
    'Aneto',
    'Samirae',
    'Rohil',
    'Nalira',
    'Varunet',
    'Rowan',
    'Caleb',
    'Thorne',
    'Miles',
    'Archer',
    'Nolan',
    'Everett',
    'Silas',
    'Grant',
    'Wesley',
    'Holden',
    'Beckett',
    'Logan',
    'Marshall',
    'Owen',
    'Fletcher',
    'Reid',
    'Dalton',
    'Sawyer',
    'Callum',
    'Joravio',
    'Maelco',
    'Bravio',
    'Stiago',
    'Arvando',
    'Luiken',
    'Roelio',
    'Karmel',
    'Davren',
    'Iñigoen',
    'Talco',
    'Mirten',
    'Xandor',
    'Elvaroen',
    'Renkel',
    'Sorell',
    'Marcio',
    'Velken',
    'Javiën',
    'Corluis'
] as const;