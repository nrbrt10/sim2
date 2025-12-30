import { iBehavior, iPosition } from "../../../sim-types/Types";
import { Mob } from "../entities/Mobs";

export class MobFactory {
    static createMob(id: string, name: string, ownerId: string, position: iPosition, behaviors: Map<string, iBehavior>) {
        const newMob = new Mob({id, name, ownerId, position, behaviors})
        return { id, newMob }
    }
}