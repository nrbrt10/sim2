import { SimRepository } from "../infra/db/SimRepository";
import { Sim } from "../domain/Sim";
import { SimBuilder } from "./SimBuilder";

export class SimController {

    constructor(
        private readonly repo: SimRepository = new SimRepository(),
        private sim: Sim | null = null
    ) {}

    start(args: { simId: string, simName?: string }) {
        const data = this.repo.getWorldData({ simId: args.simId });
        this.sim = SimBuilder.initSim(args.simId, data);
        this.sim.init();
        this.update();
    }

    update() {
        this.sim?.preTick();
        this.sim?.tick();
        this.sim?.postTick();
        this.update();
    }
}