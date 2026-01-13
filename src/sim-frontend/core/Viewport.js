import { CanvasPosition } from "./Position.js";

export class Viewport {
  constructor(width, height) {
    this.camera = new CanvasPosition();
    this.width = width;
    this.height = height;
  }

  pan(dx, dy) {
    this.camera.applyDelta(dx, dy);
  }

  zoom(factor, anchorWorldPos) { 
    const oldScale = Position.scale;
    Position.scale = Math.max(0.1, Math.min(oldScale * factor, 5));
    const { x, y } = anchorWorldPos;
    const deltaX = x * (1 - Position.scale / oldScale);
    const deltaY = y * (1 - Position.scale / oldScale);
    this.camera.applyDelta(deltaX, deltaY);
  }

  worldToCanvas(worldPos) {
    const { x, y } = worldPos.getPosition();
    return {
      x: (x - this.camera.x) * Position.scale,
      y: (y - this.camera.y) * Position.scale
    };
  }

  getCamera() {
    return { x: this.camera.x, y: this.camera.y };
  }
}