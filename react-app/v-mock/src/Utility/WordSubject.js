import WordNode from "./WordNode";

const TYPE = "SUBJECT_WORD";

export default class WordSubject extends WordNode {

    constructor(value) {
        super(TYPE, value);
    }

}