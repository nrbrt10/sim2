import { behaviorRegistry } from "../sim-backend/domain/behaviors/BehaviorRegistry";
import type { WorldEntity } from "../sim-backend/domain/entities/Entity"

export interface iPosition {
    x: number,
    y: number
}

export interface iBehavior {
    update(entity: WorldEntity): void;
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

type systems = keyof typeof behaviorRegistry;

export type NormalizedBehavior = {
    system: string;
    config: string;
}

export type BehaviorConfig = {
    [key: string]: string;
}

export type ProductionItem = {
    type: string;
    cost: ResourceCost;
}

export type ResourceCost = {
    time: number;
}