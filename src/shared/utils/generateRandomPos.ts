import { iPosition } from "../../sim-types/Types";
import { getRandomInt } from "./getRandomInt";

export function generateRandomPos(): iPosition {
    return {x: getRandomInt(50), y: getRandomInt(50) };
}