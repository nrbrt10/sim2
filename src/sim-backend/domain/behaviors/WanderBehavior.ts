import { BaseBehavior } from "./BaseBehavior";
import { WorldEntity } from "../entities/Entity";
import { getRandomInt } from "../../../shared/utils/getRandomInt";

export class WanderBehavior extends BaseBehavior {
  moves: boolean;

  constructor() {
    super();
    this.moves = true;
  }

  update(dt: number, entity: WorldEntity) {
    this.randomMove(dt, entity);
  }

  randomMove(dt: number, entity: WorldEntity) {
    const dX = getRandomInt(0, 2) * dt;
    const dY = getRandomInt(0, 2) * dt;

    entity.position.applyDelta(dX, dY)
  }
}