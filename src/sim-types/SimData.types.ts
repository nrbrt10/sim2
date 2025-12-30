import { iPosition, dataSource } from "./Types";

export interface iPlayer {
    id: string;
    name: string;
}

export interface iSettlement {
    id: string;
    player_id: string;
    name: string;
    x: number;
    y: number;
    behaviors?: string;
    stats?: string;
}

export interface iMob {
    id: string;
    name: string;
    player_id: string;
    x: number;
    y: number;
    residence?: string;
    behaviors?: string;
}

export interface iSimData {
    type: dataSource;
    players: iPlayer[];
    settlements: iSettlement[];
    mobs: iMob[];
}

export type ProductionItem = {
    type: string;
    remainingTime: number;
}