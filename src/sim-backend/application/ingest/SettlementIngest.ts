import { Behavior, ProductionItem } from "../../../sim-types/Types";
import { SettlementDTO } from "../../infra/models/SettlementDTO";
import { SettlementModel } from "../../infra/models/SettlementModel";
import { normalizeBehaviors } from "./BehaviorsIngest";

export function normalizeSettlementFromDB(args: {
    settlements: SettlementDTO[]
}) {
    const normalizedStettlements: SettlementModel[] = [];
    args.settlements.forEach((settlement) => {
        let behaviors: Behavior[] = [];
        const prodQueue: ProductionItem[] = [];
        if (settlement.behaviors) {
            behaviors = normalizeBehaviors(settlement.behaviors);
        } else {
            behaviors.push({ system: 'production', config: { type: 'mob' }});
        }
        if (!settlement.production_queue) {
            
        }
        normalizedStettlements.push({ id: settlement.id, name: settlement.name, ownerId: settlement.player_id, position: { x: settlement.x, y: settlement.y }, behaviors: behaviors, productionQueue: prodQueue })
    });
    return normalizedStettlements;
}