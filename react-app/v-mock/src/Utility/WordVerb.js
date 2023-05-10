
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

}