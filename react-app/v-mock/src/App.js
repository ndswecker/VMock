import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Preamble from './components/Preamble';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Vicious Mockery
        </a>
        <Preamble />
      </header>
      
    </div>
  );
}

export default App;
