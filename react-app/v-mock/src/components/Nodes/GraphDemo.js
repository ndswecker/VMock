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
        let her = new SubjectBuilder("Phylis").build();
        let jose = new SubjectBuilder("Jose").build();

        let kill = new VerbBuilder("killed").build();
        let hid = new VerbBuilder("hid").build();
        let lick = new VerbBuilder("licked").build();

        let bitches = new ObjectBuilder("the bitches").setIsDirect(true).build();
        let money = new ObjectBuilder("the money").build();
        let drugs = new ObjectBuilder("the drugs").build();

        // Link Subject and Objects with the Verb
        hid.addObject(money);
        hid.addSubject(her);
        
        kill.addSubject([him, jose]);
        kill.addObject(bitches);

        lick.addSubject([him, jose]);
        lick.addObject(drugs);

        let phrase = new SentenceBuilder()
            .setVerb(hid)
            .build();
        phrase.addVerb(kill);
        phrase.addVerb(lick);

        console.log(phrase);
        // console.log(phrase.verbCollection.isAllSubjectsSame());
        console.log(phrase.toString());
        console.log(phrase.collectSimilarSubjects(1));
        // console.log(phrase.verbCollection.getVerb(0).getSubject());

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





