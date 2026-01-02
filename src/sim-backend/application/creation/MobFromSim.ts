import { generateRandomPos } from "../../../shared/utils/generateRandomPos";
import { generateUUID } from "../../../shared/utils/generateUUID";
import { getRandomName } from "../../../shared/utils/getRandomName";
import { iPosition } from "../../../sim-types/Types";
import { Settlement } from "../../domain/entities/Settlements";
import { MobModel } from "../../infra/models/MobModel";
import { getMobBehaviorDefaults } from "../defaults/Behaviors";
import { NormalizedBehavior } from "../types/application.types";

export function constructMobFromSim(args: { ownerId: string, source?: Settlement }): MobModel {
    const id: string = generateUUID();
    const name: string = getRandomName();
    const position: iPosition = args.source ? args.source.position : generateRandomPos();
    const behaviors: NormalizedBehavior[] = getMobBehaviorDefaults();
    const residenceId: string | null = args.source ? args.source.id : null;
    
    return { id, name, ownerId: args.ownerId, position, behaviors, residenceId }
}