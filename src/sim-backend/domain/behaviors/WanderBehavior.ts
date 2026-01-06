import { BaseBehavior } from "./BaseBehavior";
import { WorldEntity } from "../entities/Entity";
import { getRandomInt } from "../../../shared/utils/getRandomInt";

export class WanderBehavior extends BaseBehavior {
  moves: boolean;

  constructor() {
    super();
    this.moves = true;
  }

  update(entity: WorldEntity) {
    this.randomMove(entity);
  }

  randomMove(entity: WorldEntity) {
    const dX = getRandomInt(0, 2);
    const dY = getRandomInt(0, 2);

    entity.position.applyDelta(dX, dY)
  }
}