import Entity from "../entity/Entity";
import Option from "../util/Option";

class Scene {
    pool: Entity[];
    options: Option[];

    constructor(options?: Option[]) {
        this.pool = [];
        this.options = options ?? [];

        this.start();
    }

    start() {}

    add_pool(e: Entity){
        if (e) this.pool.push(e);
    }

    remove_pool(e: Entity){
        if (e) { 
            const index = this.pool.indexOf(e); 
            if (index !== -1) { this.pool.splice(index, 1); }
        }

    }

    get_entoty_by_id(id: number) {
        return this.pool.find(e => e.id === id);
    }

    destroy() {}

    update(delta: number) {}
}

export default Scene