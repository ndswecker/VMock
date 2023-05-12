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
        let him = new SubjectBuilder("he").build();
        let hid = new VerbBuilder("hid").build();
        let bitches = new ObjectBuilder("the bitches").build();
        hid.addObject(bitches);

        let phrase = new SentenceBuilder(hid, him).build();
        console.log(phrase);

        // let phrase = new SentenceBuilder()
        //     .setVerb("hid")
        //     .setSubject("Franko")
        //     .setObject("the bitches")
        //     .build();
        // console.log(phrase);

        // setDisplaySubject(phrase.getSubject());
        // setDisplayPredicate(phrase.getPredicate());

        //console.log(phrase.subjectMap.get("turtle").toString());
        // console.log(phrase.formSentence());

        // const objColl = new WordObjectCollection();
        // objColl.addObject(new WordObject("bitches", true));
        // objColl.addObject(new WordObject("money", true));
        // objColl.addObject(new WordObject("keys", true));
        // console.log(objColl.toString());

        // const verb = new VerbBuilder("run")
        //     .setIsGerund(true)
        //     .build();

        // const bitches = new ObjectBuilder("bitches").build();
        // verb.addObject(bitches);
        // console.log(verb);

        
        // console.log(bitches);
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





