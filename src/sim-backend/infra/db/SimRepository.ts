import { dataSource } from "../../../sim-types/Types";
import { MobDTO } from "../models/MobDTO";
import { PlayerDTO } from "../models/PlayerDTO";
import { SettlementDTO } from "../models/SettlementDTO";
import { db } from "./dbConnector";

export class SimRepository {

    simIdExists(simId: string) {
        const stmt = db.prepare('SELECT 1 FROM sims s WHERE s.id = @id;');
        const row = stmt.get({ id: simId });
        return !!row
    }

    findIdByName(simName: string) {
        const stmt = db.prepare('SELECT s.id FROM sims s where s.name = @name;');
        const row = stmt.get({ name: simName });
        return row;
    }

    private getPlayers(simId: string): PlayerDTO[] {
        const stmt = db.prepare('SELECT p.id, p.name FROM players p WHERE p.sim_id = @simId;')
        const rows = stmt.all({ simId }) as PlayerDTO[];
        return rows;
    }

    private getSettlemets(playerIds: string[]): SettlementDTO[] {
        const stmt = db.prepare(`SELECT s.id, s.player_id, s.name, s.x, s.y, s.behaviors, s.stats FROM settlements s WHERE s.player_id IN (${getPlaceholders(playerIds)})`);
        const rows = stmt.all(...playerIds) as SettlementDTO[];
        return rows;
    }

    private getMobs(playerIds: string[]): MobDTO[] {
        const stmt = db.prepare(`SELECT m.id, m.player_id, m.name, m.x, m.y, m.behaviors FROM mobs m WHERE m.player_id in (${getPlaceholders(playerIds)})`);
        const rows = stmt.all(...playerIds) as MobDTO[];
        return rows;
    }

    private extractPlayerIds(players: PlayerDTO[]) {
        return players.map(player => player.id);
    }

    getWorldData(args: { simId: string, simName?: string }) {
        if (!this.simIdExists(args.simId)) { throw new Error("Invalid simId")};

        const playersDTO = this.getPlayers(args.simId);
        const playerIds = this.extractPlayerIds(playersDTO)
        const settlementsDTO = this.getSettlemets(playerIds);
        const mobsDTO = this.getMobs(playerIds);

        return { type: dataSource.world, players: playersDTO, settlements: settlementsDTO, mobs: mobsDTO }
    }
}

function getPlaceholders(arr: any[]) {
    return arr.map(() => '?').join(', ');
}