import { iPosition } from "../../sim-types/Types";
import { Mob } from "../domain/entities/Mobs";
import { Player } from "../domain/entities/Players";
import { Settlement } from "../domain/entities/Settlements";
import { PlayerFactory } from "../domain/factories/PlayerFactory";
import { SettlementFactory } from "../domain/factories/SettlementFactory";
import { MobDTO } from "../infra/models/MobDTO";
import { PlayerDTO } from "../infra/models/PlayerDTO";
import { PlayerModel } from "../infra/models/PlayerModel";
import { SettlementDTO } from "../infra/models/SettlementDTO";
import { SimDataDTO } from "../infra/models/SimData";
import { BehaviorBuilder } from "./BehaviorBuilder";
import { normalizeMobFromSim, normalizeMobFromDB } from "./ingest/MobIngest";
import { normalizePlayerFromDB } from "./ingest/PlayerIngest";

export class EntityBuilder {
    static buildInitialState(data: SimDataDTO) {
        console.log("Building initial state.");
        const { players, settlements, mobs } = this.fromDB(data);
        return { playerEntities: players, settlementEntities: settlements, mobEntities: mobs};
    }

    private static fromDB(data: SimDataDTO) {
        console.log("Creating world entities");
        const normalizedMobs = normalizeMobFromDB({ mobs: data.mobs });
        const normalizedPlayers = normalizePlayerFromDB( { players: data.players });

        const createdPlayers = this.createPlayers({ players: normalizedPlayers });
        const createdSettlements = this.createSettlements({ settlements: data.settlements });
        const createdMobs = this.createMobs({ mobs: data.mobs });

        return { players: createdPlayers, settlements: createdSettlements, mobs: createdMobs }
    }

    static createPlayers(options: {
        players: PlayerModel[]
    }) {
        const createdPlayers: Map<string, Player> = new Map();
        options.players.forEach((row) => {
            const { id, newPlayer } = PlayerFactory.createPlayer(row.id, row.name);
            createdPlayers.set(id, newPlayer);
        });
        return createdPlayers;
    }

    static createSettlements( options: {
        settlements: SettlementDTO[]
    }) {
        const createdSettlements: Map<string, Settlement> = new Map();

        options.settlements.forEach((row) => {
            const { id, newSettlement } = SettlementFactory.createSettlement(row.id, row.name, row.player_id, { x: row.x, y: row.y });
            createdSettlements.set(id, newSettlement);
        });
        return createdSettlements;
    }

    static createMobs( options: {
        mobs: MobDTO[]
    }) {
        const createdMobs: Map<string, Mob> = new Map();

        options.mobs.forEach((row) => {
        });
        return createdMobs;
    }

    static createMob(args: { ownerId: string, position: iPosition}) {
        const { id, name, ownerId, position, behaviors} = normalizeMobFromSim(args);
        //const behaviorInstances = BehaviorBuilder.createBehaviors();
        //return MobFactory.createMob(id, name, ownerId, position, behaviorInstances);
    }
}