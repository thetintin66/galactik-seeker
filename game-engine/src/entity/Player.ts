import Character from "./Character";

import { Options, Coordinate } from "../interface/Interface";

class Player extends Character{
    position: Coordinate;
    max_hp: number;
    hp: number;
    speed: number;

    constructor(options: Options) {
        super(options);

        this.position = options.position;
        this.max_hp = options.max_hp;
        this.hp = options.hp;
        this.speed = options.speed;
    }
}

export default Player;