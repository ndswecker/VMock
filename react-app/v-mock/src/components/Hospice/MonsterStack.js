import React, {useState} from "react";

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { MonsterJSON } from "./MonsterJSON";

export default function Monster() {

    const [currentMonster, setCurrentMonster] = useState({});

    const monsterArray = [];
    for (let monster of MonsterJSON) {
        monsterArray.push(monster);
    }
    console.log(monsterArray);

    const openDoor = () => {
        let index = Math.floor(Math.random() * (monsterArray.length - 1));
        console.log(`index: ${index}`);
        setCurrentMonster(monsterArray[index]);
    }

    return (
        <>
            <button
                onClick={openDoor}>
                Open Door
            </button>
            {<Card 
                sx={{ minWidth: 275}}
                 key={currentMonster.id}>
                <CardContent>
                    <Typography 
                        sx={{fontSize: 16}}
                        color="text.secondary"
                        gutterBottom>
                        {currentMonster.name}
                    </Typography>
                </CardContent>
            </Card>
            }
            {/* {monsterArray.map((monster) => (
                <Card 
                    sx={{ minWidth: 275}}
                    key={monster.id}>
                <CardContent>
                    <Typography 
                        sx={{fontSize: 16}}
                        color="text.secondary"
                        gutterBottom>
                        {monster.name}
                    </Typography>
                </CardContent>
            </Card>
            ))} */}
            
        </>
    );
}