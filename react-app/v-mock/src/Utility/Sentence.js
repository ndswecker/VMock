import WordNode from "./WordNode";

export default class Sentence {
    subjectMap;
    predicateMap;

    constructor() {
        this.subjectMap = new Map();
        this.predicateMap = new Map();
    }

    setSubject(value="") {
        let subject = new WordNode("SUBJECT", value);
        this.subjectMap.set(value, subject);
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
    }

    getPredicate() {
        let text = "";
        this.predicateMap.forEach((k, v) => {
            text += k.getValue() + ", ";
        });
        return text;
    }

    /**
     * Collects and concatonates node values into string
     * @returns {string} concatonated node values
     */
    formSentence() {
        let sub = "";
        let mods;
        this.subjectMap.forEach((key, value) => {
            mods = key.getLinks();
            sub += mods + key.getValue();
        });

        return sub;
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
    }
}