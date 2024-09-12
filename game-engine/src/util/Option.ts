class Option {
    name: string;
    value: number | boolean;
    description: string;

    constructor(name: string, value: number | boolean, description: string){
        this.name = name;
        this.value = value;
        this.description = description;
    }
}

export default Option;