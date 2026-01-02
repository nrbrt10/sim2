import { iBehavior } from "../../sim-types/Types";
import { behaviorRegistry } from "../domain/behaviors/BehaviorRegistry";
import { NormalizedBehavior } from "./types/application.types";

export class BehaviorBuilder {
    static createBehaviors(behaviors: NormalizedBehavior[]) {
        const behaviorMap: Map<string, iBehavior> = new Map();

        behaviors.forEach((behavior) => {
            const systemConfigKey: string = `${behavior.system}:${behavior.config}`;
            
            if (!Object.hasOwn(behaviorRegistry, systemConfigKey)) {
                console.warn(`Unrecognized system:config combination: ${systemConfigKey}`);
                return;
            }
            const builder = behaviorRegistry[systemConfigKey as keyof typeof behaviorRegistry];
            const newBehavior = builder();
            
            behaviorMap.set(behavior.system, newBehavior);
        });
        return behaviorMap;
    }
}