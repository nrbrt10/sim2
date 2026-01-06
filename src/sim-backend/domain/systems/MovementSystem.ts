import { iSystem } from "../../../sim-types/Types";
import { Sim } from "../Sim";

export class MovementSystem implements iSystem {
    update(sim: Sim) {
        sim.mobs.forEach((mob) => {
            mob.behaviors.get("movement")?.update(mob);
            console.log(`${mob.name} position: (${mob.position.x}, ${mob.position.y})`);
        });
    }
}