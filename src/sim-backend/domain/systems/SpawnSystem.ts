import { Mob } from "../entities/Mobs";
import { Player } from "../entities/Players";
import { Sim } from "../Sim";

export class SpawnSystem {
    simpleSpawn(args: {player: Player, mob: Mob}) {
        const settlement = args.player.settlements.entries().next().value?.[1];
        const spawnPos = settlement?.position;
    }
}