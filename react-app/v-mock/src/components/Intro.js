import React, { useState } from "react";
import Select from "react-select";
import Insult from "../model/Insult";
import { IntroJSON } from "../words/IntroJSON";
import { AdjJSON } from "../words/AdjJSON";
import { NounJSON } from "../words/NounJSON";
import { ActionJSON } from "../words/ActionJSON";
import { SubjectJSON } from "../words/SubjectJSON";

export default function Intro() {
    const key = "intro";
    const[intro, setIntro] = useState();
    const[adj, setAdj] = useState();
    const[noun, setNoun] = useState();
    const[action, setAction] = useState();
    const[subject, setSubject] = useState();

    const[isThreat, setIsThreat] = useState(false);

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

    function randomInt(list) {
        return Math.floor(Math.random() * list.length);
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
            {  (isThreat ) ? (
                <Select 
                    id = "select-action"
                    options = {optionsAction}
                    className = "select"
                    name = "action-select"
                    onChange = {(opt) => {
                        actionSet(opt);
                    }}
                    styles={selectStyles}
                /> ) : null 
            }
            { ( isThreat ) ? (
                <Select 
                    id = "select-subject"
                    options = {optionsSubject}
                    className = "select"
                    onChange={(opt) => {
                        subjectSet(opt);
                    }}
                    styles={selectStyles}
                /> ) : null 
            }
            <Select 
                id = "select-adj"
                options = {optionsAdj}
                className =" select"
                name = "select-adj"
                onChange = {(opt) => {
                    adjSet(opt);
                }}
                styles={selectStyles}
            />
            <Select 
                id = "select-noun"
                options = {optionsNoun}
                className = "select"
                name = "select-noun"
                onChange={(opt) => {
                    nounSet(opt);
                }}
                styles={selectStyles}
            />
            </div>
            <p className="combined-insult">{intro} {action} {subject} {adj} {noun}</p>
        </>
    );
}

