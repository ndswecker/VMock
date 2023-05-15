import WordNode from "./WordNode";
import WordVerbCollection from "./WordVerbCollection";

const PREDICATE = "PREDICATE_VERB";
const SUBJECT = "SUBJECT";

export default class Sentence {
    verbCollection;

    constructor(verb, subject) {
        this.verbCollection = new WordVerbCollection();
        this.verbCollection.addVerb(verb);
        verb.addSubject(subject);
    }

    addVerb(verb, subject) {
        this.verbCollection.addVerb(verb);
        verb.addSubject(subject);
    }

    addSubject(verb, subject) {
        verb.addSubject(subject);
    }

    addObject(object, verb) {
        this.verbCollection.addObject(object);
    }

    toString() {
        let subject;
        for (let i = 0; i < this.verbCollection.size(); i++) {
            //To Do
        }
    }
}