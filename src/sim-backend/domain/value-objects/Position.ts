export class Position {
    x: number;
    y: number;

    constructor(args: { x: number, y: number} ) {
        this.x = args.x;
        this.y = args.y;
    }

    applyDelta(dx: number = 0, dy: number = 0) {
        this.x + dx;
        this.y + dy;
    }

    set(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}