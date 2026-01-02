import { behaviorRegistry } from "../BehaviorRegistry";

export type BehaviorSystem = keyof typeof behaviorRegistry;

export type BehaviorConfig<S extends BehaviorSystem> = keyof typeof behaviorRegistry[S];