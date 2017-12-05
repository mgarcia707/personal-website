import React, { Component } from 'react';
//import logo from './logo.svg';
import gear from './gear.svg';
import michael from './michael.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={gear} className="App-logo" alt="gear" />
          <h1 className="App-title">Let's build something together</h1>
        </header>
        <p className="App-intro">
          <img src={michael} className="Image" alt="michael" />
        </p>
      </div>
    );
  }
}

export default App;
