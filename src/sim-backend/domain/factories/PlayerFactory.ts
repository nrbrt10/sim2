import { Player } from "../entities/Players";

export class PlayerFactory {
    static createPlayer(id: string, name: string) {
        const newPlayer = new Player(id, name);
        return { id, newPlayer };
    }
}