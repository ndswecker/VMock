import WordNode from "./WordNode";
import WordVerbCollection from "./WordVerbCollection";

const PREDICATE = "PREDICATE_VERB";
const SUBJECT = "SUBJECT";

export default class Sentence {
    verbCollection;

    constructor(subject, verb, object) {
        this.verbCollection = new WordVerbCollection();
        this.verbCollection.addVerb(verb);
    }

    addVerb(verb) {
        this.verbCollection.addVerb(verb);
    }

    addSubject(subject, verb) {
        let target = this.verbCollection;
    }
}