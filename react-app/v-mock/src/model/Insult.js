export default class Insult {
    storage = localStorage;
    key = "insult";
    insult = null;

    constructor() {
        this.load();
    }

    load() {
        this.insult = JSON.parse(this.storage.getItem(this.key));
        if (this.insult == null) {
            this.insult = { };
        }
    }

    dump() {
        // console.log(`this.key: ${this.key} and this.insult: ${this.insult}`);
        this.storage.setItem(this.key, JSON.stringify(this.insult));
    }

    delete() {
        this.insult = null;
        this.storage.removeItem(this.key);
    }

    reset() {
        this.delete();
        this.load();
    }

    isValid() {
        if (this.insult == null) {
            return false;
        } else {
            return true;
        }
    }

    addProp(prop, value) {
        // console.log(`attempting to add ${prop} and ${value}`);
        this.insult[prop] = value;
        this.dump();
        // console.log(this.insult);
    }

    addType(prop, category, text) {
        console.log(`${prop} ${category} ${text}`);
        this.insult[prop] = {
            "type": category,
            "content": text
        };
        console.log(this.insult);
        this.dump();
    }

    toString() {
        let currentInsult = JSON.parse(this.storage.getItem(this.key));
        let introType = currentInsult.intro.type;
        let intro = "";
        let action = "";
        let subject = "";
        let adj = "";
        let noun = "";
        let verb = "";

        if (introType === "threat") {
            intro = currentInsult.intro.content;
            action = currentInsult.action.content;
            subject = currentInsult.subject.content;
            adj = currentInsult.adj.content;
            noun = currentInsult.noun.content;
            return `${intro} ${action} ${subject} ${adj} ${noun}`;
        }else if (introType === "degrade" || introType === "self-deprecating") {
            intro = currentInsult.intro.content;
            adj = currentInsult.adj.content;
            verb = currentInsult.verb.content;
            noun = currentInsult.noun.content;
            return `${intro} ${adj} ${verb} ${noun}`;
        }

        return JSON.stringify(intro);
    }
}