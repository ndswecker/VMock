
import WordNode from "./WordNode";

const TYPE = "VERB";

export default class WordVerb extends WordNode {

    isDynamic;
    isStative;
    isTransitive;
    isLinking;
    isInfinitive;
    isGerund;

    constructor(value, dynamic, stative, transitive, linking, infinitive, gerund) {
        super(TYPE, value);
        this.isDynamic = dynamic;
        this.isStative = stative;
        this.isTransitive = transitive;
        this.isLinking = linking;
        this.isInfinitive = infinitive;
        this.isGerund = gerund;
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
}