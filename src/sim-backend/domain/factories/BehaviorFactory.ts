import { WanderBehavior } from "../behaviors/WanderBehavior";

export class BehaviorFactory {
    static newWander() {
        return new WanderBehavior();
    }
}