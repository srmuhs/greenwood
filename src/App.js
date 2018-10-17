import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//IMPORTING BLUEPRINTJS
import { Button } from '@blueprintjs/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button intent="success" text="BluePrint Button" onClick={() => { alert("CLICKED") }} />
        </header>
      </div>
    );
  }
}

export default App;
