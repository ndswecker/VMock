import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import GraphMap from "../../Utility/GraphMap";

import "../Hospice/BoardStyles.css";

export default function GraphDemo() {
    const [routeList, setRouteList] = useState('');
    const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

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
        // airports.forEach(adjacencyList.addNode);
        // routes.forEach(route => adjacencyList.addEdge(...route));
        adjacencyList.addNodes(airports);
        adjacencyList.addEdges(routes);
        console.log(adjacencyList);
        // Demo graph
        // setRouteList(objectToStringState(mapToObject(adjacencyList.graph)));
        setRouteList(adjacencyList.toString())
    },[]);

    // function mapToObject(map) {
    //     const object = {};
    //     for (let [key, value] of map) {
    //         object[key] = value;
    //     }
    //     return object;
    // }

    // function objectToStringState(object) {
    //     return JSON.stringify(object, null, 2);
    // }

    // function addNode(airport) {
    //     adjacencyList.set(airport, []);
    // }

    // // Add an edge, undirected
    // function addEdge(origin, destination) {
    //     adjacencyList.get(origin).push(destination);
    //     adjacencyList.get(destination).push(origin);
    // }

    

    
    
    return (
        <Card>
            <CardContent>
                <Typography>
                    {routeList}
                </Typography>
            </CardContent>
        </Card>
    );
}



