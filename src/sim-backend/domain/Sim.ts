import { Player } from "./entities/Players";
import { Settlement } from "./entities/Settlements";
import { Mob } from "./entities/Mobs";
import { BaseEntity } from "./entities/Entity";
import { SpawnSystem } from "./systems/SpawnSystem";
import { EntityBuilder } from "../application/EntityBuilder";
import { iPosition } from "../../sim-types/Types";
import { constructMobFromSim } from "../application/creation/MobFromSim";

export class Sim extends BaseEntity{
    players: Map<string, Player>;
    settlements: Map<string, Settlement>;
    mobs: Map<string, Mob>;
    spawnSystem: SpawnSystem;
    pause: boolean;

    constructor(id: string, name: string) {
        super(id, name)
        this.players = new Map();
        this.settlements = new Map();
        this.mobs = new Map();
        this.spawnSystem = new SpawnSystem();

        this.pause = false;        
    }

    registerPlayer(player: Player) {
        this.players.set(player.id, player);
    }

    registerSettlement(settlement: Settlement) {
        this.settlements.set(settlement.id, settlement);

        if (!settlement.ownerId) { throw new Error('Null Settlement ownerId') };
        const player = this.players.get(settlement.ownerId);
        player?.settlements.set(settlement.id, settlement);
    }

    registerMob(mob: Mob) {
        this.mobs.set(mob.id, mob);

        if (!mob.ownerId) { throw new Error('Null Mob ownerId') };
        const player = this.players.get(mob.ownerId);
        player?.mobs.set(mob.id, mob);
    }

    requestMob(args: { ownerId: string, source?: Settlement}) {
        const payload = constructMobFromSim(args);

        const { id, newMob } = EntityBuilder.createMob(payload);
        this.registerMob(newMob)
    }

    init() {

    }

    update() {

    }
}