import { WorldEntity } from "./Entity.js";
import { Mob } from "./Mobs.js";
import type { iBehavior, iPosition, ProductionItem } from "../../../sim-types/Types.js";


export class Settlement extends WorldEntity {
    inhabitats: Map<string, Mob>;
    productionQueue: ProductionItem[];

    constructor(uuid: string, name: string, ownerId: string | null, position: iPosition, behaviors: Map<string, iBehavior>, productionQueue: ProductionItem[]) {
        super(uuid, name, ownerId, position, behaviors);
        this.name = name;
        this.inhabitats = new Map();
        this.productionQueue = productionQueue;
    }

    countPopulation() {
        return this.inhabitats.size;
    }
}