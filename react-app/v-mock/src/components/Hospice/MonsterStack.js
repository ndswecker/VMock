import React from "react";

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { MonsterJSON } from "./MonsterJSON";

export default function Monster() {

    const monsterArray = [];
    for (let monster of MonsterJSON) {
        monsterArray.push(monster);
    }
    console.log(monsterArray);

    return (
        <>
            <Card sx={{ minWidth: 275}}>
                <CardContent>
                    <Typography 
                        sx={{fontSize: 14}}
                        color="text.secondary"
                        gutterBottom>
                        Grandma's In Hospice
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}