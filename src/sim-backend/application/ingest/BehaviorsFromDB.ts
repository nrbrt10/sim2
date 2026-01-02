import { NormalizedBehavior } from "../types/application.types";


type Record = {
    string: any
}

export function normalizeBehaviors(behaviors: string) {
    const rawBehaviors = extractBehaviors(behaviors);

    const normalizedBehaviors: NormalizedBehavior[] = Object.entries(rawBehaviors).map(([system, config]) => {
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