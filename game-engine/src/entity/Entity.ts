import { Options } from "../interface/Interface";

var ID_COUNTER = 0;

class Entity {
    id: number;
    dirty: boolean;
    newborn: boolean;

    constructor(options: Options, id?: number) {
        this.id = id ?? ID_COUNTER++;
        this.dirty = false;
        this.newborn = true;
    }

    destroy() {}

    update() {}
}

export default Entity;