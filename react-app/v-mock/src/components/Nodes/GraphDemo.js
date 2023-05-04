import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import GraphMap from "../../Utility/GraphMap";
import WordNode from "../../Utility/WordNode";

import "../Hospice/BoardStyles.css";

export default function GraphDemo() {
    const [routeList, setRouteList] = useState('');
    const [path, setPath] = useState('');
    const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

    const [exampleWord, setExampleWord] = useState("");

    const routes = [
        ['PHX', 'LAX'],
        ['PHX', 'JFK'],
        ['JFK', 'OKC'],
        ['JFK', 'HEL'],
        ['JFK', 'LOS'],
        ['MEX', 'LAX'],
        ['MEX', 'BKK'],
        ['MEX', 'LIM'],
        ['MEX', 'EZE'],
        ['LIM', 'BKK'],
    ];
    const adjacencyList = new GraphMap();

    useEffect(() => {
        adjacencyList.addNodes(airports);
        adjacencyList.addEdges(routes);
        console.log(adjacencyList);

        // adjacencyList.isThereRoute("PHX", "BKK");
        adjacencyList.findRoute('PHX', 'BKK');

        // Demo graph
        setRouteList(adjacencyList.toString())

        // Call word functionality
        makeWord();
    },[]);

    function makeWord(){
        let word = new WordNode();
        word.setType("SUBJECT");
        word.setValue("Turtle");
        setExampleWord(word.toString());
    }

    return (
        <Card>
            <CardContent>
                <Typography>
                    {exampleWord}
                </Typography>
            </CardContent>
        </Card>
    );
}



