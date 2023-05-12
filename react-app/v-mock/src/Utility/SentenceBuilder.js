
import Sentence from "./Sentence";
import VerbBuilder from "./VerbBuilder";

export default class SentenceBuilder {

    subject;
    verb;
    obj;

    constructor() {

    }

    setVerb(verb) {
        this.verb = verb;
    }

    setSubject(subject) {
        this.subject = subject;
    }

    setObject(obj) {
        this.obj = obj;
    }

    build() {

        if (!("obj" in this)) {
            this.obj = null;
        }

        let sentence = new Sentence(this.subject, this.verb, this.obj);
        return sentence;
    }
    
}