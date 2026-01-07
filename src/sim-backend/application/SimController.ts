import { SimRepository } from "../infra/db/SimRepository";
import { Sim } from "../domain/Sim";
import { SimBuilder } from "./SimBuilder";

export class SimController {
    private lastTime = 0;
    private running = false;
    private tickCount = 0;

    constructor(
        private readonly repo: SimRepository = new SimRepository(),
        private sim: Sim | null = null
    ) {}

    start(args: { simId: string, simName?: string }) {
        const data = this.repo.getWorldData({ simId: args.simId });
        this.sim = SimBuilder.initSim(args.simId, data);
        this.sim.init();
        
        this.running = true;
        this.lastTime = performance.now();
        this.loop();

    }

    stop() {
        this.running = false;
    }

    publishWorldState() {
        return this.sim?.getSnapshot();
    }

    private loop = () => {
        if (!this.sim) return;
        if (!this.running) return;

        const now = performance.now();
        const dt = (now - this.lastTime) / 1000;
        this.lastTime = now;
        this.tickCount++;

        this.sim.tick(dt);
        
        if (this.tickCount % 10 ===0) {
            console.log(this.sim.getSnapshot());
        }

        setTimeout(this.loop, 100);
    }
}

export function snapshotAPI(simControllerInstance: SimController) {
    getSnapshot: () => simControllerInstance.publishWorldState();
}