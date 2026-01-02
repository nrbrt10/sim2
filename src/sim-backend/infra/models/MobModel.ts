import { iPosition } from "../../../sim-types/Types";
import { NormalizedBehavior } from "../../application/types/application.types";


export interface MobModel {
    id: string,
    name: string,
    ownerId: string,
    position: iPosition;
    residenceId: string | null;
    behaviors: NormalizedBehavior[];
}