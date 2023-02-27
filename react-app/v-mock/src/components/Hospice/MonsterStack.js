import React, {useState} from "react";

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { MonsterJSON } from "./MonsterJSON";
import { AssetJSON } from "./AssetJSON";

export default function Monster() {

    const [currentMonster, setCurrentMonster] = useState({});
    const [currentAsset, setCurrentAsset] = useState({});

    const [isStart, setIsStart] = useState(false);

    const monsterArray = [];
    for (let monster of MonsterJSON) {
        monsterArray.push(monster);
    }
    console.log(monsterArray);

    const assetArray = [];
    for (let asset of AssetJSON) {
        assetArray.push(asset);
    }
    console.log(assetArray);

    const openDoor = () => {
        let index = Math.floor(Math.random() * (monsterArray.length - 1));
        console.log(`index: ${index}`);
        setCurrentMonster(monsterArray[index]);
        setIsStart(true);
    }

    const getAsset = () => {
        let index = Math.floor(Math.random() * (assetArray.length - 1));
        setCurrentAsset(assetArray[index]);
    }

    return (
        <>
            <button
                onClick={openDoor}>
                Open Door
            </button>

            {isStart ? (<> <Card 
                sx={{ maxWidth: 350}}
                key={`${currentMonster.id}M`}>
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
            <button
                onClick={getAsset}>
                Get Asset
            </button>
            <Card
                sx={{maxWidth: 350}}
                key={`${currentAsset.id}A`}>
                <CardContent>
                    <Typography
                        variant="h5"
                        component="div">
                        {`${currentAsset.name} (${currentAsset.type})`}
                        
                    </Typography>
                    <Typography>
                        <br />
                        {currentAsset.text}
                    </Typography>
                    <Typography>
                        <br />
                        {`Affects:`}
                        {currentAsset.benefit}
                    </Typography>
                </CardContent>
            </Card>
            </>): null}
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