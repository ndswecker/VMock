
import Sentence from "./Sentence";

export default class SentenceBuilder {

    subject;
    verb;

    constructor() {
        this.subject = null;
        this.verb = null;
    }

    setObject(obj) {
        this.obj = obj;
        return this;
    }

    setSubject(subject) {
        this.subject = subject;
        return this;
    }

    setVerb(verb) {
        this.verb = verb;
        return this;
    }

    build() {
        

        if (!("obj" in this)) {
            this.obj = null;
        } else {
            // sentence.addObject(this.obj, this.verb);
            this.verb.addObject(this.obj);
        }

        let sentence = new Sentence(this.verb, this.subject);

        return sentence;
    }
    
}