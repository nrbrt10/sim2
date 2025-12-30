import { iPosition } from "../../../sim-types/Types";
import { createUUID } from "../../../utils/createUUID";
import { Settlement } from "../entities/Settlements";

export class SettlementFactory {
    static createSettlement(id: string, name: string, ownerUUID: string | null, position: iPosition) {
        const newSettlement = new Settlement(id, name, ownerUUID, position);
        return { id, newSettlement };
    }
}