import WordNode from "./WordNode";

export default class Sentence {
    #sentence;

    constructor() {
        this.#sentence = new Map();
    }

    setSubject(value="") {
        let subject = new WordNode("SUBJECT", value);
        if (this.#sentence.has("SUBJECT")) {
            this.#sentence.get("SUBJECT").push(subject);
        } else {
            this.#sentence.set("SUBJECT", [subject]);
        }
        console.log(subject);
    }

    setPredicateVerb(value="") {
        let predicate = new WordNode("PREDICATE_VERB", value);
        this.#sentence.set("PREDICATE_VERB", [predicate]);
    }

    makeWord(type="", value=""){
        let word = new WordNode(type, value);
        this.#sentence.set(word.getType(), word);
    }

    toString() {
        let string = "";
        // this.#sentence.forEach((value, key) => {
        //     string += value + "\n";
        // });
        for (const word of this.#sentence.entries()) {
            console.log(this.#sentence.get(word[0]));
        }
        return string;
    }
}