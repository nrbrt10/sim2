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

export enum movementType {
    wander = 'wander',
    path = 'path'
}

export enum combatStance {
    offensive = 'offensife',
    defensive = 'defensive'
}

export type Behavior = {
    system: string;
    config: BehaviorConfig;
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