
import WordNode from "./WordNode";
import WordObjectCollection from "./WordObjectCollection";
import WordSubjectCollection from "./WordSubjectCollection";

const TYPE = "VERB";

export default class WordVerb extends WordNode {

    isDynamic;
    isStative;
    isTransitive;
    isLinking;
    isInfinitive;
    isGerund;

    objectCollection;
    subjectCollection;

    constructor(value, dynamic, stative, transitive, linking, infinitive, gerund) {
        super(TYPE, value);

        this.isDynamic = dynamic;
        this.isStative = stative;
        this.isTransitive = transitive;
        this.isLinking = linking;
        this.isInfinitive = infinitive;
        this.isGerund = gerund;

        this.objectCollection = new WordObjectCollection();
        this.subjectCollection = new WordSubjectCollection();
    }

    setIsDynamic(dynamic) {
        this.isDynamic = dynamic;
    }
    
    setIsStative(stative) {
        this.isStative = stative;
    }

    setIsTransitive(transitive){
        this.isTransitive = transitive;
    }

    setIsLinking(linking) {
        this.isLinking = linking;
    }

    setIsInfinitive(infinitive) {
        this.isInfinitive = infinitive;
    }

    setIsGerund(gerund) {
        this.isGerund = gerund;
    }

    isVerbDynamic() {
        return this.isDynamic;
    }

    isVerbStative() {
        return this.isStative;
    }

    isVerbTransitive() {
        return this.isTransitive;
    }

    isVerbLinking() {
        return this.isLinking;
    }

    isVerbInfinitive() {
        return this.isInfinitive;
    }

    isVerbGerund() {
        return this.isGerund;
    }
    

    addObject(object) {
        if (Array.isArray(object)) {
            for (let b = 0; b < object.length; b++) {
                this.objectCollection.addObject(object[b]);
            }
        } else {
            this.objectCollection.addObject(object);
        }
    }

    addSubject(subject) {
        if (Array.isArray(subject)) {
            for (let s = 0; s < subject.length; s++) {
                this.subjectCollection.addSubject(subject[s]);
            }
        } else {
            this.subjectCollection.addSubject(subject);
        }
    }

    getSubject() {
        return this.subjectCollection.toString();
    }

    toString() {
        let text = this.getValue();
        text += ` ${this.objectCollection.toString()}`; 
        
        return text;
    }
}