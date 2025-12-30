import { Sim } from "../Sim";

export class ProductionSystem {
    update(sim: Sim, detlaTime: number) {
        sim.settlements.forEach((settlement) => {
            const item = settlement.productionQueue[0];
            if (!item) return;

            item.remainingTime -= detlaTime;
            
            if(item.remainingTime <= 0) {
                sim.spawnMob({ owner: settlement.ownerId!, source: settlement});
                settlement.productionQueue.shift();
            }
        });
    }
}