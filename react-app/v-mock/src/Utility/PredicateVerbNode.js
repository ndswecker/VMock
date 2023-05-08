import WordNode from "./WordNode";

const TYPE = "PREDICATE_VERB";

export default class PredicateVerbNode extends WordNode{
    ojects;

    constructor(value="") {
        super(TYPE, value);
        this.ojects = [];
    }
}