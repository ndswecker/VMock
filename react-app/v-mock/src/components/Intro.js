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
        // console.log(`adding ${opt.label}`);
        optionsSubject.push(opt);
    }

    function getContent(key, value) {
        let type = insult.insult[key];
        let contentList = [];
        for (let t of value) {
            if (t.type === type){
                contentList = t.content;
            }
        }
        return contentList;
    }

    function getJSONContent(value, list) {
        for (let c of list) {
            if (c.type === value) {
                return c.content;
            }
        }
    }

    function introSet(opt) {
        // insult.addProp(key, opt.label);
        // const list = getContent("intro", IntroJSON);
        const list = getJSONContent(opt.label, IntroJSON);
        console.log(list);
        const targetText = list[randomInt(list)];
        console.log(`target: ${targetText}`);
        
        insult.addType("intro", opt.label, targetText);
        setIntro(targetText);
        if (opt.label === "threat") {
            console.log("this is a threat");
            setIsThreat(true);
        } else {
            setIsThreat(false);
        }
    }

    function actionSet(opt) {
        console.log("onChange action");
        insult.addProp("action", opt.label);
        const list = getContent("action", ActionJSON);
        setAction(list[randomInt(list)]);
    }

    function subjectSet(opt) {
        console.log("onChange subject");
        insult.addProp("subject", opt.label);
        console.log(`subject option ${opt.label}`);
        setSubject(opt.label);
    }

    function adjSet(opt) {
        insult.addProp("adj", opt.value);
        const list = getContent("adj", AdjJSON);
        setAdj(list[randomInt(list)]);
    }

    function nounSet(opt) {
        insult.addProp("noun", opt.value);
        const list = getContent("noun", NounJSON);
        setNoun(list[randomInt(list)]);
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

