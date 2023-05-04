export default class WordNode {
    #type;
    #value;

    constructor() {
        this.type = "";
        this.value = "";
    }

    setType(type) {
        this.#type = type;
    }

    setValue(value) {
        this.#value = value;
    }

    changeValue(value) {
        this.#value = value
    }

    toString() {
        return `type: ${this.#type}, value: ${this.#value}`;
    }
}