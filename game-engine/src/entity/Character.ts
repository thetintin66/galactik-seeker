import { Options } from "../interface/Interface";
import Entity from "./Entity";

class Character extends Entity{
    constructor(options: Options) {
        super(options);
    }
}

export default Character;