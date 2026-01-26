import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync } from "node:fs";

type FileMap = Record<string, string>
type Payload = Record<string, unknown>;

function loadJsonFile(filePath: string): Payload {
    const raw = readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
}

export function loadFiles(files: FileMap): Payload {
    const payload: Payload = {};

    for(const [key, fileName] of Object.entries(files)) {
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = dirname(__filename)
        const path = join(__dirname, fileName);
        payload[key] = loadJsonFile(path);
    }

    return payload;
}