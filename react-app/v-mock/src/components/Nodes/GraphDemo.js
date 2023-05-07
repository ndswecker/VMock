import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import GraphMap from "../../Utility/GraphMap";
import WordNode from "../../Utility/WordNode";

import "../Hospice/BoardStyles.css";
import Sentence from "../../Utility/Sentence";

import "./GraphDemo.css";

export default function GraphDemo() {

    const [displaySubject, setDisplaySubject] = useState("");
    const [displayPredicate, setDisplayPredicate] = useState("");

    useEffect(() => {
        makeWord();
    },[]);

    function makeWord(){
        let phrase = new Sentence();
        phrase.setSubject("turtle");
        phrase.setPredicateVerb("runs");
        setDisplaySubject(phrase.getSubject());
        setDisplayPredicate(phrase.getPredicate());

        const mod1 = new WordNode("MOD", "ugly");
        const mod2 = new WordNode("MOD", "the");
        phrase.subjectMap.get("turtle").addLink(mod2);
        phrase.subjectMap.get("turtle").addLink(mod1);

        //console.log(phrase.subjectMap.get("turtle").toString());
        console.log(phrase.formSentence());
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





