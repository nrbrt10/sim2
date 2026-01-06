import { ProductionItem } from "../../../sim-types/Types";
import { SettlementDTO } from "../../infra/models/SettlementDTO";
import { SettlementModel } from "../../infra/models/SettlementModel";
import { NormalizedBehavior } from "../types/application.types";
import { normalizeBehaviors } from "./BehaviorsFromDB";

export function normalizeSettlementFromDB(args: {
    settlements: SettlementDTO[]
}) {
    const normalizedStettlements: SettlementModel[] = [];
    args.settlements.forEach((settlement) => {
        let behaviors: NormalizedBehavior[] = [];
        const prodQueue: ProductionItem[] = [];
        if (settlement.behaviors) {
            behaviors = normalizeBehaviors(settlement.behaviors);
        } else {
            behaviors.push({ system: 'production', config: 'mob'});
        }
        if (!settlement.production_queue) {
            
        }
        normalizedStettlements.push({ id: settlement.id, name: settlement.name, ownerId: settlement.player_id, position: { x: Number(settlement.x), y: Number(settlement.y) }, behaviors: behaviors, productionQueue: prodQueue })
    });
    return normalizedStettlements;
}