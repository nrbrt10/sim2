import { iPosition, ProductionItem } from "../../../sim-types/Types";
import { NormalizedBehavior } from "../../application/types/application.types";

export interface SettlementModel {
    id: string;
    ownerId: string;
    name: string;
    behaviors: NormalizedBehavior[];
    productionQueue: ProductionItem[];
    position: iPosition;
}