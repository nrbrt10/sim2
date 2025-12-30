import { Sim } from "../Sim";

export class SimFactory {
    static createSim(id: string, name: string) {
        const newSim = new Sim(id, name);
        return { id, newSim};
    }
}