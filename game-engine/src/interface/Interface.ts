interface Options {
    position: Coordinate,
    max_hp: number,
    hp: number,
    speed: number
}

interface Coordinate {
    x: number;
    y: number;
}

interface Listener {
    (arg: any): string;
}

export { Options, Coordinate, Listener }