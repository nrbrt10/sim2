import { Player } from "./entities/Players";
import { Settlement } from "./entities/Settlements";
import { Mob } from "./entities/Mobs";
import { BaseEntity } from "./entities/Entity";
import { EntityBuilder } from "../application/EntityBuilder";
import { constructMobFromSim } from "../application/creation/MobFromSim";
import { MovementSystem } from "./systems/MovementSystem";
import { iSystem } from "../../sim-types/Types";

export class Sim extends BaseEntity{
    players: Map<string, Player>;
    settlements: Map<string, Settlement>;
    mobs: Map<string, Mob>;
    systems: iSystem[];

    pause: boolean;

    constructor(id: string, name: string) {
        super(id, name)
        this.players = new Map();
        this.settlements = new Map();
        this.mobs = new Map();
        this.systems = [
            new MovementSystem()
        ];

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
        const mobModel = constructMobFromSim(args);

        const { id, newMob } = EntityBuilder.createMob(mobModel);
        this.registerMob(newMob)
    }

    init() {
        console.log("Sim initialized.");
    }

    preTick() {

    }

    tick() {
        this.systems.forEach(system => system.update(this));
    }

    postTick() {

    }
}