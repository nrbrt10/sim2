import { PlayerModel } from "../../infra/models/PlayerModel";
import { PlayerDTO } from "../../infra/models/PlayerDTO";

export function normalizePlayerFromDB(args: {
    players: PlayerDTO[]
}) {
    const players: PlayerModel[] = [];
    args.players.forEach((playerDTO) => {
        const playerModel: PlayerModel = {id: playerDTO.id, name: playerDTO.name}
        players.push(playerModel);
    })

    return players;
}