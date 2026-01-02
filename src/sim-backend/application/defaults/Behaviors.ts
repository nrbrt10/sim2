import { NormalizedBehavior } from "../types/application.types";


export function getMobBehaviorDefaults(): NormalizedBehavior[] {
    return mobDefaults;
}

const mobDefaults: NormalizedBehavior[] = [
    { system: 'movement', config: 'wander'}
]