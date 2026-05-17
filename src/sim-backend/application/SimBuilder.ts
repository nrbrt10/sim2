import { Mob } from "../domain/entities/Mobs";
import { Player } from "../domain/entities/Players";
import { Settlement } from "../domain/entities/Settlements";
import { SimFactory } from "../domain/factories/SimFactory";
import { Sim } from "../domain/Sim";
import { SimDataDTO } from "../infra/models/SimDataDTO";
import { EntityBuilder } from "./EntityBuilder";

export class SimBuilder {
    static initSim(simId: string, simData: SimDataDTO) {
        const { id, newSim } = SimFactory.createSim(simId, simId);
        const { playerEntities, settlementEntities, mobEntities } = EntityBuilder.buildInitialState(simData);
        this.registerPlayers({ sim: newSim, players: playerEntities });
        this.registerSettlements({ sim: newSim, settlements: settlementEntities });
        this.registerMobs({ sim: newSim, mobs: mobEntities });

        return newSim;
    }

    static registerPlayers(args: { sim: Sim, players: Map<string, Player>}) {
        args.players.forEach(player => args.sim.registerPlayer(player));
        }

    static registerSettlements(args: { sim: Sim, settlements: Map<string, Settlement> }) {
        args.settlements.forEach((settlement) => {
            args.sim.registerSettlement(settlement);
        });
    }

    static registerMobs(args: { sim: Sim, mobs: Map<string, Mob> }) {
        args.mobs.forEach((mob) => {
            args.sim.registerMob(mob);
        });
    }
}