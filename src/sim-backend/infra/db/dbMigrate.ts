import { db } from "./dbConnector";
import { schema } from "./schema";

export function migrateDB() {
    for (const stmt of schema) {
        try {
            console.log("Running statement: ", stmt);
            db.exec(stmt);
        } catch (err) {
            console.log(err)
        }
    }
}