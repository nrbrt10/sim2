import { SimRepository } from "../infra/db/SimRepository";
import { Sim } from "../domain/Sim";
import { SimBuilder } from "./SimBuilder";
import { createUUID } from "../../shared/utils/generateUUID";

export class SimController {

    constructor(
        private readonly repo: SimRepository = new SimRepository(),
        private sim: Sim | null = null
    ) {}

    start(args: { simId: string, simName?: string }) {
        const data = this.repo.getWorldData(args.simId);
        this.sim = SimBuilder.initSim(args.simId, data);
    }

    update() {

    }
}

