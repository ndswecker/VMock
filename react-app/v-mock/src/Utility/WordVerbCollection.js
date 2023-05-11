

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
}