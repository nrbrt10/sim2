import { Behavior } from "../../../sim-types/Types";

type Record = {
    string: any
}

export function normalizeBehaviors(behaviors: string) {
    const rawBehaviors = extractBehaviors(behaviors);

    const normalizedBehaviors: Behavior[] = Object.entries(rawBehaviors).map(([system, config]) => {
        return {
            system,
            config
        }
    });

    return normalizedBehaviors;
}

function extractBehaviors(behaviors: string) {
    let rawBehaviors: unknown;
    if (behaviors) {
        rawBehaviors = JSON.parse(behaviors);
    } else {
        rawBehaviors = {};
    }
    
    return rawBehaviors as Record;
}