import React, { useState } from "react";

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
        console.log(`this.key: ${this.key} and this.insult: ${this.insult}`);
        this.storage.setItem(this.key, JSON.stringify(this.insult));
    }

    delete() {
        this.insult = null;
        this.storage.removeItem(this.key);
    }

    isValid() {
        if (this.insult == null) {
            return false;
        } else {
            return true;
        }
    }

    addProp(prop, value) {
        console.log(`attempting to add ${prop} and ${value}`);
        this.insult[prop] = value;
        this.dump();
        console.log(this.insult);
    }
}