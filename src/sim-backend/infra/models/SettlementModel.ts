import { Behavior, iPosition, ProductionItem } from "../../../sim-types/Types";

export interface SettlementModel {
    id: string;
    ownerId: string;
    name: string;
    behaviors: Behavior[];
    productionQueue: ProductionItem[];
    position: iPosition;
}