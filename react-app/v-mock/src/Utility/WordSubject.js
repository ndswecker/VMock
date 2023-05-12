import WordNode from "./WordNode";

const TYPE = "SUBJECT";

export default class WordSubject extends WordNode {

    constructor(value) {
        super(TYPE, value);
    }

}