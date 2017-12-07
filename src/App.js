import React, { Component } from 'react';
//import logo from './logo.svg';
import gear from './gear.svg';
import michael from './michael.jpg';
import solarsys from './solarsys.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weclome to the world of Michael</h1>
          <img src={solarsys} className="App-logo" alt="solarsys" />
        </header>
        <p className="App-intro">
           <img src={michael} className="Image" alt="michael" />
        </p>
      </div>
    );
  }
}

export default App;
