import React, { useState } from "react";
import Select from "react-select";
import Insult from "../model/Insult";
import { PreambleJSON } from "../words/PreambleJSON";

export default function Preamble() {
    const key = "preamble";
    const[intro, setIntro] = useState();
    const insult = new Insult();

    const options = [];
    for (let x of PreambleJSON) {
        let opt = {value: x.type, label: x.type};
        options.push(opt);
    }

    function getContent() {
        let type = insult.insult.preamble;
        let contentList = [];
        for (let t of PreambleJSON) {
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
                options={options}
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

