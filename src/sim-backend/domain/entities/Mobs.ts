import { WorldEntity } from "./Entity.js";
import type { iPosition, iBehavior } from "../../../sim-types/Types.js";
import { Position } from "../value-objects/Position.js";

export class Mob extends WorldEntity {
    residence: string | null;
    spawned: boolean;

    constructor(args: {id: string, name: string, ownerId: string | null, position: iPosition, residence?: string, behaviors: Map<string, iBehavior>}) {
        super(args.id, args.name, args.ownerId, args.position, args.behaviors);
        this.residence = args.residence ? args.residence : null;
        this.spawned = false;
    }

    setMembership(settlementId: string) {
        this.residence = settlementId;
    }
}

