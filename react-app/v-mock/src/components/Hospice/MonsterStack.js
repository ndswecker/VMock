import React, {useState} from "react";

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { MonsterJSON } from "./MonsterJSON";

export default function Monster() {

    const [currentMonster, setCurrentMonster] = useState({});
    const [isStart, setIsStart] = useState(false);

    const monsterArray = [];
    for (let monster of MonsterJSON) {
        monsterArray.push(monster);
    }
    console.log(monsterArray);

    const openDoor = () => {
        let index = Math.floor(Math.random() * (monsterArray.length - 1));
        console.log(`index: ${index}`);
        setCurrentMonster(monsterArray[index]);
        setIsStart(true);
    }

    return (
        <>
            <button
                onClick={openDoor}>
                Open Door
            </button>

            {isStart ? ( <Card 
                sx={{ maxWidth: 350}}
                key={currentMonster.id}>
                <CardContent>
                    <Typography 
                        variant="h5"
                        component="div">
                        {`${currentMonster.name} (${currentMonster.level})`}
                    </Typography>
                    <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary">
                        {currentMonster.type} 
                    </Typography>
                    <Typography
                        variant="body2"
                        textAlign="left">
                        {currentMonster.text.body}
                        <br /><br />
                    </Typography>
                    <Typography
                        textAlign="left"
                        color="text.secondary">
                        {`WIN: ${currentMonster.win}`}
                        <br />
                        {`LOOSE: ${currentMonster.loose}`}
                    </Typography>
                    <Typography>
                        <br />
                        {currentMonster.text.source}
                    </Typography>
                </CardContent>
            </Card>
            ): null}
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