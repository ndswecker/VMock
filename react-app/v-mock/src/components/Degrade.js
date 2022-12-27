import React, { useState } from "react";
import Select from "react-select";

export default function Degrade 
(optionsIntro, optionsAdj, optionsVerb, optionsNoun,
introSet, adjSet, verbSet, nounSet,
selectStyles) {
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