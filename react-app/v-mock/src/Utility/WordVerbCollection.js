

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

    getVerb(index) {
        return this.verbs[index];
    }

    getFirst() {
        return this.verbs[0];
    }

    getJoiner() {
        return this.joiner;
    }

    size() {
        return this.verbs.length;
    }

    /**
     * Determine if all verbs share the same subject
     * @returns {boolean} 
     */
    isAllSubjectsSame() {
        let startingSubjectList = this.verbs[0].getSubject();
        // Iterate thru each verb to see its respective subject list
        for (let v = 1; v < this.verbs.length; v ++) {
            let nextSubjectList = this.verbs[v].getSubject();
            
            if (startingSubjectList != nextSubjectList) {
                // console.log(`${startingSubjectList} != ${nextSubjectList}`);
                return false;
            } else {
                console.log(`${startingSubjectList} === ${nextSubjectList}`);
            }
        }

        return true;
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