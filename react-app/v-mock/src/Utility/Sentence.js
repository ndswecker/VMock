import WordNode from "./WordNode";
import PredicateVerbNode from "./PredicateVerbNode";

const PREDICATE = "PREDICATE_VERB";
const SUBJECT = "SUBJECT";

export default class Sentence {
    subjectMap;
    predicateMap;

    constructor() {
        this.subjectMap = new Map();
        this.predicateMap = new Map();
    }

    setSubject(value="") {
        let subject = new WordNode(SUBJECT, value);
        this.subjectMap.set(value, subject);
    }

    /**
     * Returns a string of the subject node and its children's values
     * @returns {string} 
     */
    getSubject() {
        let text = "";
        this.subjectMap.forEach((key, v)=> {
            text += key.getLinks() + key.getValue();
        });
        return text;
    }

    setPredicateVerb(value="") {
        let predicate = new PredicateVerbNode(value);
        this.predicateMap.set(value, predicate);
    }

    /**
     * Returns a string of the predicate node and its children's values
     * @returns {string} 
     */
    getPredicate() {
        let text = "";
        this.predicateMap.forEach((key, value) => {
            // text += key.getValue() + ", ";
            text += key.getValue() + " " + key.getLinks();
        });
        return text;
    }

    /**
     * Function to make and return a new word
     * @param {string} type is the word type
     * @param {*} text is the value of the word
     * @returns {WordNode}
     */
    makeWord(type, text) {
        let word = new WordNode(type, text);
        return word;
    }

    addObject(verb) {
        
    }

    /**
     * Collects and concatonates node values into string
     * @returns {string} concatonated node values
     */
    formSentence() {
        return this.getSubject() + " " + this.getPredicate();
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