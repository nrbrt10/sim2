import { Behavior, iPosition } from "../../../sim-types/Types";

export interface MobModel {
    id: string,
    name: string,
    ownerId: string,
    position: iPosition;
    residence?: string;
    behaviors: Behavior[];
}