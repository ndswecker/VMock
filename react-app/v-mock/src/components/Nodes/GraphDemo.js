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

        // const mod1 = new WordNode("MOD", "the");
        const mod1 = phrase.makeWord("MOD", "the");
        const mod2 = new WordNode("MOD", "slow");
        const mod3 = new WordNode("MOD", "ugly");
        
        phrase.subjectMap.get("turtle").addLink(mod1);
        phrase.subjectMap.get("turtle").addLink(mod2);
        phrase.subjectMap.get("turtle").addLink(mod3);

        const fast = phrase.makeWord("OBJECT", "fast");
        phrase.predicateMap.get("runs").addLink(fast);

        setDisplaySubject(phrase.getSubject());
        setDisplayPredicate(phrase.getPredicate());

        //console.log(phrase.subjectMap.get("turtle").toString());
        console.log(phrase.formSentence());

        // const objColl = new WordObjectCollection();
        // objColl.addObject(new WordObject("bitches", true));
        // objColl.addObject(new WordObject("money", true));
        // objColl.addObject(new WordObject("keys", true));
        // console.log(objColl.toString());

        const verb = new VerbBuilder("run")
            .setIsGerund(true)
            .build();
        console.log(verb);
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





