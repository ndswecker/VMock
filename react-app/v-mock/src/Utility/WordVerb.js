
import WordNode from "./WordNode";
import WordObjectCollection from "./WordObjectCollection";

const TYPE = "VERB";

export default class WordVerb extends WordNode {

    isDynamic;
    isStative;
    isTransitive;
    isLinking;
    isInfinitive;
    isGerund;

    objectCollection;

    constructor(value, dynamic, stative, transitive, linking, infinitive, gerund) {
        super(TYPE, value);

        this.isDynamic = dynamic;
        this.isStative = stative;
        this.isTransitive = transitive;
        this.isLinking = linking;
        this.isInfinitive = infinitive;
        this.isGerund = gerund;

        this.objectCollection = new WordObjectCollection();
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
        console.log(object);
        this.objectCollection.addObject(object);
    }
}