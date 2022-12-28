import React, { useState } from "react";
import Select from "react-select";

export default function Degrade 
({optionsAdj, optionsNoun, optionsVerb,
adjSet, nounSet, adj_verbSet,
selectStyles}) {
    return (
        <>
        <div className="selectables">
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
                id = "select-adj-combo"
                options = {optionsAdj}
                className = "select"
                name = "select-adj-combo"
                onChange={(opt) => {
                    comboSet(opt);
                }}
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