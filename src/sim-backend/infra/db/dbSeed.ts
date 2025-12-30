import { db } from "./dbConnector";
import { mobsSeed, playersSeed, settlementsSeed, simSeed } from "./seed/seedSim";


export function seedDB() {
    const seedData = [
        simSeed,
        playersSeed,
        settlementsSeed,
        mobsSeed
    ] 

    seedData.forEach((sql) => {
        try {
            console.log("Executing query: ", sql);
            db.exec(sql);
        } catch (err) {
            console.log("Encountered error: ", err);
        }
    })
}