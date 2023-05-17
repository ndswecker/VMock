

export default class WordVerbCollection {
    verbs;
    joiner;

    constructor(join = "and") {
        this.verbs = [];
        this.joiner = join;
    }

    addVerb(verb) {
        if (typeof verb === Array) {
            verb.forEach(action => {
                this.verbs.push(action);
            });
        } else {
            this.verbs.push(verb);
        }
    }

    getVerb(word) {
        this.verbs.forEach(verb => {
            if (verb.getValue() === word) {
                return verb;
            }
        });
        return false;
    }

    size() {
        return this.verbs.length;
    }

    isAllSubjectsSame() {
        for (let v = 0; v < this.verbs.length; v ++) {

            let startingSubjectList = this.verbs[0].getSubject();
            for (let s = 0; s < this.verbs[v].length; s++) {
                //TO DO
            }
        }
    }

    toString() {
        let text = "";
        for (let i = 0; i < this.verbs.length; i++) {
            if (i !=0) {
                text += " ";
            }
            // console.log(this.verbs[i]);
            text += `${this.verbs[i].toString()}`;
            if (i != this.verbs.length - 1) {text += ` ${this.joiner}`;}
        }
        return text;
    }
}