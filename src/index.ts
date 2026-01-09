import { migrateDB } from "./sim-backend/infra/db/dbMigrate";
import { seedDB } from "./sim-backend/infra/db/dbSeed";
import { Engine } from "./sim-backend/application/Engine";

async function main() {
    // await migrateDB();
    // await seedDB();

    const simEngine = new Engine();
    simEngine.start({ simId: 'eeef97c3-6e32-4f8a-a04b-0ec3646eaefc', simName: 'seed'});
}

main();