import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing';
import Contact from './contact';
import About from './about';
import Projects from './projects';
import Resume from './resume';
import CTF from './ctf';


const Main= () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/resume" component={CTF} />
    </Switch>
)

export default Main;