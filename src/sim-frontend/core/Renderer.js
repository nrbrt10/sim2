export class Renderer {
  constructor(canvas, viewport) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.viewport = viewport;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
  }

  drawEntities(renderables) {
    for (const { renderData } of renderables) {
      this.drawShape(renderData);
    }
  }

  drawShape({ type, size, position, color }) {
    const { x, y } = this.viewport.worldToCanvas(position);
    this.ctx.fillStyle = color;

    if (type === "rect") {
      this.ctx.fillRect(x - size/2, y - size/2, size, size);
    } else if (type === "triangle") {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y - size/2);
      this.ctx.lineTo(x - size/2, y + size/2);
      this.ctx.lineTo(x + size/2, y + size/2);
      this.ctx.closePath();
      this.ctx.fill();
    }
  }

  render({ players, worldEntities }) {
    this.clear();
    this.drawEntities(worldEntities);
    this.drawEntities(players);
    this.ctx.restore();
  }
}