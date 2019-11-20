// App.jsx

import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom'; 
import gear from './gear.svg';
import michael from './michael.jpg';
import programming from './programming.svg';
import Main from './components/main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Title" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> Welcome! </h1>
        <h1 className="App-title">I am currently an Application Developer working
          in Santa Cruz, California. </h1>
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
*/

export default App;
