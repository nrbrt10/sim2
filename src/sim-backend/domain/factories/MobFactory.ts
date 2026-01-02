import { iBehavior, iPosition } from "../../../sim-types/Types";
import { Mob } from "../entities/Mobs";

export class MobFactory {
    static create(args: { id: string, name: string, ownerId: string, position: iPosition, behaviors: Map<string, iBehavior>, residenceId: string | null}) {
        const newMob = new Mob(args)
        return { id: args.id, newMob }
    }
}