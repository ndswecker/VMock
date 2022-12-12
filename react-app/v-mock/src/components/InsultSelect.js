import React, { useState } from "react";
import Preamble from "./Preamble";
import InsultResult from "./InsultResult";
import Insult from "../model/Insult";

export default function InsultSelect() {
    const [insult, setInsult] = useState( () => {new Insult()});

    return(
        <>
            <Preamble insult={insult}/>
            <InsultResult insult={insult}/>
        </>
    );
}