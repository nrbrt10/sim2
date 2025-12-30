import { WorldEntity } from "./Entity.js";
import { Mob } from "./Mobs.js";
import type { iPosition } from "../../../sim-types/Types.js";
import type { Player } from "./Players.js";
import { ProductionItem } from "../../../sim-types/SimData.types.js";

export class Settlement extends WorldEntity {
    inhabitats: Map<string, Mob>;
    productionQueue: ProductionItem[];

    constructor(uuid: string, name: string, ownerUUID: string | null, position: iPosition) {
        super(uuid, name, ownerUUID, position, new Map());
        this.name = name;
        this.inhabitats = new Map();
        this.productionQueue = [];
    }

    countPopulation() {
        return this.inhabitats.size;
    }
}