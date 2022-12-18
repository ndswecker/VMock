import React, { useState } from "react";
import Select from "react-select";
import Insult from "../model/Insult";
import { IntroJSON } from "../words/IntroJSON";
import { AdjJSON } from "../words/AdjJSON";
import { NounJSON } from "../words/NounJSON";

export default function Intro() {
    const key = "intro";
    const[intro, setIntro] = useState();
    const[adj, setAdj] = useState();
    const[noun, setNoun] = useState();
    const insult = new Insult();

    const optionsIntro = [];
    for (let x of IntroJSON) {
        let opt = {value: x.type, label: x.type};
        optionsIntro.push(opt);
    }

    const optionsAdj = [];
    for (let x of AdjJSON) {
        let opt = {value: x.type, label: x.type};
        optionsAdj.push(opt);
    }

    const optionsNoun = [];
    for (let x of NounJSON) {
        let opt = {value: x.type, label: x.type};
        optionsNoun.push(opt);
    }

    function getContent(key, value) {
        let type = insult.insult[key];
        let contentList = [];
        for (let t of value) {
            if (t.type === type){
                contentList = t.content;
            }
        }
        return contentList;
    }

    function introSet(opt) {
        insult.addProp(key, opt.value);
        const list = getContent("intro", IntroJSON);
        setIntro(list[randomInt(list)]);
    }

    function adjSet(opt) {
        insult.addProp("adj", opt.value);
        const list = getContent("adj", AdjJSON);
        setAdj(list[randomInt(list)]);
    }

    function nounSet(opt) {
        insult.addProp("noun", opt.value);
        const list = getContent("noun", NounJSON);
        setNoun(list[randomInt(list)]);
    }

    function randomInt(list) {
        return Math.floor(Math.random() * list.length);
    }

    return (
        <>
            <Select 
                id = "select-intro"
                options = {optionsIntro}
                className = "select"
                name = "intro-select"
                onChange = {(opt) => {
                    introSet(opt);
                }}
            />
            <Select 
                id = "select-adj"
                options = {optionsAdj}
                className =" select"
                name = "select-adj"
                onChange = {(opt) => {
                    adjSet(opt);
                }}
            />
            <Select 
                id = "select-noun"
                options = {optionsNoun}
                className = "select"
                name = "select-noun"
                onChange={(opt) => {
                    nounSet(opt);
                }}
            />
            <p className="combined-insult">{intro} {adj} {noun}</p>
        </>
    );
}

