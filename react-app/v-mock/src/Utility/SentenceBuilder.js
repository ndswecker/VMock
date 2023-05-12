
import Sentence from "./Sentence";

export default class SentenceBuilder {

    subject;
    verb;

    constructor(verb, subject) {
        this.verb = verb;
        this.subject = subject;
    }

    setObject(obj) {
        this.obj = obj;
    }

    build() {
        let sentence = new Sentence(this.verb, this.subject);

        if (!("obj" in this)) {
            this.obj = null;
        } else {
            sentence.addObject(this.obj, this.verb);
        }
        
        return sentence;
    }
    
}