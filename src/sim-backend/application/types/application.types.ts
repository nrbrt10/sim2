import { iPosition } from "../../../sim-types/Types";

export type NormalizedBehavior = {
    system: string;
    config: string;
    params?: {}
}

export type SnapshotData = {
    players: playerData[],
    settlements: settlementData[],
    mobs: mobData[]
}

export type playerData = {
    id: string,
    name: string
}

export type settlementData = {
    id: string,
    name: string,
    ownerId: string,
    position: iPosition
}

export type mobData = {
    id: string,
    name: string,
    ownerId: string,
    position: iPosition
}

export type HSLColor = {
    h: number;
    s: number;
    l: number;
}