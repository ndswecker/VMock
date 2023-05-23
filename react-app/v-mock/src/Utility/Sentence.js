import WordNode from "./WordNode";
import WordVerbCollection from "./WordVerbCollection";

const PREDICATE = "PREDICATE_VERB";
const SUBJECT = "SUBJECT";

export default class Sentence {
    verbCollection;
    subjectObjectType;

    constructor(verb) {
        this.verbCollection = new WordVerbCollection();
        this.verbCollection.addVerb(verb);
    }

    addVerb(verb) {
        this.verbCollection.addVerb(verb);
    }

    collectSimilarSubjects(index) {
        let nextIndex = index + 1;
        let currentSubject = this.verbCollection.getVerb(index).getSubject();
        let subjectCollate = currentSubject;

        while (index < this.verbCollection.size()) {
            let nextSubject = this.verbCollection.getVerb(nextIndex).getSubject();
            if (currentSubject === nextSubject) {
                currentSubject = nextSubject;
                index++;
            } else {
                break;
            }
            
        }

        return subjectCollate;
    }

    toString() {
        let text = "";
        if (this.verbCollection.isAllSubjectsSame()) {
            text += this.verbCollection.getVerb(0).getSubject();
            text += ` ${this.verbCollection.toString()}`;
        } else {
            // Get each verbs separately
            for (let v = 0; v < this.verbCollection.size(); v++) {

                let prevSubject;
                let currentSubject = this.verbCollection.getVerb(v).getSubject();
                
                if (v != 0) {
                    // Non starting verbs spacer
                    text += " ";
                    prevSubject = this.verbCollection.getVerb(v-1).getSubject();

                    if (prevSubject === currentSubject) {
                        console.log("Matching subject from previous verb");
                        // skip the additon of the subject
                        text += `${this.verbCollection.getVerb(v).toString()}`;
                    } else {
                        console.log("New subject found");
                        text += this.verbCollection.getVerb(v).getSubject();
                        text += ` ${this.verbCollection.getVerb(v).toString()}`;
                    }
                    
                } else {
                    text += this.verbCollection.getVerb(v).getSubject();
                    text += ` ${this.verbCollection.getVerb(v).toString()}`;
                }
                

                // Middle verbs
                if (v != this.verbCollection.size() - 1) {
                    console.log(`${this.verbCollection.getVerb(v).getSubject()} vs ${this.verbCollection.getVerb(v+1).getSubject()}`);

                    text += ` ${this.verbCollection.getJoiner()}`;
                }
            }
        }

        return text;
    }
}