import { BaseBehavior } from "./BaseBehavior";
import { WorldEntity } from "../entities/Entity";

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
    const dX = getRandomNum();
    const dY = getRandomNum();

    entity.position.applyDelta(dX, dY);
  }
}

function getRandomNum() {
  return Math.random() * 2 - 1;
}