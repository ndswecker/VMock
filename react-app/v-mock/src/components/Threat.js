import React, { useState } from "react";
import Select from "react-select";
import { ActionJSON } from "../words/ActionJSON";
import { AdjJSON } from "../words/AdjJSON";
import { NounJSON } from "../words/NounJSON";

export default function Threat ({ 
    optionsAdj,
    optionsSubject,
    optionsNoun, 
    optionsAction,
    subjectSet, 
    wordSet,
    selectStyles
 }) {
    return (
        <>
        <div className="selectables">
            <Select 
                id = "select-action"
                options = {optionsAction}
                className = "select"
                name = "action-select"
                onChange = {(opt) => {
                    // actionSet(opt);
                    wordSet(opt, ActionJSON);
                }}
                styles={selectStyles}
            />
            <Select 
                id = "select-subject"
                options = {optionsSubject}
                className = "select"
                name = "subject-select"
                onChange = {(opt) => {
                    subjectSet(opt);
                }}
                styles={selectStyles}
            />
            <Select 
                id = "select-adj"
                options = {optionsAdj}
                className = "select"
                name = "adj-select"
                onChange = {(opt) => {
                    wordSet(opt, AdjJSON);
                }}
                styles={selectStyles}
            />
            <Select 
                id = "select-noun"
                options = {optionsNoun}
                className = "select"
                name = "noun-select"
                onChange = {(opt) => {
                    wordSet(opt, NounJSON);
                }}
                styles={selectStyles}
            />
        </div>
        </>
    )
}