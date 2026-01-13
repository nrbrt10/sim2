export class InteractionManager {
  constructor(canvas, viewport) {
    this.canvas = canvas;
    this.viewport = viewport;
    this.isDragging = false;

    this.lastMouse = null;

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onWheel = this.onWheel.bind(this);

    this.attachListeners();
  }

  onMouseDown(e) {
    this.isDragging = true;
    this.lastMouse = { x: e.clientX, y: e.clientY };
  }

  onMouseUp() {
    this.isDragging = false;
    this.lastMouse = null;
  }

  onMouseMove(e) {
    if (!this.isDragging) return;
    const { x, y } = this.lastMouse;
    const dx = x - e.clientX;
    const dy = y - e.clientY;
    this.viewport.pan(dx, dy);
    this.lastMouse = { x: e.clientX, y: e.clientY };
  }

  onWheel(e) {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.1 : 0.9;
    const rect = this.canvas.getBoundingClientRect();
    const anchor = {
      getPosition: () => ({
        x: (e.clientX - rect.left) / Position.scale + this.viewport.camera.x,
        y: (e.clientY - rect.top) / Position.scale + this.viewport.camera.y
      })
    };
    this.viewport.zoom(factor, anchor);
  }

  attachListeners() {
    this.canvas.addEventListener('mousedown', this.onMouseDown);
    this.canvas.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
    this.canvas.addEventListener('wheel', this.onWheel);
  }
}