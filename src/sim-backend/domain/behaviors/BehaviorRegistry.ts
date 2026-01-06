import { OffensiveBehavior } from "./OffensiveBehavior";
import { ProductionBehavior } from "./ProductionBehavior";
import { WanderBehavior } from "./WanderBehavior";

export const behaviorRegistry = {
    "movement:wander":  () => { return new WanderBehavior() },
    "combat:offensive": () => { return new OffensiveBehavior() },
    "production:mob": () => { return new ProductionBehavior() }
} as const;