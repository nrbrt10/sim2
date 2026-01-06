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
    const dX = getRandomInt(-1, 1);
    const dY = getRandomInt(-1, 1);

    entity.position.x += dX;
    entity.position.y += dY;
  }
}

function getRandomNum() {
  return Math.random() * 2 - 1;
}