import { getRandomInt } from "./getRandomInt";

export function generateHSLColorString() {
    const hue = getRandomInt(0, 360);
    const saturation = getRandomInt(0, 100);
    const lightness = getRandomInt(0, 100);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}