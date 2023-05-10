import WordNode from "./WordNode";
import WordObject from "./WordObject";

/**
 * Class to create a collection of English sentence objects
 * @param {WordObject[]} objects Objects is an array of WordObjects
 * @param {String} compound Compound is the joining word of the WordObjects
 */
export default class WordObjectCollection {
    objects;
    compound;


    constructor(compound = "and") {
        this.objects = [];
        this.compound = compound;
    }

    addObject(object) {

        if (typeof object === Array) {
            object.forEach(obj => {
                this.objects.push(obj);
            });
        } else {
            this.objects.push(object);
        }
        
    }

    getObject(name) {
        let index = this.objects.indexOf(name);
        return this.objects[index];
    }

    setCompound(compound) {
        this.compound = compound;
    }

    /**
     * @summary toString collates all WordObjects and their modifactions into a string with
     * appropriate spacing and compound joiners.
     * @returns {String} 
     */
    toString() {
        let text = "";
        for (let i=0; i < this.objects.length; i++) {
            // Add a leading space to all obects excluding the first
            if (i != 0) {text += " " ;}
            text += `${this.objects[i].getValue()}`;
            // Add the compound joiner after all objects except the last
            if (i != this.objects.length - 1) {text += ` ${this.compound}`;} 
        }
        return text;
    }
}