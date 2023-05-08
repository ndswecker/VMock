import WordNode from "./WordNode";

const TYPE = "OBjECT_WORD";

/**
 * Class to create an English Ojbect
 * Type is preset in TYPE
 */
export default class WordObject extends WordNode {
    isTransitive;

    /**
     * @param {String} value WordNode English printed value
     * @param {Boolean} trans WordObject transitive or intransitive
     * @returns {WordObject} WordObject inherits directly from WordNode
     */
    constructor(value = "", trans = true) {
        super(TYPE, value);
        this.isTransitive = trans;
    }

    /**
     * @property {Function} setIsTransitive Sets if the Object is transitive or intransitve
     * @param {Boolean} trans Object is transitive is true. Is intransitive is false.
     */
    setIsTransitive(trans) {
        this.isTransitive = trans;
    }

}