import { BaseEntity } from "./Entity.js";
import { Mob } from "./Mobs.js";
import { Settlement } from "./Settlements.js";

export class Player extends BaseEntity {
    settlements: Map<string, Settlement>;
    mobs: Map<string, Mob>;

    constructor(uuid: string, name: string) {
        super(uuid, name);
        this.settlements = new Map();
        this.mobs = new Map();
    }
}