import WordSubject from "./WordSubject";

export default class WordSubjectCollection {
    subjects;
    compound;

    constructor(compound = "and") {
        this.subjects = [];
        this.compound = compound;
    }

    addSubject(subject) {
        
        if (typeof subject === Array) {
            subject.forEach(sub => {
                this.subjects.push(sub);
            });
        } else {
            this.subjects.push(subject);
        }
    }
}