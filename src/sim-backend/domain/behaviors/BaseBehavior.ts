import type { iBehavior } from "../../../sim-types/Types";
import { WorldEntity } from "../entities/Entity";

export abstract class BaseBehavior implements iBehavior {
    abstract update(entity: WorldEntity): void;
}