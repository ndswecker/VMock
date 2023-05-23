
import Sentence from "./Sentence";

export default class SentenceBuilder {
    verb;

    constructor() {
        this.verb = null;
    }

    // setObject(obj) {
    //     this.obj = obj;
    //     return this;
    // }

    // setSubject(subject) {
    //     this.subject = subject;
    //     return this;
    // }

    setVerb(verb) {
        this.verb = verb;
        return this;
    }

    build() {
        let sentence = new Sentence(this.verb);

        return sentence;
    }
    
}