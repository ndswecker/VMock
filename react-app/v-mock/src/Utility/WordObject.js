import WordNode from "./WordNode";

const TYPE = "OBjECT_WORD";

/**
 * Class to create an English Ojbect
 * Type is preset in TYPE
 */
export default class WordObject extends WordNode {
    isDirect;

    /**
     * @param {String} value WordNode English printed value
     * @param {Boolean} direct WordObject direct or indirect
     * @returns {WordObject} WordObject inherits directly from WordNode
     */
    constructor(value, direct) {
        super(TYPE, value);
        this.isDirect = direct;
    }

    setIsDirect(dir) {
        this.isDirect = dir;
    }

    isObjectDirect() {
        return this.isDirect;
    }

}