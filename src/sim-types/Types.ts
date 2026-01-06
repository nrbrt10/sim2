import { behaviorRegistry } from "../sim-backend/domain/behaviors/BehaviorRegistry";
import type { WorldEntity } from "../sim-backend/domain/entities/Entity"
import { Sim } from "../sim-backend/domain/Sim";

export interface iPosition {
    x: number,
    y: number
}

export interface iBehavior {
    update(dt: number, entity: WorldEntity): void;
}

export interface iSystem {
    update(dt: number, sim: Sim): void;
}

export enum dataSource {
    world,
    seed,
    api
}

export enum entityType {
    player,
    settlement,
    mob
}

export type ProductionItem = {
    type: string;
    cost: ResourceCost;
}

export type ResourceCost = {
    time: number;
}