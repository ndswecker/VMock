import React, { useState } from "react";
import Select from "react-select";
import Insult from "../model/Insult";
import { IntroJSON } from "../words/IntroJSON";
import { AdjJSON } from "../words/AdjJSON";
import { NounJSON } from "../words/NounJSON";
import { ActionJSON } from "../words/ActionJSON";
import { SubjectJSON } from "../words/SubjectJSON";
import { VerbJSON } from "../words/VerbJSON";
import Degrade from "./Degrade";
import Threat from "./Threat";

export default function Intro() {
    const key = "intro";
    const[intro, setIntro] = useState();
    const[adj, setAdj] = useState();
    const[noun, setNoun] = useState();
    const[action, setAction] = useState();
    const[subject, setSubject] = useState();
    const[verb, setVerb] = useState();
    const[adj_verb, setAdj_verb] = useState();

    const[isThreat, setIsThreat] = useState(false);
    const[isDegrade, setIsDegrade] = useState(false);
    const[finalInsult, setFinalInsult] = useState("");

    const insult = new Insult();

    const optionsIntro = [];
    for (let x of IntroJSON) {
        let opt = {value: x.type, label: x.type};
        optionsIntro.push(opt);
    }

    const optionsAdj = [];
    for (let x of AdjJSON) {
        let opt = {value: x.type, label: x.type};
        optionsAdj.push(opt);
    }

    const optionsNoun = [];
    for (let x of NounJSON) {
        let opt = {value: x.type, label: x.type};
        optionsNoun.push(opt);
    }

    const optionsAction = [];
    for (let x of ActionJSON) {
        let opt = {value: x.type, label: x.type};
        optionsAction.push(opt);
    }

    const optionsSubject = [];
    for (let x of SubjectJSON) {
        let opt = {value: x.subject, label: x.subject};
        optionsSubject.push(opt);
    }

    const optionsVerb = [];
    for (let x of VerbJSON) {
        let opt = {value: x.type, label: x.type};
        optionsVerb.push(opt);
    }

    function getContent(value, list) {
        for (let c of list) {
            if (c.type === value) {
                return c.content;
            }
        }
    }

    function introSet(opt) {
        const list = getContent(opt.label, IntroJSON);
        const targetText = list[randomInt(list)];
        
        insult.addType("intro", opt.label, targetText);
        setIntro(targetText);
        if (opt.label === "threat") {
            setIsThreat(true);
        } else {
            setIsThreat(false);
        }
        if (opt.label === "degrade") {
            setIsDegrade(true);
        } else {
            setIsDegrade(false);
        }
    }

    function actionSet(opt) {
        const list = getContent(opt.label, ActionJSON);
        const targetText = list[randomInt(list)];

        insult.addType("action", opt.label, targetText);
        setAction(targetText);
    }

    function subjectSet(opt) {
        insult.addType("subject", opt.label, opt.label);
        setSubject(opt.label);
    }

    function adjSet(opt) {
        const list = getContent(opt.label, AdjJSON);
        const targetText = list[randomInt(list)];

        insult.addType("adj", opt.label, targetText);
        setAdj(targetText);
    }

    function nounSet(opt) {
        const list = getContent(opt.label, NounJSON);
        const targetText = list[randomInt(list)];

        insult.addType("noun", opt.label, targetText);
        setNoun(targetText);
    }

    function verbSet(opt) {
        const list = getContent(opt.label, VerbJSON);
        const targetText = list[randomInt(list)];

        insult.addType("verb", opt.label, targetText);
        setVerb(targetText);
    }

    function randomInt(list) {
        return Math.floor(Math.random() * list.length);
    }

    function insultOutput() {
        setFinalInsult(insult.toString());
        console.log(insult.toString());
    }

    function resetInsult() {
        insult.reset();
        setIsDegrade(false);
        setIsThreat(false);
        setFinalInsult("");
    }

    const selectStyles = {
        control: (styles) => ({...styles, backgroundColor: "white" }),
        option: (styles, {data, isDisabled, isFocused, isSlected}) => {
            return {...styles,
            color: 'black'};
        }
    }

    return (
        <>
        <div className="selectables">
            <Select 
                id = "select-intro"
                options = {optionsIntro}
                className = "select"
                name = "intro-select"
                onChange = {(opt) => {
                    introSet(opt);
                }}
                styles={selectStyles}
            />

            { ( isDegrade ) ? (
                <Degrade 
                    optionsAdj={optionsAdj} optionsNoun={optionsNoun}
                    adjSet={adjSet} nounSet={nounSet} verbSet={verbSet}
                    selectStyles={selectStyles}
                />
            ) : null
            }
            { (isThreat) ? (
                <Threat 
                    optionsAction={optionsAction} optionsSubject={optionsSubject} optionsAdj={optionsAdj} optionsNoun={optionsNoun}
                    actionSet={actionSet} subjectSet={subjectSet} adjSet={adjSet} nounSet={nounSet}
                    selectStyles={selectStyles}
                />
            ) : null
            }
            
            </div>
            <div className="control-buttons">
                <button 
                    id = "button-mock"
                    className="control-button"
                    onClick={insultOutput}>
                        MOCK
                </button>
                <button
                    id = "button-reset"
                    className="control-button"
                    onClick={resetInsult}>
                        RESET
                </button>    
            </div>

            <p>{finalInsult}</p>
        </>
    );
}

