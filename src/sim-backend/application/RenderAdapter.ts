import { generateHSLColorString } from "../../shared/utils/generateHSLColorString";
import { Position } from "../domain/value-objects/Position";
import { mobData, playerData, settlementData, SnapshotData } from "./types/application.types"



export class RenderAdapter {
    colorMap: Map<string, string> | null;

    constructor() {
        this.colorMap = null;
    }

    adaptSnapshot(args: SnapshotData) {
        if (!this.colorMap) { this.colorMap = new Map(args.players.map(player => [player.id, generateHSLColorString()])); }
        const players = this.adaptPlayers(args.players);
        const worldEntities = this.adaptWorldEntities({ settlements: args.settlements, mobs: args.mobs });

        return { players, worldEntities };
    }

    adaptPlayers(players: playerData[]) {
        return players.map(player => ({
                id: player.id,
                name: player.name,
                color: this.colorMap?.get(player.id)
        }));
    }

    adaptWorldEntities(args: { settlements: settlementData[], mobs: mobData[] }) {
        return [
            ...args.settlements.map(s => this.adaptSettlement(s)),
            ...args.mobs.map(m => this.adaptMob(m)),
        ]
    }

    adaptSettlement(settlement: settlementData) {
        return {
            renderData: {
                type: "triangle",
                size: 10,
                position: settlement.position,
                color: this.colorMap?.get(settlement.ownerId)
            },
            metaData: {
                id: settlement.id,
                name: settlement.name,
                ownerId: settlement.ownerId
            }
        };
    }

    adaptMob(mob: mobData) {
        return {
            renderData: {
                type: "rect",
                size: 10,
                position: mob.position,
                color: this.colorMap?.get(mob.ownerId)
            },
            metaData: {
                id: mob.id,
                name: mob.name,
                onwerId: mob.ownerId
            }
        };
    }
}