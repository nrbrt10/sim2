import { iBehavior, iPosition } from "../../sim-types/Types";
import { Mob } from "../domain/entities/Mobs";
import { Player } from "../domain/entities/Players";
import { Settlement } from "../domain/entities/Settlements";
import { MobFactory } from "../domain/factories/MobFactory";
import { PlayerFactory } from "../domain/factories/PlayerFactory";
import { SettlementFactory } from "../domain/factories/SettlementFactory";
import { MobModel } from "../infra/models/MobModel";
import { PlayerModel } from "../infra/models/PlayerModel";
import { SettlementModel } from "../infra/models/SettlementModel";
import { SimDataDTO } from "../infra/models/SimData";
import { BehaviorBuilder } from "./BehaviorBuilder";
import { normalizeMobFromSim, normalizeMobFromDB } from "./ingest/MobIngest";
import { normalizePlayerFromDB } from "./ingest/PlayerIngest";
import { normalizeSettlementFromDB } from "./ingest/SettlementIngest";

export class EntityBuilder {
    static buildInitialState(data: SimDataDTO) {
        console.log("Building initial state.");
        const { players, settlements, mobs } = this.fromDB(data);
        return { playerEntities: players, settlementEntities: settlements, mobEntities: mobs};
    }

    private static fromDB(data: SimDataDTO) {
        console.log("Creating world entities");
        const normalizedMobs = normalizeMobFromDB({ mobs: data.mobs });
        const normalizedSettlements = normalizeSettlementFromDB({ settlements: data.settlements})
        const normalizedPlayers = normalizePlayerFromDB( { players: data.players });

        const createdPlayers = this.createPlayers({ players: normalizedPlayers });
        const createdSettlements = this.createSettlements({ settlements: normalizedSettlements });
        const createdMobs = this.createMobs({ mobs: normalizedMobs });

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
        settlements: SettlementModel[]
    }) {
        const createdSettlements: Map<string, Settlement> = new Map();

        options.settlements.forEach((row) => {
            const behaviorMap: Map<string, iBehavior> = BehaviorBuilder.createBehaviors(row.behaviors);
            const { id, newSettlement } = SettlementFactory.createSettlement(row.id, row.name, row.ownerId, row.position, behaviorMap, row.productionQueue);
            createdSettlements.set(id, newSettlement);
        });
        return createdSettlements;
    }

    static createMobs( options: {
        mobs: MobModel[]
    }) {
        const createdMobs: Map<string, Mob> = new Map();

        options.mobs.forEach((row) => {
            const behaviorMap: Map<string, iBehavior> = BehaviorBuilder.createBehaviors(row.behaviors);
            const { id, newMob } = MobFactory.createMob(row.id, row.name, row.ownerId, row.position, behaviorMap);
            createdMobs.set(id, newMob);
        });
        return createdMobs;
    }

    static createMob(args: { ownerId: string, position: iPosition}) {
        const { id, name, ownerId, position, behaviors} = normalizeMobFromSim(args);
        //const behaviorInstances = BehaviorBuilder.createBehaviors();
        //return MobFactory.createMob(id, name, ownerId, position, behaviorInstances);
    }
}