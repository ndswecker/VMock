import Insult from "./Insult"

export default class DegradeInsult extends Insult {
    
    toString() {
        return `${this["adj"]} ${this["verb"]} ${this["noun"]}}`;
    }
}