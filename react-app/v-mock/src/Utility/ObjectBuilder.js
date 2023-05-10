
import WordObject from "./WordObject";

const TYPE = "OBjECT_WORD";

export default class ObjectBuilder {
    
    constructor(value = "") {
        this.value = value;
        this.type = TYPE;
    }

    setIsDirect(direct) {
        this.isDirect = direct;
        return this;
    }

    build() {
        
        if(!("isDirect" in this)) {
            this.isDirect = false;
        }

        let object = new WordObject(this.value, this.isDirect);

        return object;
    }
}