

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