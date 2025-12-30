import { iSettlement } from "../../../sim-types/SimData.types";
import { createUUID } from "../../../utils/createUUID";
import { PlayerDTO } from "../../infra/models/PlayerDTO";

export function normalizeSettlementFromDB(args: {
    settlements: PlayerDTO[]
}) {
    return args.settlements;
}