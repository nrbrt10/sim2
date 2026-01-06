import { iSystem } from "../../../sim-types/Types";
import { Sim } from "../Sim";

export class MovementSystem implements iSystem {
    update(dt: number, sim: Sim) {
        sim.mobs.forEach((mob) => {
            mob.behaviors.get("movement")?.update(dt, mob);           
        });
    }
}