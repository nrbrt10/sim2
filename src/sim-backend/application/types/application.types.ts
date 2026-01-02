import { behaviorRegistry } from "../../domain/behaviors/BehaviorRegistry";

export type NormalizedBehavior = {
    system: string;
    config: string;
}

export type BehaviorConfig = {
    [key: string]: string;
}