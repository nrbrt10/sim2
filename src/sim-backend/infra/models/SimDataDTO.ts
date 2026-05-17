import { dataSource } from "../../../sim-types/Types";
import { MobDTO } from "./MobDTO";
import { PlayerDTO } from "./PlayerDTO";
import { SettlementDTO } from "./SettlementDTO";

export interface SimDataDTO {
    type: dataSource;
    players: PlayerDTO[];
    settlements: SettlementDTO[];
    mobs: MobDTO[];
    map?: unknown
}