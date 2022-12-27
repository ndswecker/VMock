import React, { useState } from "react";
import Select from "react-select";

export default function Threat 
({ optionsAdj, optionsSubject, optionsNoun, optionsAction,
adjSet, subjectSet, nounSet, actionSet,
selectStyles }) {
    return (
        <>
        <div className="selectables">
            <Select 
                id = "select-action"
                options = {optionsAction}
                className = "select"
                name = "action-select"
                onChange = {(opt) => {
                    actionSet(opt);
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
                    adjSet(opt);
                }}
                styles={selectStyles}
            />
            <Select 
                id = "select-noun"
                options = {optionsNoun}
                className = "select"
                name = "noun-select"
                onChange = {(opt) => {
                    nounSet(opt);
                }}
                styles={selectStyles}
            />
        </div>
        </>
    )
}