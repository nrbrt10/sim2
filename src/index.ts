import { SimController } from "./sim-backend/application/SimController";

async function main() {
    const controller = new SimController();
    controller.start({ simId: 'eeef97c3-6e32-4f8a-a04b-0ec3646eaefc', simName: 'seed'});
}

main();