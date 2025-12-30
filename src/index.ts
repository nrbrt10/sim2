import { migrateDB } from "./sim-backend/infra/db/dbMigrate";
import { seedDB } from "./sim-backend/infra/db/dbSeed";
import { Sim } from "./sim-backend/domain/Sim";
import { SimController } from "./sim-backend/application/SimController";
import { SimRepository } from "./sim-backend/infra/db/SimRepository";

async function main() {
    // await migrateDB();
    // await seedDB();

    const controller = new SimController();
    controller.start({ simId: 'eeef97c3-6e32-4f8a-a04b-0ec3646eaefc', simName: 'seed'});
}

main();