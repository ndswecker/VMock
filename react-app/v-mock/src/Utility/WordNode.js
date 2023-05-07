export default class WordNode {
    // type is grammar type, word is value
    type;
    word;
    links;

    constructor(type="", value="") {
        this.type = type;
        this.word = value;
        this.links = [];
    }

    setType(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }

    setValue(value) {
        this.word = value;
    }

    changeValue(value) {
        this.word = value;
    }

    getValue() {
        return this.word;
    }

    addLink(word) {
        console.log(word);
        this.links.push(word);
    }

    getLinks() {
        let text = "";
        for (let i = 0; i < this.links.length; i++) {
            console.log(this.links[i].getValue());
            text += this.links[i].getValue() + " ";
        }
        
        return text;
    }

    removeLink(key) {
        if (!this.links.includes(key)){
            return false;
        } else {
            let index = this.links.indexOf(key);
            this.links.splace(index, 1);
            return true;
        }
    }

    toString() {
        let prefix = "";
        this.links.forEach((key, value) => {
            prefix += key.getValue();
        });
        return `${prefix} ${this.word}`;
    }
}