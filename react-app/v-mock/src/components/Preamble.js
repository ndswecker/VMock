import React, { useState } from "react";
import Select from "react-select";
import Insult from "../model/Insult";
import PreambleJSON from "../words/PreambleJSON";

export default function Preamble() {
    const key = "preamble";
    const[intro, setIntro] = useState();
    const insult = new Insult();

    const preambles = PreambleJSON;
    const options = [];
    for (let x of preambles.types) {
        let opt = {value: x.type, label: x.type};
        options.push(opt);
    }

    function preambleSet(opt) {
        setIntro(opt.value);
        insult.addProp(key, opt.value);
    
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

