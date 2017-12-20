import React, { Component } from 'react';
//import logo from './logo.svg';
import gear from './gear.svg';
import michael from './michael.jpg';
import earth from './earth.svg';
import bulb from './bulb.svg';
import binary from './binary.svg';
import programming from './programming.svg';
import penpaper from './penpaper.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">"The important thing is to not stop questioning;
            curiosity has its own reason for exisiting." - Albert Einstein</h1>
          <img src={penpaper} className="App-logo" alt="penpaper" />
          <img src={bulb} className="App-logo" alt="bulb" />
          <img src={gear} className="App-logo-spin" alt="gear" />
          <img src={binary} className="App-logo" alt="binary" />
          <img src={programming} className="App-logo" alt="programming" />
        </header>
        <p className="App-intro">
           <img src={michael} className="Image" alt="michael" />
        </p>
      </div>
    );
  }
}

export default App;
