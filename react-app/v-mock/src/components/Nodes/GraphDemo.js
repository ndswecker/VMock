import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import GraphMap from "../../Utility/GraphMap";
import WordNode from "../../Utility/WordNode";
import WordObjectCollection from "../../Utility/WordObjectCollection";
import WordObject from "../../Utility/WordObject";
import VerbBuilder from "../../Utility/VerbBuilder";

import "../Hospice/BoardStyles.css";
import Sentence from "../../Utility/Sentence";
import SentenceBuilder from "../../Utility/SentenceBuilder";

import "./GraphDemo.css";
import ObjectBuilder from "../../Utility/ObjectBuilder";
import SubjectBuilder from "../../Utility/SubjectBuilder";

export default function GraphDemo() {

    const [displaySubject, setDisplaySubject] = useState("");
    const [displayPredicate, setDisplayPredicate] = useState("");

    useEffect(() => {
        makeWord();
    },[]);

    function makeWord(){
        let him = new SubjectBuilder("Justin").build();
        let kill = new VerbBuilder("killed").build();
        let bitches = new ObjectBuilder("the bitches").setIsDirect(true).build();
        let hid = new VerbBuilder("hid").build();
        let money = new ObjectBuilder("the money").build();
        hid.addObject(money);
        kill.addObject(bitches);

        let phrase = new SentenceBuilder(hid, him).build();
        phrase.addVerb(kill, him);
        // console.log(phrase.verbCollection.toString());
        console.log(kill.getSubject());
        console.log(phrase);

    }

    return (
        <>
            <Card sx={{marginTop: 2, marginBottom: 2}}>
                <CardContent>
                    <Typography variant="span">
                        {`SUBJECT: ${displaySubject}`}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{marginTop: 2, marginBottom: 2}}>
                <CardContent>
                    <Typography variant="span">
                        {`PREDICATE: ${displayPredicate}`}
                    </Typography>
                </CardContent>
            </Card>
        </>  
        
    );
}





