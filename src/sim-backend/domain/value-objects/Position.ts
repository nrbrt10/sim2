export class Position {
    x: number;
    y: number;

    constructor(args: { x: number, y: number} ) {
        this.x = args.x;
        this.y = args.y;
    }

    applyDelta(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }

    get() {
        return { x: this.x, y: this.y };
    }

    set(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}