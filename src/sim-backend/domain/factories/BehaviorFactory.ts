import { movementType } from "../../../sim-types/Types";
import { WanderBehavior } from "../behaviors/WanderBehavior";

export class BehaviorFactory {
    movement(type: movementType) {
        switch(type) {
            case movementType.wander: return new WanderBehavior();
        }
    }
}