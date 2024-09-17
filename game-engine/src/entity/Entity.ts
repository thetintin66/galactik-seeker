import { Options } from "../interface/Interface";

var ID_COUNTER = 0;

class Entity {
    id: number;
    dirty: boolean;
    newborn: boolean;
    body: Matter.Body;

    constructor(options: Options, id?: number) {
        this.id = id ?? ID_COUNTER++;
        this.dirty = false;
        this.newborn = true;
        this.body = options.body;
    }

    destroy() {}

    update() {}
}

export default Entity;