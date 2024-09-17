import Matter from "matter-js";
import Scene from 'game-engine/scene/Scene';
import Entity from "game-engine/entity/Entity";
import Server from '../server';

class GameMaster extends Scene {
    Engine = Matter.Engine;
    Render = Matter.Render;
    Bodies = Matter.Bodies;
    Body = Matter.Body;
    Vector = Matter.Vector;
    Composite = Matter.Composite;
    Events = Matter.Events;
    engine = this.Engine.create();
    world: any;

    server = new Server();
    
    constructor() {
        super();
        this.engine.gravity.scale = 0;
        this.world = this.engine.world;
    }

    start() {
        super.start();
    }

    add_pool(e: Entity): void {
        super.add_pool(e);
        if (e.body) this.Composite.add(this.world, e.body);
    }

    removePool(e: Entity): void {
        if (e.body) this.Composite.remove(this.world, e.body);
        super.remove_pool(e);
    }


    update(delta: number): void {
        super.update(delta);
        this.Engine.update(this.engine, delta);
    }
}

export default GameMaster;