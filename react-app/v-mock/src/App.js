/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import InsultSelect from "./components/InsultSelect";
import MonsterStack from "./components/Hospice/MonsterStack";
import GraphDemo from "./components/Nodes/GraphDemo";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>"Grandma's In Hospice"</h2>
                {/* <a
          className="App-link"
          href="https://www.jblmbirding.com"
          target="_blank"
          rel="noopener noreferrer"
        >Learn Vicious Mockery</a> */}
                {/* <InsultSelect /> */}
                {/* <MonsterStack /> */}
                <GraphDemo/>
            </header>
      
        </div>
    );
}

export default App;
