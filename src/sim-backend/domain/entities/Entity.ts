import type { iBehavior, iPosition } from "../../../sim-types/Types.js";
import { Position } from "../value-objects/Position.js";
import { Player } from "./Players.js";
import { Sim } from "../Sim.js";

export class BaseEntity {
  name: string;
  id: string;

  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;
  }

  getId() {
    return this.id;
  }
}

export class WorldEntity extends BaseEntity {
  ownerId: string;
  behaviors: Map<string, iBehavior>;
  position: Position;

  constructor(id: string, name: string, ownerId: string, position: iPosition, behaviors: Map<string, iBehavior>) {
    super(id, name);
    this.ownerId = ownerId;
    this.behaviors = behaviors;
    this.position = new Position(position)
  }

  setOwner(ownerId: string) {
    this.ownerId = ownerId;
  }
}
