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
        setIntro(opt.value);
        insult.addProp(key, opt.value);
        setIntro(getContent()[0]);
    }

    

    return (
        <>
            <p>This will be a Preamble</p>
            <Select 
                id="select-preamble"
                options={options}
                className="select"
                name="preambleSelect"
                onChange={(opt) => {
                    preambleSet(opt);
                }}
            />
            <p>{intro}</p>
        </>
    );
}

