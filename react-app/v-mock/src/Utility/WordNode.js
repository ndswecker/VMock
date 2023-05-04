export default class WordNode {
    #type;
    #value;

    constructor(type="", value="") {
        this.#type = type;
        this.#value = value;
    }

    setType(type) {
        this.#type = type;
    }

    getType() {
        return this.#type;
    }

    setValue(value) {
        this.#value = value;
    }

    changeValue(value) {
        this.#value = value;
    }

    toString() {
        return `type: ${this.#type}, value: ${this.#value}`;
    }
}