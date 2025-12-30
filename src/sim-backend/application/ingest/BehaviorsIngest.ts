type Record = {
    string: any
}

type NormalizedBehavior = {
    system: string;
    config: unknown;
}

export function normalizeBehaviors(behaviors: string) {
    const rawBehaviors = extractBehaviors(behaviors);

    const normalizedBehaviors: NormalizedBehavior[] = Object.entries(rawBehaviors).map(([system, config]) => {
        return {
            system,
            config
        }
    });

    return normalizeBehaviors;
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