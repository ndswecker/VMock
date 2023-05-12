
import WordSubject from "./WordSubject";

export default class SubjectBuilder {

    subject;
    verb;

    constructor(subject, verb) {
        this.subject = subject;
    }

    build() {
        let sub = new WordSubject(this.subject);
        return sub;
    }
}