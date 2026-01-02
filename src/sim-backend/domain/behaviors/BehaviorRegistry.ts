import { OffensiveBehavior } from "./OffensiveBehavior";
import { WanderBehavior } from "./WanderBehavior";

export const behaviorRegistry = {
    "movement:wander":  () => { return new WanderBehavior() },
    "combat:offensive": () => { return new OffensiveBehavior() },
} as const;