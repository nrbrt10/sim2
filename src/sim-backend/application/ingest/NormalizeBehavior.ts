import { NormalizedBehavior } from "../types/application.types";

type rawBehaviorMap = {
    [system: string]: { config: string, params?: {} }
}

type Payload = {
    system: string, config: string, params?: {}
}

export function normalizeBehaviors(behaviors: string) {
    const rawBehaviors = extractBehaviors(behaviors);

    const normalizedBehaviors: NormalizedBehavior[] = Object.entries(rawBehaviors).map(([system, config]) => {
        const payload: Payload = {
            system: system,
            config: config.config
        }
        if (config.params) { payload["params"] = config.params; }
        return payload;
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
    
    return rawBehaviors as rawBehaviorMap;
}