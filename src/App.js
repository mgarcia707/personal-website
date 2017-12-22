import React, { Component } from 'react';
//import logo from './logo.svg';
import gear from './gear.svg';
import michael from './michael.jpg';
import programming from './programming.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> Welcome! </h1>
        <h1 className="App-title">I am currently a software developer located
          in Los Gatos, California. </h1>
        <h1 className="App-title">  I received my Bachelor's in Computer
         Science from the University of California, Santa Cruz. </h1>
        </header>
        <p className="App-intro">
           <img src={michael} className="Image" alt="michael" />
        </p>
      </div>
    );
  }
}

export default App;
