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

    listSubjects() {
        let text = "";
        for (let i = 0; i < this.subjects.length; i++) {
            if (i != 0) {text += " ";}
            text += `${this.subjects[i].getValue()}`;
            if (i != this.subjects.length - 1) {text += ` ${this.compound}`;}
        }
        return text;
    }
}