
import Sentence from "./Sentence";

export default class SentenceBuilder {
    verb;

    constructor() {
        this.verb = null;
    }

    setVerb(verb) {
        this.verb = verb;
        return this;
    }

    build() {
        let sentence = new Sentence(this.verb);

        return sentence;
    }
    
}