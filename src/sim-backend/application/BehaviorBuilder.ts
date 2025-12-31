import { Behavior, BehaviorConfig, iBehavior } from "../../sim-types/Types";
import { BehaviorFactory } from "../domain/factories/BehaviorFactory";

export class BehaviorBuilder {
    static createBehaviors(behaviors: Behavior[]) {
        const behaviorMap: Map<string, iBehavior> = new Map();

        behaviors.forEach((behavior) => {
            switch (behavior.system) {
                case 'movement':
                    behaviorMap.set(behavior.system, this.movement(behavior.config) as iBehavior);
            }
        });

        return behaviorMap;
    }
    
    private static movement(config: BehaviorConfig) {
        switch (config.key) {
            case 'wander':
                return BehaviorFactory.newWander();
        }
    }
}