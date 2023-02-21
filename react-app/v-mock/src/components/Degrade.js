import React, { useState } from "react";
import Select from "react-select";
import { AdjJSON } from "../words/AdjJSON";
import { NounJSON } from "../words/NounJSON";
import { VerbJSON } from "../words/VerbJSON";



export default function Degrade ({
    optionsAdj, 
    optionsNoun, 
    optionsVerb,
    wordSet,
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
                    wordSet(opt, AdjJSON);
                }}
                styles={selectStyles}
            />
            <Select 
                id = "select-verb"
                options = {optionsVerb}
                className = "select"
                name = "select-verb"
                onChange={(opt) => {
                    wordSet(opt, VerbJSON);
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