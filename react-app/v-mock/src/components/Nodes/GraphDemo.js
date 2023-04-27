import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

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
    const adjacencyList = new Map();

    useEffect(() => {
        airports.forEach(addNode);
        routes.forEach(route => addEdge(...route));
        console.log(adjacencyList);
        // Demo graph
        setRouteList(JSON.stringify(adjacencyList, null, 2));
    },[]);

    function addNode(airport) {
        adjacencyList.set(airport, []);
    }

    // Add an edge, undirected
    function addEdge(origin, destination) {
        adjacencyList.get(origin).push(destination);
        adjacencyList.get(destination).push(origin);
    }

    

    
    
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



