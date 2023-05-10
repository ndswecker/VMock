import WordVerb from "./WordVerb";

export default class VerbBuilder {

    constructor(value= "") {
        this.value = value;
    }

    setIsDynamic(dynamic) {
        this.isDynamic = dynamic;
        return this;
    }

    setIsStative(stative) {
        this.IsStative = stative;
        return this;
    }

    setIsTransitive(transitive) {
        this.isTransitive = transitive;
        return this;
    }

    setIsLinking(linking) {
        this.isLinking = linking;
        return this;
    }

    setIsInfinitive(infinitive) {
        this.isInfinitive = infinitive;
        return this;
    }

    setIsGerund(gerund) {
        this.isGerund = gerund;
        return this;
    }

    build() {

        if (!("isDynamic" in this)) {
            this.isDynamic = false;
        }
        if (!("isStative" in this)) {
            this.IsStative = false;
        }
        if (!("isTransitive" in this)) {
            this.isTransitive = false;
        }
        if (!("isLinking" in this)) {
            this.isLinking = false;
        }
        if (!("isInfinitive" in this)) {
            this.isInfinitive = false;
        }
        if (!("isGerund" in this)) {
            this.isGerund = false;
        }

        let verb = new WordVerb(
            this.value,
            this.isDynamic,
            this.IsStative,
            this.isTransitive,
            this.isLinking,
            this.isInfinitive,
            this.isGerund
        );
        
        return verb;
        
    }
}