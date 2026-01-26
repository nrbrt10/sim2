import { MobDTO } from "../../infra/models/MobDTO";
import { MobModel } from "../../infra/models/MobModel";
import { getMobBehaviorDefaults } from "../defaults/Behaviors";
import { NormalizedBehavior } from "../types/application.types";
import { normalizeBehaviors } from "./NormalizeBehavior";


export function normalizeMobFromDB(args: {
    mobs: MobDTO[]
}): MobModel[] {
    const normalizedMobs: MobModel[] = [];
    args.mobs.forEach(mob => {
        let behaviors: NormalizedBehavior[] = [];
        if (mob.behaviors) {
            behaviors = normalizeBehaviors(mob.behaviors);
        } else {
            behaviors = getMobBehaviorDefaults();
        }
        normalizedMobs.push({ id: mob.id, name: mob.name, ownerId: mob.player_id, position: { x: Number(mob.x), y: Number(mob.y) }, behaviors, residenceId: mob.settlement_id })
    })
    return normalizedMobs;
}