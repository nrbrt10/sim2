import { SimFactory } from "../domain/factories/SimFactory";
import { Sim } from "../domain/Sim";
import { SimDataDTO } from "../infra/models/SimData";
import { EntityBuilder } from "./EntityBuilder";

export class SimBuilder {
    static initSim(simId: string, simData: SimDataDTO) {
        const { id, newSim } = SimFactory.createSim(simId, simId);
        const { playerEntities, settlementEntities, mobEntities } = EntityBuilder.buildInitialState(simData);
        newSim.players = playerEntities;
        newSim.settlements = settlementEntities;
        newSim.mobs = mobEntities;
        this.registerPlayerSettlements({ sim: newSim });
        this.registerPlayerMobs({ sim: newSim });

        return newSim;
    }

    static registerPlayerSettlements(args: { sim: Sim }) {
        args.sim.settlements.forEach((settlement) => {
            args.sim.registerSettlement(settlement);
        });
    }

    static registerPlayerMobs(args: { sim: Sim }) {
        args.sim.mobs.forEach((mob) => {
            args.sim.registerMob(mob);
        });
    }
}