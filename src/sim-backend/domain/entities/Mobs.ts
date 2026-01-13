import { WorldEntity } from "./Entity.js";
import type { iPosition, iBehavior } from "../../../sim-types/Types.js";

export class Mob extends WorldEntity {
    residence: string | null;
    spawned: boolean;

    constructor(args: { 
        id: string,
        name: string,
        ownerId: string,
        position: iPosition,
        residenceId: string | null,
        behaviors: Map<string, iBehavior>
    }) {
        super(args.id, args.name, args.ownerId, args.position, args.behaviors);
        this.residence = args.residenceId ? args.residenceId : null;
        this.spawned = false;
    }

    setMembership(settlementId: string) {
        this.residence = settlementId;
    }
}

