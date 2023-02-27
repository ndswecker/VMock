import React, {useState, useEffect} from "react";

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import "./BoardStyles.css";

import { MonsterJSON } from "./MonsterJSON";
import { AssetJSON } from "./AssetJSON";

export default function Monster() {

    const [currentMonster, setCurrentMonster] = useState({});
    const [currentAsset, setCurrentAsset] = useState({});

    const [isStart, setIsStart] = useState(false);
    const [assetIsHidden, setAssetIsHidden] = useState(true);

    const monsterArray = [];
    for (let monster of MonsterJSON) {
        monsterArray.push(monster);
    }
    // console.log(monsterArray);

    const assetArray = [];
    for (let asset of AssetJSON) {
        assetArray.push(asset);
    }
    // console.log(assetArray);

    const openDoor = () => {
        let index = Math.floor(Math.random() * (monsterArray.length - 1));
        // console.log(`index: ${index}`);
        setCurrentMonster(monsterArray[index]);
        setIsStart(true);
    }

    const showAsset = () => {
        let index = Math.floor(Math.random() * (assetArray.length - 1));
        setCurrentAsset(assetArray[index]);
        setAssetIsHidden(false);
    }
    
    const takeAsset = () => {
        console.log(currentAsset);
    }

    return (
        <>
            <div className="row">
                <div className="stack-top">
                    <button
                        onClick={openDoor}>
                        Next Experience
                    </button>

                    {isStart ? (
                        <Card
                            className="card"
                            sx={{ width: 350, minHeight: 300}}
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
                                <Typography>
                                    [Modifiers] {currentMonster.modifiers}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    textAlign="left">
                                    <br />
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
                        </Card>) : (
                        <Card
                            className="card"
                            sx={{width: 350, minHeight: 200}}>
                            <CardContent>
                                <Typography>
                                    Life Experiences
                                </Typography>
                            </CardContent>
                        </Card>)}
            </div>
            
            <div className="stack-top" >
                <button
                    onClick={showAsset}>
                    See Asset
                </button>
                <button
                    onClick={takeAsset}>
                    Take Asset
                </button>
                {assetIsHidden ? (
                    <Card
                        className="card"
                        sx={{width: 350, minHeight: 200}}>
                        <CardContent>
                            <Typography>
                                Hidden
                            </Typography>
                        </CardContent>
                    </Card>
                ) : (
                    <Card
                        className="card"
                        sx={{width: 350, minHeight: 300}}
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
                                Dynamics: 
                                {currentAsset.benefit}
                            </Typography>
                            <Typography>
                                <br />
                                Source:
                                {currentAsset.source}
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </div>
            </div>
        </>
    );
}