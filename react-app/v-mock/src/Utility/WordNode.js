export default class WordNode {
    type;
    word;

    constructor(type="", value="") {
        this.type = type;
        this.word = value;
    }

    setType(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }

    setValue(value) {
        this.word = value;
    }

    changeValue(value) {
        this.word = value;
    }

    getBitches() {
        return this.word;
    }

    toString() {
        return `type: ${this.type}, value: ${this.word}`;
    }
}