import React, { useState } from "react";
import Select from "react-select";
import Insult from "../model/Insult";
import PreambleJSON from "../words/PreambleJSON";

export default function Preamble() {
    const[intro, setIntro] = useState();

    const preambles = PreambleJSON;
    const options = [];
    for (let x of preambles.types) {
        let opt = {value: x.type, label: x.type};
        options.push(opt);
    }

    return (
        <>
            <p>This will be a Preamble</p>
            <Select 
                id="select-preamble"
                options={options}
                className="select"
                name="preambleSelect"
                onChange={(e) => {
                    setIntro(e.value);
                }}
            />
            <p>{intro}</p>
        </>
    );
}

