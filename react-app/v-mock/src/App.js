import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import InsultSelect from "./components/InsultSelect";
import Monster from "./components/Hospice/Monster";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.jblmbirding.com"
          target="_blank"
          rel="noopener noreferrer"
        >Learn Vicious Mockery</a>
        <InsultSelect />
        <Monster />
      </header>
      
    </div>
  );
}

export default App;
