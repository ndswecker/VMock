import WordNode from "./WordNode";

export default class Sentence {
    #sentence;
    subjectMap;
    predicateMap;

    constructor() {
        this.#sentence = new Map();
        this.subjectMap = new Map();
        this.predicateMap = new Map();
    }

    setSubject(value="") {
        let subject = new WordNode("SUBJECT", value);
        this.subjectMap.set(value, subject);
        console.log(subject.getValue());
    }

    getSubject() {
        let text = "";
        this.subjectMap.forEach((k, v)=> {
            text += k.getValue() + ", ";
        });
        return text;
    }

    setPredicateVerb(value="") {
        let predicate = new WordNode("PREDICATE_VERB", value);
        this.predicateMap.set(value, predicate);
        console.log(predicate.getValue());
    }

    getPredicate() {
        let text = "";
        this.predicateMap.forEach((k, v) => {
            text += k.getValue() + ", ";
        });
        return text;
    }

    toString() {
        let subjects = "Subjects are as follows: ";
        this.subjectMap.forEach((value, key) => {
            subjects += value.word + " ,";
        });
        let predicates = "Predicates are as follows: ";
        this.predicateMap.forEach((value, key) => {
            predicates += value.word + " ,";
        });
        return subjects + " // " + predicates;
        // this.#sentence.forEach((value, key) => {
        //     string += value + "\n";
        // });
        // for (const word of this.#sentence.entries()) {
        //     console.log(this.#sentence.get(word[0]));
        // }
        // return string;
    }
}