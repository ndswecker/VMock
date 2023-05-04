import WordNode from "./WordNode";

export default class Sentence {
    #sentence;

    constructor() {
        this.#sentence = new Map();
    }

    makeWord(type="", value=""){
        let word = new WordNode(type, value);
        this.#sentence.set(word.getType(), word);
    }

    toString() {
        let string = "";
        this.#sentence.forEach((value, key) => {
            string += `${key} = ${value},`;
        });
        return string;
    }
}