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
        console.log(`current insult: ${this.insult}`);
    }

    dump() {
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
        if (this.insult.hasOwnProperty(prop)) {
            console.log(`property ${prop} already exists, will update to new prop`);
        }
        this.insult.defineProperty(prop, value);
    }
}