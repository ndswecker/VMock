import React, { useState } from "react";
import Select from "react-select";
import Insult from "../model/Insult";
import { IntroJSON } from "../words/IntroJSON";

export default function Preamble() {
    const key = "preamble";
    const[intro, setIntro] = useState();
    const insult = new Insult();

    const optionsIntro = [];
    for (let x of IntroJSON) {
        let opt = {value: x.type, label: x.type};
        optionsIntro.push(opt);
    }

    function getContent() {
        let type = insult.insult.preamble;
        let contentList = [];
        for (let t of IntroJSON) {
            if (t.type === type){
                contentList = t.content;
            }
        }
        return contentList;
    }

    function preambleSet(opt) {
        insult.addProp(key, opt.value);
        const list = getContent()
        setIntro(list[randomInt(list)]);
    }

    function randomInt(list) {
        return Math.floor(Math.random() * list.length);
    }

    return (
        <>
            <Select 
                id="select-preamble"
                options={optionsIntro}
                className="select"
                name="preambleSelect"
                onChange={(opt) => {
                    preambleSet(opt);
                }}
            />
            <p className="intro">{intro}</p>
        </>
    );
}

