import { iBehavior, iPosition, ProductionItem } from "../../../sim-types/Types";
import { Settlement } from "../entities/Settlements";

export class SettlementFactory {
    static createSettlement(id: string, name: string, ownerId: string, position: iPosition, behaviors: Map<string, iBehavior>, productionQueue: ProductionItem[]) {
        const newSettlement = new Settlement(id, name, ownerId, position, behaviors, productionQueue);
        return { id, newSettlement };
    }
}